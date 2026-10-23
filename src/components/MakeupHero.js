export function renderMakeupHero() {
  return `
    <section class="makeup-hero" id="makeup-hero" aria-label="Soap & Glory Cosmetics & Makeup">
      <div class="container">
        <div class="makeup-hero__grid">
          <!-- Left Column: Primary SEO Keyword & Vintage Glam Copy -->
          <div class="makeup-hero__content">
            <div class="hero-eyebrow" style="margin-bottom: 12px;">
              <span>💄</span>
              <span>COSMETICS &amp; LIPS COLLECTION</span>
            </div>

            <!-- Primary Keyword H1 Title -->
            <h1 class="makeup-hero__title">
              SOAP &amp; GLORY <span style="color: var(--sg-pink);">MAKEUP</span>
            </h1>

            <!-- Brand Tagline -->
            <div class="makeup-hero__tagline">
              POUT OUT LOUD. <span class="highlight-pink">GLAM WITHOUT THE SHAM.</span>
            </div>

            <p class="makeup-hero__description" style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.6; max-width: 520px; margin-bottom: 22px;">
              Get ready for maximum drama with our award-winning cosmetics line. From the legendary buzzing fullness of <strong>Sexy Mother Pucker™</strong> to high-definition <strong>Thick &amp; Fast™</strong> lashes and flashback-free pore-blurring primers, we make high-glamour effortless and outrageously fun.
            </p>

            <!-- Key Feature Badges -->
            <div class="makeup-hero__badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px;">
              <span class="badge-stamp badge-stamp--pink" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ⚡ LIP-SWELL™ PLUMPING TECH
              </span>
              <span class="badge-stamp" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ✓ 24-HR SMUDGE-PROOF LASHES
              </span>
              <span class="badge-stamp" style="background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ✨ ZERO FLASHBACK FORMULAS
              </span>
            </div>

            <!-- Single-Line CTA Buttons -->
            <div class="makeup-hero__cta-row" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <a 
                href="#makeup-catalog" 
                class="btn btn--primary btn--md" 
                style=" box-shadow: var(--shadow-pop); text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                Shop The Makeup Range ↓
              </a>
              <a 
                href="#pucker-lounge" 
                class="btn btn--outline btn--md" 
                style=" text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                💋 Enter The Pucker Lounge →
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Spotlight Card (Clean, Perfectly Aligned) -->
          <div class="makeup-hero__visual" style="display: flex; justify-content: center;">
            <div class="makeup-hero__card" style="width: 100%; max-width: 420px; background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: 6px 6px 0 var(--sg-black); padding: 24px; position: relative;">
              <div style="position: absolute; top: 16px; right: 16px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-weight: 900; font-size: 0.72rem; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; border: 1.5px solid var(--sg-black); z-index: 2;">
                #1 BESTSELLING PLUMPER
              </div>

              <!-- Product Image with Soft Ambient Glow -->
              <div style="background: linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%); border-radius: var(--radius-md); padding: 20px 10px; display: flex; align-items: center; justify-content: center; margin-block: 8px;">
                <img 
                  src="/images/products/sexy-mother-pucker-xxl.webp" 
                  alt="Soap and Glory Sexy Mother Pucker Pillow Plump XXL Lip Gloss" 
                  style="max-height: 240px; width: auto; object-fit: contain; filter: drop-shadow(0 12px 18px rgba(0,0,0,0.15));"
                  width="240" 
                  height="240"
                >
              </div>

              <div style="border-top: 2px solid var(--sg-gray-200); padding-top: 14px; margin-top: 6px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                  <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    Sexy Mother Pucker™ XXL
                  </h3>
                  <span style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 900; color: var(--sg-black);">
                    £9.99 <span style="font-size: 0.82em; color: var(--sg-gray-600);">($12.99)</span>
                  </span>
                </div>

                <p style="font-size: 0.82rem; color: var(--sg-gray-600); margin: 0 0 10px 0; line-height: 1.4;">
                  Pillow Plump Extra-Strength Plumping Gloss with Lipswell™
                </p>

                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.76rem; margin-bottom: 14px;">
                  <span style="color: #E5A03A; letter-spacing: 1px;">★★★★★</span>
                  <span style="font-weight: 800; color: var(--sg-black);">4.8</span>
                  <span style="color: var(--sg-gray-500);">(3,890 reviews)</span>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <button 
                    class="btn btn--outline btn--sm quick-view-btn" 
                    data-product-id="sexy-mother-pucker-xxl"
                    type="button"
                    style="flex: 1; padding: 10px;"
                  >
                    Quick View 👁️
                  </button>
                  <a 
                    href="https://www.amazon.com/dp/B00Y5U9B3I?tag=soapnglory-20" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn--primary btn--sm" 
                    style="flex: 1.2; text-align: center; text-decoration: none; padding: 10px; "
                  >
                    Buy on Amazon ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
