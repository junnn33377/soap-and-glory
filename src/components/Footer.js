export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer" id="site-footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <!-- Col 1: Brand Philosophy & Badges -->
          <div class="footer-brand">
            <a href="/" aria-label="Soap & Glory Homepage">
              <img src="/images/brand/soap-and-glory-logo.png" alt="Soap & Glory" class="footer-brand__logo" width="160" height="38">
            </a>
            <p class="footer-brand__tagline">
              Formulated with fun, packed with results. Bringing cheekiness, fine perfumery, and affordable British glamour into bathrooms worldwide since 2006.
            </p>
            <div class="footer-trust-badges">
              <a 
                href="https://www.veganfoodandliving.com/news/soap-glory-earns-cruelty-free-approval/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="badge-stamp badge-stamp--pink" 
                style="font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;"
                title="Soap & Glory Cruelty Free International Leaping Bunny Approval"
              >
                🐰 LEAPING BUNNY APPROVED ↗
              </a>
              <a 
                href="https://www.no7company.com/our-brands/soap-and-glory" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="badge-stamp badge-stamp--outline" 
                style="border-color: rgba(255,255,255,0.4); color: #fff; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;"
                title="Soap & Glory at No7 Beauty Company"
              >
                NO7 BEAUTY COMPANY ↗
              </a>
            </div>
          </div>

          <!-- Col 2: Shop Ranges (5 Live Category Links) -->
          <div>
            <h4 class="footer-col-title">Shop Ranges</h4>
            <ul class="footer-links">
              <li><a href="/bath-body" class="footer-link">Bath &amp; Body</a></li>
              <li><a href="/skincare" class="footer-link">Skincare &amp; Cleansers</a></li>
              <li><a href="/fragrance" class="footer-link">Fragrance Body Mists</a></li>
              <li><a href="/makeup" class="footer-link">Cosmetics &amp; Lips</a></li>
              <li><a href="/gifting" class="footer-link">Gifts &amp; Sets</a></li>
            </ul>
          </div>

          <!-- Col 3: Customer Care (About, Privacy, Terms, Disclaimer, Contact) -->
          <div>
            <h4 class="footer-col-title">Customer Care</h4>
            <ul class="footer-links">
              <li><a href="/about" class="footer-link">About Us</a></li>
              <li><a href="/contact" class="footer-link">Contact Us</a></li>
              <li><a href="/privacy" class="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" class="footer-link">Terms &amp; Conditions</a></li>
              <li><a href="/disclaimer" class="footer-link">Disclaimer</a></li>
            </ul>
          </div>

          <!-- Col 4: The Soaper Club Newsletter -->
          <div class="footer-newsletter-box">
            <h4 class="footer-col-title" style="margin-bottom: 8px;">Join The Soaper Club</h4>
            <p style="font-size: var(--text-xs); color: var(--sg-gray-300); line-height: 1.5;">
              Sign up for insider beauty banter, secret Star Gift alerts, and bubble-worthy news.
            </p>
            <form class="footer-newsletter-form" id="newsletter-form">
              <input 
                type="email" 
                class="footer-input" 
                id="newsletter-email" 
                placeholder="Enter your email" 
                required
                aria-label="Email address for newsletter"
              >
              <button 
                type="submit" 
                class="btn btn--primary btn--sm footer-newsletter-btn" 
                style="width: 100%; white-space: nowrap; font-size: 0.78rem; font-weight: 800; padding: 11px 12px; letter-spacing: 0.02em; display: inline-flex; align-items: center; justify-content: center; gap: 6px;"
              >
                <span>Sign Me Up, Darling</span>
                <span aria-hidden="true" style="font-size: 1.1em; line-height: 1; display: inline-block;">→</span>
              </button>
            </form>
            <div id="newsletter-success" style="display: none; margin-top: 10px; font-size: var(--text-xs); color: #7BDCB5; font-weight: 700;">
              ✨ You're on the VIP Suds list! Check your inbox soon.
            </div>
          </div>
        </div>

        <!-- Bottom Legal & Verification Strip -->
        <div class="footer-bottom">
          <div style="font-size: var(--text-xs); color: var(--sg-gray-400);">
            © ${currentYear} Soap &amp; Glory Ltd. Part of <strong>No7 Beauty Company</strong> / Walgreens Boots Alliance. All rights reserved.
          </div>

          <div style="margin-left: auto; font-family: var(--font-mono); font-size: var(--text-xs); color: var(--sg-gray-400);">
            Currencies: <strong style="color: var(--sg-white);">GBP (£) / USD ($)</strong>
          </div>
        </div>
      </div>
    </footer>
  `;
}
