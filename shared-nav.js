// shared-nav.js
// Central navigation data for all calculators.
const sharedCalculators = [
  {
    id: 'wealth',
    label: 'Wealth Projection',
    href: 'wealth-projection/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6-6 4 4 8-8" /><path stroke-linecap="round" stroke-linejoin="round" d="M14 7h7v7" /></svg>`
  },
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
    id: 'xirr',
    label: 'XIRR Calculator',
    href: 'xirr-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>`
  },
  {
    id: 'lumpsum',
    label: 'Lumpsum Calculator',
    href: 'lumpsum-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },
  {
    id: 'goal',
    label: 'Goal Based',
    href: 'goal-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`
  },  
  {
    id: 'homeloan',
    label: 'Home Loan',
    href: 'home-loan-calculator/',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>`
  },  
];

/**
 * Builds the navigation HTML (without container wrappers).
 */
function getSharedNavHTML(activeId, rootPath) {
  let html = '';
  sharedCalculators.forEach(calc => {
    const activeClass = calc.id === activeId ? 'active' : '';
    html += `<a href="${rootPath}${calc.href}" class="sidebar-link ${activeClass}" data-testid="sidebar-${calc.id}"><span class="sidebar-icon">${calc.icon}</span>${calc.label}</a>`;
  });
  return html;
}

/**
 * Injects the shared sidebar into the element with id "shared-sidebar".
 */
function injectSharedSidebar(activeId, rootPath) {
  const container = document.getElementById('shared-sidebar');
  if (!container) return;

  let html = '<nav class="sidebar-nav">';
  html += `<a href="${rootPath}" class="sidebar-link sidebar-home" data-testid="sidebar-home"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></span>Home</a>`;
  html += getSharedNavHTML(activeId, rootPath);
  html += '</nav>';
  container.innerHTML = html;
}

/**
 * Injects the shared navigation into a mobile drawer element.
 * Includes a close button.
 */
function injectMobileDrawer(activeId, rootPath) {
  const drawer = document.getElementById('mobileDrawer');
  if (!drawer) return;

  let html = `
    <button class="drawer-close" id="drawerCloseBtn" aria-label="Close navigation menu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <nav class="sidebar-nav">
  `;
  html += `<a href="${rootPath}" class="sidebar-link sidebar-home" data-testid="drawer-home"><span class="sidebar-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></span>Home</a>`;
  html += getSharedNavHTML(activeId, rootPath);
  html += '</nav>';
  drawer.innerHTML = html;
}

/**
 * Toggles the mobile drawer open/closed.
 */
function toggleMobileDrawer(forceClose = false) {
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  if (!drawer || !overlay) return;
  if (forceClose) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  } else {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  }
}
