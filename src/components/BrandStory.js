export function renderBrandStory() {
  return `
    <section class="section section--dark" id="story" aria-label="Brand Story and Heritage">
      <div class="container">
        <div class="brand-story-grid">
          <!-- Left: Editorial Storytelling Typography -->
          <div>
            <div class="section-eyebrow" style="background: rgba(255, 51, 119, 0.2); border-color: var(--sg-pink); color: var(--sg-pink);">
              <span>🇬🇧</span>
              <span>LONDON SOHO · EST. 2006</span>
            </div>

            <h2 style="font-size: var(--text-2xl); font-weight: 900; text-transform: uppercase; line-height: 1.1; margin-bottom: 20px;">
              Serious Skincare. <br>
              <span style="color: var(--sg-pink);">Real Fun. Real Results.</span>
            </h2>

            <p style="font-size: var(--text-base); color: rgba(255, 255, 255, 0.9); line-height: 1.7; margin-bottom: 16px;">
              Soap & Glory started in London back in 2006. Marcia Kilgore founded it with one clear goal: make world-class body care and skincare that anyone can afford. No crazy prices. No fancy attitude.
            </p>

            <p style="font-size: var(--text-base); color: rgba(255, 255, 255, 0.9); line-height: 1.75; margin-bottom: 0;">
              Today, we are proud to be part of the <strong>No7 Beauty Company</strong>. We pack our formulas with shea butter, vitamin C, and fine fragrance. Best of all, every single product is 100% Leaping Bunny certified cruelty-free. Your skin gets real moisture. Your bathroom smells amazing.
            </p>
          </div>

          <!-- Right: Factually Verified Brand Heritage Card -->
          <div style="position: relative; width: 100%;">
            <div class="brand-story-card">
              <span class="badge-stamp badge-stamp--outline" style="border-color: #fff; color: #fff; margin-bottom: 16px;">
                ORIGINAL BRITISH BEAUTY · EST. 2006
              </span>
              <div style="font-family: var(--font-display); font-size: var(--text-xl); font-weight: 900; line-height: 1.25; color: #fff; margin-bottom: 16px; text-transform: uppercase;">
                “Formulated with fun, packed with results.”
              </div>
              <p style="font-size: var(--text-base); color: rgba(255, 255, 255, 0.95); line-height: 1.65; margin-bottom: 20px;">
                Founded in London in 2006 by Marcia Kilgore. We make clinical-grade body care and skincare with fine fragrance, generous sizes, and accessible everyday prices.
              </p>
              <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.25); font-family: var(--font-mono); font-size: 0.85rem; font-weight: 700; letter-spacing: 0.06em; color: #fff; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <span>NO7 BEAUTY COMPANY</span>
                <span>·</span>
                <span>LONDON SOHO</span>
                <span>·</span>
                <span>100% CRUELTY-FREE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
