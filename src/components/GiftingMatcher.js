export const GIFT_PERSONAS = [
  {
    id: 'birthday-bestie',
    label: '🎉 The Birthday Bestie',
    desc: 'Our iconic retro pink tin filled with 5 full-size bestsellers.',
    recommendedSet: {
      name: 'The Birthday Box™ Star Gift Set',
      price: '£22.00 ($28.60)',
      worth: '£32.00 ($41.60)',
      saving: '31% OFF',
      image: '/images/products/birthday-box-gift-set.jpg',
      productId: 'birthday-box-gift-set',
      amazonUrl: 'https://www.amazon.com/dp/B006L68WBQ?tag=soapnglory-20',
      badge: 'BOOTS STAR GIFT FAVORITE',
      items: ['Clean On Me Shower Gel (500ml)', 'The Righteous Butter (300ml)', 'The Scrub Of Your Life (200ml)', 'Hand Food Hand Cream (125ml)', 'Bright & Beautiful Sheet Mask']
    }
  },
  {
    id: 'fragrance-lover',
    label: '✨ The Scent Enthusiast',
    desc: 'Head-to-toe fragrance layering with the signature Original Pink spritz.',
    recommendedSet: {
      name: 'Pinkly The Best™ Fragrance & Pamper Set',
      price: '£18.00 ($23.40)',
      worth: '£24.00 ($31.20)',
      saving: '25% OFF',
      image: '/images/products/pinkly-the-best-fragrance-set.jpg',
      productId: 'pinkly-the-best-fragrance-gift-set',
      amazonUrl: 'https://www.amazon.co.uk/dp/B0BDGGXMY3?tag=soapnglory-20',
      badge: 'SIGNATURE SCENT SUITE',
      items: ['Original Pink Fragrance Spritz (100ml)', 'Clean On Me Body Wash (75ml)', 'The Righteous Butter Body Lotion (50ml)', 'The Scrub Of Your Life (50ml)']
    }
  },
  {
    id: 'secret-santa',
    label: '🎁 Stocking Filler & Secret Santa',
    desc: 'Award-winning hand & foot miracles in cute pocket-friendly sizes.',
    recommendedSet: {
      name: 'Hand & Foot Hydration Heroes',
      price: '£14.48 ($18.82)',
      worth: '£18.00 ($23.40)',
      saving: 'GREAT VALUE',
      image: '/images/products/hand-food-hand-cream.webp',
      productId: 'hand-food-125ml',
      amazonUrl: 'https://www.amazon.com/dp/B07NF6416M?tag=soapnglory-20',
      badge: 'TRAVEL & STOCKING HERO',
      items: ['Hand Food™ Macadamia Hand Cream (125ml)', 'Heel Genius™ AHA Fruit Acid Foot Cream (125ml)']
    }
  },
  {
    id: 'sweet-tooth',
    label: '🍯 Sweet Treats Lover',
    desc: 'Warm almond, golden honey, and rich brown sugar bakery pampering.',
    recommendedSet: {
      name: 'Smoothie Star™ Sweet Almond Pamper Duo',
      price: '£19.98 ($25.97)',
      worth: '£26.00 ($33.80)',
      saving: 'POPULAR DUO',
      image: '/images/products/smoothie-star-body-lotion.webp',
      productId: 'smoothie-star-lotion-500ml',
      amazonUrl: 'https://www.amazon.com/dp/B0B98ZMFJN?tag=soapnglory-20',
      badge: 'GOURMAND DUO',
      items: ['Smoothie Star Body Lotion (500ml)', 'Smoothie Star Breakfast Body Scrub (300ml)']
    }
  }
];

