// shared-nav.js
// Central navigation data for all calculators.
// Add new calculators by appending an object to the array.
const sharedCalculators = [
  {
    id: 'sip',
    label: 'SIP Calculator',
    href: 'sip-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
  {
    id: 'swp',
    label: 'SWP Calculator',
    href: 'swp-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>`
  },
  {
    id: 'stock',
    label: 'Stock Average',
    href: 'stock-average-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>`
  },
  {
    id: 'emi',
    label: 'EMI Calculator',
    href: 'emi-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`
  },
  {
    id: 'wealth',
    label: 'Wealth Projection',
    href: 'wealth-projection/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6-6 4 4 8-8" /><path stroke-linecap="round" stroke-linejoin="round" d="M14 7h7v7" /></svg>`
  },
];

/**
 * Injects the shared sidebar into the element with id "shared-sidebar".
 * @param {string} activeId - The id of the currently active calculator.
 * @param {string} rootPath - Relative path prefix to the repository root (e.g., "../").
 */
function injectSharedSidebar(activeId, rootPath) {
  const container = document.getElementById('shared-sidebar');
  if (!container) return;

  let html = '<nav class="sidebar-nav">';
  // Home link at top
  html += `<a href="${rootPath}" class="sidebar-link sidebar-home" data-testid="sidebar-home"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></span>Home</a>`;

  sharedCalculators.forEach(calc => {
    const activeClass = calc.id === activeId ? 'active' : '';
    html += `<a href="${rootPath}${calc.href}" class="sidebar-link ${activeClass}" data-testid="sidebar-${calc.id}"><span class="sidebar-icon">${calc.icon}</span>${calc.label}</a>`;
  });

  html += '</nav>';
  container.innerHTML = html;
}
