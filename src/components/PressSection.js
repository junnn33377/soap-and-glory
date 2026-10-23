export const PRESS_LOGOS = {
  cosmopolitan: `
    <svg viewBox="0 0 240 32" height="26" style="max-width: 175px; height: auto; display: block;" aria-label="Cosmopolitan" fill="#000">
      <text x="0" y="24" font-family="'Didot', 'Playfair Display', 'Georgia', serif" font-size="24" font-weight="900" letter-spacing="3.5">COSMOPOLITAN</text>
    </svg>
  `,
  independent: `
    <svg viewBox="0 0 240 32" height="26" style="max-width: 185px; height: auto; display: block;" aria-label="The Independent" fill="#000">
      <path d="M4 6 L14 6 L12 12 L6 12 Z M10 12 L16 12 L14 18 L8 18 Z M6 18 L18 18 L12 26 Z" opacity="0.9"/>
      <text x="24" y="23" font-family="'Times New Roman', 'Baskerville', 'Georgia', serif" font-size="18" font-weight="900" letter-spacing="2.2">THE INDEPENDENT</text>
    </svg>
  `,
  marieclaire: `
    <svg viewBox="0 0 220 32" height="26" style="max-width: 170px; height: auto; display: block;" aria-label="Marie Claire" fill="#000">
      <text x="0" y="24" font-family="'Didot', 'Bodoni MT', 'Playfair Display', serif" font-size="26" font-weight="800" letter-spacing="2">marie claire</text>
    </svg>
  `,
  elle: `
    <svg viewBox="0 0 130 36" height="28" style="max-width: 115px; height: auto; display: block;" aria-label="Elle" fill="#000">
      <text x="0" y="29" font-family="'Didot', 'Bodoni MT', 'Cinzel', serif" font-size="34" font-weight="900" letter-spacing="8">ELLE</text>
    </svg>
  `,
  indybest: `
    <svg viewBox="0 0 190 32" height="26" style="max-width: 145px; height: auto; display: block;" aria-label="IndyBest" fill="#000">
      <rect x="0" y="4" width="40" height="22" rx="4" fill="#FF3377"/>
      <text x="6" y="19" font-family="'Outfit', 'Helvetica Neue', sans-serif" font-size="11" font-weight="900" fill="#fff" letter-spacing="0.5">BEST</text>
      <text x="48" y="22" font-family="'Times New Roman', 'Georgia', serif" font-size="20" font-weight="900" letter-spacing="2">INDYBEST</text>
    </svg>
  `,
  vogue: `
    <svg viewBox="0 0 200 36" height="28" style="max-width: 150px; height: auto; display: block;" aria-label="British Vogue" fill="#000">
      <text x="0" y="26" font-family="'Didot', 'Bodoni MT', 'Cinzel', serif" font-size="28" font-weight="900" letter-spacing="5">VOGUE</text>
      <text x="126" y="16" font-family="'Outfit', 'Helvetica Neue', sans-serif" font-size="9" font-weight="900" letter-spacing="2" fill="#FF3377">UK</text>
    </svg>
  `
};

