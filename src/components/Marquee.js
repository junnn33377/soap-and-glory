export function renderMarquee() {
  const slogans = [
    { text: "SOAPER HEROES WEAR BUBBLES", icon: "🫧" },
    { text: "72-HR MOISTURE LOCK", icon: "💧" },
    { text: "100% LEAPING BUNNY CRUELTY-FREE", icon: "🐰" },
    { text: "ICONIC BRITISH GLAMOUR", icon: "🇬🇧" },
    { text: "ZERO GREASY RESIDUE", icon: "✨" },
    { text: "FORMULATED WITH WIT & BOTANICALS", icon: "🌸" },
    { text: "SHEA BUTTER & ALOE VERA PERFECTION", icon: "💖" }
  ];

  const content = slogans.map(s => `
    <span class="marquee-item">
      <span class="marquee-icon">${s.icon}</span>
      <span>${s.text}</span>
    </span>
  `).join('');

  return `
    <aside class="marquee-strip" aria-label="Brand Slogans Ticker">
      <div class="marquee-track">
        ${content}
        ${content}
      </div>
    </aside>
  `;
}
