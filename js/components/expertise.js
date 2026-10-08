/**
 * EXPERTISE COMPONENT ("What I Do")
 * Renders 5 detailed expertise domain cards with skill tags, icons, and hover animations.
 */

const ExpertiseComponent = {
  render() {
    const items = window.SITE_DATA.expertise;

    return `
      <section id="expertise" class="py-24 bg-slate-950/40 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-purple-400 uppercase border border-purple-500/30">
              Core Capabilities
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              What I Do
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              A comprehensive toolkit uniting technical analytical skills with structured project leadership and entrepreneurial strategy.
            </p>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${items.map(item => `
              <div class="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300">
                <div>
                  <!-- Icon Header -->
                  <div class="flex items-center justify-between mb-6">
                    <div class="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all shadow-md">
                      <i data-lucide="${item.icon}" class="w-7 h-7"></i>
                    </div>
                    <span class="w-2.5 h-2.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors"></span>
                  </div>

                  <!-- Title & Subtitle -->
                  <h3 class="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                    ${item.title}
                  </h3>
                  <p class="text-xs text-slate-400 mt-1 mb-6 leading-relaxed">
                    ${item.subtitle}
                  </p>

                  <!-- Skills List Chips -->
                  <div class="flex flex-wrap gap-2 pt-2">
                    ${item.skills.map(skill => `
                      <span class="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300 group-hover:border-slate-700 transition-colors">
                        ${skill}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <div class="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Explore Capabilities</span>
                  <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            `).join('')}
          </div>

        </div>
      </section>
    `;
  },

  initEvents() {}
};

if (typeof window !== 'undefined') {
  window.ExpertiseComponent = ExpertiseComponent;
}
