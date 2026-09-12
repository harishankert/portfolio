import { NetworkScene } from './network-scene';
import { hasFinePointer, isLowPowerDevice, prefersReducedMotion, supportsWebGL } from '../utils/capabilities';

export interface BackgroundHandle {
  setScroll: (progress: number) => void;
}

export function initBackground(): BackgroundHandle | null {
  const canvas = document.getElementById('bg-canvas') as HTMLCanvasElement | null;
  if (!canvas) return null;

  if (!supportsWebGL()) {
    canvas.remove();
    document.body.classList.add('no-webgl');
    return null;
  }

  const reducedMotion = prefersReducedMotion();
  const lowPower = isLowPowerDevice();

  const scene = new NetworkScene(canvas, {
    nodeCount: lowPower ? 60 : 140,
    connections: 2,
    radius: 3.1,
    reducedMotion,
    lowPower,
  });

  const resize = () => scene.resize(window.innerWidth, window.innerHeight);
  resize();
  window.addEventListener('resize', resize);

  if (hasFinePointer() && !reducedMotion) {
    window.addEventListener('pointermove', (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      scene.onPointerMove(nx, ny);
    });
  }

  document.addEventListener('visibilitychange', () => {
    scene.setPaused(document.hidden);
  });

  if (reducedMotion) {
    scene.renderOnce();
  } else {
    scene.start();
  }

  return {
    setScroll: (progress) => scene.setScroll(progress),
  };
}
