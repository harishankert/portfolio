import { aboutHighlights, aboutParagraphs, aboutTags } from '../data';
import { icon } from '../icons';

export function renderAbout(): string {
  return `
  <section id="about" class="section">
    <div class="container about-grid">
      <div class="reveal">
        <div class="eyebrow">// about_me</div>
        <h2 class="section-heading">Building <span class="gradient-text">Intelligent</span><br />Enterprise Systems</h2>
        ${aboutParagraphs.map((p) => `<p class="body-text">${p}</p>`).join('')}
        <div class="tag-row">
          ${aboutTags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>

      <div class="stack-4">
        ${aboutHighlights
          .map(
            (h, i) => `
          <div class="card highlight-card reveal" data-index="${i}">
            <span class="highlight-icon accent-bg-${h.accent}">${icon(h.icon)}</span>
            <div>
              <h3 class="highlight-title">${h.title}</h3>
              <p class="highlight-desc">${h.desc}</p>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
