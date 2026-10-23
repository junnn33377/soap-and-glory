import './styles/index.css';
import { store } from './state.js';
import { PRODUCTS } from './data/products.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderMakeupHero } from './components/MakeupHero.js';
import { renderPuckerLounge, renderPuckerShadeDisplay, SHADES } from './components/PuckerLounge.js';
import { renderMakeupCatalog } from './components/MakeupCatalog.js';
import { renderMakeupRoutine } from './components/MakeupRoutine.js';
import { renderMakeupFAQ } from './components/MakeupFAQ.js';

let activeMakeupTab = 'all';
let activeMakeupSort = 'featured';
let activeShadeId = 'pillow-plump-xxl';

export function initMakeupPage() {
  const app = document.getElementById('makeup-app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar" role="region" aria-label="Announcement">
      <div class="announcement-bar__inner">
        <span>💋 <strong>FREE UK NEXT-DAY DELIVERY</strong> ON ORDERS OVER £25 ($35) VIA BOOTS &amp; AMAZON PRIME</span>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss Announcement">✕</button>
      </div>
    </div>

    <!-- Header Mount -->
    <div id="makeup-header-mount"></div>

    <!-- Main Content -->
    <main id="main-content">
      <div id="makeup-hero-mount"></div>
      <div id="makeup-pucker-mount"></div>
      <div id="makeup-catalog-mount"></div>
      <div id="makeup-routine-mount"></div>
      <div id="makeup-faq-mount"></div>
    </main>

    <!-- Footer Mount -->
    <div id="makeup-footer-mount"></div>

    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSections();
  bindMakeupEvents();
  initSearchHandler();

  store.subscribe((event) => {
    handleStateChange(event);
  });
}

function renderAllSections() {
  document.getElementById('makeup-header-mount').innerHTML = renderHeader('makeup');
  document.getElementById('makeup-hero-mount').innerHTML = renderMakeupHero();
  document.getElementById('makeup-pucker-mount').innerHTML = renderPuckerLounge(activeShadeId);
  document.getElementById('makeup-catalog-mount').innerHTML = renderMakeupCatalog(activeMakeupTab, activeMakeupSort);
  document.getElementById('makeup-routine-mount').innerHTML = renderMakeupRoutine();
  document.getElementById('makeup-faq-mount').innerHTML = renderMakeupFAQ();
  document.getElementById('makeup-footer-mount').innerHTML = renderFooter();

  // Modals
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal('sexy-mother-pucker-xxl');
  document.getElementById('search-modal-mount').innerHTML = renderSearchModal();
}

function handleStateChange(event) {
  if (event.type === 'cart_updated') {
    document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
    const totals = store.getCartTotals();
    const badge = document.getElementById('cart-counter-badge');
    if (badge) {
      badge.textContent = totals.count;
      badge.classList.toggle('has-items', totals.count > 0);
    }
    if (event.product) {
      showToast(`💖 Added ${event.product.name} to your Glorious Bag!`);
    }
  } else if (event.type === 'wishlist_updated') {
    document.getElementById('makeup-catalog-mount').innerHTML = renderMakeupCatalog(activeMakeupTab, activeMakeupSort);
  }
}

function bindMakeupEvents() {
  const app = document.getElementById('makeup-app');

  // Sticky Header Scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  app.addEventListener('click', (e) => {
    const target = e.target;

    // Announcement Dismiss
    if (target.closest('#announcement-close')) {
      const bar = document.querySelector('.announcement-bar');
      if (bar) {
        bar.style.display = 'none';
        document.documentElement.style.setProperty('--announcement-bar-height', '0px');
      }
      return;
    }

    // Cart Drawer Open
    if (target.closest('#cart-drawer-open')) {
      e.preventDefault();
      store.openCart();
      const drawer = document.getElementById('cart-drawer-overlay');
      if (drawer) {
        drawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // Cart Drawer Close
    if (target.closest('#cart-drawer-close') || target.id === 'cart-drawer-overlay' || target.classList.contains('cart-drawer-overlay') || target.closest('#cart-continue-shopping')) {
      store.closeCart();
      const drawer = document.getElementById('cart-drawer-overlay');
      if (drawer) {
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
      }
      return;
    }

    // Cart Quantity Updates
    const qtyBtn = target.closest('[data-cart-action]');
    if (qtyBtn) {
      const action = qtyBtn.getAttribute('data-cart-action');
      const pId = qtyBtn.getAttribute('data-product-id');
      if (action === 'increase') store.addToCart(pId, 1);
      if (action === 'decrease') store.updateCartQuantity(pId, -1);
      return;
    }

    // Mobile Menu Open/Close
    if (target.closest('#mobile-menu-open')) {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.add('is-open');
      return;
    }
    if (target.closest('#mobile-menu-close') || target.classList.contains('mobile-drawer')) {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.remove('is-open');
      return;
    }

    // Pucker Lounge Shade Selector
    const shadeBtn = target.closest('[data-shade-id]');
    if (shadeBtn) {
      const shadeId = shadeBtn.getAttribute('data-shade-id');
      activeShadeId = shadeId;
      document.querySelectorAll('.shade-pick-btn').forEach(b => {
        const active = b === shadeBtn;
        b.classList.toggle('is-active', active);
        b.style.borderColor = active ? 'var(--sg-black)' : 'var(--sg-gray-300)';
        b.style.background = active ? '#FFF0F5' : 'var(--sg-white)';
        b.style.boxShadow = active ? '3px 3px 0 var(--sg-black)' : 'none';
      });
      const selectedShade = SHADES.find(s => s.id === shadeId) || SHADES[0];
      const cardMount = document.getElementById('pucker-card-mount');
      if (cardMount) cardMount.innerHTML = renderPuckerShadeDisplay(selectedShade);
      return;
    }

    // Catalog Sub-Tabs
    const tabBtn = target.closest('[data-makeup-tab]');
    if (tabBtn) {
      activeMakeupTab = tabBtn.getAttribute('data-makeup-tab');
      document.getElementById('makeup-catalog-mount').innerHTML = renderMakeupCatalog(activeMakeupTab, activeMakeupSort);
      return;
    }

    // Quick View Open Modal
    const qvBtn = target.closest('.quick-view-btn') || target.closest('.quick-view-link') || target.closest('[data-pdp-id]');
    if (qvBtn) {
      e.preventDefault();
      const pId = qvBtn.getAttribute('data-product-id') || qvBtn.getAttribute('data-pdp-id');
      document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal(pId);
      const modal = document.getElementById('pdp-modal-overlay');
      if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // PDP Modal Close
    if (target.closest('#pdp-modal-close') || target.closest('#pdp-close') || target.classList.contains('pdp-modal-overlay') || target.id === 'pdp-modal-overlay') {
      const modal = document.getElementById('pdp-modal-overlay');
      if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      return;
    }

    // PDP Size Selection
    const sizeBtn = target.closest('.pdp-size-btn');
    if (sizeBtn) {
      e.preventDefault();
      document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('is-selected'));
      sizeBtn.classList.add('is-selected');
      return;
    }

    // Add to Bag from PDP
    const addBagBtn = target.closest('#pdp-add-bag-btn');
    if (addBagBtn) {
      e.preventDefault();
      const pId = addBagBtn.getAttribute('data-product-id');
      store.addToCart(pId, 1);
      const modal = document.getElementById('pdp-modal-overlay');
      if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
      }
      store.openCart();
      const drawer = document.getElementById('cart-drawer');
      if (drawer) drawer.classList.add('is-open');
      return;
    }

    // Search Open/Close
    if (target.closest('#search-open-btn')) {
      e.preventDefault();
      openSearchModal();
      return;
    }
    if (target.closest('#search-modal-close') || target.id === 'search-modal') {
      closeSearchModal();
      return;
    }

    // Wishlist Toggle
    const wishBtn = target.closest('.wishlist-btn');
    if (wishBtn) {
      e.preventDefault();
      const pId = wishBtn.getAttribute('data-wishlist-id');
      store.toggleWishlist(pId);
      return;
    }
  });

  // Sort dropdown
  app.addEventListener('change', (e) => {
    if (e.target.id === 'makeup-sort-select') {
      activeMakeupSort = e.target.value;
      document.getElementById('makeup-catalog-mount').innerHTML = renderMakeupCatalog(activeMakeupTab, activeMakeupSort);
    }
  });

  // Keyboard accessibility
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      const pdp = document.getElementById('pdp-modal-overlay');
      if (pdp) pdp.classList.remove('is-open');
      const cart = document.getElementById('cart-drawer');
      if (cart) cart.classList.remove('is-open');
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
    }
  });
}

function openSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('search-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 150);
      renderSearchResults('');
    }
  }
}

function closeSearchModal() {
  const modal = document.getElementById('search-modal');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

function initSearchHandler() {
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', (e) => {
      renderSearchResults(e.target.value.trim().toLowerCase());
    });
  }
}

function renderSearchResults(query) {
  const resultsContainer = document.getElementById('search-results-list');
  if (!resultsContainer) return;

  const matches = query === ''
    ? PRODUCTS.filter(p => p.category === 'makeup').slice(0, 4)
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );

  resultsContainer.innerHTML = matches.length === 0
    ? `<div style="text-align: center; padding: 32px 16px; color: var(--sg-gray-600);">No results found for "${query}"</div>`
    : matches.map(p => `
        <div class="search-result-item" style="display: flex; align-items: center; gap: 14px; padding: 12px; border-bottom: 1px solid var(--sg-gray-200);">
          <img src="${p.image}" alt="${p.name}" style="width: 50px; height: 50px; object-fit: contain;">
          <div style="flex: 1;">
            <div style="font-family: var(--font-display); font-weight: 800; font-size: 0.95rem;">${p.name}</div>
            <div style="font-size: 0.75rem; color: var(--sg-gray-600);">£${p.price.toFixed(2)} ($${(p.price * 1.3).toFixed(2)}) · ${p.type}</div>
          </div>
          <button class="btn btn--sm btn--primary quick-view-btn" data-product-id="${p.id}" type="button">View</button>
        </div>
      `).join('');
}

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 3500);
}

document.addEventListener('DOMContentLoaded', initMakeupPage);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initMakeupPage();
}
