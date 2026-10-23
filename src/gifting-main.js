import './styles/index.css';
import { store } from './state.js';
import { PRODUCTS } from './data/products.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderGiftingHero } from './components/GiftingHero.js';
import { renderGiftingCatalog } from './components/GiftingCatalog.js';
import { renderGiftingMatcher, renderGiftRecommendationCard, GIFT_PERSONAS } from './components/GiftingMatcher.js';
import { renderGiftingFAQ } from './components/GiftingFAQ.js';

let activeGiftingTab = 'all';
let activeGiftingSort = 'featured';
let activePersonaId = 'birthday-bestie';

export function initGiftingPage() {
  const app = document.getElementById('gifting-app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar" role="region" aria-label="Announcement">
      <div class="announcement-bar__inner">
        <span>🎁 <strong>BOOTS STAR GIFT SEASON</strong> · UP TO 40% OFF LIMITED-EDITION GIFT TINS &amp; BUNDLES</span>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss Announcement">✕</button>
      </div>
    </div>

    <!-- Header Mount -->
    <div id="gifting-header-mount"></div>

    <!-- Main Content -->
    <main id="main-content">
      <div id="gifting-hero-mount"></div>
      <div id="gifting-matcher-mount"></div>
      <div id="gifting-catalog-mount"></div>
      <div id="gifting-faq-mount"></div>
    </main>

    <!-- Footer Mount -->
    <div id="gifting-footer-mount"></div>

    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSections();
  bindGiftingEvents();
  initSearchHandler();

  store.subscribe((event) => {
    handleStateChange(event);
  });
}

function renderAllSections() {
  document.getElementById('gifting-header-mount').innerHTML = renderHeader('gifting');
  document.getElementById('gifting-hero-mount').innerHTML = renderGiftingHero();
  document.getElementById('gifting-matcher-mount').innerHTML = renderGiftingMatcher(activePersonaId);
  document.getElementById('gifting-catalog-mount').innerHTML = renderGiftingCatalog(activeGiftingTab, activeGiftingSort);
  document.getElementById('gifting-faq-mount').innerHTML = renderGiftingFAQ();
  document.getElementById('gifting-footer-mount').innerHTML = renderFooter();

  // Modals
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal('birthday-box-gift-set');
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
    document.getElementById('gifting-catalog-mount').innerHTML = renderGiftingCatalog(activeGiftingTab, activeGiftingSort);
  }
}

function bindGiftingEvents() {
  const app = document.getElementById('gifting-app');

  // Sticky Header Scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }
  });

  // App Click Delegation
  app.addEventListener('click', (e) => {
    const target = e.target;

    // Mobile Menu Open
    if (target.closest('#mobile-menu-open')) {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.add('is-open');
      return;
    }

    // Mobile Menu Close
    if (target.closest('#mobile-menu-close') || target.classList.contains('mobile-drawer')) {
      const drawer = document.getElementById('mobile-drawer');
      if (drawer) drawer.classList.remove('is-open');
      return;
    }

    // Announcement Close
    if (target.closest('#announcement-close')) {
      const bar = target.closest('.announcement-bar');
      if (bar) bar.style.display = 'none';
      return;
    }

    // Cart Drawer Open
    if (target.closest('#cart-drawer-open')) {
      const drawer = document.getElementById('cart-drawer');
      if (drawer) {
        drawer.classList.add('is-open');
        drawer.setAttribute('aria-hidden', 'false');
      }
      return;
    }

    // Cart Drawer Close
    if (target.closest('#cart-drawer-close') || target.classList.contains('cart-drawer-backdrop')) {
      const drawer = document.getElementById('cart-drawer');
      if (drawer) {
        drawer.classList.remove('is-open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      return;
    }

    // Gift Persona Selector
    const personaBtn = target.closest('[data-persona-id]');
    if (personaBtn) {
      const personaId = personaBtn.getAttribute('data-persona-id');
      activePersonaId = personaId;
      document.querySelectorAll('.gift-persona-btn').forEach(b => {
        const active = b === personaBtn;
        b.classList.toggle('is-active', active);
        b.style.borderColor = active ? 'var(--sg-black)' : 'var(--sg-gray-300)';
        b.style.background = active ? '#FFF0F5' : 'var(--sg-white)';
        b.style.boxShadow = active ? '3px 3px 0 var(--sg-black)' : 'none';
      });
      const selected = GIFT_PERSONAS.find(p => p.id === personaId) || GIFT_PERSONAS[0];
      const mount = document.getElementById('gift-recommendation-mount');
      if (mount) mount.innerHTML = renderGiftRecommendationCard(selected);
      return;
    }

    // Catalog Sub-Tabs
    const tabBtn = target.closest('[data-gifting-tab]');
    if (tabBtn) {
      activeGiftingTab = tabBtn.getAttribute('data-gifting-tab');
      document.getElementById('gifting-catalog-mount').innerHTML = renderGiftingCatalog(activeGiftingTab, activeGiftingSort);
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

    // Add To Bag Button
    const addBtn = target.closest('.btn-add-cart') || target.closest('[data-add-to-cart]');
    if (addBtn) {
      const pId = addBtn.getAttribute('data-product-id') || addBtn.getAttribute('data-add-to-cart');
      const product = PRODUCTS.find(p => p.id === pId);
      if (product) {
        store.addToCart(product, 1);
      }
      return;
    }

    // Cart Quantity Updates
    const qtyBtn = target.closest('.cart-qty-btn');
    if (qtyBtn) {
      const pId = qtyBtn.getAttribute('data-product-id');
      const action = qtyBtn.getAttribute('data-action');
      const currentQty = parseInt(qtyBtn.getAttribute('data-qty') || '1', 10);
      if (action === 'increase') {
        store.updateCartQuantity(pId, currentQty + 1);
      } else if (action === 'decrease') {
        store.updateCartQuantity(pId, currentQty - 1);
      }
      return;
    }

    // Cart Remove Item
    const removeBtn = target.closest('.cart-item__remove');
    if (removeBtn) {
      const pId = removeBtn.getAttribute('data-product-id');
      store.removeFromCart(pId);
      return;
    }
  });

  // Sort Dropdown Change
  app.addEventListener('change', (e) => {
    if (e.target.id === 'gifting-sort-select') {
      activeGiftingSort = e.target.value;
      document.getElementById('gifting-catalog-mount').innerHTML = renderGiftingCatalog(activeGiftingTab, activeGiftingSort);
    }
  });
}

function initSearchHandler() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('#search-open-btn')) {
      const modal = document.getElementById('search-modal-overlay');
      if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        const input = document.getElementById('search-input');
        if (input) setTimeout(() => input.focus(), 100);
      }
    }
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notice');
  if (toast) {
    toast.textContent = msg;
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2800);
  }
}

// Auto-run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGiftingPage);
} else {
  initGiftingPage();
}
