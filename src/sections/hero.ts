import { heroStats, whatIDo } from '../data';
import { icon } from '../icons';

export function renderHero(): string {
  return `
  <section id="hero" class="hero">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="container hero-inner">
      <div class="hero-main">
        <h1 class="hero-title">
          <span class="gradient-text">Harish</span>anker<br />Tripathi
        </h1>

        <div class="hero-role">
          <span class="hero-role-rule"></span>
          <p class="mono">Staff Software Engineer &amp; ServiceNow Architect</p>
        </div>

        <p class="hero-lede">
          Staff Software Engineer and Solutions Architect with <strong>8+ years</strong> delivering enterprise-scale solutions on the ServiceNow platform.
        </p>
        <p class="hero-lede">
          Deep expertise across <span class="accent-violet">ITSM, ITOM, CSM, HRSD, SecOps, Event Management, Vulnerability Response</span> and <span class="accent-violet">Discovery</span> — with a strong focus on <span class="accent-cyan">Agentic Workflows</span>, autonomous AI systems, and next-generation IT operations that drive real business impact.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">View Projects</a>
          <a href="#contact" class="btn btn-ghost">Get in Touch</a>
          <a href="https://linkedin.com/in/harishankert" target="_blank" rel="noopener" class="btn btn-ghost">LinkedIn ${icon('arrowUpRight', 'icon icon-inline')}</a>
        </div>

        <div class="hero-stats">
          ${heroStats
            .map(
              (s, i) => `
            ${i > 0 ? '<div class="hero-stat-divider" aria-hidden="true"></div>' : ''}
            <div class="hero-stat">
              <p class="hero-stat-value gradient-text">${s.value}</p>
              <p class="hero-stat-label">${s.label}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="hero-side">
        <div class="glow-card">
          <div class="status-row">
            <span class="status-dot" aria-hidden="true"></span>
            <span class="status-label">Currently at</span>
          </div>
          <p class="status-company">ServiceNow</p>
          <p class="status-detail">Staff Software Engineer · Pune, India</p>
        </div>

        <div class="card">
          <p class="card-eyebrow">What I do</p>
          <div class="do-list">
            ${whatIDo
              .map(
                (d) => `
              <div class="do-item">
                <span class="do-icon accent-bg-${d.accent}">${icon(d.icon)}</span>
                <span class="do-label accent-${d.accent}">${d.label}</span>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="card cert-badge">
          <div class="cert-badge-mark">CTA<br />ArchX</div>
          <div>
            <p class="cert-badge-title">ServiceNow Certified</p>
            <p class="cert-badge-sub">Technical Architect · Architecture Excellence</p>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-hint" aria-hidden="true">
      <span>Scroll to explore</span>
      <div class="scroll-hint-line"></div>
    </div>
  </section>`;
}
