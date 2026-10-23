export function renderSkincareFAQ() {
  const faqs = [
    {
      q: 'What is the best Soap and Glory face wash for glowing skin?',
      a: 'Face Soap & Clarity™ 3-in-1 Daily Detox Vitamin C Facial Wash is our #1 global bestseller (with over 5,400 monthly searches). Formulated with stabilized Vitamin C, Japanese Yuzu citrus, and gentle biodegradable polishing beads, it washes away dullness and impurities in one step for instant morning radiance.'
    },
    {
      q: 'Why should I double cleanse with a cleansing milk and face wash?',
      a: 'Sunscreen, waterproof mascara, and natural sebum are oil-based. Traditional water-based washes cannot dissolve them completely without harsh scrubbing. A first cleanse with a nourishing milk (like Peaches and Clean™ Deep Cleansing Milk) effortlessly dissolves makeup and oils, allowing your second foaming face wash to genuinely purify your pores.'
    },
    {
      q: 'Which Soap and Glory cleanser is best for oily skin and blackheads?',
      a: 'The Fab Pore™ Purifying Foam Cleanser is specially formulated with Salicylic Acid (BHA) and Witch Hazel to penetrate deep into pores and control shine. For stubborn T-zone blackheads, pair it with Scrub Your Nose In It™ 2-in-1 Scrub & Mask twice weekly.'
    },
    {
      q: 'How does Soap and Glory Speed Plump™ moisturizer hydrate?',
      a: 'Speed Plump™ Day Lotion features dual-weight hyaluronic acid molecules that draw moisture into both outer and deeper epidermal layers, delivering 24-hour plumping hydration and a velvety, glass-skin finish that sits seamlessly under makeup.'
    },
    {
      q: 'Can I use Face Soap & Clarity™ Vitamin C wash daily?',
      a: 'Yes! Unlike harsh plastic scrubs from years past, Face Soap & Clarity™ uses biodegradable, rounded natural wax beads that gently polish surface texture without scratching delicate skin. It is dermatologist tested and formulated for gentle morning and evening daily use.'
    },
    {
      q: 'Are Soap & Glory skincare products 100% cruelty-free?',
      a: '100% yes. Soap and Glory is proud to be certified cruelty-free by the Leaping Bunny programme, the international gold standard for non-animal tested consumer cosmetics and skincare.'
    }
  ];

  return `
    <section class="section section--blush" id="skincare-faq" aria-label="Soap & Glory Skincare Frequently Asked Questions">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <span>💡</span>
            <span>FREQUENTLY SEARCHED QUESTIONS</span>
          </div>
          <h2 class="section-title">Soap &amp; Glory Skincare and Face Wash FAQ</h2>
          <p class="section-subtitle">
            Direct answers to your most searched questions regarding Soap and Glory face washes, cleansing balms, Speed Plump™ moisturizers, and routines.
          </p>
        </div>

        <div class="faq-accordion-container" style="max-width: 800px; margin: 0 auto;">
          ${faqs.map((faq, idx) => `
            <div class="faq-accordion-item ${idx === 0 ? 'is-open' : ''}">
              <button class="faq-accordion-trigger" aria-expanded="${idx === 0}">
                <span class="faq-question">${faq.q}</span>
                <span class="faq-icon">${idx === 0 ? '−' : '+'}</span>
              </button>
              <div class="faq-accordion-panel" ${idx === 0 ? '' : 'style="display: none;"'}>
                <p class="faq-answer">${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
