export function renderGiftingHero() {
  return `
    <section class="makeup-hero" id="gifting-hero" aria-label="Soap & Glory Gift Sets and Holiday Star Gifts">
      <div class="container">
        <div class="makeup-hero__grid">
          <!-- Left Column: Primary SEO Keyword & Vintage Glam Copy -->
          <div class="makeup-hero__content">
            <div class="hero-eyebrow" style="margin-bottom: 12px;">
              <span>🎁</span>
              <span>BOOTS STAR GIFTS &amp; PAMPER TINS</span>
            </div>

            <!-- Primary Keyword H1 Title -->
            <h1 class="makeup-hero__title">
              SOAP &amp; GLORY <span style="color: var(--sg-pink);">GIFT SETS</span>
            </h1>

            <!-- Brand Tagline -->
            <div class="makeup-hero__tagline">
              GREAT GIFTS. ZERO GUESSWORK. <span class="highlight-pink">100% GLORIOUS.</span>
            </div>

            <p class="makeup-hero__description" style="font-size: var(--text-base); color: var(--sg-gray-700); line-height: 1.6; max-width: 540px; margin-bottom: 22px;">
              Give the gift that guarantees you are their favorite person. From legendary <strong>Boots Star Gift</strong> holiday collections and our iconic <strong>Birthday Box™</strong> to travel-ready pamper tins, our gift sets deliver up to 40% bundle savings wrapped in gorgeous collectible retro packaging.
            </p>

            <!-- Key Feature Badges -->
            <div class="makeup-hero__badges" style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 26px;">
              <span class="badge-stamp badge-stamp--pink" style="padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ★ UP TO 40% BUNDLE VALUE
              </span>
              <span class="badge-stamp" style="background: #ecfdf5; color: #047857; border: 1px solid #a7f3d0; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                ✓ KEEPSAKE RETRO TINS
              </span>
              <span class="badge-stamp" style="background: #fdf2f8; color: #be185d; border: 1px solid #fbcfe8; padding: 6px 14px; font-size: 0.78rem; font-weight: 800;">
                🎀 READY-TO-GIFT PACKAGING
              </span>
            </div>

            <!-- Single-Line CTA Buttons -->
            <div class="makeup-hero__cta-row" style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
              <a 
                href="#gifting-catalog" 
                class="btn btn--primary btn--md" 
                style=" box-shadow: var(--shadow-pop); text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                Explore Gift Sets ↓
              </a>
              <a 
                href="#gift-finder" 
                class="btn btn--outline btn--md" 
                style=" text-decoration: none; padding: 13px 22px; font-size: var(--text-sm);"
              >
                ✨ Match A Gift Finder →
              </a>
            </div>
          </div>

          <!-- Right Column: Visual Spotlight Card for The Birthday Box -->
          <div class="makeup-hero__visual" style="display: flex; justify-content: center; align-items: center;">
            <div class="makeup-hero__card" style="width: 100%; max-width: 410px; background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: 6px 6px 0 var(--sg-black); padding: 22px; position: relative;">
              <div style="position: absolute; top: 16px; right: 16px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-weight: 900; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; padding: 5px 12px; border-radius: 4px; border: 2px solid var(--sg-black); box-shadow: 2px 2px 0 var(--sg-black); z-index: 2;">
                #1 STAR GIFT
              </div>

              <!-- Product Packshot Frame -->
              <div style="background: linear-gradient(180deg, #FFF0F5 0%, #FFFFFF 100%); border: 2px dashed #fbcfe8; border-radius: var(--radius-md); padding: 16px 12px; display: flex; align-items: center; justify-content: center; margin-top: 10px; margin-bottom: 16px; min-height: 220px;">
                <img 
                  src="/images/products/birthday-box-gift-set.jpg" 
                  alt="Soap & Glory The Birthday Box Star Gift Set 5 Piece Bath and Body Collection" 
                  style="max-height: 200px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 16px rgba(0,0,0,0.15));"
                  width="220" 
                  height="200"
                >
              </div>

              <div style="border-top: 2px solid var(--sg-gray-200); padding-top: 14px;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin-bottom: 6px;">
                  <h3 style="font-family: var(--font-display); font-size: 1.18rem; font-weight: 900; text-transform: uppercase; margin: 0; color: var(--sg-black); line-height: 1.2;">
                    The Birthday Box™
                  </h3>
                  <div style="text-align: right; flex-shrink: 0;">
                    <div style="font-family: var(--font-mono); font-size: 1.12rem; font-weight: 900; color: var(--sg-pink-dark);  line-height: 1.1;">
                      £22.00 <span style="font-size: 0.8em; color: var(--sg-gray-600);">($28.60)</span>
                    </div>
                    <div style="font-size: 0.74rem; text-decoration: line-through; color: var(--sg-gray-500);  margin-top: 3px;">
                      Worth £32.00 ($41.60)
                    </div>
                  </div>
                </div>

                <p style="font-size: 0.82rem; color: var(--sg-gray-600); margin: 0 0 10px 0; line-height: 1.4;">
                  5-Piece Full-Size Suite inside collectible pink tin: Clean On Me, Righteous Butter, Scrub, Hand Food &amp; Sheet Mask
                </p>

                <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; margin-bottom: 14px;">
                  <span style="color: #E5A03A; letter-spacing: 1px;">★★★★★</span>
                  <span style="font-weight: 800; color: var(--sg-black);">4.9</span>
                  <span style="color: var(--sg-gray-500);">(4,890 verified reviews)</span>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px;">
                  <button 
                    class="btn btn--outline btn--sm quick-view-btn" 
                    data-product-id="birthday-box-gift-set"
                    type="button"
                    style="flex: 1; padding: 10px; font-size: var(--text-xs); font-weight: 800;"
                  >
                    Quick View 👁️
                  </button>
                  <a 
                    href="https://www.amazon.com/dp/B006L68WBQ?tag=soapnglory-20" 
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
