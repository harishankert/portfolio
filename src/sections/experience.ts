import { jobs } from '../data';

export function renderExperience(): string {
  return `
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head reveal">
        <div class="eyebrow">// experience</div>
        <h2 class="section-heading">Career <span class="gradient-text">Journey</span></h2>
        <p class="section-sub">8+ years of progressive growth across enterprise platforms, AI systems, and global product teams.</p>
      </div>

      <div class="timeline">
        <div class="timeline-line" aria-hidden="true"></div>
        ${jobs
          .map(
            (job, i) => `
          <div class="timeline-item reveal ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}" data-index="${i}">
            <div class="timeline-dot accent-bg-solid-${job.accent}" aria-hidden="true"></div>
            <div class="card timeline-card">
              <div class="timeline-card-head">
                <div>
                  <h3 class="timeline-role">${job.role}</h3>
                  <p class="timeline-company accent-cyan">${job.company}</p>
                </div>
                <div class="timeline-meta">
                  ${job.tag ? `<span class="badge badge-live">${job.tag}</span>` : ''}
                  <p class="mono timeline-period">${job.period}</p>
                  <p class="timeline-location">${job.location}</p>
                </div>
              </div>
              <ul class="timeline-list">
                ${job.highlights.map((h) => `<li><span class="dot accent-dot-${job.accent}"></span><span>${h}</span></li>`).join('')}
              </ul>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>
  </section>`;
}
