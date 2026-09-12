export async function runLoader(): Promise<void> {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loader-progress');
  if (!loader) return;

  if (bar) bar.style.width = '65%';

  const fontsReady: Promise<unknown> = document.fonts ? document.fonts.ready : Promise.resolve();
  const minDelay = new Promise((resolve) => setTimeout(resolve, 450));
  const safetyTimeout = new Promise((resolve) => setTimeout(resolve, 1600));

  await Promise.race([Promise.all([fontsReady, minDelay]), safetyTimeout]);

  if (bar) bar.style.width = '100%';
  loader.classList.add('loader-done');
  setTimeout(() => loader.remove(), 500);
}
