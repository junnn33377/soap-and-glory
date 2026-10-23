import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFragranceHero } from './components/FragranceHero.js';
import { renderFragranceFamilies } from './components/FragranceFamilies.js';
import { renderFragranceCatalog } from './components/FragranceCatalog.js';
import { renderFragranceFAQ } from './components/FragranceFAQ.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderSearchModal } from './components/SearchModal.js';

let activeScentFamily = 'original-pink';
let activeCatalogTab = 'all';
let activeCatalogSort = 'featured';

function initFragranceApp() {
  const root = document.getElementById('fragrance-app');
  if (!root) return;

  root.innerHTML = `
    <!-- Header Notification Bar -->
    <div class="announcement-bar" role="region" aria-label="Special Offers">
      <div class="container announcement-bar__content">
        <span class="announcement-bar__badge">SCENT LAYERING</span>
        <p class="announcement-bar__text">
          Enjoy Prime Next-Day Delivery on All Fragrance Mists &amp; Sets! 📦
        </p>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss announcement">✕</button>
      </div>
    </div>

    <div id="fragrance-header-mount"></div>
    <main id="main-content">
      <div id="fragrance-hero-mount"></div>
      <div id="fragrance-families-mount"></div>
      <div id="fragrance-catalog-mount"></div>
      <div id="fragrance-faq-mount"></div>
    </main>
    <div id="fragrance-footer-mount"></div>

    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSections();
  bindEvents();
  initSearchHandler();

  store.subscribe((event) => {
    handleStateChange(event);
  });
}

function renderAllSections() {
  document.getElementById('fragrance-header-mount').innerHTML = renderHeader('fragrance');
  document.getElementById('fragrance-hero-mount').innerHTML = renderFragranceHero();
  document.getElementById('fragrance-families-mount').innerHTML = renderFragranceFamilies(activeScentFamily);
  document.getElementById('fragrance-catalog-mount').innerHTML = renderFragranceCatalog(activeCatalogTab, activeCatalogSort);
  document.getElementById('fragrance-faq-mount').innerHTML = renderFragranceFAQ();
  document.getElementById('fragrance-footer-mount').innerHTML = renderFooter();

  // Modals
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal('righteous-butter-300ml');
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
    document.getElementById('fragrance-catalog-mount').innerHTML = renderFragranceCatalog(activeCatalogTab, activeCatalogSort);
  }
}

function bindEvents() {
  const root = document.getElementById('fragrance-app');

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

    // Scent Family Switcher Tab
    const scentTab = target.closest('[data-fragrance-tab]');
    if (scentTab) {
      activeScentFamily = scentTab.getAttribute('data-fragrance-tab');
      document.getElementById('fragrance-families-mount').innerHTML = renderFragranceFamilies(activeScentFamily);
      return;
    }

    // Catalog Scent Filter Tab
    const catTab = target.closest('[data-fragrance-catalog-tab]');
    if (catTab) {
      activeCatalogTab = catTab.getAttribute('data-fragrance-catalog-tab');
      document.getElementById('fragrance-catalog-mount').innerHTML = renderFragranceCatalog(activeCatalogTab, activeCatalogSort);
      return;
    }

    // Quick View / PDP Modal Open
    const pdpTrigger = target.closest('.quick-view-btn') || target.closest('.quick-view-link') || target.closest('[data-pdp-id]');
    if (pdpTrigger) {
      e.preventDefault();
      const pId = pdpTrigger.getAttribute('data-product-id') || pdpTrigger.getAttribute('data-pdp-id');
      const modalMount = document.getElementById('pdp-modal-mount');
      if (modalMount) {
        modalMount.innerHTML = renderPDPModal(pId);
        const overlay = document.getElementById('pdp-modal-overlay');
        if (overlay) {
          overlay.classList.add('is-open');
          overlay.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        }
      }
      return;
    }

    // PDP Modal Close
    if (target.closest('#pdp-modal-close') || target.closest('#pdp-close') || target.classList.contains('pdp-modal-overlay') || target.id === 'pdp-modal-overlay') {
      const overlay = document.getElementById('pdp-modal-overlay');
      if (overlay) {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      return;
    }


    // PDP Size Switcher
    const sizeBtn = target.closest('.pdp-size-btn');
    if (sizeBtn) {
      document.querySelectorAll('.pdp-size-btn').forEach(b => b.classList.remove('is-selected'));
      sizeBtn.classList.add('is-selected');
      return;
    }

    // PDP Qty Stepper
    if (target.closest('#pdp-qty-plus')) {
      const display = document.getElementById('pdp-qty-count');
      if (display) display.textContent = parseInt(display.textContent, 10) + 1;
      return;
    }
    if (target.closest('#pdp-qty-minus')) {
      const display = document.getElementById('pdp-qty-count');
      if (display && parseInt(display.textContent, 10) > 1) {
        display.textContent = parseInt(display.textContent, 10) - 1;
      }
      return;
    }

    // PDP Add To Bag
    if (target.closest('#pdp-add-btn') || target.closest('#pdp-add-bag-btn')) {
      const btn = target.closest('#pdp-add-btn') || target.closest('#pdp-add-bag-btn');
      const pId = btn.getAttribute('data-product-id');
      const selectedSizeBtn = document.querySelector('.pdp-size-btn.is-selected');
      const size = selectedSizeBtn ? selectedSizeBtn.getAttribute('data-size') : null;
      const count = parseInt(document.getElementById('pdp-qty-count')?.textContent || '1', 10);
      store.addToCart(pId, size, count);
      const overlay = document.getElementById('pdp-modal-overlay');
      if (overlay) {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      const cartDrawer = document.getElementById('cart-drawer');
      if (cartDrawer) {
        cartDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // FAQ Accordion Toggle
    const faqBtn = target.closest('.faq-accordion-trigger');
    if (faqBtn) {
      const item = faqBtn.closest('.faq-accordion-item');
      const isOpen = item.classList.contains('is-open');
      
      // Close other items
      document.querySelectorAll('#fragrance-faq .faq-accordion-item').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('.faq-accordion-trigger')?.setAttribute('aria-expanded', 'false');
        const p = el.querySelector('.faq-accordion-panel');
        if (p) p.style.display = 'none';
        const icon = el.querySelector('.faq-icon');
        if (icon) icon.textContent = '+';
      });

      if (!isOpen) {
        item.classList.add('is-open');
        faqBtn.setAttribute('aria-expanded', 'true');
        const panel = item.querySelector('.faq-accordion-panel');
        if (panel) panel.style.display = 'block';
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
      return;
    }

    // Add to Cart from Card / PDP
    const addBtn = target.closest('[data-add-to-cart]');
    if (addBtn) {
      const pId = addBtn.getAttribute('data-add-to-cart');
      const size = addBtn.getAttribute('data-product-size') || null;
      store.addToCart(pId, size, 1);
      const overlay = document.getElementById('cart-drawer-overlay');
      if (overlay) {
        overlay.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
      return;
    }

    // Wishlist Toggle
    const wishBtn = target.closest('[data-wishlist-id]');
    if (wishBtn) {
      const pId = wishBtn.getAttribute('data-wishlist-id');
      store.toggleWishlist(pId);
      wishBtn.classList.toggle('is-active', store.wishlist.includes(pId));
      return;
    }
  });

  // Sort change event listener
  root.addEventListener('change', (e) => {
    if (e.target.id === 'fragrance-sort-select') {
      activeCatalogSort = e.target.value;
      document.getElementById('fragrance-catalog-mount').innerHTML = renderFragranceCatalog(activeCatalogTab, activeCatalogSort);
    }
  });
}

function initSearchHandler() {
  const root = document.getElementById('fragrance-app');
  root.addEventListener('click', (e) => {
    if (e.target.closest('#search-open-btn')) {
      e.preventDefault();
      const modal = document.getElementById('search-modal-overlay');
      if (modal) {
        modal.classList.add('is-open');
        document.getElementById('search-input')?.focus();
      }
    }
    if (e.target.closest('#search-modal-close') || e.target.id === 'search-modal-overlay') {
      document.getElementById('search-modal-overlay')?.classList.remove('is-open');
    }
  });
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

document.addEventListener('DOMContentLoaded', initFragranceApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initFragranceApp();
}