export function renderGiftingMatcher(activePersonaId = 'birthday-bestie') {
  const persona = GIFT_PERSONAS.find(p => p.id === activePersonaId) || GIFT_PERSONAS[0];
  const rec = persona.recommendedSet;

  return `
    <section class="section section--ivory" id="gift-finder" aria-label="Interactive Gift Matcher">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>🎯</span>
            <span>ZERO GUESSWORK</span>
          </div>
          <h2 class="section-title">The Instant Gift Matcher</h2>
          <p class="section-subtitle">
            Not sure what they will love most? Select who you are shopping for and we will match the perfect Soap &amp; Glory bundle.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; align-items: center; max-width: 1040px; margin: 0 auto; background: var(--sg-white); border: 3px solid var(--sg-black); border-radius: var(--radius-card); box-shadow: var(--shadow-pop); padding: clamp(20px, 4vw, 40px);">
          
          <!-- Left Controls -->
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--sg-gray-600); margin-bottom: 14px; letter-spacing: 0.05em;">
              1. Who Are You Spoiling Today?
            </div>

            <div class="gift-persona-list" style="display: grid; gap: 10px; margin-bottom: 24px;">
              ${GIFT_PERSONAS.map(p => {
                const isActive = p.id === persona.id;
                return `
                  <button 
                    type="button"
                    class="gift-persona-btn ${isActive ? 'is-active' : ''}" 
                    data-persona-id="${p.id}"
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: space-between;
                      padding: 14px 18px;
                      border-radius: var(--radius-sm);
                      border: 2px solid ${isActive ? 'var(--sg-black)' : 'var(--sg-gray-300)'};
                      background: ${isActive ? '#FFF0F5' : 'var(--sg-white)'};
                      box-shadow: ${isActive ? '3px 3px 0 var(--sg-black)' : 'none'};
                      cursor: pointer;
                      text-align: left;
                      transition: all var(--transition-fast);
                      width: 100%;
                    "
                  >
                    <div>
                      <div style="font-family: var(--font-display); font-weight: 900; font-size: 1rem; color: var(--sg-black); text-transform: uppercase;">
                        ${p.label}
                      </div>
                      <div style="font-size: 0.78rem; color: var(--sg-gray-600); margin-top: 2px;">
                        ${p.desc}
                      </div>
                    </div>
                    <span style="font-weight: 900; font-size: 1.1rem; color: ${isActive ? 'var(--sg-pink)' : 'var(--sg-gray-400)'};">
                      ${isActive ? '✓' : '→'}
                    </span>
                  </button>
                `;
              }).join('')}
            </div>

            <div style="background: var(--sg-ivory); border: 2px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 14px;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 800; color: var(--sg-pink-dark); text-transform: uppercase; display: block; margin-bottom: 4px;">
                💡 Gifting Guarantee
              </span>
              <p style="font-size: 0.8rem; color: var(--sg-gray-700); margin: 0; line-height: 1.45;">
                Every Soap &amp; Glory set is housed in ready-to-gift packaging. No wrapping paper disasters required.
              </p>
            </div>
          </div>

          <!-- Right Recommendation Card -->
          <div id="gift-recommendation-mount">
            ${renderGiftRecommendationCard(persona)}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderGiftRecommendationCard(persona) {
  const rec = persona.recommendedSet;

  return `
    <div class="gift-display-card" style="text-align: center; border: 2px solid var(--sg-black); border-radius: var(--radius-card); padding: 24px; background: #FFF9FA; position: relative;">
      <div style="display: inline-flex; align-items: center; gap: 6px; background: var(--sg-pink); color: var(--sg-white); font-family: var(--font-display); font-size: 0.75rem; font-weight: 900; text-transform: uppercase; padding: 4px 12px; border-radius: var(--radius-pill); margin-bottom: 12px;">
        <span>🎁</span>
        <span>${rec.badge}</span>
      </div>

      <div style="margin-block: 8px; min-height: 190px; display: flex; align-items: center; justify-content: center;">
        <img 
          src="${rec.image}" 
          alt="${rec.name}" 
          style="max-height: 190px; width: auto; object-fit: contain; filter: drop-shadow(0 10px 14px rgba(0,0,0,0.12));"
        >
      </div>

      <h3 style="font-family: var(--font-display); font-size: 1.25rem; font-weight: 900; text-transform: uppercase; margin: 0 0 6px 0; color: var(--sg-black);">
        ${rec.name}
      </h3>

      <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 8px 12px; margin-bottom: 14px;">
        <div style="display: inline-flex; align-items: baseline; gap: 6px;">
          <span style="font-family: var(--font-mono); font-size: 1.25rem; font-weight: 900; color: var(--sg-pink-dark); white-space: nowrap;">
            ${rec.price}
          </span>
          <span style="font-size: 0.82rem; text-decoration: line-through; color: var(--sg-gray-500); white-space: nowrap;">
            Worth ${rec.worth}
          </span>
        </div>
        <span class="badge-stamp badge-stamp--pink" style="font-size: 0.72rem; padding: 3px 10px; white-space: nowrap; font-weight: 800;">
          ${rec.saving}
        </span>
      </div>

      <!-- Item Checklist -->
      <div style="background: var(--sg-white); border: 1px solid var(--sg-gray-300); border-radius: var(--radius-sm); padding: 12px; font-size: 0.78rem; margin-bottom: 18px; text-align: left;">
        <div style="font-weight: 800; font-family: var(--font-mono); color: var(--sg-black); margin-bottom: 6px; text-transform: uppercase;">Inside This Gift Set:</div>
        <ul style="margin: 0; padding-left: 18px; color: var(--sg-gray-700); line-height: 1.5;">
          ${rec.items.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 10px; justify-content: center; align-items: stretch;">
        <button 
          class="btn btn--outline btn--md quick-view-btn" 
          data-product-id="${rec.productId}"
          type="button"
          style="flex: 1; padding: 12px; font-size: var(--text-sm); font-weight: 800; white-space: nowrap;"
        >
          Quick View 👁️
        </button>
        <a 
          href="${rec.amazonUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn--primary btn--md"
          style="flex: 1.2; text-decoration: none; text-align: center; white-space: nowrap; padding: 12px; font-size: var(--text-sm); font-weight: 800;"
        >
          Buy on Amazon ↗
        </a>
      </div>
    </div>
  `;
}
