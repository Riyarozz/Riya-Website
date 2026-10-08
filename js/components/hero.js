/**
 * HERO SECTION COMPONENT — minimal edition
 * Big name with per-letter reveal, rotating role line, interactive particle
 * canvas (see js/effects.js), two calls to action and a scroll cue.
 */

const HeroComponent = {
  render() {
    const profile = window.SITE_DATA.profile;

    // Split the name into words/letters so each letter can animate in
    const nameHtml = profile.name.split(' ').map((word, w) => `
      <span class="hero-word">${[...word].map((ch, i) => `
        <span class="hero-char" style="--i:${w * 6 + i}">${ch}</span>`).join('')}
      </span>`).join(' ');

    return `
      <section id="home" class="hero relative min-h-screen flex items-center overflow-hidden">
        <canvas id="hero-canvas" aria-hidden="true"></canvas>
        <div class="hero-vignette" aria-hidden="true"></div>

        <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-28 pb-20">
          <p class="hero-eyebrow fade-up" style="--d:.1s">
            <span class="pulse-dot"></span>${profile.experienceBadge}
          </p>

          <h1 class="hero-title" aria-label="${profile.name}">${nameHtml}</h1>

          <p class="hero-role fade-up" style="--d:.9s">
            <span class="text-slate-400">I'm a</span>
            <span id="hero-rotator" class="text-gradient" data-words='["Power BI Developer","PMO Professional","Business Analyst","Founder of The BlackIt"]'>Power BI Developer</span><span class="caret"></span>
          </p>

          <p class="hero-sub fade-up" style="--d:1.1s">${profile.headline}</p>

          <div class="flex flex-wrap items-center gap-4 fade-up" style="--d:1.3s">
            <a href="#projects" class="btn-primary magnetic">
              <span>View my work</span>
              <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
            </a>
            <a href="#contact" class="btn-ghost magnetic">Get in touch</a>
          </div>
        </div>

        <a href="#identity" class="scroll-cue" aria-label="Scroll down"><span></span></a>
      </section>
    `;
  },

  initEvents() {}
};

if (typeof window !== 'undefined') {
  window.HeroComponent = HeroComponent;
}
