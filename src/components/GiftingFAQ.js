export function renderGiftingFAQ() {
  const faqs = [
    {
      q: 'What is inside The Birthday Box™ Star Gift Set?',
      a: 'The Birthday Box™ contains five of our most beloved full-sized and travel-friendly bestsellers inside a collectible keepsake tin: Clean On Me™ Creamy Clarifying Shower Gel (500ml), The Righteous Butter™ Body Butter (300ml), The Scrub Of Your Life™ Smoothing Body Buffer (200ml), Hand Food™ Hydrating Hand Cream (125ml), and Bright + Beautiful™ Radiance-Boosting Sheet Mask. It delivers over £32 ($41.60) of product value for only £22 ($28.60).'
    },
    {
      q: 'When is the famous Boots Soap & Glory Star Gift released each year?',
      a: 'The Boots Star Gift of the Week typically launches annually in mid-to-late November in the lead-up to Black Friday and Christmas. It features limited-edition supersized pamper tins and vanity cases at over 50% discount. Sign up or check back on our site to catch the release dates before tins sell out.'
    },
    {
      q: 'Are the Soap & Glory gift set tins and boxes reusable?',
      a: 'Yes, absolutely! Our iconic metal gift tins and presentation boxes are custom-designed with vintage retro artwork specifically so you can reuse them as bedroom keepsake tins, makeup brush holders, vanity organizers, or secret snack stashes.'
    },
    {
      q: 'How much do I save by purchasing a gift set rather than individual products?',
      a: 'On average, Soap & Glory gift sets and holiday bundles save shoppers between 25% and 40% compared to purchasing each full-sized product individually, making them the most cost-effective way to stock up on body care and fragrance favorites.'
    },
    {
      q: 'Are all cosmetics and bath products in Soap & Glory gift sets cruelty-free?',
      a: '100% yes! Soap & Glory has been strictly cruelty-free since our inception in 2006. None of our finished products or raw cosmetic ingredients are ever tested on animals.'
    }
  ];

  return `
    <section class="section section--white" id="gifting-faq" aria-label="Gifting Frequently Asked Questions">
      <div class="container" style="max-width: 960px;">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>💡</span>
            <span>GIFTING INTEL</span>
          </div>
          <h2 class="section-title" style="white-space: nowrap; font-size: clamp(1.7rem, 3.2vw, 2.5rem);">Soap &amp; Glory Gifting FAQs</h2>
          <p class="section-subtitle">
            Everything you need to know about our famous Boots Star Gifts, bundle savings, and collectible keepsake tins.
          </p>
        </div>

        <div class="faq-list">
          ${faqs.map((faq, idx) => `
            <details class="faq-accordion-item" ${idx === 0 ? 'open' : ''}>
              <summary class="faq-accordion-trigger">
                <span>${faq.q}</span>
                <span class="faq-icon" aria-hidden="true"></span>
              </summary>
              <div class="faq-accordion-panel">
                <p>${faq.a}</p>
              </div>
            </details>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
