export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function hasFinePointer(): boolean {
  return window.matchMedia('(pointer: fine)').matches;
}

export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl2') || canvas.getContext('webgl'))
    );
  } catch {
    return false;
  }
}

/** Rough device tier used to scale particle counts, not a precise GPU benchmark. */
export function isLowPowerDevice(): boolean {
  const cores = navigator.hardwareConcurrency ?? 4;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const narrow = window.matchMedia('(max-width: 760px)').matches;
  return cores <= 4 || mem <= 4 || narrow;
}
