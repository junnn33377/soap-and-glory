import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';

function initPrivacyApp() {
  const root = document.getElementById('privacy-app');
  if (!root) return;

  root.innerHTML = `
    <div id="privacy-header-mount"></div>

    <main id="main-content">
      <!-- Hero -->
      <section class="makeup-hero" id="privacy-hero" aria-label="Soap & Glory Privacy Policy">
        <div class="container">
          <div style="max-width: 800px; margin: 0 auto; text-align: center;">
            <div class="hero-eyebrow" style="margin-bottom: 14px; display: inline-flex;">
              <span>🔒</span>
              <span>DATA PRIVACY &amp; SECURITY NOTICE</span>
            </div>

            <!-- Perfectly Aligned Brand Link & Title -->
            <h1 class="makeup-hero__title" style="margin-bottom: 12px;">
              <a href="/" class="brand-title-link" title="Return to Soap & Glory Homepage">SOAP &amp; GLORY</a>
              <span class="info-hero__subtitle">PRIVACY POLICY</span>
            </h1>

            <div class="makeup-hero__tagline">
              YOUR PRIVACY MATTERS. <span class="highlight-pink">NO NASTIES, NO SURPRISES.</span>
            </div>

            <p style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.65; margin: 0 auto 20px auto; max-width: 650px;">
              Last Updated: October 2026. This Privacy &amp; Cookie Notice explains in clear, plain English how <a href="/" class="brand-link" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> ("we", "our", "us") collects, respects, and protects your personal data when you browse our curated showcases and discover our products.
            </p>
          </div>
        </div>
      </section>

      <!-- Content Section -->
      <section class="section section--white">
        <div class="container">
          <div style="max-width: 820px; margin: 0 auto;">
            
            <!-- Quick Summary Section: Generous Spacing & 3 Modern Cards -->
            <div style="margin-bottom: 44px;">
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
                <span style="font-size: 1.4rem;">⚡</span>
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-pink-dark);">
                  Summary At A Glance
                </h2>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 18px;">
                <div class="info-card-panel" style="background: #FFF9FA;">
                  <div style="font-size: 1.6rem; margin-bottom: 10px;">🛡️</div>
                  <h3 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; text-transform: uppercase; margin: 0 0 8px 0; color: var(--sg-black);">
                    Zero Data Selling
                  </h3>
                  <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin: 0;">
                    We never sell, rent, or trade your personal information to third-party data brokers. Ever.
                  </p>
                </div>

                <div class="info-card-panel" style="background: #FFF9FA;">
                  <div style="font-size: 1.6rem; margin-bottom: 10px;">🍪</div>
                  <h3 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; text-transform: uppercase; margin: 0 0 8px 0; color: var(--sg-black);">
                    Transparent Cookies
                  </h3>
                  <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin: 0;">
                    Cookies maintain your cart and record product referrals when visiting authorized retailers like Amazon and Boots.
                  </p>
                </div>

                <div class="info-card-panel" style="background: #FFF9FA;">
                  <div style="font-size: 1.6rem; margin-bottom: 10px;">⚖️</div>
                  <h3 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; text-transform: uppercase; margin: 0 0 8px 0; color: var(--sg-black);">
                    GDPR &amp; CCPA Control
                  </h3>
                  <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin: 0;">
                    You have legal rights to inspect, update, or erase any personal information we hold with zero friction.
                  </p>
                </div>
              </div>
            </div>

            <!-- Policy Sections -->
            <div style="display: flex; flex-direction: column; gap: 32px; font-size: 0.95rem; line-height: 1.7; color: var(--sg-gray-800);">
              
              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  1. Who Controls Your Data?
                </h2>
                <p style="margin: 0;">
                  <a href="/" style="color: inherit; font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> operates as part of the <strong>No7 Beauty Company</strong>, an operating division of Walgreens Boots Alliance. The legal data controller for all personal information collected via this website is No7 Beauty Company Limited, registered in England &amp; Wales, with registered offices at 1 Thane Road West, Nottingham, NG2 3AA, United Kingdom.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  2. What Information Do We Collect?
                </h2>
                <p>We collect limited categories of information necessary to provide an exceptional browsing experience:</p>
                <ul style="padding-left: 20px; margin-bottom: 0;">
                  <li><strong>Technical &amp; Device Information:</strong> Anonymized IP addresses, browser types, operating systems, and viewport dimensions to maintain fast, responsive page layouts.</li>
                  <li><strong>Usage &amp; Interaction Data:</strong> Product views across our <a href="/bath-body" style="color: var(--sg-pink); font-weight: 700;">Bath &amp; Body</a>, <a href="/skincare" style="color: var(--sg-pink); font-weight: 700;">Skincare</a>, and <a href="/makeup" style="color: var(--sg-pink); font-weight: 700;">Makeup</a> catalogs, search queries, and external retailer click events.</li>
                  <li><strong>Customer Inquiries &amp; Newsletter:</strong> If you submit an inquiry through our <a href="/contact" style="color: var(--sg-pink); font-weight: 700;">Contact Page</a> or join The Soaper Club, we collect your name and email. You can unsubscribe anytime with one click.</li>
                </ul>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  3. Cookies &amp; Tracking Technologies
                </h2>
                <p>
                  Cookies are small text files placed on your browser. We use:
                </p>
                <ul style="padding-left: 20px; margin-bottom: 0;">
                  <li><strong>Essential Cookies:</strong> Required to keep our site secure, remember your active fragrance filter, and maintain your shopping bag.</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand which products are popular so we can refine our beauty recommendations.</li>
                  <li><strong>Affiliate Tracking Cookies:</strong> When you click a "Buy on Amazon ↗" or "Boots Brand Store ↗" link, the destination merchant places an affiliate tracking cookie to track qualifying purchases.</li>
                </ul>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  4. Amazon Associates &amp; Retailer Disclosure
                </h2>
                <p style="margin: 0;">
                  This website participates in the <strong>Amazon Services LLC Associates Program</strong> and the <strong>Amazon EU Associates Programme</strong>, an affiliate advertising program designed to provide a means for websites to earn advertising fees by linking to Amazon.com and Amazon.co.uk. For complete details on commercial relationships, please read our dedicated <a href="/disclaimer" style="color: var(--sg-pink); font-weight: 700; text-decoration: underline;">Official Disclaimer</a>.
                </p>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  5. Your Rights Under GDPR (UK/EU) &amp; CCPA (USA)
                </h2>
                <p>
                  Depending on where you reside, you have specific legal rights over your personal data:
                </p>
                <ul style="padding-left: 20px; margin-bottom: 0;">
                  <li><strong>Right to Access:</strong> Request a copy of any personal data we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> Ask us to correct inaccurate or incomplete details.</li>
                  <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request that we delete your email from newsletter lists.</li>
                  <li><strong>Right to Opt-Out (CCPA):</strong> California residents have the right to opt out of the sale or sharing of personal information. As noted above, we do not sell your personal data.</li>
                </ul>
              </div>

              <div class="info-card-panel">
                <h2 style="font-family: var(--font-display); font-size: 1.3rem; font-weight: 900; text-transform: uppercase; margin-bottom: 10px; color: var(--sg-black);">
                  6. Contacting Our Data Protection Officer (DPO)
                </h2>
                <p style="margin-bottom: 16px;">
                  If you have questions about how <a href="/" style="color: inherit; font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> handles your personal data, or if you would like to exercise any of your statutory rights, please reach out directly:
                </p>
                <div style="background: var(--sg-ivory); border: 1.5px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 14px 18px; font-size: 0.9rem;">
                  <div><strong>Email:</strong> privacy@soapandglory.com</div>
                  <div><strong>Address:</strong> Data Protection Officer, No7 Beauty Company, 1 Thane Road West, Nottingham, NG2 3AA, UK</div>
                  <div><strong>General Help:</strong> Visit our <a href="/contact" style="color: var(--sg-pink); font-weight: 700;">Customer Care Page</a></div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>

    <div id="privacy-footer-mount"></div>

    <!-- Modals -->
    <div id="cart-drawer-mount"></div>
    <div id="search-modal-mount"></div>
  `;

  renderAllSections();
  bindEvents();
}

function renderAllSections() {
  document.getElementById('privacy-header-mount').innerHTML = renderHeader('privacy');
  document.getElementById('privacy-footer-mount').innerHTML = renderFooter();
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

document.addEventListener('DOMContentLoaded', initPrivacyApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initPrivacyApp();
}
