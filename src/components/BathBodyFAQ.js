export function renderBathBodyFAQ() {
  const faqs = [
    {
      q: 'How often should I use a Soap & Glory body scrub or exfoliator?',
      a: 'For radiant, touchably smooth skin, use an exfoliating body scrub (such as The Scrub Of Your Life™ or Flake Away™) 2 to 3 times weekly in the bath or shower. Gently buff in circular motions over rough areas like elbows, knees, and shins to eliminate dead skin cells before applying body butter.'
    },
    {
      q: 'What is the difference between The Righteous Butter™ body butter and body lotions?',
      a: 'The Righteous Butter™ is an ultra-nourishing, whipped body butter formulated with shea butter, aloe vera, and rosehip seed oil to provide up to 72 hours of intensive moisture for very dry skin. In contrast, our daily body lotions (like Smoothie Star™) feature a lighter, fast-absorbing texture ideal for quick morning hydration.'
    },
    {
      q: 'What makes Clean On Me™ body wash and shower gel so hydrating?',
      a: 'Clean On Me™ is formulated with a built-in body lotion and natural mandarin peel extract. It transforms into a rich, velvety lather that leaves skin feeling thoroughly cleansed, silky soft, and delicately fragranced without the tight, stripping feeling of ordinary soaps.'
    },
    {
      q: 'How does Heel Genius™ Foot Cream work on dry, calloused feet?',
      a: 'Heel Genius™ contains fruit acid AHAs (glycolic and lactic acid) that gently dissolve rough, calloused dead skin cells while macadamia oil softens dry heels. For best results, massage generously into clean feet before bed and slip on cotton socks overnight.'
    },
    {
      q: 'Are Soap & Glory body washes, scrubs, and butters cruelty-free?',
      a: 'Yes, 100%! Soap & Glory does not test on animals, nor do we commission third parties to do so. Our entire bath and body range is Leaping Bunny certified cruelty-free.'
    },
    {
      q: 'Can I purchase authentic Soap & Glory body products with Prime shipping?',
      a: 'Yes! All product buttons on our website link directly to official, verified Amazon listings eligible for fast Prime next-day shipping and authentic manufacturer fulfillment.'
    }
  ];

  return `
    <section class="section section--white" id="bath-body-faq" aria-label="Frequently Asked Questions About Soap and Glory Bath and Body">
      <div class="container" style="max-width: 860px;">
        <div class="section-header">
          <div class="section-eyebrow">
            <span>❓</span>
            <span>BATH &amp; BODY ADVICE</span>
          </div>
          <h2 class="section-title">Frequently Asked Questions</h2>
          <p class="section-subtitle">
            Everything you need to know about formulas, scents, body scrubs, and 72-hour moisture.
          </p>
        </div>

        <div class="faq-accordion" role="region" aria-label="FAQ Accordion">
          ${faqs.map((item, idx) => `
            <div class="faq-accordion-item ${idx === 0 ? 'is-open' : ''}">
              <button 
                class="faq-accordion-trigger" 
                aria-expanded="${idx === 0}" 
                aria-controls="bath-faq-panel-${idx}"
                id="bath-faq-trigger-${idx}"
              >
                <span>${item.q}</span>
                <span class="faq-icon" aria-hidden="true">${idx === 0 ? '−' : '+'}</span>
              </button>
              <div 
                class="faq-accordion-panel" 
                id="bath-faq-panel-${idx}" 
                role="region" 
                aria-labelledby="bath-faq-trigger-${idx}"
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
