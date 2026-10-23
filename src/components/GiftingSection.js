export function renderGiftingSection() {
  return `
    <section class="section" id="gifting" aria-label="Gifts and Sets">
      <div class="container">
        <div class="gifting-banner">
          <!-- Banner Copy -->
          <div class="gifting-banner__content">
            <span class="badge-stamp badge-stamp--gold" style="margin-bottom: 16px;">
              BOOTS STAR GIFT FAVORITE
            </span>

            <h2 class="gifting-banner__title">
              Great Gifts. <br>
              Zero Guesswork.
            </h2>

            <p style="color: rgba(255, 255, 255, 0.88); font-size: var(--text-base); line-height: 1.6; margin-bottom: 20px;">
              Looking for a birthday treat, holiday surprise, or a little self-care? Our gift sets pack our most loved bath and body favorites into collectible retro tins.
            </p>

            <div style="background: rgba(255, 255, 255, 0.08); border-left: 3px solid var(--sg-pink); padding: 16px; border-radius: 0 12px 12px 0; margin-bottom: 24px;">
              <div style="font-size: var(--text-xs); font-family: var(--font-mono); color: var(--sg-pink); font-weight: 700; text-transform: uppercase;">
                FEATURED SET: THE BIRTHDAY BOX™ (5 PIECES)
              </div>
              <div style="font-size: var(--text-md); font-weight: 800; color: #fff; margin-top: 4px;">
                Clean On Me (500ml) + The Righteous Butter (300ml) + The Scrub Of Your Life (200ml) + Hand Food + Lip Gloss
              </div>
              <div style="font-size: var(--text-lg); font-weight: 900; color: #fff; margin-top: 8px;">
                Only £22.00 ($28.60) <span style="font-size: var(--text-sm); color: rgba(255,255,255,0.6); text-decoration: line-through;">Worth £32.00 ($41.60)</span>
              </div>
            </div>

            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a 
                href="https://www.amazon.com/dp/B006L68WBQ?tag=soapnglory-20" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn--primary btn--md" 
                style="text-decoration: none;"
              >
                Buy Star Gift on Amazon ↗
              </a>
              <button class="btn btn--white btn--md quick-view-btn" data-product-id="birthday-box-gift-set">
                View Set Details
              </button>
            </div>
          </div>

          <!-- Banner Visual -->
          <div class="gifting-banner__image-box">
            <img 
              src="/images/gifting-campaign.jpg" 
              alt="Soap & Glory luxury pink and gold gift boxes on vintage vanity table" 
              class="gifting-banner__image"
              loading="lazy"
              width="680"
              height="480"
            >
          </div>
        </div>
      </div>
    </section>
  `;
}
