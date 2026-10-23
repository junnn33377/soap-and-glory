export function renderMakeupFAQ() {
  const faqs = [
    {
      q: 'How does the Sexy Mother Pucker™ tingling plumping sensation work?',
      a: 'Sexy Mother Pucker™ features our proprietary Lipswell™ natural plant oil micro-infusion technology alongside Superfill™ moisture nanospheres. Within 30 to 60 seconds of application, micro-circulation is stimulated, creating a distinctive tingling or buzzing sensation. The nanospheres absorb water from your breath and environment, visibly swelling and expanding your pout up to 10x fuller without painful injections.'
    },
    {
      q: 'Is Thick & Fast™ High-Definition Mascara smudge-proof and safe for contact lens wearers?',
      a: 'Yes! Thick & Fast™ is ophthalmologist-tested, fragrance-free, and formulated with deep carbon-black film-forming polymers that resist smudging, flaking, and humidity. While not waterproof (it removes easily with warm water and cleanser without pulling lashes), it holds a curled lift all day without giving you panda eyes.'
    },
    {
      q: 'Will One Heck Of A Blot™ Mattifying Powder cause a white flashback in flash photos?',
      a: 'Not at all! One Heck Of A Blot™ is made with micronized translucent cornstarch and soft-focus spherical Kick-Ass™ polymers rather than heavy chalky talc or silica that reflect flash photography. It goes on completely sheer on all skin tones, blurring pores and locking down shine for an invisible velvet finish.'
    },
    {
      q: 'How do I choose between Archery™ triangular crayon and micro-felt tint?',
      a: 'You don’t have to choose—they are combined into one dual-ended pencil! Use the angled wax crayon side for shaping the brow body and shading sparser areas with soft buildable color. Then, use the ultra-fine micro-felt tip side to draw hyper-realistic, hair-like strokes through the front of the brow and arch tail.'
    },
    {
      q: 'Are Soap & Glory cosmetics tested on animals?',
      a: 'Never! Soap & Glory has been strictly cruelty-free since our inception in 2006. We do not test our finished cosmetics or cosmetic ingredients on animals, nor do we commission third parties to do so.'
    }
  ];

  return `
    <section class="section section--white" id="makeup-faq" aria-label="Makeup Frequently Asked Questions">
      <div class="container" style="max-width: 960px;">
        <div class="section-header">
          <div class="section-eyebrow" style="color: var(--sg-pink);">
            <span>💡</span>
            <span>BEAUTY INTEL</span>
          </div>
          <h2 class="section-title" style="white-space: nowrap; font-size: clamp(1.7rem, 3.2vw, 2.5rem);">Makeup &amp; Lip Plumping FAQs</h2>
          <p class="section-subtitle">
            Everything you need to know about our plumping formulas, application tricks, and clean cosmetic ethics.
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
