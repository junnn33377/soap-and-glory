import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';

function initTermsApp() {
  const root = document.getElementById('terms-app');
  if (!root) return;

  root.innerHTML = `
    <div id="terms-header-mount"></div>

    <main id="main-content">
      <!-- Hero -->
      <section class="makeup-hero" id="terms-hero" aria-label="Soap & Glory Terms & Conditions">
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <div class="hero-eyebrow" style="margin-bottom: 14px; display: inline-flex;">
              <span>📜</span>
              <span>OFFICIAL USER AGREEMENT</span>
            </div>

            <!-- Perfectly Aligned Brand Link & Title -->
            <h1 class="makeup-hero__title" style="margin-bottom: 12px;">
              <a href="/" class="brand-title-link" title="Return to Soap & Glory Homepage">SOAP &amp; GLORY</a>
              <span class="info-hero__subtitle">TERMS &amp; CONDITIONS</span>
            </h1>

            <div class="makeup-hero__tagline">
              HONEST BEAUTY, FAIR PLAY. <span class="highlight-pink">EVERYTHING YOU NEED TO KNOW.</span>
            </div>

            <p style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.65; margin: 0 auto 20px auto; max-width: 650px;">
              Effective Date: October 2026. Please read these terms carefully before accessing or using this website. By browsing our product showcases and using our interactive routine finders, you agree to these terms governed by <a href="/" class="brand-link" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a>.
            </p>
          </div>
        </div>
      </section>

      <!-- Terms Content -->
      <section class="section section--white">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto;">
            
            <div style="display: flex; flex-direction: column; gap: 32px; font-size: 0.95rem; line-height: 1.7; color: var(--sg-gray-800);">
              
              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  1. Acceptance of Terms
                </h2>
                <p style="margin: 0;">
                  These Terms &amp; Conditions constitute a legally binding agreement between you and <strong>Soap &amp; Glory Limited</strong> (part of the No7 Beauty Company / Walgreens Boots Alliance). If you do not agree with any part of these terms, please discontinue use of this site. Your continued exploration of our <a href="/" style="color: var(--sg-pink); font-weight: 700;">Soap &amp; Glory</a> brand collections confirms your unconditional acceptance.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  2. Intellectual Property &amp; Trademarks
                </h2>
                <p style="margin-bottom: 12px;">
                  All trademarks, service marks, logos, retro graphics, and proprietary product names displayed on this website—including but not limited to <em>The Righteous Butter™</em>, <em>Clean On Me™</em>, <em>Sexy Mother Pucker™</em>, <em>Flake Away™</em>, <em>Face Soap &amp; Clarity™</em>, and <em>Lipswell™</em>—are the registered and unregistered trademarks of Soap &amp; Glory Limited and No7 Beauty Company.
                </p>
                <p style="margin: 0;">
                  You may not copy, reproduce, distribute, or create derivative works from our imagery or editorial text without express written permission.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  3. Product Pricing, Currencies &amp; Accuracy
                </h2>
                <p style="margin-bottom: 12px;">
                  Our catalog showcases authentic British and North American MSRP pricing displayed side-by-side in British Pounds (£ GBP) and US Dollars ($ USD) for convenience.
                </p>
                <p style="margin: 0;">
                  While we work diligently to ensure all ingredient listings, volume measurements (ml / fl oz), and stock statuses are current, final checkout prices and promotions are determined at the point of sale on our authorized merchant partner platforms (e.g. Amazon.co.uk, Amazon.com, Boots UK, Target, and Ulta).
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  4. Third-Party Retailer Links &amp; Fulfillment
                </h2>
                <p style="margin-bottom: 12px;">
                  This website functions as an official interactive showcase and buying guide. When you click "Buy on Amazon ↗" or select a stockist, order fulfillment, shipping, customs, returns, and customer satisfaction guarantees are handled directly by the chosen retailer.
                </p>
                <p style="margin: 0;">
                  Please consult our full <a href="/disclaimer" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Official Disclaimer</a> and <a href="/privacy" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Privacy Policy</a> for information on affiliate tracking and third-party policies.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  5. Governing Law &amp; Jurisdiction
                </h2>
                <p style="margin: 0;">
                  These Terms &amp; Conditions are governed by and construed in accordance with the laws of <strong>England and Wales</strong>. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  6. Contact &amp; Questions
                </h2>
                <p style="margin: 0;">
                  For legal inquiries or questions regarding our website policies, please reach out through our <a href="/contact" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Contact Page</a> or write to: Legal Counsel, No7 Beauty Company, 1 Thane Road West, Nottingham, NG2 3AA, United Kingdom.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>

    <div id="terms-footer-mount"></div>

    <!-- Modals -->
    <div id="cart-drawer-mount"></div>
    <div id="search-modal-mount"></div>
  `;

  renderAllSections();
  bindEvents();
}

function renderAllSections() {
  document.getElementById('terms-header-mount').innerHTML = renderHeader('terms');
  document.getElementById('terms-footer-mount').innerHTML = renderFooter();
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

document.addEventListener('DOMContentLoaded', initTermsApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initTermsApp();
}
