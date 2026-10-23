import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';

function initDisclaimerApp() {
  const root = document.getElementById('disclaimer-app');
  if (!root) return;

  root.innerHTML = `
    <div id="disclaimer-header-mount"></div>

    <main id="main-content">
      <!-- Hero -->
      <section class="makeup-hero" id="disclaimer-hero" aria-label="Soap & Glory Disclaimers">
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <div class="hero-eyebrow" style="margin-bottom: 14px; display: inline-flex;">
              <span>⚖️</span>
              <span>HONESTY &amp; FULL TRANSPARENCY</span>
            </div>

            <!-- Perfectly Aligned Brand Link & Title -->
            <h1 class="makeup-hero__title" style="margin-bottom: 12px;">
              <a href="/" class="brand-title-link" title="Return to Soap & Glory Homepage">SOAP &amp; GLORY</a>
              <span class="info-hero__subtitle">OFFICIAL DISCLAIMERS</span>
            </h1>

            <div class="makeup-hero__tagline">
              CLEAR FACTS. ZERO GUESSWORK. <span class="highlight-pink">100% TRANSPARENT.</span>
            </div>

            <p style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.65; margin: 0 auto 20px auto; max-width: 650px;">
              Last Updated: October 2026. In accordance with Federal Trade Commission (FTC) guidelines and UK Advertising Standards Authority (ASA) regulations, here is our full disclosure regarding affiliate relationships, pricing, and cosmetic formulations at <a href="/" class="brand-link" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a>.
            </p>
          </div>
        </div>
      </section>

      <!-- Content -->
      <section class="section section--white">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto;">
            
            <div style="display: flex; flex-direction: column; gap: 30px;">

              <!-- Amazon Associates Primary Callout Card -->
              <div class="info-card-panel" style="background: #FFF9FA; border-width: 2.5px;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.6rem;">🛒</span>
                  <h2 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-pink-dark);">
                    1. Amazon Associates Program Disclosure
                  </h2>
                </div>
                <p style="font-size: 0.95rem; line-height: 1.7; color: var(--sg-gray-800); margin-bottom: 10px;">
                  <strong>Soap &amp; Glory Official Showcase participates in the Amazon Services LLC Associates Program and Amazon EU Associates Programme.</strong>
                </p>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-700); margin: 0;">
                  "As an Amazon Associate, we earn from qualifying purchases." When you click product links directing to Amazon.com or Amazon.co.uk (bearing associate tag <code>soapnglory-20</code>) and complete a transaction, we may receive a small affiliate commission at <strong>absolutely zero extra cost to you</strong>. This supports our ongoing curation of product guides, fragrance comparisons, and ingredient breakdowns.
                </p>
              </div>

              <!-- Retailer & Stockist Clarification -->
              <div class="info-card-panel">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.6rem;">🏬</span>
                  <h2 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    2. Authorized Retailers &amp; Fulfillment
                  </h2>
                </div>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-700); margin-bottom: 12px;">
                  This website provides curated editorial spotlights, fragrance pyramid analyses, and verified stock locators for <a href="/" style="color: var(--sg-pink); font-weight: 700;">Soap &amp; Glory</a> products. We do not directly handle card processing or warehouse logistics.
                </p>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-700); margin: 0;">
                  Orders placed through our partner buttons are fulfilled directly by authorized retail distributors: <strong>Boots UK</strong>, <strong>Amazon</strong>, <strong>Target</strong>, and <strong>Ulta Beauty</strong>. Order confirmation, shipping tracking, and returns are managed according to the respective retailer's customer care terms.
                </p>
              </div>

              <!-- Lip Plumper & Cosmetic Sensations Notice -->
              <div class="info-card-panel" style="background: #FFF0F5; border-color: var(--sg-pink);">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.6rem;">💋</span>
                  <h2 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-pink-dark);">
                    3. Cosmetic Sensations: Sexy Mother Pucker™ &amp; Active Ingredients
                  </h2>
                </div>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-800); margin-bottom: 10px;">
                  Certain products in our <a href="/makeup" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Makeup Range</a>, most notably <strong>Sexy Mother Pucker™ Lip Gloss</strong>, utilize proprietary <strong>Lipswell™</strong> plumping technology.
                </p>
                <div style="background: var(--sg-white); border-left: 3px solid var(--sg-pink); padding: 12px 16px; border-radius: 4px; font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin-bottom: 12px;">
                  <strong>What To Expect:</strong> Upon application, you may experience a distinct, buzzing tingle on your lips that lasts between 10 to 20 minutes. This is completely normal and indicates the botanical micro-circulation actives are working to volumize lip texture.
                </div>
                <p style="font-size: 0.88rem; line-height: 1.55; color: var(--sg-gray-600); margin: 0;">
                  If excessive redness or discomfort occurs, gently wipe away with a damp cloth and discontinue use. As with all active cosmetics, we recommend patch-testing on your inner arm 24 hours prior to first full application.
                </p>
              </div>

              <!-- Price & Inventory Volatility Notice -->
              <div class="info-card-panel">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.6rem;">💷</span>
                  <h2 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    4. Dual Currency &amp; Pricing Volatility
                  </h2>
                </div>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-700); margin: 0;">
                  We display recommended retail pricing in both British Pounds (£ GBP) and US Dollars ($ USD). While prices are regularly audited against live stockist feeds, retailers reserve the right to alter pricing, apply limited-time discounts, or change shipping fees without prior notice. The price displayed in your destination retailer's checkout is final.
                </p>
              </div>

              <!-- Health & Dermatological Advice -->
              <div class="info-card-panel">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.6rem;">🩺</span>
                  <h2 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    5. Not Medical Or Dermatological Advice
                  </h2>
                </div>
                <p style="font-size: 0.92rem; line-height: 1.65; color: var(--sg-gray-700); margin: 0;">
                  All product descriptions, double-cleansing routines on our <a href="/skincare" style="color: var(--sg-pink); font-weight: 700;">Skincare Page</a>, and ingredient spotlights are for educational and consumer enjoyment purposes only. They do not constitute personalized medical or dermatological counsel. If you suffer from chronic skin conditions (eczema, psoriasis, severe cystic acne), please consult a licensed medical professional.
                </p>
              </div>

              <!-- Questions & Contact -->
              <div style="text-align: center; padding: 20px 0;">
                <p style="font-size: 0.95rem; color: var(--sg-gray-700); margin-bottom: 14px;">
                  Need clarification on our editorial policies or ingredient testing?
                </p>
                <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                  <a href="/contact" class="btn btn--primary btn--md" style="text-decoration: none;">Contact Our Team →</a>
                  <a href="/terms" class="btn btn--outline btn--md" style="text-decoration: none;">View Terms &amp; Conditions</a>
                  <a href="/" class="btn btn--outline btn--md" style="text-decoration: none;">Soap &amp; Glory Home ↗</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>

    <div id="disclaimer-footer-mount"></div>

    <!-- Modals -->
    <div id="cart-drawer-mount"></div>
    <div id="search-modal-mount"></div>
  `;

  renderAllSections();
  bindEvents();
}