export function renderPressSection() {
  const pressFeatures = [
    {
      id: 'cosmopolitan',
      publication: 'COSMOPOLITAN',
      logoSvg: PRESS_LOGOS.cosmopolitan,
      accolade: 'Holiday Star Gift Pick',
      category: 'Star Gift Bath & Body Edit',
      quote: 'Everything you could ever need to set up your own home spa. Soap & Glory’s legendary bumper sets deliver unbeatable pampering and dressing-table gorgeousness.',
      product: 'Star Gift & Original Pink™ Range',
      reviewUrl: 'https://www.cosmopolitan.com/uk/beauty-hair/a13987610/soap-and-glory-star-gift-2017/',
      badge: 'BEAUTY AWARDS WINNER'
    },
    {
      id: 'independent',
      publication: 'THE INDEPENDENT',
      logoSvg: PRESS_LOGOS.independent,
      accolade: 'The 10 Best Body Lotions',
      category: 'Best Body Moisturizers Review',
      quote: 'Soap & Glory has a huge following. Rich and nourishing with a pleasant rose and bergamot scent, The Righteous Butter is an essential savior for rough, dry skin.',
      product: 'The Righteous Butter™',
      reviewUrl: 'https://www.independent.co.uk/life-style/fashion/features/the-10-best-body-lotions-8191314.html',
      badge: 'INDYBEST TOP PICK'
    },
    {
      id: 'marieclaire',
      publication: 'MARIE CLAIRE',
      logoSvg: PRESS_LOGOS.marieclaire,
      accolade: 'Beauty Spotlight Winner',
      category: 'Digital Beauty Editor\'s Desk',
      quote: 'We put Soap & Glory’s signature classic The Righteous Butter to the test. Formulated with shea butter and aloe vera, it delivers intense hydration without a greasy residue.',
      product: 'The Righteous Butter™',
      reviewUrl: 'https://www.marieclaire.co.uk/beauty/skincare/beauty-spotlight-soap-glory-the-righteous-butter-diamond-edition-254437',
      badge: 'EDITOR’S CHOICE'
    },
    {
      id: 'elle',
      publication: 'ELLE',
      logoSvg: PRESS_LOGOS.elle,
      accolade: 'High-Street Beauty Column',
      category: 'Boots Iconic Range Feature',
      quote: 'Soap & Glory has mastered quirky, retro bath and body care with nifty names, accessible price tags, and high-performance ingredients that you come to expect from the brand.',
      product: 'Bath, Body & Cosmetics Range',
      reviewUrl: 'https://www.elle.com/uk/beauty/beauty-tips/a6750/soap-glory-launch-cosmetics/',
      badge: 'BEAUTY ESSENTIAL'
    },
    {
      id: 'indybest',
      publication: 'INDYBEST',
      logoSvg: PRESS_LOGOS.indybest,
      accolade: 'Tested & Approved',
      category: 'Best Body Exfoliators & Mitts',
      quote: 'We put Soap & Glory to the test for smooth, flake-free skin. An unbeatable British bathroom staple that polishes skin to perfection with serious value.',
      product: 'The Scrub Of Your Life™ & Tools',
      reviewUrl: 'https://www.independent.co.uk/extras/indybest/fashion-beauty/skincare/best-exfoliating-gloves-mitt-b1871446.html',
      badge: 'TESTED & APPROVED'
    },
    {
      id: 'vogue',
      publication: 'BRITISH VOGUE',
      logoSvg: PRESS_LOGOS.vogue,
      accolade: 'British Beauty Icon',
      category: 'UK Beauty Hall of Fame',
      quote: 'Marcia Kilgore created a runaway British success with Soap & Glory, defining a cheeky, tongue-in-chic era of accessible luxury that remains a fixture on UK vanity tables.',
      product: 'Original Pink™ Fragrance Collection',
      reviewUrl: 'https://www.vogue.com/article/beauty-pie-marcia-kilgore-bliss-soap-glory-makeup-startup-disrupt',
      badge: 'BRITISH VOGUE PICK'
    }
  ];

  return `
    <section class="section section--ivory" id="press" aria-label="Press and Editorial Accolades">
      <div class="container">
        <!-- Top Editorial Header with Slider Navigation Arrows (Centered in Middle) -->
        <div class="press-section-header">
          <div class="press-section-header__text">
            <div class="section-eyebrow">
              <span>📰</span>
              <span>AS SEEN IN</span>
            </div>
            <h2 class="section-title">In the Beauty Headlines</h2>
            <p class="section-subtitle">
              Leading editors and publications praise our award-winning body care, signature fragrances, and retro British charm.
            </p>
          </div>

          <!-- Carousel Controls -->
          <div class="press-carousel-controls" aria-label="Press Carousel Controls">
            <button class="press-carousel-arrow" id="press-nav-prev" aria-label="Previous press review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="press-carousel-arrow" id="press-nav-next" aria-label="Next press review">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>

        <!-- Press Publications Ribbon Bar -->
        <div class="press-logo-bar" aria-hidden="true">
          <div class="press-logo-item">COSMOPOLITAN</div>
          <span class="press-logo-dot">★</span>
          <div class="press-logo-item">THE INDEPENDENT</div>
          <span class="press-logo-dot">★</span>
          <div class="press-logo-item">MARIE CLAIRE</div>
          <span class="press-logo-dot">★</span>
          <div class="press-logo-item">ELLE</div>
          <span class="press-logo-dot">★</span>
          <div class="press-logo-item">INDYBEST</div>
          <span class="press-logo-dot">★</span>
          <div class="press-logo-item">VOGUE</div>
        </div>

        <!-- Press Carousel Slider Track (Smooth Scrolling, Symmetrical & Snap Aligned) -->
        <div class="press-carousel-wrapper">
          <div class="press-track" id="press-track" role="region" aria-label="Editorial reviews carousel">
            ${pressFeatures.map((item, idx) => `
              <article class="press-card" data-index="${idx}">
                <!-- Card Top: Badge & Category with Generous Spacing -->
                <div class="press-card__top">
                  <div class="press-card__badge-row">
                    <span class="badge-stamp badge-stamp--pink">
                      ★ ${item.badge}
                    </span>
                  </div>
                  <div class="press-card__category">
                    ${item.category}
                  </div>
                </div>

                <!-- Official Publication Logo Stage -->
                <div class="press-card__logo-stage">
                  ${item.logoSvg}
                </div>

                <!-- Editorial Review Quote -->
                <blockquote class="press-card__quote">
                  “${item.quote}”
                </blockquote>

                <!-- Mentioned Product -->
                <div class="press-card__featured">
                  <span class="press-card__featured-label">Featured In Review:</span>
                  <span class="press-card__featured-product">${item.product}</span>
                </div>

                <!-- Editorial Action: Verified Review Article Link -->
                <div class="press-card__actions">
                  <a 
                    href="${item.reviewUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="press-review-link"
                  >
                    <span>Read on ${item.publication}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                </div>
              </article>
            `).join('')}
          </div>

          <!-- Carousel Pagination Indicators -->
          <div class="press-carousel-dots" id="press-carousel-dots" aria-hidden="true">
            ${pressFeatures.map((_, i) => `
              <button class="press-dot ${i === 0 ? 'is-active' : ''}" data-slide="${i}" aria-label="Go to review ${i + 1}"></button>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
