export function initNav() {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');

  if (toggle && mobile) {
    const close = () => {
      mobile.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
      document.body.classList.remove('nav-open');
    };
    toggle.addEventListener('click', () => {
      const willOpen = !mobile.classList.contains('open');
      mobile.classList.toggle('open', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
      toggle.classList.toggle('active', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
    });
    mobile.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sections = document.querySelectorAll<HTMLElement>('section[id]');
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('#site-nav a[href^="#"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-40% 0px -40% 0px' }
  );
  sections.forEach((s) => observer.observe(s));
}
