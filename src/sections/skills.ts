import { proficiency, skillGroups } from '../data';
import { icon } from '../icons';

export function renderSkills(): string {
  return `
  <section id="skills" class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">// skills</div>
        <h2 class="section-heading">What I <span class="gradient-text">Bring</span> to the Table</h2>
        <p class="section-sub">A decade of hands-on expertise spanning the full ServiceNow ecosystem, AI/ML engineering, and enterprise integrations.</p>
      </div>

      <div class="skills-grid">
        ${skillGroups
          .map(
            (g, i) => `
          <div class="card reveal" data-index="${i}">
            <div class="skills-group-head">
              <span class="skills-group-icon accent-bg-${g.accent}">${icon(g.icon)}</span>
              <h3 class="skills-group-title">${g.label}</h3>
            </div>
            <div class="skill-tags">
              ${g.skills
                .map(
                  (s) => `<span class="skill-tag accent-${g.accent} accent-bg-${g.accent}"><span class="skill-dot accent-dot-${g.accent}"></span>${s}</span>`
                )
                .join('')}
            </div>
          </div>`
          )
          .join('')}
      </div>

      <div class="card proficiency-card reveal">
        <h3 class="proficiency-title">Core Proficiency</h3>
        <div class="proficiency-grid">
          ${proficiency
            .map(
              (p) => `
            <div class="proficiency-row">
              <div class="proficiency-label"><span>${p.name}</span></div>
              <div class="proficiency-track">
                <div class="proficiency-fill accent-grad-${p.accent}" data-pct="${p.pct}"></div>
              </div>
            </div>`
            )
            .join('')}
        </div>
      </div>
    </div>
  </section>`;
}
