import { projects } from '../data';
import { icon } from '../icons';

export function renderProjects(): string {
  return `
  <section id="projects" class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">// projects</div>
        <h2 class="section-heading">What I've <span class="gradient-text">Built</span></h2>
        <p class="section-sub">High-impact enterprise solutions across AI, platform architecture, security, and integrations.</p>
      </div>

      <div class="projects-grid">
        ${projects
          .map(
            (p, i) => `
          <article class="card project-card reveal" data-index="${i}">
            <div class="project-head">
              <span class="project-icon accent-grad-${p.accent}">${icon(p.icon)}</span>
              <div class="project-meta">
                <span class="mono">${p.period}</span>
                <p>${p.company}</p>
              </div>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <div class="project-badges">
              <span class="badge accent-${p.accent} accent-bg-${p.accent}">${p.badge}</span>
              <span class="badge badge-outline">${p.impact}</span>
            </div>
            <p class="project-desc">${p.description}</p>
            <ul class="project-bullets">
              ${p.bullets.map((b) => `<li><span class="dot accent-dot-${p.accent}"></span>${b}</li>`).join('')}
            </ul>
            <div class="project-tags">
              ${p.tags.map((t) => `<span class="chip">${t}</span>`).join('')}
            </div>
          </article>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
