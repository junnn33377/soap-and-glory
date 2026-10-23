import './styles/index.css';
import { store } from './state.js';
import { PRODUCTS } from './data/products.js';
import { COLLECTIONS } from './data/collections.js';

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderMarquee } from './components/Marquee.js';
import { renderCategories } from './components/Categories.js';
import { renderCollectionsShowcase } from './components/CollectionsShowcase.js';
import { renderCatalog } from './components/Catalog.js';
import { renderRoutineBuilder } from './components/RoutineBuilder.js';
import { renderGiftingSection } from './components/GiftingSection.js';
import { renderBrandStory } from './components/BrandStory.js';
import { renderReviews } from './components/Reviews.js';
import { renderPressSection } from './components/PressSection.js';
import { renderRetailers } from './components/Retailers.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderSearchModal } from './components/SearchModal.js';
import { renderSkincareStudio } from './components/SkincareStudio.js';

// App Initialization
function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Route guard: if index.html is served for an unknown path, redirect to 404
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
  const homePaths = new Set(['/', '/index.html']);
  if (!homePaths.has(currentPath)) {
    window.location.replace('/404');
    return;
  }

  // Build Root Layout
  app.innerHTML = `
    <div id="header-mount"></div>
    <main id="main-content">
      <div id="hero-mount"></div>
      <div id="marquee-mount"></div>
      <div id="categories-mount"></div>
      <div id="collections-mount"></div>
      <div id="cleansing-bar-mount"></div>
      <div id="catalog-mount"></div>
      <div id="routine-mount"></div>
      <div id="gifting-mount"></div>
      <div id="story-mount"></div>
      <div id="reviews-mount"></div>
      <div id="press-mount"></div>
      <div id="retailers-mount"></div>
    </main>
    <div id="footer-mount"></div>
    
    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  // Mount components
  renderAllSections();
  bindGlobalEvents();

  // Subscribe to state changes
  store.subscribe((event) => {
    handleStateChange(event);
  });
}

function renderAllSections() {
  document.getElementById('header-mount').innerHTML = renderHeader('home');
  document.getElementById('hero-mount').innerHTML = renderHero();
  document.getElementById('marquee-mount').innerHTML = renderMarquee();
  document.getElementById('categories-mount').innerHTML = renderCategories();
  document.getElementById('collections-mount').innerHTML = renderCollectionsShowcase();
  document.getElementById('cleansing-bar-mount').innerHTML = renderSkincareStudio();
  document.getElementById('catalog-mount').innerHTML = renderCatalog();
  document.getElementById('routine-mount').innerHTML = renderRoutineBuilder();
  document.getElementById('gifting-mount').innerHTML = renderGiftingSection();
  document.getElementById('story-mount').innerHTML = renderBrandStory();
  document.getElementById('reviews-mount').innerHTML = renderReviews();
  document.getElementById('press-mount').innerHTML = renderPressSection();
  document.getElementById('retailers-mount').innerHTML = renderRetailers();
  document.getElementById('footer-mount').innerHTML = renderFooter();

  // Mount Modals
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('pdp-modal-mount').innerHTML = renderPDPModal('righteous-butter-300ml');
  document.getElementById('search-modal-mount').innerHTML = renderSearchModal();

  initRoutineFinderState();
  initSearchState();
  initPressCarousel();
}

function handleStateChange(event) {
  if (event.type === 'cart_updated') {
    // Re-render cart drawer & badge
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
  } else if (event.type === 'theme_changed') {
    // Re-render hero & collections showcase
    document.getElementById('hero-mount').innerHTML = renderHero();
    document.getElementById('collections-mount').innerHTML = renderCollectionsShowcase();
  } else if (event.type === 'filter_changed' || event.type === 'sort_changed') {
    document.getElementById('catalog-mount').innerHTML = renderCatalog();
  } else if (event.type === 'wishlist_updated') {
    document.getElementById('catalog-mount').innerHTML = renderCatalog();
  }
}

// Global Event Listeners Delegation
function bindGlobalEvents() {
  const app = document.getElementById('app');

  // Sticky header class
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      header.classList.toggle('is-scrolled', window.scrollY > 20);
    }
  }, { passive: true });

  // Delegated Click Handling
  app.addEventListener('click', (e) => {
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
      openCartDrawer();
      return;
    }

    // Cart Drawer Close
    if (target.closest('#cart-drawer-close') || target.id === 'cart-drawer-overlay') {
      closeCartDrawer();
      return;
    }

    // Continue Shopping button in empty cart
    if (target.closest('#cart-continue-shopping')) {
      closeCartDrawer();
      return;
    }

    // Mobile Menu Open / Close
    if (target.closest('#mobile-menu-open')) {
      document.getElementById('mobile-drawer')?.classList.add('is-open');
      return;
    }
    if (target.closest('#mobile-menu-close') || target.id === 'mobile-drawer') {
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
      return;
    }
    if (target.closest('.mobile-nav-link')) {
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
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

    // Add to Bag Button
    const addBtn = target.closest('.add-to-bag-btn');
    if (addBtn) {
      e.preventDefault();
      const pId = addBtn.getAttribute('data-product-id');
      store.addToCart(pId, null, 1);
      // animate button
      addBtn.style.transform = 'scale(1.15)';
      setTimeout(() => { addBtn.style.transform = ''; }, 200);
      return;
    }

    // Cart Quantity Plus / Minus
    const qtyPlus = target.closest('.cart-qty-plus');
    if (qtyPlus) {
      const id = qtyPlus.getAttribute('data-id');
      const size = qtyPlus.getAttribute('data-size');
      store.updateQuantity(id, size, 1);
      return;
    }
    const qtyMinus = target.closest('.cart-qty-minus');
    if (qtyMinus) {
      const id = qtyMinus.getAttribute('data-id');
      const size = qtyMinus.getAttribute('data-size');
      store.updateQuantity(id, size, -1);
      return;
    }
    const deleteBtn = target.closest('.cart-item-delete');
    if (deleteBtn) {
      const id = deleteBtn.getAttribute('data-id');
      const size = deleteBtn.getAttribute('data-size');
      store.removeFromCart(id, size);
      return;
    }

    // Demo Checkout Simulation
    if (target.closest('#demo-checkout-btn')) {
      const totals = store.getCartTotals();
      alert(`🎉 DEMO CHECKOUT SIMULATION:\n\nThank you for shopping Soap & Glory!\nSubtotal: £${totals.subtotal.toFixed(2)}\nItems: ${totals.count}\n\nIn live production, orders route directly to Boots UK or authorized stockists for points collection.`);
      return;
    }

    // Quick View Trigger (PDP Modal)
    const quickViewBtn = target.closest('.quick-view-btn') || target.closest('.quick-view-link');
    if (quickViewBtn) {
      e.preventDefault();
      const pId = quickViewBtn.getAttribute('data-product-id');
      openPDPModal(pId);
      return;
    }

    // Close PDP Modal
    if (target.closest('#pdp-modal-close') || target.id === 'pdp-modal-overlay') {
      closePDPModal();
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
      closePDPModal();
      openCartDrawer();
      return;
    }


    // Wishlist Toggle
    const wishBtn = target.closest('.wishlist-btn');
    if (wishBtn) {
      e.preventDefault();
      const pId = wishBtn.getAttribute('data-wishlist-id');
      store.toggleWishlist(pId);
      const isSaved = store.wishlist.includes(pId);
      showToast(isSaved ? '❤️ Added to your Favourites!' : 'Removed from Favourites');
      return;
    }

    // Fragrance Theme Picker
    const themeBtn = target.closest('[data-theme-pick]');
    if (themeBtn) {
      const themeId = themeBtn.getAttribute('data-theme-pick');
      store.setTheme(themeId);
      return;
    }

    // Cleanser Filter Pills
    const cleanserPill = target.closest('[data-cleanser-type]');
    if (cleanserPill) {
      const type = cleanserPill.getAttribute('data-cleanser-type');
      document.querySelectorAll('.cleanser-filter-pill').forEach(btn => {
        const active = btn === cleanserPill;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active);
      });
      const cards = document.querySelectorAll('.cleanser-card');
      let visible = 0;
      cards.forEach(card => {
        const cardType = card.getAttribute('data-cleanser-type');
        const show = type === 'all' || cardType === type;
        card.style.display = show ? 'flex' : 'none';
        if (show) visible++;
      });
      const countEl = document.getElementById('cleanser-active-count');
      const labelEl = document.getElementById('cleanser-count-label');
      if (countEl) countEl.textContent = visible;
      if (labelEl) labelEl.textContent = visible === 1 ? 'Cleanser Available' : 'Cleansers Available';
      return;
    }

    // Catalog Filter Buttons
    const catBtn = target.closest('[data-category-filter]') || target.closest('[data-category]');
    if (catBtn) {
      const cat = catBtn.getAttribute('data-category-filter') || catBtn.getAttribute('data-category');
      store.setCatalogFilter(cat);
      // Smooth scroll to catalog
      const catSec = document.getElementById('catalog');
      if (catSec) catSec.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Collection Links in Mega-menu or Footer
    const colLink = target.closest('[data-collection]');
    if (colLink) {
      const colId = colLink.getAttribute('data-collection');
      store.setTheme(colId);
      return;
    }
  });

  // Sort dropdown change
  app.addEventListener('change', (e) => {
    if (e.target.id === 'sort-select') {
      store.setCatalogSort(e.target.value);
    }
  });

  // Newsletter Form Submit
  app.addEventListener('submit', (e) => {
    if (e.target.id === 'newsletter-form') {
      e.preventDefault();
      const email = document.getElementById('newsletter-email')?.value;
      if (email) {
        document.getElementById('newsletter-form').style.display = 'none';
        const msg = document.getElementById('newsletter-success');
        if (msg) msg.style.display = 'block';
        showToast('💌 Welcome to The Soaper Club! Check your inbox soon.');
      }
    }
  });

  // Keyboard accessibility: ESC key closes modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closePDPModal();
      closeSearchModal();
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
    }
  });
}

// Cart Drawer Handlers
function openCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const overlay = document.getElementById('cart-drawer-overlay');
  if (overlay) {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// PDP Modal Handlers
function openPDPModal(productId) {
  const mount = document.getElementById('pdp-modal-mount');
  if (mount) {
    mount.innerHTML = renderPDPModal(productId);
    const modal = document.getElementById('pdp-modal-overlay');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }
}

function closePDPModal() {
  const modal = document.getElementById('pdp-modal-overlay');
  if (modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
}

// Search Modal Handlers
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

function initSearchState() {
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
    ? PRODUCTS.slice(0, 4) // Show 4 popular defaults
    : PRODUCTS.filter(p => {
        return (
          p.name.toLowerCase().includes(query) ||
          p.subtitle.toLowerCase().includes(query) ||
          p.collection.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
        );
      });

  if (matches.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 32px 16px; color: var(--sg-gray-600);">
        <p style="font-weight: 700; margin-bottom: 4px;">No products found matching "${query}"</p>
        <p style="font-size: 0.8rem;">Try searching for "butter", "scrub", "clean", or "vanilla"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = matches.map(p => `
    <div class="search-result-item quick-view-btn" data-product-id="${p.id}" tabindex="0">
      <img src="${p.image}" alt="${p.name}">
      <div class="search-result-info">
        <div class="search-result-title">${p.name}</div>
        <div class="search-result-meta">${p.collection} · ${p.size}</div>
      </div>
      <div class="search-result-price">£${p.price.toFixed(2)} <span style="font-size: 0.82em; color: var(--sg-gray-600);">($${(p.price * 1.3).toFixed(2)})</span></div>
    </div>
  `).join('');
}

// Routine Finder State Management
function initRoutineFinderState() {
  let goal = 'moisture';
  let scent = 'original-pink';

  const step1 = document.getElementById('routine-step-1');
  const step2 = document.getElementById('routine-step-2');
  const step3 = document.getElementById('routine-step-3');

  const pill1 = document.getElementById('step-pill-1');
  const pill2 = document.getElementById('step-pill-2');
  const pill3 = document.getElementById('step-pill-3');

  // Option selections in step 1
  document.querySelectorAll('[data-routine-goal]').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('[data-routine-goal]').forEach(c => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
      goal = card.getAttribute('data-routine-goal');
    });
  });

  // Next to step 2
  document.getElementById('routine-next-1')?.addEventListener('click', () => {
    step1.style.display = 'none';
    step2.style.display = 'block';
    pill1.classList.remove('is-active');
    pill2.classList.add('is-active');
  });

  // Prev to step 1
  document.getElementById('routine-prev-2')?.addEventListener('click', () => {
    step2.style.display = 'none';
    step1.style.display = 'block';
    pill2.classList.remove('is-active');
    pill1.classList.add('is-active');
  });

  // Option selections in step 2
  document.querySelectorAll('[data-routine-scent]').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('[data-routine-scent]').forEach(c => c.classList.remove('is-selected'));
      card.classList.add('is-selected');
      scent = card.getAttribute('data-routine-scent');
    });
  });

  // Next to step 3
  document.getElementById('routine-next-2')?.addEventListener('click', () => {
    step2.style.display = 'none';
    step3.style.display = 'block';
    pill2.classList.remove('is-active');
    pill3.classList.add('is-active');

    // Build the 3 recommendations
    const tray = document.getElementById('routine-bundle-tray');
    if (!tray) return;

    let wash = PRODUCTS.find(p => p.id === 'clean-on-me-500ml');
    let scrub = PRODUCTS.find(p => p.id === 'scrub-of-your-life-200ml');
    let butter = PRODUCTS.find(p => p.id === 'righteous-butter-300ml');

    if (scent === 'smoothie-star') {
      scrub = PRODUCTS.find(p => p.id === 'smoothie-star-scrub-300ml') || scrub;
      butter = PRODUCTS.find(p => p.id === 'smoothie-star-lotion-500ml') || butter;
    } else if (scent === 'call-of-fruity') {
      scrub = PRODUCTS.find(p => p.id === 'call-of-fruity-scrub-300ml') || scrub;
      butter = PRODUCTS.find(p => p.id === 'call-of-fruity-lotion-500ml') || butter;
    } else if (scent === 'magnificoco') {
      wash = PRODUCTS.find(p => p.id === 'magnificoco-wash-500ml') || wash;
      butter = PRODUCTS.find(p => p.id === 'magnificoco-lotion-500ml') || butter;
    }

    const routineItems = [
      { step: 'STEP 1: WASH', prod: wash },
      { step: 'STEP 2: BUFF', prod: scrub },
      { step: 'STEP 3: BUTTER', prod: butter }
    ];

    tray.innerHTML = routineItems.map(item => `
      <div class="routine-product-card">
        <img src="${item.prod.image}" alt="${item.prod.name}">
        <div style="flex: 1;">
          <div style="font-family: var(--font-mono); font-size: 0.68rem; font-weight: 800; color: var(--sg-pink);">${item.step}</div>
          <div style="font-size: var(--text-xs); font-weight: 800; line-height: 1.2;">${item.prod.name}</div>
          <div style="font-size: var(--text-xs); font-weight: 800; color: var(--sg-gray-600); margin-top: 2px;">£${item.prod.price.toFixed(2)} ($${(item.prod.price * 1.3).toFixed(2)})</div>
          <a href="${item.prod.amazonUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-block; margin-top: 6px; font-size: 0.68rem; font-weight: 800; color: var(--sg-pink); text-decoration: underline;">
            Buy on Amazon ↗
          </a>
        </div>
      </div>
    `).join('');

    // Buy Routine on Amazon button
    const routineBtn = document.getElementById('routine-add-all-btn');
    if (routineBtn) {
      routineBtn.onclick = () => {
        const primaryProduct = routineItems[2]?.prod || routineItems[0]?.prod;
        const targetUrl = primaryProduct?.amazonUrl || 'https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20';
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
      };
    }
  });

  // Reset Routine
  document.getElementById('routine-reset-btn')?.addEventListener('click', () => {
    step3.style.display = 'none';
    step1.style.display = 'block';
    pill3.classList.remove('is-active');
    pill1.classList.add('is-active');
  });
}

// Press Reviews Carousel Slider
function initPressCarousel() {
  const track = document.getElementById('press-track');
  const prevBtn = document.getElementById('press-nav-prev');
  const nextBtn = document.getElementById('press-nav-next');
  const dotsContainer = document.getElementById('press-carousel-dots');
  if (!track || !prevBtn || !nextBtn) return;

  const getScrollStep = () => {
    const card = track.querySelector('.press-card');
    if (!card) return 360;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '24') || 24;
    return card.offsetWidth + gap;
  };

  prevBtn.onclick = () => {
    track.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
  };

  nextBtn.onclick = () => {
    track.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
  };

  // Dots indicator update
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('.press-dot');
    track.addEventListener('scroll', () => {
      const step = getScrollStep();
      const activeIdx = Math.min(
        dots.length - 1,
        Math.max(0, Math.round(track.scrollLeft / step))
      );
      dots.forEach((dot, i) => {
        dot.classList.toggle('is-active', i === activeIdx);
      });
    }, { passive: true });

    dots.forEach((dot, i) => {
      dot.onclick = () => {
        const step = getScrollStep();
        track.scrollTo({ left: i * step, behavior: 'smooth' });
      };
    });
  }
}

// Toast Feedback Notification
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('is-active');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('is-active');
  }, 3500);
}

// Run when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
