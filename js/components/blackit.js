/**
 * THE BLACKIT VENTURE SECTION COMPONENT
 * Profile: RIYA ROSE SAJI — Co-Founder
 * Features:
 * - Placed after professional experience
 * - Co-Founder — The BlackIt
 * - Narrative: "Beyond my professional role, I am also one of the founders of The BlackIt, a technology-focused initiative."
 * - Our Focus: Data & Analytics, AI & Automation, Digital Solutions, Technology Consulting, Business Intelligence
 */

const BlackITComponent = {
  render() {
    const blackit = window.SITE_DATA.blackit;
    const focusItems = blackit.focus || [];

    const focusColorMap = {
      blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400', hoverBg: 'group-hover:bg-blue-600', tag: 'text-blue-400 bg-blue-500/10 border-blue-500/30' },
      purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400', hoverBg: 'group-hover:bg-purple-600', tag: 'text-purple-400 bg-purple-500/10 border-purple-500/30' },
      cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400', hoverBg: 'group-hover:bg-cyan-600', tag: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30' },
      emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', hoverBg: 'group-hover:bg-emerald-600', tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' },
      amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400', hoverBg: 'group-hover:bg-amber-600', tag: 'text-amber-400 bg-amber-500/10 border-amber-500/30' }
    };

    return `
      <section id="blackit" class="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">
        <!-- Distinct High-Tech Radial Orb -->
        <div class="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Venture Badge & Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            
            <!-- The BlackIt Logo Icon -->
            <div class="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-2xl shadow-blue-500/20 group hover:scale-105 transition-transform">
              <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            </div>

            <span class="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-xs font-black tracking-widest text-blue-400 uppercase">
              🖤 ENTREPRENEURIAL INITIATIVE
            </span>

            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mt-4 tracking-tight">
              ${blackit.name}
            </h2>
            
            <p class="text-xl font-black text-gradient mt-2">
              ${blackit.tagline}
            </p>
            
            <!-- Founder Role -->
            <p class="text-base font-bold text-blue-400 mt-1">
              ${blackit.role}
            </p>

            <!-- Founder Quote Statement -->
            <div class="mt-6 p-6 rounded-2xl glass-card border border-blue-500/30 max-w-2xl mx-auto text-left glow-blue">
              <p class="text-base text-slate-200 leading-relaxed italic">
                "${blackit.overview}"
              </p>
            </div>
          </div>

          <!-- OUR FOCUS SECTION -->
          <div class="mb-16">
            <div class="text-center mb-10">
              <span class="text-xs font-black uppercase tracking-widest text-purple-400 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                Core Capabilities & Scope
              </span>
              <h3 class="text-2xl sm:text-3xl font-black text-slate-100 mt-2">
                Our Focus
              </h3>
              <p class="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
                Exploring innovative solutions across enterprise data, intelligent workflows, and modern software engineering.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              ${focusItems.map(focus => {
      const c = focusColorMap[focus.color] || focusColorMap.blue;
      return `
                  <div class="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between shadow-xl">
                    <div>
                      <div class="w-12 h-12 rounded-2xl ${c.bg} border ${c.border} ${c.text} flex items-center justify-center mb-5 ${c.hoverBg} group-hover:text-white transition-all shadow-md">
                        <i data-lucide="${focus.icon}" class="w-6 h-6"></i>
                      </div>
                      <h4 class="text-sm font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                        ${focus.label}
                      </h4>
                    </div>

                    <div class="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-[10px] font-bold text-blue-400 uppercase tracking-wider">
                      <span>The BlackIt Scope</span>
                    </div>
                  </div>
                `;
    }).join('')}
            </div>
          </div>

          <!-- Vision & Mission Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- Vision -->
            <div class="glass-card p-8 rounded-3xl border-slate-800 hover:border-blue-500/40 transition-all">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <i data-lucide="eye" class="w-5 h-5"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-100">Our Vision</h4>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${blackit.vision}
              </p>
            </div>

            <!-- Mission -->
            <div class="glass-card p-8 rounded-3xl border-slate-800 hover:border-purple-500/40 transition-all">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <i data-lucide="target" class="w-5 h-5"></i>
                </div>
                <h4 class="text-xl font-bold text-slate-100">Our Mission</h4>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                ${blackit.mission}
              </p>
            </div>
          </div>

          <!-- Technology Pillars -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            ${(blackit.pillars || []).map(pillar => `
              <div class="glass-card p-7 rounded-3xl border-slate-800 hover:border-blue-500/40 transition-all group">
                <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <i data-lucide="${pillar.icon}" class="w-6 h-6"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">${pillar.title}</h4>
                <p class="text-xs text-slate-400 leading-relaxed">${pillar.description}</p>
              </div>
            `).join('')}
          </div>

          <!-- Bottom CTA Banner for The BlackIt -->
          <div class="glass-card p-8 sm:p-12 rounded-3xl border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8 glow-blue">
            <div>
              <span class="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">Collaborate with The BlackIt</span>
              <h4 class="text-2xl sm:text-3xl font-black text-slate-100">Interested in Partnering or Exploring Technology Solutions?</h4>
              <p class="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl">
                We work with forward-looking businesses and teams to architect custom analytical platforms, automated workflows, and digital solutions.
              </p>
            </div>

            <a href="#contact" class="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all shrink-0 flex items-center gap-2">
              <span>Connect with The BlackIt</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>

        </div>
      </section>
    `;
  },

  initEvents() { }
};

if (typeof window !== 'undefined') {
  window.BlackITComponent = BlackITComponent;
}
