import './styles/index.css';
import { store } from './state.js';
import { renderHeader } from './components/Header.js';
import { renderFooter } from './components/Footer.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSearchModal } from './components/SearchModal.js';

function initContactApp() {
  const root = document.getElementById('contact-app');
  if (!root) return;

  root.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar" role="region" aria-label="Customer Support">
      <div class="container announcement-bar__content">
        <span class="announcement-bar__badge">SUPPORT</span>
        <p class="announcement-bar__text">
          Got A Question? Our British Beauty Specialists Respond Within 24 Business Hours. 💌
        </p>
        <button class="announcement-bar__close" id="announcement-close" aria-label="Dismiss announcement">✕</button>
      </div>
    </div>

    <div id="contact-header-mount"></div>

    <main id="main-content">
      <!-- Hero -->
      <section class="makeup-hero" id="contact-hero" aria-label="Contact Soap & Glory">
        <div class="container">
          <div class="makeup-hero__grid">
            <div class="makeup-hero__content">
              <div class="hero-eyebrow" style="margin-bottom: 14px;">
                <span>💌</span>
                <span>CUSTOMER CARE &amp; BEAUTY BANTER</span>
              </div>

              <!-- Perfectly Aligned Brand Link & Title -->
              <h1 class="makeup-hero__title" style="margin-bottom: 12px;">
                <a href="/" class="brand-title-link" title="Return to Soap & Glory Homepage">SOAP &amp; GLORY</a>
                <span class="info-hero__subtitle">CONTACT US</span>
              </h1>

              <div class="makeup-hero__tagline">
                BEAUTY QUESTIONS? SUD-DEN INSPIRATION? <span class="highlight-pink">WE'RE ALL EARS, DARLING.</span>
              </div>

              <p class="makeup-hero__description" style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.65; max-width: 540px; margin-bottom: 22px;">
                Whether you need advice choosing your signature body mist, want tips for double-cleansing from our <a href="/skincare" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Skincare Guide</a>, or have questions about <a href="/" class="brand-link" style="color: var(--sg-pink-dark); font-weight: 700; text-decoration: underline;">Soap &amp; Glory</a> stockists, our team is right here to assist.
              </p>

              <div class="makeup-hero__badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 24px;">
                <span class="badge-stamp badge-stamp--pink" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  ⚡ &lt;24HR EMAIL RESPONSE
                </span>
                <span class="badge-stamp" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  🇬🇧 UK &amp; US ASSISTANCE
                </span>
                <span class="badge-stamp" style="background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                  💬 FRIENDLY &amp; REAL HUMANS
                </span>
              </div>
            </div>

            <!-- Right Spotlight Card: Corporate Headquarters & Support Badge -->
            <div class="makeup-hero__visual" style="display: flex; justify-content: center; align-items: center;">
              <div class="makeup-hero__card" style="width: 100%; max-width: 390px; background: var(--sg-white); border: 2.5px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: 6px 6px 0 var(--sg-black); padding: 22px; position: relative;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <span style="font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: var(--sg-gray-600); text-transform: uppercase; letter-spacing: 0.05em;">
                    OFFICIAL ASSISTANCE
                  </span>
                  <span style="background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-weight: 900; font-size: 0.7rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; border: 1.5px solid var(--sg-black);">
                    HELP HUB
                  </span>
                </div>

                <div style="background: linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%); border: 1.5px dashed #fbcfe8; border-radius: var(--radius-md); padding: 18px; margin-bottom: 16px;">
                  <h3 style="font-family: var(--font-display); font-size: 1.1rem; font-weight: 900; text-transform: uppercase; margin: 0 0 10px 0; color: var(--sg-black);">
                    Direct Channel Guide
                  </h3>
                  <div style="display: flex; flex-direction: column; gap: 10px; font-size: 0.82rem; color: var(--sg-gray-700);">
                    <div>📦 <strong>Boots UK Orders:</strong> Track orders, returns, and points on <a href="https://www.boots.com/soap-and-glory" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink-dark); text-decoration: underline; font-weight: 700;">Boots.com ↗</a></div>
                    <div>🚚 <strong>Amazon Orders:</strong> Check delivery &amp; Prime dispatch on <a href="https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink-dark); text-decoration: underline; font-weight: 700;">Amazon Orders ↗</a></div>
                    <div>🏢 <strong>Parent Company:</strong> Visit <a href="https://www.no7company.com/our-brands/soap-and-glory" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink-dark); text-decoration: underline; font-weight: 700;">No7 Beauty Company ↗</a></div>
                  </div>
                </div>

                <div style="border-top: 2px solid var(--sg-gray-200); padding-top: 12px; font-size: 0.8rem; color: var(--sg-gray-600); line-height: 1.45;">
                  <strong>Support Hours:</strong> Monday – Friday, 9:00 AM – 5:30 PM GMT.<br>
                  Excluding UK public holidays.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Contact Form & Channels Section -->
      <section class="section section--white" id="contact-form-section">
        <div class="container">
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: clamp(32px, 5vw, 60px); align-items: flex-start;">
            
            <!-- Left: Interactive Form -->
            <div class="info-card-panel" style="background: #FFF9FA; border-width: 2.5px;">
              <h2 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0; color: var(--sg-black);">
                Send Us A Note
              </h2>
              <p style="font-size: 0.88rem; color: var(--sg-gray-600); margin-bottom: 22px;">
                Fill out the form below and one of our British beauty enthusiasts will get back to you shortly.
              </p>

              <form id="contact-form" style="display: flex; flex-direction: column; gap: 16px;">
                <div>
                  <label for="contact-name" style="display: block; font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-800); margin-bottom: 6px;">
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    required 
                    placeholder="e.g. Penelope Pink"
                    style="width: 100%; padding: 12px 16px; border: 2px solid var(--sg-black); border-radius: var(--radius-md); font-family: var(--font-sans); font-size: 0.95rem; background: var(--sg-white);"
                  >
                </div>

                <div>
                  <label for="contact-email" style="display: block; font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-800); margin-bottom: 6px;">
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    required 
                    placeholder="you@example.com"
                    style="width: 100%; padding: 12px 16px; border: 2px solid var(--sg-black); border-radius: var(--radius-md); font-family: var(--font-sans); font-size: 0.95rem; background: var(--sg-white);"
                  >
                </div>

                <div>
                  <label for="contact-topic" style="display: block; font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-800); margin-bottom: 6px;">
                    Topic / Category *
                  </label>
                  <select 
                    id="contact-topic" 
                    required
                    style="width: 100%; padding: 12px 16px; border: 2px solid var(--sg-black); border-radius: var(--radius-md); font-family: var(--font-sans); font-size: 0.95rem; background: var(--sg-white); cursor: pointer;"
                  >
                    <option value="routine">Skincare &amp; Scent Routine Advice</option>
                    <option value="retailer">Boots or Amazon Order Question</option>
                    <option value="ingredients">Ingredient &amp; Allergen Inquiries</option>
                    <option value="cruelty-free">Leaping Bunny Cruelty-Free Questions</option>
                    <option value="press">Press, PR &amp; Influencer Collaboration</option>
                    <option value="other">General Beauty Banter &amp; Feedback</option>
                  </select>
                </div>

                <div>
                  <label for="contact-message" style="display: block; font-family: var(--font-mono); font-size: 0.78rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-800); margin-bottom: 6px;">
                    Your Message *
                  </label>
                  <textarea 
                    id="contact-message" 
                    rows="5" 
                    required 
                    placeholder="Tell us everything, darling..."
                    style="width: 100%; padding: 12px 16px; border: 2px solid var(--sg-black); border-radius: var(--radius-md); font-family: var(--font-sans); font-size: 0.95rem; background: var(--sg-white); resize: vertical;"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="btn btn--primary btn--md" 
                  style="width: 100%; box-shadow: var(--shadow-pop); font-size: 0.95rem; font-weight: 900; padding: 14px; text-transform: uppercase; letter-spacing: 0.05em;"
                >
                  Send Message, Darling →
                </button>
              </form>

              <!-- Success Feedback Box -->
              <div id="contact-success" style="display: none; margin-top: 18px; background: #ecfdf5; border: 2px solid #a7f3d0; border-radius: var(--radius-md); padding: 18px; text-align: center;">
                <div style="font-size: 1.8rem; margin-bottom: 6px;">✨</div>
                <div style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; color: #047857; text-transform: uppercase;">
                  Message Received!
                </div>
                <p style="font-size: 0.85rem; color: #065f46; margin: 6px 0 0 0;">
                  Thank you for reaching out. We have received your note and our beauty team will get back to you shortly!
                </p>
              </div>
            </div>

            <!-- Right: Corporate & Physical Office Info -->
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div class="info-card-panel">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.5rem;">🇬🇧</span>
                  <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    Global Headquarters
                  </h3>
                </div>
                <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin-bottom: 10px;">
                  <strong>Soap &amp; Glory Ltd.</strong><br>
                  Part of No7 Beauty Company (Walgreens Boots Alliance)<br>
                  1 Thane Road West, Building D90<br>
                  Nottingham, NG2 3AA<br>
                  United Kingdom
                </p>
                <div style="font-size: 0.82rem; color: var(--sg-gray-500);">
                  Company Reg: No7 Beauty Company Limited · England &amp; Wales
                </div>
              </div>

              <div class="info-card-panel">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                  <span style="font-size: 1.5rem;">🛍️</span>
                  <h3 style="font-family: var(--font-display); font-size: 1.15rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    Where To Buy
                  </h3>
                </div>
                <p style="font-size: 0.88rem; color: var(--sg-gray-700); line-height: 1.55; margin-bottom: 12px;">
                  Find your favorite <a href="/" style="color: var(--sg-pink); font-weight: 700;">Soap &amp; Glory</a> products in store and online at authorized global retail partners:
                </p>
                <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.85rem;">
                  <div>🇬🇧 <strong>UK Stockist:</strong> <a href="https://www.boots.com/soap-and-glory" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink-dark); text-decoration: underline; font-weight: 700;">Boots UK (In-Store &amp; Online) ↗</a></div>
                  <div>🇺🇸 <strong>US Stockists:</strong> Target, Ulta Beauty, and Walgreens</div>
                  <div>🌍 <strong>Worldwide Delivery:</strong> <a href="https://www.amazon.com/dp/B01MSHIMSR?tag=soapnglory-20" target="_blank" rel="noopener noreferrer" style="color: var(--sg-pink-dark); text-decoration: underline; font-weight: 700;">Amazon Global Storefront ↗</a></div>
                </div>
              </div>

              <!-- Quick Links Card -->
              <div class="info-card-panel" style="background: #FFF0F5;">
                <h3 style="font-family: var(--font-display); font-size: 1.05rem; font-weight: 900; text-transform: uppercase; margin: 0 0 8px 0; color: var(--sg-pink-dark);">
                  Quick Policy Links
                </h3>
                <div style="display: flex; flex-direction: column; gap: 6px; font-size: 0.85rem;">
                  <a href="/about" style="color: var(--sg-black); font-weight: 700; text-decoration: underline;">Our Story &amp; No7 Heritage →</a>
                  <a href="/privacy" style="color: var(--sg-black); font-weight: 700; text-decoration: underline;">Privacy &amp; Cookies Policy →</a>
                  <a href="/terms" style="color: var(--sg-black); font-weight: 700; text-decoration: underline;">Terms &amp; Conditions of Use →</a>
                  <a href="/disclaimer" style="color: var(--sg-black); font-weight: 700; text-decoration: underline;">FTC &amp; Amazon Disclaimers →</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>

    <div id="contact-footer-mount"></div>

    <!-- Modals -->
    <div id="cart-drawer-mount"></div>
    <div id="search-modal-mount"></div>
    <div class="toast-notice" id="toast-notice" role="status" aria-live="polite"></div>
  `;

  renderAllSections();
  bindEvents();
}

function renderAllSections() {
  document.getElementById('contact-header-mount').innerHTML = renderHeader('contact');
  document.getElementById('contact-footer-mount').innerHTML = renderFooter();
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
    if (e.target.closest('#announcement-close')) {
      e.target.closest('.announcement-bar').style.display = 'none';
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

  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }

      setTimeout(() => {
        form.style.display = 'none';
        const successBox = document.getElementById('contact-success');
        if (successBox) {
          successBox.style.display = 'block';
        }
      }, 600);
    });
  }
}

document.addEventListener('DOMContentLoaded', initContactApp);
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  initContactApp();
}
