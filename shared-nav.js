// shared-nav.js
// Central navigation data for all calculators.
// Add new calculators by appending an object to the array.
const sharedCalculators = [
  { id: 'sip', label: 'SIP Calculator', href: 'sip-calculator/' },
  { id: 'swp', label: 'SWP Calculator', href: 'swp-calculator/' },
  { id: 'stock', label: 'Stock Average', href: 'stock-average-calculator/' },
  { id: 'emi', label: 'EMI Calculator', href: 'emi-calculator/' },
  { id: 'wealth', label: 'Wealth Projection', href: 'wealth-projection/' },
];

/**
 * Injects the shared sidebar into the element with id "shared-sidebar".
 * @param {string} activeId - The id of the currently active calculator.
 * @param {string} rootPath - Relative path prefix to the repository root (e.g., "../").
 */
function injectSharedSidebar(activeId, rootPath) {
  const container = document.getElementById('shared-sidebar');
  if (!container) return;

  // Build sidebar HTML
  let html = '<nav class="sidebar-nav">';
  sharedCalculators.forEach(calc => {
    const activeClass = calc.id === activeId ? 'active' : '';
    html += `<a href="${rootPath}${calc.href}" class="sidebar-link ${activeClass}" data-testid="sidebar-${calc.id}">${calc.label}</a>`;
  });
  // Optional: Home link at top
  html = `<a href="${rootPath}" class="sidebar-link sidebar-home" data-testid="sidebar-home">← Home</a>` + html;
  html += '</nav>';
  container.innerHTML = html;
}
