export function renderFragranceFAQ() {
  const faqs = [
    {
      q: 'What does the iconic Soap & Glory Original Pink™ smell like?',
      a: 'Original Pink™ is a sophisticated British fruity-chypre fragrance. It opens with sparkling Italian bergamot, fresh mandarin, and crushed green leaves, blooms into an elegant heart of summer rose, jasmine, and violet, and settles into a warm, sensual base of patchouli, oakmoss, amber, and creamy sandalwood.'
    },
    {
      q: 'How do I make Soap & Glory body mist and body spray last all day?',
      a: 'The secret to 12+ hour staying power is lipid scent layering. Always apply a matching scented body butter (such as The Righteous Butter™) right after bathing while skin is warm and damp. The rich shea and coconut lipids trap volatile fragrance molecules. Finish by spritzing your body mist over pulse points (wrists, base of neck) and lightly through hair.'
    },
    {
      q: 'What is the difference between a fragrance spritz, body mist, and perfume?',
      a: 'A body mist or fragrance spritz contains a lighter concentration of perfume oils (typically 3–5%) blended in a hydrating, non-drying base. This allows you to spritz generously all over the body throughout the day. An Eau de Parfum contains a higher oil concentration (15–20%) designed for intense, targeted application on pulse points.'
    },
    {
      q: 'Which Soap & Glory fragrance is best for sweet gourmand or vanilla lovers?',
      a: 'Smoothie Star™ is our award-winning warm gourmand fragrance. Formulated with sweet almond oil, golden honey glaze, rich cocoa butter, and warm vanilla pod, it delivers an intoxicating aroma reminiscent of a luxury French patisserie.'
    },
    {
      q: 'Can I mix and layer different Soap & Glory fragrance lines together?',
      a: 'Absolutely! Our British perfumers designed the scents to harmonize beautifully. A popular combination is washing with the tropical coconut of Magnificoco™ and layering with the warm almond richness of Smoothie Star™ body lotion for a sun-kissed coconut-bakery blend.'
    },
    {
      q: 'Are Soap & Glory fragrance mists and body sprays cruelty-free?',
      a: 'Yes, 100%! Soap & Glory does not test on animals, nor do we commission third parties to do so. All our fragrance mists, body sprays, and bath essentials are Leaping Bunny certified cruelty-free.'
    }
  ];

  return `
    <section class="section section--white" id="fragrance-faq" aria-label="Frequently Asked Questions About Soap and Glory Fragrances">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>❓</span>
            <span>FRAGRANCE EXPERTISE &amp; ADVICE</span>
          </div>
          <h2 class="section-title">Frequently Asked Fragrance Questions</h2>
          <p class="section-subtitle">
            Everything you need to know about scent longevity, olfactory notes, body mists, and layering techniques.
          </p>
        </div>

        <div class="faq-accordion" role="region" aria-label="Fragrance FAQ Accordion">
          ${faqs.map((item, idx) => `
            <div class="faq-accordion-item ${idx === 0 ? 'is-open' : ''}">
              <button 
                class="faq-accordion-trigger" 
                aria-expanded="${idx === 0}" 
                aria-controls="frag-faq-panel-${idx}"
                id="frag-faq-trigger-${idx}"
              >
                <span>${item.q}</span>
                <span class="faq-icon" aria-hidden="true">${idx === 0 ? '−' : '+'}</span>
              </button>
              <div 
                class="faq-accordion-panel" 
                id="frag-faq-panel-${idx}" 
                role="region" 
                aria-labelledby="frag-faq-trigger-${idx}"
                style="display: ${idx === 0 ? 'block' : 'none'};"
              >
                <p>${item.a}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
