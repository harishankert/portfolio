import './style.css';
import { renderHero } from './sections/hero';
import { renderAbout } from './sections/about';
import { renderSkills } from './sections/skills';
import { renderExperience } from './sections/experience';
import { renderProjects } from './sections/projects';
import { renderCertifications } from './sections/certifications';
import { renderContact } from './sections/contact';
import { initBackground } from './three/background';
import { initNav } from './ui/nav';
import { initCursor } from './ui/cursor';
import { initScroll } from './ui/scroll';
import { runLoader } from './ui/loader';

const app = document.getElementById('main');
if (app) {
  app.innerHTML = [
    renderHero(),
    renderAbout(),
    renderSkills(),
    renderExperience(),
    renderProjects(),
    renderCertifications(),
    renderContact(),
  ].join('');
}

const background = initBackground();
initNav();
initCursor();
initScroll(background);
void runLoader();
