import './styles/index.css';
import './styles/not-found.css';
import { store } from './state.js';
import { PRODUCTS } from './data/products.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';
import { renderPDPModal } from './components/PDPModal.js';
import { renderProductCard } from './components/ProductCard.js';

// Select 4 iconic hero products for the 404 recovery showcase
const HERO_IDS = ['the-righteous-butter', 'clean-on-me', 'flake-away', 'sexy-mother-pucker'];
const HERO_PRODUCTS = HERO_IDS.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);

function initNotFoundApp() {
  const root = document.getElementById('notfound-app');
  if (!root) return;

  root.innerHTML = `
    <!-- Cheeky Announcement Bar -->
    <div class="announcement-bar" role="region" aria-label="404 Notification">
      <div class="container announcement-bar__content">
        <span class="announcement-bar__badge">OH BUBBLES!</span>
        <p class="announcement-bar__text">
          You've Hit A Sud-Den Dead End, Darling! Don't Panic—Beauty Rescues Are Right Below. 🛁✨
        </p>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss announcement">✕</button>
      </div>
    </div>

    <!-- Site Header -->
    <div id="notfound-header-mount"></div>

    <main id="main-content">
      <!-- 404 Hero Section -->
      <section class="not-found-hero" aria-label="Error 404 Page Not Found">
        <!-- Floating Soap Bubbles -->
        <div class="bubble-float bubble-1" aria-hidden="true"></div>
        <div class="bubble-float bubble-2" aria-hidden="true"></div>
        <div class="bubble-float bubble-3" aria-hidden="true"></div>
        <div class="bubble-float bubble-4" aria-hidden="true"></div>

        <div class="container not-found-hero__container">
          <!-- Retro Eyebrow -->
          <div class="hero-eyebrow" style="margin-bottom: 20px;">
            <span>🧼</span>
            <span>LOST &amp; FOAM-FOUND • OFFICIAL DISPATCH</span>
          </div>

          <!-- Giant Retro 404 Number -->
          <div class="not-found-number-wrap">
            <h1 class="not-found-number">404</h1>
            <div class="not-found-stamp">WASHED DOWN THE DRAIN!</div>
          </div>

          <!-- Headline with Cheeky British Humor -->
          <h2 class="not-found-title">
            OH FOAM-FORTUNATELY...
            <span class="highlight-pink">CLEAN OUT OF LUCK!</span>
          </h2>

          <p class="not-found-lead">
            Looks like you've lathered into uncharted territory, gorgeous! We've scrubbed every bathroom shelf, vanity drawer, and boutique shelf, but the page you requested has vanished into thin air (or perhaps dissolved in a steamy tub with our <strong>Clean On Me™</strong> body wash).
          </p>

          <!-- On-Page Recovery Search Bar -->
          <div class="not-found-search-bar">
            <form class="not-found-search-form" id="not-found-quick-search" role="search" aria-label="Search Soap and Glory catalog">
              <input 
                type="search" 
                class="not-found-search-input" 
                id="not-found-input"
                placeholder="Search scrubs, body butters, lip glosses..." 
                aria-label="Search query"
                autocomplete="off"
              >
              <button type="submit" class="not-found-search-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span>Find Suds</span>
              </button>
            </form>
          </div>

          <!-- Primary Navigation Recovery Actions -->
          <div class="not-found-actions">
            <a href="/" class="btn btn--primary">
              ✨ Take Me Home, Gorgeous
            </a>
            <button class="btn btn--secondary" id="not-found-search-trigger" type="button">
              🔍 Open Full Search
            </button>
            <a href="/bath-body" class="btn btn--outline">
              🛁 Browse Bath &amp; Body
            </a>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--sg-gray-600); margin-top: 14px;">
            Need urgent beauty assistance? <a href="/contact" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Contact Customer Care</a>
          </div>
        </div>
      </section>

      <!-- Category Quick Launch Grid: Don't Go Empty-Handed -->
      <section class="not-found-categories" aria-label="Explore Soap & Glory Categories">
        <div class="container">
          <div class="not-found-sec-header">
            <div class="hero-eyebrow" style="margin-bottom: 12px; justify-content: center;">
              <span>🎁</span>
              <span>DON'T LEAVE EMPTY-HANDED</span>
            </div>
            <h2 class="section-title" style="font-size: var(--text-2xl); margin-bottom: 10px;">
              Where Would You Like To Head Next?
            </h2>
            <p class="section-subtitle">
              Pick your pamper passion and discover award-winning British formulas that deliver real, glowing results.
            </p>
          </div>

          <div class="not-found-cat-grid">
            <!-- Bath & Body -->
            <a href="/bath-body" class="not-found-cat-card">
              <span class="not-found-cat-icon">🛁</span>
              <h3 class="not-found-cat-title">Bath &amp; Body</h3>
              <p class="not-found-cat-desc">
                Clean On Me, The Righteous Butter &amp; invigorating body polishes for 72hr hydration.
              </p>
              <span class="not-found-cat-arrow">Explore Tub Time &rarr;</span>
            </a>

            <!-- Skincare -->
            <a href="/skincare" class="not-found-cat-card">
              <span class="not-found-cat-icon">✨</span>
              <h3 class="not-found-cat-title">Skincare</h3>
              <p class="not-found-cat-desc">
                Face Soap &amp; Clarity cleansers, In The Glow toners &amp; vitamin C pore-purifiers.
              </p>
              <span class="not-found-cat-arrow">Get Glowing &rarr;</span>
            </a>

            <!-- Cosmetics -->
            <a href="/makeup" class="not-found-cat-card">
              <span class="not-found-cat-icon">💋</span>
              <h3 class="not-found-cat-title">Makeup &amp; Lips</h3>
              <p class="not-found-cat-desc">
                World-famous Sexy Mother Pucker lip glosses, Archery brow tools &amp; Thick &amp; Fast mascara.
              </p>
              <span class="not-found-cat-arrow">Pucker Up &rarr;</span>
            </a>

            <!-- Fragrance -->
            <a href="/fragrance" class="not-found-cat-card">
              <span class="not-found-cat-icon">🌸</span>
              <h3 class="not-found-cat-title">Fragrance Spritz</h3>
              <p class="not-found-cat-desc">
                Original Pink rose &amp; bergamot mists, Call of Fruity &amp; irresistible Smoothie Star.
              </p>
              <span class="not-found-cat-arrow">Spritz Blitz &rarr;</span>
            </a>

            <!-- Gifting -->
            <a href="/gifting" class="not-found-cat-card">
              <span class="not-found-cat-icon">🎁</span>
              <h3 class="not-found-cat-title">Gift Sets</h3>
              <p class="not-found-cat-desc">
                Iconic pamper tins, festive gift sets &amp; travel-ready beauty bundles ready to unwrap.
              </p>
              <span class="not-found-cat-arrow">Shop Gifts &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Bestsellers Recovery Showcase -->
      <section class="not-found-showcase" aria-label="Soap & Glory Bestsellers">
        <div class="container">
          <div class="not-found-sec-header">
            <div class="hero-eyebrow" style="margin-bottom: 12px; justify-content: center;">
              <span>⭐</span>
              <span>WHILE YOU'RE HERE</span>
            </div>
            <h2 class="section-title" style="font-size: var(--text-2xl); margin-bottom: 10px;">
              Award-Winning Bestsellers Loved By Millions
            </h2>
            <p class="section-subtitle">
              Can't decide where to go? Start with our most decorated, five-star British beauty icons.
            </p>
          </div>

          <div class="not-found-product-grid">
            ${HERO_PRODUCTS.map(product => renderProductCard(product)).join('')}
          </div>

          <!-- Cheeky Quote Box -->
          <div class="not-found-quote-box">
            <p class="not-found-quote-text">
              &ldquo;You can't buy happiness, darling, but you can buy Soap &amp; Glory and that's basically the same thing.&rdquo;
            </p>
            <p class="not-found-quote-author">
              &mdash; A VERY CLEAN GENIUS &bull; EST. 2006
            </p>
          </div>
        </div>
      </section>
    </main>

    <!-- Site Footer -->
    <div id="notfound-footer-mount"></div>

    <!-- Modals & Overlays -->
    <div id="cart-drawer-mount"></div>
    <div id="search-modal-mount"></div>
    <div id="pdp-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderSubComponents();
  bindNotFoundEvents();
}

function renderSubComponents() {
  const headerMount = document.getElementById('notfound-header-mount');
  const footerMount = document.getElementById('notfound-footer-mount');
  const cartMount = document.getElementById('cart-drawer-mount');
  const searchMount = document.getElementById('search-modal-mount');
  const pdpMount = document.getElementById('pdp-modal-mount');

  if (headerMount) headerMount.innerHTML = renderHeader('404');
  if (footerMount) footerMount.innerHTML = renderFooter();
  if (cartMount) cartMount.innerHTML = renderCartDrawer();
  if (searchMount) searchMount.innerHTML = renderSearchModal();
  if (pdpMount) pdpMount.innerHTML = renderPDPModal();
}

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  setTimeout(() => toast.classList.remove('is-visible'), 3200);
}

function bindNotFoundEvents() {
  document.addEventListener('click', (e) => {
    // Mobile Drawer
    if (e.target.closest('#mobile-menu-open')) {
      document.getElementById('mobile-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#mobile-menu-close')) {
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
    }

    // Announcement Close
    if (e.target.closest('#announcement-close')) {
      const banner = e.target.closest('.announcement-bar');
      if (banner) banner.style.display = 'none';
    }

    // Cart Drawer
    if (e.target.closest('#cart-drawer-open')) {
      document.getElementById('cart-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#cart-drawer-close') || e.target.classList.contains('cart-drawer-backdrop')) {
      document.getElementById('cart-drawer')?.classList.remove('is-open');
    }

    // Search Modal Triggers
    if (e.target.closest('#search-open-btn') || e.target.closest('#not-found-search-trigger')) {
      const searchModal = document.getElementById('search-modal');
      searchModal?.classList.add('is-open');
      document.getElementById('search-input')?.focus();
    }
    if (e.target.closest('#search-modal-close') || e.target.classList.contains('search-modal')) {
      document.getElementById('search-modal')?.classList.remove('is-open');
    }

    // Quick View / PDP Modal
    const quickViewBtn = e.target.closest('.quick-view-btn, .quick-view-link');
    if (quickViewBtn) {
      e.preventDefault();
      const productId = quickViewBtn.getAttribute('data-product-id');
      if (productId) {
        const pdpMount = document.getElementById('pdp-modal-mount');
        if (pdpMount) {
          pdpMount.innerHTML = renderPDPModal(productId);
          const pdpModal = document.getElementById('pdp-modal-overlay');
          pdpModal?.classList.add('is-open');
        }
      }
    }

    if (e.target.closest('#pdp-modal-close') || e.target.classList.contains('pdp-modal-overlay')) {
      document.getElementById('pdp-modal-overlay')?.classList.remove('is-open');
    }

    // Add to Cart
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      const pid = addBtn.getAttribute('data-add-to-cart');
      const product = PRODUCTS.find(p => p.id === pid);
      if (product) {
        store.addToCart(product, 1);
        showToast(`Added ${product.name} to your pamper bag! 🛍️`);
        const cartMount = document.getElementById('cart-drawer-mount');
        if (cartMount) cartMount.innerHTML = renderCartDrawer();
      }
    }

    // Wishlist Toggle
    const wishBtn = e.target.closest('[data-wishlist-id]');
    if (wishBtn) {
      const wid = wishBtn.getAttribute('data-wishlist-id');
      const isSaved = store.wishlist.includes(wid);
      if (isSaved) {
        store.wishlist = store.wishlist.filter(id => id !== wid);
        showToast('Removed from your beauty wishlist.');
      } else {
        store.wishlist.push(wid);
        showToast('Saved to your beauty wishlist! ❤️');
      }
      localStorage.setItem('sg_wishlist', JSON.stringify(store.wishlist));
    }
  });

  // On-page Quick Search Form submission
  const quickSearchForm = document.getElementById('not-found-quick-search');
  if (quickSearchForm) {
    quickSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('not-found-input');
      const query = input?.value.trim();
      
      const searchModal = document.getElementById('search-modal');
      const modalInput = document.getElementById('search-input');
      if (searchModal && modalInput) {
        searchModal.classList.add('is-open');
        if (query) {
          modalInput.value = query;
          modalInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
        modalInput.focus();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initNotFoundApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initNotFoundApp();
}
