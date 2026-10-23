import './styles/index.css';
import { store } from './state.js';
import { PRODUCTS } from './data/products.js';
import { renderHeader } from './components/Header.js';
import { renderSkincareHero } from './components/SkincareHero.js';
import { renderSkincareCatalog } from './components/SkincareCatalog.js';
import { renderDoubleCleanseRitual, renderDuoCard, DUOS } from './components/DoubleCleanseRitual.js';
import { renderSkincareIngredients } from './components/SkincareIngredients.js';
import { renderSkincareFAQ } from './components/SkincareFAQ.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderSearchModal } from './components/SearchModal.js';

let activeCatalogTab = 'all';
let activeCatalogSort = 'featured';

function initSkincareApp() {
  const root = document.getElementById('skincare-app');
  if (!root) return;

  root.innerHTML = `
    <div id="skincare-header-mount"></div>
    <main id="main-content">
      <div id="skincare-hero-mount"></div>
      <div id="skincare-catalog-mount"></div>
      <div id="skincare-ritual-mount"></div>
      <div id="skincare-ingredients-mount"></div>
      <div id="skincare-faq-mount"></div>
    </main>
    <div id="skincare-footer-mount"></div>

    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSkincareSections();
  bindSkincareEvents();
  initSearchHandler();

  store.subscribe((event) => {
    handleStateChange(event);
  });
}

function renderAllSkincareSections() {
  document.getElementById('skincare-header-mount').innerHTML = renderHeader('skincare');
  document.getElementById('skincare-hero-mount').innerHTML = renderSkincareHero();
  document.getElementById('skincare-catalog-mount').innerHTML = renderSkincareCatalog(activeCatalogTab, activeCatalogSort);
  document.getElementById('skincare-ritual-mount').innerHTML = renderDoubleCleanseRitual();
  document.getElementById('skincare-ingredients-mount').innerHTML = renderSkincareIngredients();
  document.getElementById('skincare-faq-mount').innerHTML = renderSkincareFAQ();
  document.getElementById('skincare-footer-mount').innerHTML = renderFooter();

  // Modals
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal('face-soap-and-clarity');
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
    document.getElementById('skincare-catalog-mount').innerHTML = renderSkincareCatalog(activeCatalogTab, activeCatalogSort);
  }
}

function bindSkincareEvents() {
  const root = document.getElementById('skincare-app');

  // Sticky header
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  // Delegated Click Handling
  root.addEventListener('click', (e) => {
    const target = e.target;

    // Announcement dismiss
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
      const overlay = document.getElementById('cart-drawer-overlay');
      if (overlay) {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // Cart Drawer Close
    if (target.closest('#cart-drawer-close') || target.id === 'cart-drawer-overlay' || target.classList.contains('cart-drawer-overlay') || target.closest('#cart-continue-shopping')) {
      store.closeCart();
      const overlay = document.getElementById('cart-drawer-overlay');
      if (overlay) {
        overlay.classList.remove('is-open');
        document.body.style.overflow = '';
      }
      return;
    }

    // Cart Quantity Controls
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

    // Catalog Sub-Tabs Filtering
    const tabBtn = target.closest('[data-skincare-tab]');
    if (tabBtn) {
      const tabId = tabBtn.getAttribute('data-skincare-tab');
      activeCatalogTab = tabId;
      document.getElementById('skincare-catalog-mount').innerHTML = renderSkincareCatalog(activeCatalogTab, activeCatalogSort);
      return;
    }

    // Duo Selector Tabs
    const duoBtn = target.closest('[data-duo-id]');
    if (duoBtn) {
      const duoId = duoBtn.getAttribute('data-duo-id');
      document.querySelectorAll('.duo-tab-btn').forEach(b => {
        const active = b === duoBtn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-selected', active);
      });
      const selected = DUOS.find(d => d.id === duoId) || DUOS[0];
      const mount = document.getElementById('duo-display-mount');
      if (mount) mount.innerHTML = renderDuoCard(selected);
      return;
    }

    // FAQ Accordion Trigger
    const faqBtn = target.closest('.faq-accordion-trigger');
    if (faqBtn) {
      const item = faqBtn.closest('.faq-accordion-item');
      const isOpen = item.classList.contains('is-open');
      // Close others
      document.querySelectorAll('.faq-accordion-item').forEach(i => {
        i.classList.remove('is-open');
        const trigger = i.querySelector('.faq-accordion-trigger');
        const panel = i.querySelector('.faq-accordion-panel');
        const icon = i.querySelector('.faq-icon');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
        if (panel) panel.style.display = 'none';
        if (icon) icon.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        faqBtn.setAttribute('aria-expanded', 'true');
        const panel = item.querySelector('.faq-accordion-panel');
        const icon = item.querySelector('.faq-icon');
        if (panel) panel.style.display = 'block';
        if (icon) icon.textContent = '−';
      }
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

    // PDP Add To Bag
    const pdpAddBagBtn = target.closest('#pdp-add-bag-btn');
    if (pdpAddBagBtn) {
      e.preventDefault();
      const pId = pdpAddBagBtn.getAttribute('data-product-id');
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

    // Search Modal Open
    if (target.closest('#search-open-btn')) {
      e.preventDefault();
      openSearchModal();
      return;
    }
    // Search Modal Close
    if (target.closest('#search-modal-close') || target.id === 'search-modal') {
      closeSearchModal();
      return;
    }

    // Quick Tag in Search
    const quickTag = target.closest('.quick-tag');
    if (quickTag) {
      const term = quickTag.getAttribute('data-search-term');
      const input = document.getElementById('search-input');
      if (input) {
        input.value = term;
        input.dispatchEvent(new Event('input'));
      }
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

  // Sort dropdown change
  root.addEventListener('change', (e) => {
    if (e.target.id === 'skincare-sort-select') {
      activeCatalogSort = e.target.value;
      document.getElementById('skincare-catalog-mount').innerHTML = renderSkincareCatalog(activeCatalogTab, activeCatalogSort);
    }
  });

  // ESC key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearchModal();
      const pdp = document.getElementById('pdp-modal-overlay');
      if (pdp) pdp.classList.remove('is-open');
      const drawer = document.getElementById('cart-drawer');
      if (drawer) drawer.classList.remove('is-open');
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
  if (!input) return;

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });
}

function renderSearchResults(query) {
  const container = document.getElementById('search-results-list');
  if (!container) return;

  const matches = query === ''
    ? PRODUCTS.filter(p => p.category === 'skincare').slice(0, 4)
    : PRODUCTS.filter(p => {
        return (
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );
      });

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--sg-gray-600);">
        <p style="font-weight: 700; margin-bottom: 4px;">No products found matching "${query}"</p>
        <p style="font-size: 0.8rem;">Try searching for "clarity", "peaches", "balm", or "scrub"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(p => `
    <div class="search-result-item quick-view-btn" data-product-id="${p.id}" tabindex="0">
      <img src="${p.image}" alt="${p.name}">
      <div class="search-result-info">
        <div class="search-result-title">${p.name}</div>
        <div class="search-result-meta">${p.size} · ${p.cleanserType ? p.cleanserType.toUpperCase() : 'SKINCARE'}</div>
      </div>
      <div class="search-result-price">£${p.price.toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600);">($${(p.price * 1.3).toFixed(2)})</span></div>
    </div>
  `).join('');
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

// Auto init on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSkincareApp);
} else {
  initSkincareApp();
}
