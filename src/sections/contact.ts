import { contactLinks } from '../data';
import { icon } from '../icons';

export function renderContact(): string {
  return `
  <section id="contact" class="section">
    <div class="container contact-inner">
      <div class="eyebrow reveal">// contact</div>
      <h2 class="section-heading reveal">Let's <span class="gradient-text">Work Together</span></h2>
      <p class="section-sub contact-lede reveal">
        Whether you're looking for a solutions architect, a technical lead, or want to discuss AI-driven automation for your enterprise — I'd love to connect.
      </p>

      <div class="contact-links">
        ${contactLinks
          .map(
            (l, i) => `
          <a href="${l.href}" target="_blank" rel="noopener noreferrer" class="card contact-link reveal" data-index="${i}">
            <span class="contact-icon accent-bg-${l.accent}">${icon(l.icon)}</span>
            <span>
              <span class="contact-link-label">${l.label}</span>
              <span class="contact-link-value accent-${l.accent}">${l.value}</span>
            </span>
          </a>`
          )
          .join('')}
      </div>

      <div class="cta-panel reveal">
        <div class="cta-glow" aria-hidden="true"></div>
        <div class="cta-content glow-card">
          <p class="cta-title">Open to New Opportunities</p>
          <p class="cta-desc">Senior / Staff engineering roles, architecture leadership, and AI/automation consulting.</p>
          <a href="https://linkedin.com/in/harishankert" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-large">
            ${icon('linkedin', 'icon icon-inline')} Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>`;
}
