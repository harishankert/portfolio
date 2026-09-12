import * as THREE from 'three';

const COLOR_VIOLET = new THREE.Color('#8b5cf6');
const COLOR_CYAN = new THREE.Color('#22d3ee');

const STAR_COLORS = ['#ffffff', '#ffffff', '#ffffff', '#cfe0ff', '#c4b5fd', '#a5f3fc'];

/** Uniform-in-volume random point at distance [rMin, rMax] from the origin. */
function randomInVolume(rMin: number, rMax: number): THREE.Vector3 {
  const u = Math.random();
  const v = Math.random();
  const theta = 2 * Math.PI * u;
  const phi = Math.acos(2 * v - 1);
  const r = rMin + (rMax - rMin) * Math.cbrt(Math.random());
  return new THREE.Vector3(
    r * Math.sin(phi) * Math.cos(theta),
    r * Math.sin(phi) * Math.sin(theta),
    r * Math.cos(phi)
  );
}

/** A soft radial-gradient sprite texture, generated once and reused (tinted per-sprite via material.color). */
function createGlowTexture(): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.35)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function fibonacciSphere(samples: number, radius: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;
    const x = Math.cos(theta) * r;
    const z = Math.sin(theta) * r;
    points.push(new THREE.Vector3(x, y, z).multiplyScalar(radius));
  }
  return points;
}

/** Connect each node to its `k` nearest neighbours, deduplicated. */
function buildEdges(nodes: THREE.Vector3[], k: number): [number, number][] {
  const edges: [number, number][] = [];
  const seen = new Set<string>();
  for (let i = 0; i < nodes.length; i++) {
    const dists: { j: number; d: number }[] = [];
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;
      dists.push({ j, d: nodes[i].distanceToSquared(nodes[j]) });
    }
    dists.sort((a, b) => a.d - b.d);
    for (let n = 0; n < k && n < dists.length; n++) {
      const j = dists[n].j;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([i, j]);
    }
  }
  return edges;
}

const pointsVertex = /* glsl */ `
  attribute float aScale;
  attribute vec3 aColor;
  varying vec3 vColor;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aScale * (18.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const pointsFragment = /* glsl */ `
  precision mediump float;
  uniform float uOpacity;
  varying vec3 vColor;
  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.05, d);
    gl_FragColor = vec4(vColor, alpha * uOpacity);
  }
`;

const linesVertex = /* glsl */ `
  attribute float aT;
  attribute float aPhase;
  varying float vT;
  varying float vPhase;
  void main() {
    vT = aT;
    vPhase = aPhase;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const linesFragment = /* glsl */ `
  precision mediump float;
  uniform float uTime;
  uniform float uOpacity;
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  varying float vT;
  varying float vPhase;
  void main() {
    float pulsePos = fract(uTime * 0.16 + vPhase);
    float dist = min(abs(vT - pulsePos), abs(vT - pulsePos + 1.0));
    float pulse = smoothstep(0.16, 0.0, dist);
    vec3 base = mix(uColorA, uColorB, vT);
    vec3 color = base * (0.5 + pulse * 1.6);
    gl_FragColor = vec4(color, uOpacity * (0.09 + pulse * 0.55));
  }
`;

const starsVertex = /* glsl */ `
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime;
  varying vec3 vColor;
  varying float vTwinkle;
  void main() {
    vColor = aColor;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    float twinkle = 0.55 + 0.45 * sin(uTime * (0.15 + aPhase * 0.25) + aPhase * 12.0);
    vTwinkle = twinkle;
    gl_PointSize = aSize * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const starsFragment = /* glsl */ `
  precision mediump float;
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vTwinkle;
  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vColor * (0.75 + vTwinkle * 0.5), alpha * vTwinkle * uOpacity);
  }
