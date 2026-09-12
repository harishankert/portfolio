// Minimal outline icon set (Phosphor/Heroicons-style: 24x24, stroke-based) — replaces emoji glyphs.
const wrap = (paths: string) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

export const icons = {
  architecture: wrap(
    '<path d="M4 21V9l8-5 8 5v12"/><path d="M4 21h16"/><path d="M9 21v-6h6v6"/><path d="M9 12h.01M15 12h.01"/>'
  ),
  layers: wrap('<path d="M12 3l9 5-9 5-9-5 9-5Z"/><path d="M3 13l9 5 9-5"/><path d="M3 17l9 5 9-5"/>'),
  link: wrap(
    '<path d="M9.5 14.5 14.5 9.5"/><path d="M7 17 4.6 14.6a4 4 0 0 1 0-5.66l2-2a4 4 0 0 1 5.66 0"/><path d="M17 7l2.4 2.4a4 4 0 0 1 0 5.66l-2 2a4 4 0 0 1-5.66 0"/>'
  ),
  bolt: wrap('<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>'),
  cpu: wrap(
    '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>'
  ),
  code: wrap('<path d="m9 8-4 4 4 4"/><path d="m15 8 4 4-4 4"/>'),
  gear: wrap(
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.4.66.74.85.34.19.55.55.86.6H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1.15Z"/>'
  ),
  scroll: wrap(
    '<path d="M8 4h11v14a2 2 0 0 1-2 2H8"/><path d="M8 4a2 2 0 0 0-2 2v13a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"/><path d="M12 8h4M12 12h4"/>'
  ),
  trophy: wrap(
    '<path d="M8 4h8v4a4 4 0 0 1-8 0V4Z"/><path d="M6 5H4a2 2 0 0 0 2 4M18 5h2a2 2 0 0 1-2 4"/><path d="M12 12v4M9 21h6M9 21a3 3 0 0 1 .8-5.9h4.4A3 3 0 0 1 15 21"/>'
  ),
  star: wrap('<path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2L3 9.5l6.4-.6L12 3Z"/>'),
  search: wrap('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),
  wrench: wrap(
    '<path d="M14.7 6.3a4 4 0 0 0-5.6 5.1L3 17.5V21h3.5l6.1-6.1a4 4 0 0 0 5.1-5.6l-3 3-2-2 3-3Z"/>'
  ),
  cloud: wrap(
    '<path d="M7 18a4.5 4.5 0 0 1-1-8.9A5.5 5.5 0 0 1 16.2 8h.3a4.5 4.5 0 0 1 .5 9H7Z"/>'
  ),
  shield: wrap('<path d="M12 3 4 6v6c0 5 3.5 7.7 8 9 4.5-1.3 8-4 8-9V6l-8-3Z"/><path d="m9 12 2 2 4-4"/>'),
  chart: wrap('<path d="M4 20V10M11 20V4M18 20v-7"/><path d="M2 20h20"/>'),
  briefcase: wrap(
    '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>'
  ),
  github: wrap(
    '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>'
  ),
  linkedin: wrap(
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4.5a2 2 0 0 1 4 0V17M11 12.5V17"/>'
  ),
  arrowUpRight: wrap('<path d="M7 17 17 7"/><path d="M9 7h8v8"/>'),
  mail: wrap('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'),
  chevronDown: wrap('<path d="m6 9 6 6 6-6"/>'),
  close: wrap('<path d="M6 6l12 12M18 6 6 18"/>'),
} as const;

export type IconName = keyof typeof icons;

export function icon(name: IconName, className = 'icon'): string {
  return icons[name].replace('<svg ', `<svg class="${className}" `);
}
