import { COLLECTIONS } from '../data/collections.js';

export function renderFragranceHero() {
  const collectionsCount = COLLECTIONS.length;

  return `
    <section class="makeup-hero" id="fragrance-hero" aria-label="Soap and Glory Fragrance Collection">
      <div class="container">
        <div class="makeup-hero__grid">
          <!-- Left Column: Primary SEO Keyword & Vintage Glam Copy -->
          <div class="makeup-hero__content">
            <div class="hero-eyebrow" style="margin-bottom: 12px;">
              <span>✨</span>
              <span>ICONIC BRITISH SCENT FAMILIES</span>
            </div>

            <!-- Primary Keyword H1 Title -->
            <h1 class="makeup-hero__title">
              SOAP &amp; GLORY <span style="color: var(--sg-pink);">FRAGRANCES</span>
            </h1>

            <!-- Brand Tagline -->
            <div class="makeup-hero__tagline">
              SCENTS THAT TURN HEADS. <span class="highlight-pink">LAYERING MADE EFFORTLESS.</span>
            </div>

            <p class="makeup-hero__description" style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.6; max-width: 540px; margin-bottom: 22px;">
              Four unforgettable scent personalities crafted by world-class British perfumers. Whether you fall for the timeless rose-and-bergamot of <strong>Original Pink™</strong> or crave cozy warm almond <strong>Smoothie Star™</strong>, discover your signature fragrance and master head-to-toe scent layering.
            </p>

            <!-- Key Feature Badges -->
            <div class="makeup-hero__badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px;">
              <span class="badge-stamp badge-stamp--pink" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ★ ${collectionsCount} SIGNATURE SCENT FAMILIES
              </span>
              <span class="badge-stamp" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ✓ LAYERABLE OILS &amp; MISTS
              </span>
              <span class="badge-stamp" style="background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                🐰 100% CRUELTY FREE
              </span>
            </div>

            <!-- Single-Line CTA Buttons -->
            <div class="makeup-hero__cta-row" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <a 
                href="#fragrance-families" 
                class="btn btn--primary btn--md" 
                style=" box-shadow: var(--shadow-pop); text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                Explore Scent Families ↓
              </a>
              <a 
                href="#fragrance-layering" 
                class="btn btn--outline btn--md" 
                style=" text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                ✨ Scent Layering Guide →
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Spotlight Card for Original Pink Spritz -->
          <div class="makeup-hero__visual" style="display: flex; justify-content: center; align-items: center;">
            <div class="makeup-hero__card" style="width: 100%; max-width: 410px; background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: 6px 6px 0 var(--sg-black); padding: 22px; position: relative;">
              <div style="position: absolute; top: 16px; right: 16px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-weight: 900; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 5px 12px; border-radius: 4px; border: 2px solid var(--sg-black); box-shadow: 2px 2px 0 var(--sg-black); z-index: 2;">
                #1 ICONIC MIST
              </div>

              <!-- Product Packshot Frame -->
              <div style="background: linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%); border: 2px dashed #fbcfe8; border-radius: var(--radius-md); padding: 16px 12px; display: flex; align-items: center; justify-content: center; margin-top: 10px; margin-bottom: 16px; min-height: 220px;">
                <img 
                  src="/images/products/original-pink-fragrance-spritz.jpg" 
                  alt="Soap & Glory Original Pink Fragrance Spritz Body Mist" 
                  style="max-height: 200px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 16px rgba(0,0,0,0.15));"
                  width="220" 
                  height="200"
                >
              </div>

              <div style="border-top: 2px solid var(--sg-gray-200); padding-top: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
                  <h3 style="font-family: var(--font-display); font-size: 1.22rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black);">
                    Original Pink™ Spritz
                  </h3>
                  <div>
                    <span style="font-family: var(--font-mono); font-size: 1.15rem; font-weight: 900; color: var(--sg-pink-dark);">
                      £8.00 <span style="font-size: 0.85em; color: var(--sg-gray-600);">($10.40)</span>
                    </span>
                  </div>
                </div>

                <p style="font-size: 0.82rem; color: var(--sg-gray-600); margin: 0 0 10px 0; line-height: 1.4;">
                  110ml All-Over Body Mist: Sparkling Bergamot, Mandarin, Summer Rose &amp; Warm Patchouli
                </p>

                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; margin-bottom: 14px;">
                  <span style="color: #E5A03A; letter-spacing: 1px;">★★★★★</span>
                  <span style="font-weight: 800; color: var(--sg-black);">4.8</span>
                  <span style="color: var(--sg-gray-500);">(3,420 verified reviews)</span>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <button 
                    class="btn btn--outline btn--sm quick-view-btn" 
                    data-product-id="original-pink-body-mist"
                    type="button"
                    style="flex: 1; padding: 10px; font-size: var(--text-xs); font-weight: 800;"
                  >
                    Quick View 👁️
                  </button>
                  <a 
                    href="https://www.amazon.co.uk/dp/B00X7GG7A6?tag=soapnglory-20" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn--primary btn--sm" 
                    style="flex: 1.2; text-align: center; text-decoration: none; padding: 10px; font-size: var(--text-xs); font-weight: 800; "
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