function renderAllSections() {
  document.getElementById('disclaimer-header-mount').innerHTML = renderHeader('disclaimer');
  document.getElementById('disclaimer-footer-mount').innerHTML = renderFooter();
  document.getElementById('cart-drawer-mount').innerHTML = renderCartDrawer();
  document.getElementById('search-modal-mount').innerHTML = renderSearchModal();
}

function bindEvents() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('#mobile-menu-open')) {
      document.getElementById('mobile-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#mobile-menu-close')) {
      document.getElementById('mobile-drawer')?.classList.remove('is-open');
    }
    if (e.target.closest('#cart-drawer-open')) {
      document.getElementById('cart-drawer')?.classList.add('is-open');
    }
    if (e.target.closest('#cart-drawer-close') || e.target.classList.contains('cart-drawer-backdrop')) {
      document.getElementById('cart-drawer')?.classList.remove('is-open');
    }
    if (e.target.closest('#search-open-btn')) {
      document.getElementById('search-modal')?.classList.add('is-open');
      document.getElementById('search-input')?.focus();
    }
    if (e.target.closest('#search-modal-close') || e.target.classList.contains('search-modal')) {
      document.getElementById('search-modal')?.classList.remove('is-open');
    }
  });
}

document.addEventListener('DOMContentLoaded', initDisclaimerApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initDisclaimerApp();
}
