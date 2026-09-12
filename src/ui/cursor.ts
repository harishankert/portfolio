import { hasFinePointer, prefersReducedMotion } from '../utils/capabilities';

export function initCursor() {
  if (!hasFinePointer() || prefersReducedMotion()) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let rx = mx;
  let ry = my;

  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
  });

  const interactiveSelector = 'a, button, .card, .contact-link';
  document.addEventListener('pointerover', (e) => {
    if ((e.target as HTMLElement).closest(interactiveSelector)) ring.classList.add('cursor-hover');
  });
  document.addEventListener('pointerout', (e) => {
    if ((e.target as HTMLElement).closest(interactiveSelector)) ring.classList.remove('cursor-hover');
  });

  const tick = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
