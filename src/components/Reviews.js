export function renderReviews() {
  const reviews = [
    {
      product: 'The Righteous Butter™ Body Butter',
      rating: 5,
      title: 'Hands down the best body butter ever made',
      quote: 'I have extremely dry skin, especially in winter. This cream is thick, absorbs in minutes without feeling sticky, and keeps my legs moisturized until my next shower. The scent is fresh, clean, and lingers all day.',
      author: 'Emily R.',
      verified: 'Verified Amazon Purchase',
      retailer: 'Amazon Verified',
      url: 'https://www.amazon.com/product-reviews/B01MSHIMSR/#customerReviews'
    },
    {
      product: 'Clean On Me™ Shower Gel',
      rating: 5,
      title: 'Huge bottle, luxurious lather, smells incredible',
      quote: 'I’ve repurchased this bottle three times now. The built-in lotion actually makes a noticeable difference—my skin doesn’t feel tight or itchy after drying off. A little goes a very long way with a shower puff.',
      author: 'Jessica M.',
      verified: 'Verified Amazon Purchase',
      retailer: 'Amazon Verified',
      url: 'https://www.amazon.com/product-reviews/B016UKRDZ8/#customerReviews'
    },
    {
      product: 'The Scrub Of Your Life™ Body Scrub',
      rating: 5,
      title: 'Best body buffer — gentle yet super effective',
      quote: 'The grit is spot on. It completely buffs away dry elbow and knee patches and old fake tan, but doesn’t scratch or irritate sensitive skin. Rinses completely clean without leaving an oily bathtub.',
      author: 'Chloe D.',
      verified: 'Verified Amazon Purchase',
      retailer: 'Amazon Verified',
      url: 'https://www.amazon.com/product-reviews/B0CTS4V6RP/#customerReviews'
    }
  ];

  return `
    <section class="section section--white" id="reviews" aria-label="Customer Reviews">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>⭐</span>
            <span>REAL CUSTOMER REVIEWS</span>
          </div>
          <h2 class="section-title">Loved by Millions of Fans</h2>
          <p class="section-subtitle">
            Authentic verified ratings and reviews from real shoppers who use our bath and body formulas every single day.
          </p>
        </div>

        <!-- Scent & Performance Experience Meters -->
        <div class="reviews-stats-box">
          <div style="font-family: var(--font-display); font-size: var(--text-base); font-weight: 900; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 18px; text-align: center;">
            Customer Formula Ratings (Over 10,000+ Verified Reviews on Amazon & Retailers)
          </div>

          <div class="reviews-stats-grid">
            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--text-sm); font-weight: 800; margin-bottom: 8px;">
                <span>72-HOUR MOISTURE</span>
                <span style="color: var(--sg-pink); white-space: nowrap; margin-left: 8px;">98% POSITIVE</span>
              </div>
              <div style="height: 12px; background: rgba(0,0,0,0.08); border-radius: 99px; overflow: hidden;">
                <div style="width: 98%; height: 100%; background: var(--sg-pink); border-radius: 99px;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--text-sm); font-weight: 800; margin-bottom: 8px;">
                <span>LONG-LASTING SCENT</span>
                <span style="color: var(--sg-pink); white-space: nowrap; margin-left: 8px;">96% POSITIVE</span>
              </div>
              <div style="height: 12px; background: rgba(0,0,0,0.08); border-radius: 99px; overflow: hidden;">
                <div style="width: 96%; height: 100%; background: var(--sg-pink); border-radius: 99px;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--text-sm); font-weight: 800; margin-bottom: 8px;">
                <span>GREAT VALUE</span>
                <span style="color: var(--sg-pink); white-space: nowrap; margin-left: 8px;">99% POSITIVE</span>
              </div>
              <div style="height: 12px; background: rgba(0,0,0,0.08); border-radius: 99px; overflow: hidden;">
                <div style="width: 99%; height: 100%; background: var(--sg-pink); border-radius: 99px;"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 Review Cards Grid -->
        <div class="reviews-cards-grid">
          ${reviews.map(rev => `
            <div style="background: var(--sg-white); border: 2px solid var(--sg-black); border-radius: var(--radius-card); padding: 28px; box-shadow: var(--shadow-pop-sm); display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
              <div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                  <div style="color: #E5A03A; font-size: 1.25rem; letter-spacing: 2px;">★★★★★</div>
                  <span class="badge-stamp badge-stamp--outline" style="font-size: 0.72rem; padding: 3px 8px;">${rev.retailer}</span>
                </div>

                <div style="font-family: var(--font-mono); font-size: 0.84rem; color: var(--sg-pink); font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 6px;">
                  ${rev.product}
                </div>

                <h3 style="font-size: var(--text-md); font-weight: 900; margin-bottom: 12px; line-height: 1.3;">
                  “${rev.title}”
                </h3>

                <p style="font-size: var(--text-base); color: var(--sg-gray-800); line-height: 1.65; margin-bottom: 20px;">
                  ${rev.quote}
                </p>
              </div>

              <div style="margin-top: auto; width: 100%;">
                <div style="border-top: 1px solid var(--sg-gray-200); padding-top: 14px; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem;">
                  <span style="font-weight: 800; color: var(--sg-black);">${rev.author}</span>
                  <span style="color: #13612E; font-weight: 700;">✓ ${rev.verified}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
