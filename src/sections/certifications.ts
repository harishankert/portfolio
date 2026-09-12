import { awards, certsHighlight, certsList } from '../data';
import { icon } from '../icons';

export function renderCertifications(): string {
  return `
  <section id="certifications" class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">// certifications_&amp;_awards</div>
        <h2 class="section-heading">Credentials &amp; <span class="gradient-text">Recognition</span></h2>
      </div>

      <div class="certs-grid">
        <div class="reveal">
          <h3 class="subsection-title">${icon('scroll')} 13 Certifications</h3>
          <div class="certs-highlight">
            ${certsHighlight
              .map(
                (c) => `
              <div class="card cert-highlight-card ring-${c.accent}">
                <span class="cert-highlight-icon">${icon('scroll')}</span>
                <p class="cert-highlight-name">${c.name}</p>
                <p class="cert-highlight-issuer">${c.issuer}</p>
              </div>`
              )
              .join('')}
          </div>
          <div class="card certs-list">
            ${certsList
              .map(
                (c) => `
              <div class="certs-list-row">
                <span class="dot accent-dot-${c.accent}"></span>
                <div class="certs-list-info">
                  <span>${c.name}</span>
                  <span class="badge badge-outline">${c.issuer}</span>
                </div>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="reveal" data-index="1">
          <h3 class="subsection-title">${icon('trophy')} 5 Honor Awards</h3>
          <div class="stack-4">
            ${awards
              .map(
                (a) => `
              <div class="card award-card ring-${a.accent}">
                <span class="award-icon">${icon(a.icon)}</span>
                <div class="award-body">
                  <div class="award-head">
                    <h4>${a.title}</h4>
                    <span class="mono award-date">${a.date}</span>
                  </div>
                  <p class="award-from accent-${a.accent}">${a.from}</p>
                  <p class="award-desc">${a.desc}</p>
                </div>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}