`;

export interface NetworkSceneOptions {
  nodeCount: number;
  connections: number;
  radius: number;
  reducedMotion: boolean;
  lowPower: boolean;
}

export class NetworkScene {
  readonly renderer: THREE.WebGLRenderer;
  private readonly scene = new THREE.Scene();
  private readonly camera: THREE.PerspectiveCamera;
  private readonly group = new THREE.Group();
  private readonly pointsMaterial: THREE.ShaderMaterial;
  private readonly linesMaterial: THREE.ShaderMaterial;
  private readonly pointsGeo: THREE.BufferGeometry;
  private readonly linesGeo: THREE.BufferGeometry;

  private readonly starGroup = new THREE.Group();
  private readonly starMaterial: THREE.ShaderMaterial;
  private readonly starGeo: THREE.BufferGeometry;
  private readonly glowTexture: THREE.CanvasTexture;
  private readonly nebulaSprites: THREE.Sprite[] = [];

  private width = 0;
  private height = 0;
  private time = 0;
  private lastFrame = 0;
  private rafId: number | null = null;
  private paused = false;
  private readonly reducedMotion: boolean;

  private autoAngle = 0;
  private mouseX = 0;
  private mouseY = 0;
  private scrollT = 0;

  private readonly baseCameraZ: number;

  constructor(canvas: HTMLCanvasElement, opts: NetworkSceneOptions) {
    this.reducedMotion = opts.reducedMotion;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, opts.lowPower ? 2 : 3));
    this.renderer.domElement.setAttribute('role', 'img');
    this.renderer.domElement.setAttribute(
      'aria-label',
      'Animated 3D network graph representing interconnected enterprise systems, set against a deep-space starfield'
    );

    this.baseCameraZ = opts.radius * 2.35;
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.camera.position.z = this.baseCameraZ;

    const nodes = fibonacciSphere(opts.nodeCount, opts.radius);
    const edges = buildEdges(nodes, opts.connections);

    // --- Points (nodes) ---
    const positions = new Float32Array(nodes.length * 3);
    const scales = new Float32Array(nodes.length);
    const colors = new Float32Array(nodes.length * 3);
    nodes.forEach((n, i) => {
      positions[i * 3] = n.x;
      positions[i * 3 + 1] = n.y;
      positions[i * 3 + 2] = n.z;
      scales[i] = 2.2 + Math.random() * 2.6;
      const t = (n.y / opts.radius + 1) / 2;
      const c = COLOR_VIOLET.clone().lerp(COLOR_CYAN, t);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    });

    this.pointsGeo = new THREE.BufferGeometry();
    this.pointsGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    this.pointsGeo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));
    this.pointsGeo.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));

    this.pointsMaterial = new THREE.ShaderMaterial({
      vertexShader: pointsVertex,
      fragmentShader: pointsFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uOpacity: { value: 1 } },
    });

    const pointCloud = new THREE.Points(this.pointsGeo, this.pointsMaterial);

    // --- Lines (edges) ---
    const linePositions = new Float32Array(edges.length * 2 * 3);
    const aT = new Float32Array(edges.length * 2);
    const aPhase = new Float32Array(edges.length * 2);
    edges.forEach(([a, b], i) => {
      const phase = Math.random();
      const na = nodes[a];
      const nb = nodes[b];
      const base = i * 6;
      linePositions[base] = na.x;
      linePositions[base + 1] = na.y;
      linePositions[base + 2] = na.z;
      linePositions[base + 3] = nb.x;
      linePositions[base + 4] = nb.y;
      linePositions[base + 5] = nb.z;
      aT[i * 2] = 0;
      aT[i * 2 + 1] = 1;
      aPhase[i * 2] = phase;
      aPhase[i * 2 + 1] = phase;
    });

    this.linesGeo = new THREE.BufferGeometry();
    this.linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    this.linesGeo.setAttribute('aT', new THREE.BufferAttribute(aT, 1));
    this.linesGeo.setAttribute('aPhase', new THREE.BufferAttribute(aPhase, 1));

    this.linesMaterial = new THREE.ShaderMaterial({
      vertexShader: linesVertex,
      fragmentShader: linesFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uOpacity: { value: 1 },
        uColorA: { value: COLOR_VIOLET },
        uColorB: { value: COLOR_CYAN },
      },
    });

    const lineSegments = new THREE.LineSegments(this.linesGeo, this.linesMaterial);

    this.group.add(pointCloud, lineSegments);
    this.group.rotation.x = 0.35;
    this.scene.add(this.group);

    // --- Deep-space backdrop: a volumetric starfield + soft nebula glows ---
    const starCount = opts.lowPower ? 1200 : 3800;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starPhases = new Float32Array(starCount);
    const starColors = new Float32Array(starCount * 3);
    const tmpColor = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
      const p = randomInVolume(opts.radius * 4.5, opts.radius * 15);
      starPositions[i * 3] = p.x;
      starPositions[i * 3 + 1] = p.y;
      starPositions[i * 3 + 2] = p.z;
      starSizes[i] = 0.8 + Math.random() * Math.random() * 2.6; // mostly small, a few bright outliers
      starPhases[i] = Math.random();
      tmpColor.set(STAR_COLORS[(Math.random() * STAR_COLORS.length) | 0]);
      starColors[i * 3] = tmpColor.r;
      starColors[i * 3 + 1] = tmpColor.g;
      starColors[i * 3 + 2] = tmpColor.b;
    }

    this.starGeo = new THREE.BufferGeometry();
    this.starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    this.starGeo.setAttribute('aSize', new THREE.BufferAttribute(starSizes, 1));
    this.starGeo.setAttribute('aPhase', new THREE.BufferAttribute(starPhases, 1));
    this.starGeo.setAttribute('aColor', new THREE.BufferAttribute(starColors, 3));

    this.starMaterial = new THREE.ShaderMaterial({
      vertexShader: starsVertex,
      fragmentShader: starsFragment,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: { uTime: { value: 0 }, uOpacity: { value: 1 } },
    });

    this.starGroup.add(new THREE.Points(this.starGeo, this.starMaterial));
    this.scene.add(this.starGroup);

    this.glowTexture = createGlowTexture();
    const nebulaSpecs: { color: string; pos: [number, number, number]; scale: number; opacity: number }[] = [
      { color: '#7c3aed', pos: [-opts.radius * 4, opts.radius * 1.8, -opts.radius * 6], scale: opts.radius * 11, opacity: 0.16 },
      { color: '#0891b2', pos: [opts.radius * 5, -opts.radius * 2.2, -opts.radius * 8], scale: opts.radius * 13, opacity: 0.13 },
    ];
    if (!opts.lowPower) {
      nebulaSpecs.push({ color: '#a78bfa', pos: [opts.radius * 0.5, opts.radius * 4, -opts.radius * 10], scale: opts.radius * 9, opacity: 0.1 });
    }
    nebulaSpecs.forEach((spec) => {
      const material = new THREE.SpriteMaterial({
        map: this.glowTexture,
        color: spec.color,
        transparent: true,
        opacity: spec.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(...spec.pos);
      sprite.scale.setScalar(spec.scale);
      this.nebulaSprites.push(sprite);
      this.scene.add(sprite);
    });
  }

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.camera.aspect = width / Math.max(height, 1);
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    if (this.reducedMotion) this.renderOnce();
  }

  onPointerMove(nx: number, ny: number) {
    // nx, ny expected in [-1, 1]
    this.mouseX = nx;
    this.mouseY = ny;
  }

  /** progress: 0 = top of hero, 1 = scrolled past hero into content. */
  setScroll(progress: number) {
    this.scrollT = Math.min(1, Math.max(0, progress));
    const opacity = 1 - this.scrollT * 0.82;
    this.pointsMaterial.uniforms.uOpacity.value = opacity;
    this.linesMaterial.uniforms.uOpacity.value = opacity;
    // The starfield/nebula are the ambient backdrop for the whole page, so
    // they only dim slightly — they shouldn't disappear once you scroll past hero.
    this.starMaterial.uniforms.uOpacity.value = 1 - this.scrollT * 0.3;
    this.camera.position.z = this.baseCameraZ + this.scrollT * this.baseCameraZ * 0.55;
    if (this.reducedMotion) this.renderOnce();
  }

  setPaused(paused: boolean) {
    this.paused = paused;
    if (!paused && !this.reducedMotion) this.start();
  }

  renderOnce() {
    if (this.width === 0 || this.height === 0) return;
    this.group.rotation.y = this.autoAngle;
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    if (this.reducedMotion || this.rafId !== null) return;
    this.lastFrame = performance.now();
    const loop = (now: number) => {
      if (this.paused) {
        this.rafId = null;
        return;
      }
      const delta = Math.min(0.05, (now - this.lastFrame) / 1000);
      this.lastFrame = now;
      this.time += delta;
      this.autoAngle += delta * 0.055;

      const targetX = 0.35 + this.mouseY * 0.12;
      const targetY = this.autoAngle + this.mouseX * 0.18;
      this.group.rotation.x += (targetX - this.group.rotation.x) * 0.04;
      this.group.rotation.y += (targetY - this.group.rotation.y) * 0.04;
      this.starGroup.rotation.y += delta * 0.003;

      this.linesMaterial.uniforms.uTime.value = this.time;
      this.starMaterial.uniforms.uTime.value = this.time;
      this.renderer.render(this.scene, this.camera);
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  stop() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  dispose() {
    this.stop();
    this.pointsGeo.dispose();
    this.linesGeo.dispose();
    this.pointsMaterial.dispose();
    this.linesMaterial.dispose();
    this.starGeo.dispose();
    this.starMaterial.dispose();
    this.glowTexture.dispose();
    this.nebulaSprites.forEach((s) => (s.material as THREE.SpriteMaterial).dispose());
    this.renderer.dispose();
  }
}
