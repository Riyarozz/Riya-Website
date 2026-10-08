/**
 * PROFESSIONAL EXPERIENCE & WIPRO SHOWCASE COMPONENT
 * Implements:
 * - 👩‍💻 Professional Experience
 * - WIPRO: Power BI Developer | PMO (4+ Years)
 * - Value Flow: Analytics → Reporting → PMO → Stakeholder Management → Business Insights
 * - Area 1: 📊 Power BI & Business Intelligence (9 detailed points)
 * - Area 2: 📋 PMO & Project Management (11 detailed points)
 * - Prominent Personal Brand Differentiator Callout Card
 */

const AboutComponent = {
  render() {
    const wipro = window.SITE_DATA.wiproExperience;
    const profile = window.SITE_DATA.profile;

    return `
      <section id="experience" class="py-24 relative overflow-hidden bg-slate-900/40">
        <!-- Ambient Background Glow -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-4 py-1.5 rounded-full glass-card text-xs font-black tracking-widest text-blue-400 uppercase border border-blue-500/30 glow-blue">
              👩‍💻 Professional Experience
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mt-5 tracking-tight">
              Enterprise Track Record at Wipro
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              ${wipro.tagline}
            </p>
          </div>

          <!-- Featured Wipro Card -->
          <div class="glass-card p-8 sm:p-12 rounded-3xl border border-blue-500/30 shadow-2xl relative overflow-hidden mb-16 glow-blue">
            <div class="absolute -top-16 -right-16 w-60 h-60 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <!-- Company & Role -->
              <div class="space-y-2">
                <div class="flex items-center gap-3">
                  <span class="px-3 py-1 rounded-lg bg-blue-600 text-white font-black text-xs uppercase tracking-wider">
                    ${wipro.company}
                  </span>
                  <span class="px-3 py-1 rounded-lg bg-slate-800 text-blue-400 font-mono text-xs font-bold border border-slate-700">
                    ${wipro.tenure}
                  </span>
                </div>
                <h3 class="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
                  ${wipro.role}
                </h3>
                <p class="text-xs sm:text-sm font-semibold text-purple-400">
                  Global Enterprise Technology & Business Operations
                </p>
              </div>

              <!-- Quick Metric Pill -->
              <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-4 shrink-0">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-black text-lg">
                  4+
                </div>
                <div>
                  <div class="text-xs text-slate-400 uppercase font-bold">Experience Tenure</div>
                  <div class="text-sm font-black text-slate-100">Wipro Enterprise Services</div>
                </div>
              </div>
            </div>

            <!-- Value Flow Timeline / Cards: Analytics → Reporting → PMO → Stakeholder Management → Business Insights -->
            <div class="py-8 border-b border-slate-800">
              <h4 class="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-6 text-center sm:text-left flex items-center gap-2">
                <i data-lucide="git-commit" class="w-4 h-4 text-blue-400"></i>
                <span>Enterprise Value Pipeline Flow</span>
              </h4>

              <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
                ${wipro.valuePipeline.map((step, idx) => `
                  <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group hover:-translate-y-1">
                    <div>
                      <div class="flex items-center justify-between mb-3">
                        <span class="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs font-black font-mono">
                          0${idx + 1}
                        </span>
                        <i data-lucide="${step.icon}" class="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors"></i>
                      </div>
                      <h5 class="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                        ${step.label}
                      </h5>
                    </div>
                    <p class="text-[11px] text-slate-400 mt-2 leading-tight">
                      ${step.desc}
                    </p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Two Distinct Areas: Power BI & BI vs PMO & Project Management -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
              ${wipro.areas.map(area => {
                const isBlue = area.color === 'blue';
                const badgeColor = isBlue ? 'text-blue-400 border-blue-500/30 bg-blue-500/10' : 'text-purple-400 border-purple-500/30 bg-purple-500/10';
                const iconColor = isBlue ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-purple-400 bg-purple-500/10 border-purple-500/20';

                return `
                  <div class="p-7 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-all">
                    <!-- Area Header -->
                    <div class="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
                      <div class="w-12 h-12 rounded-2xl flex items-center justify-center border ${iconColor}">
                        <i data-lucide="${area.icon}" class="w-6 h-6"></i>
                      </div>
                      <div>
                        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${badgeColor}">
                          ${area.badge}
                        </span>
                        <h4 class="text-xl font-black text-slate-100 mt-1">
                          ${area.title}
                        </h4>
                      </div>
                    </div>

                    <p class="text-xs text-slate-400 mb-6 leading-relaxed">
                      ${area.summary}
                    </p>

                    <!-- Bullet Checklist -->
                    <div class="space-y-3">
                      ${area.points.map(pt => `
                        <div class="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                          <span class="leading-relaxed font-medium">${pt}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- KEY DIFFERENTIATOR CALLOUT CARD -->
            <div class="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/60 via-purple-950/50 to-slate-950/80 border border-blue-500/30 flex flex-col md:flex-row items-center gap-6">
              <div class="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-lg">
                <i data-lucide="sparkles" class="w-7 h-7"></i>
              </div>
              <div class="space-y-1.5 text-center md:text-left flex-1">
                <span class="text-xs font-black uppercase tracking-wider text-amber-400">
                  ⭐ Core Personal Brand Differentiator
                </span>
                <h4 class="text-lg sm:text-xl font-black text-slate-100">
                  ${wipro.differentiator.quote}
                </h4>
                <p class="text-xs sm:text-sm text-slate-300">
                  ${wipro.differentiator.sub}
                </p>
              </div>
              <a href="#contact" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all">
                Let's Connect
              </a>
            </div>

          </div>

        </div>
      </section>
    `;
  },

  initEvents() {}
};

// Aliased as ExperienceComponent
const ExperienceComponent = AboutComponent;

if (typeof window !== 'undefined') {
  window.AboutComponent = AboutComponent;
  window.ExperienceComponent = ExperienceComponent;
}
