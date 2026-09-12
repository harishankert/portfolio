import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import type { BackgroundHandle } from '../three/background';
import { prefersReducedMotion } from '../utils/capabilities';

gsap.registerPlugin(ScrollTrigger);

export function initScroll(background: BackgroundHandle | null) {
  const reduced = prefersReducedMotion();
  let lenis: Lenis | null = null;

  if (!reduced) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis!.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  // Anchor links must go through Lenis, otherwise native scrollIntoView
  // desyncs Lenis's internal position from the real scroll offset and
  // ScrollTrigger reveals stop firing correctly further down the page.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target as HTMLElement, { offset: -72 });
      } else {
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
      }
      history.pushState(null, '', id);
    });
  });

  const hero = document.getElementById('hero');
  if (hero && background) {
    if (reduced) {
      background.setScroll(0);
    } else {
      ScrollTrigger.create({
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => background.setScroll(self.progress),
      });
    }
  }

  const reveals = document.querySelectorAll<HTMLElement>('.reveal');
  reveals.forEach((el) => {
    if (reduced) {
      el.classList.add('revealed');
      return;
    }
    const idxAttr = el.getAttribute('data-index');
    const idx = idxAttr ? parseInt(idxAttr, 10) : 0;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () =>
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: Math.min(idx * 0.08, 0.4),
          ease: 'power1.out',
        }),
    });
  });

  document.querySelectorAll<HTMLElement>('.proficiency-fill').forEach((el) => {
    const pct = el.dataset.pct ?? '0';
    if (reduced) {
      el.style.width = `${pct}%`;
      return;
    }
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => gsap.to(el, { width: `${pct}%`, duration: 1, ease: 'power2.out' }),
    });
  });
}
