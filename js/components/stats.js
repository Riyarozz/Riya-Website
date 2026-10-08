/**
 * PROFESSIONAL IDENTITY COMPONENT
 * Section: Where Data Meets Business & Delivery
 * Features:
 * - 01 — Data & Analytics (Power BI • Business Intelligence • Data Visualization • Reporting)
 * - 02 — Project Management (PMO • Governance • Project Tracking • Risk & Issue Management)
 * - 03 — Business Analysis (Requirements • Stakeholder Management • Process Understanding • Business Insights)
 * - 04 — Entrepreneurship (The BlackIt • Technology Solutions • Innovation • Digital Transformation)
 */

const IdentityComponent = {
  render() {
    const identity = window.SITE_DATA.identity;

    return `
      <section id="identity" class="py-24 relative overflow-hidden bg-slate-950/70 border-y border-white/10">
        <!-- Background Ambient Glow -->
        <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/15 to-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-4 py-1.5 rounded-full glass-card text-xs font-black tracking-widest text-blue-400 uppercase border border-blue-500/30 glow-blue">
              🚀 Professional Identity
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mt-5 tracking-tight">
              ${identity.title}
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              ${identity.subtitle}
            </p>
          </div>

          <!-- 4 Core Identity Pillars Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${identity.pillars.map((pillar) => {
              const borderColors = {
                blue: "hover:border-blue-500/50 hover:shadow-blue-500/10",
                purple: "hover:border-purple-500/50 hover:shadow-purple-500/10",
                emerald: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
                rose: "hover:border-rose-500/50 hover:shadow-rose-500/10"
              };
              const iconColors = {
                blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
                emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                rose: "bg-rose-500/10 text-rose-400 border-rose-500/20"
              };
              const tagColors = {
                blue: "text-blue-400 border-blue-500/30 bg-blue-500/10",
                purple: "text-purple-400 border-purple-500/30 bg-purple-500/10",
                emerald: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
                rose: "text-rose-400 border-rose-500/30 bg-rose-500/10"
              };

              return `
                <div class="glass-card p-6 sm:p-7 rounded-3xl flex flex-col justify-between group transition-all duration-300 ${borderColors[pillar.color]} border border-slate-800 hover:-translate-y-2 shadow-xl">
                  <div>
                    <!-- Top Pill & Pillar Number -->
                    <div class="flex items-center justify-between mb-5">
                      <span class="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider border ${tagColors[pillar.color]}">
                        ${pillar.number}
                      </span>
                      <div class="w-11 h-11 rounded-2xl flex items-center justify-center border ${iconColors[pillar.color]} group-hover:scale-110 transition-transform">
                        <i data-lucide="${pillar.icon}" class="w-5 h-5"></i>
                      </div>
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-black text-slate-100 group-hover:text-blue-400 transition-colors">
                      ${pillar.title}
                    </h3>

                    <!-- Key Skills Text -->
                    <p class="text-xs font-semibold text-slate-400 mt-2 mb-4 leading-relaxed font-mono">
                      ${pillar.skillsText}
                    </p>

                    <!-- Bullet Details -->
                    <div class="space-y-2 pt-3 border-t border-slate-800/80">
                      ${pillar.details.map(det => `
                        <div class="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                          <i data-lucide="check" class="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5"></i>
                          <span>${det}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Bottom Accent Bar -->
                  <div class="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span class="uppercase tracking-wider">Core Competency</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

        </div>
      </section>
    `;
  },

  initEvents() {}
};

// Aliased as StatsComponent for pipeline compatibility
const StatsComponent = IdentityComponent;

if (typeof window !== 'undefined') {
  window.IdentityComponent = IdentityComponent;
  window.StatsComponent = StatsComponent;
}
