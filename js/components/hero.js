/**
 * HERO SECTION COMPONENT
 * Profile: RIYA ROSE SAJI
 * Features:
 * - 4+ Years of Professional Experience at Wipro badge
 * - Tagline & Positioning: Turning Data into Insights. Projects into Outcomes. Ideas into Technology.
 * - Bio: 4+ years at Wipro across Power BI, BI, PMO, analytics, reporting & stakeholder coordination
 * - 4 Explicit CTA Buttons: View My Experience, Explore My Projects, The BlackIt, Contact Me
 * - Prominent Personal Brand Statement Banner: "I don't just build dashboards. I understand the business problems behind the data."
 * - Interactive Live Intelligence Dashboard preview widget
 */

const HeroComponent = {
  render() {
    const profile = window.SITE_DATA.profile;

    return `
      <section id="home" class="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
        <!-- Ambient Glowing Radial Orbs -->
        <div class="gradient-orb-1"></div>
        <div class="gradient-orb-2"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Column: Copy & Action CTAs -->
            <div class="lg:col-span-7 space-y-7">
              
              <!-- Experience Badge -->
              <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border-blue-500/40 text-xs font-bold tracking-wide text-blue-400 glow-blue">
                <span class="pulse-dot"></span>
                <span>${profile.experienceBadge}</span>
              </div>

              <!-- Main Title / Name -->
              <div>
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 leading-[1.1]">
                  ${profile.name}
                </h1>
                <!-- Subtitle Roles -->
                <p class="text-lg sm:text-xl font-bold text-gradient mt-3">
                  ${profile.title}
                </p>
                <p class="text-xs sm:text-sm font-semibold text-slate-400 tracking-wider uppercase mt-1">
                  ${profile.subtitle}
                </p>
              </div>

              <!-- Central Positioning Statement -->
              <div class="p-4 rounded-2xl bg-blue-500/10 border-l-4 border-blue-500 text-slate-200">
                <p class="text-base sm:text-lg font-bold text-slate-100 italic">
                  “${profile.headline}”
                </p>
              </div>

              <!-- Professional Description -->
              <p class="text-base sm:text-lg text-slate-300 leading-relaxed">
                ${profile.subheadline}
              </p>

              <!-- 4 CTAs Requested by User -->
              <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-3 pt-2">
                <!-- Button 1: View My Experience -->
                <a href="#experience" class="px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="briefcase" class="w-4 h-4"></i>
                  <span>View My Experience</span>
                </a>

                <!-- Button 2: Explore My Projects -->
                <a href="#projects" class="px-5 py-3.5 rounded-xl glass-card hover:bg-slate-800/90 text-slate-100 font-bold text-sm border border-slate-700/80 hover:border-blue-400/60 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="layout-grid" class="w-4 h-4 text-blue-400"></i>
                  <span>Explore My Projects</span>
                </a>

                <!-- Button 3: The BlackIt -->
                <a href="#blackit" class="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm border border-purple-500/40 hover:border-purple-400 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="layers" class="w-4 h-4 text-purple-400"></i>
                  <span>The BlackIt</span>
                </a>

                <!-- Button 4: Contact Me -->
                <a href="#contact" class="px-5 py-3.5 rounded-xl glass-card hover:bg-blue-600/20 text-slate-200 hover:text-white font-bold text-sm border border-slate-700/80 hover:border-blue-400 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <i data-lucide="mail" class="w-4 h-4 text-emerald-400"></i>
                  <span>Contact Me</span>
                </a>
              </div>

              <!-- Quick Technology Chips -->
              <div class="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                <span class="text-slate-500 uppercase tracking-wider text-[11px] font-bold">Expertise:</span>
                <span class="flex items-center gap-1.5"><i data-lucide="bar-chart-2" class="w-3.5 h-3.5 text-amber-400"></i> Power BI</span>
                <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-3.5 h-3.5 text-purple-400"></i> PMO Operations</span>
                <span class="flex items-center gap-1.5"><i data-lucide="file-search" class="w-3.5 h-3.5 text-emerald-400"></i> Business Intelligence</span>
                <span class="flex items-center gap-1.5"><i data-lucide="rocket" class="w-3.5 h-3.5 text-rose-400"></i> The BlackIt Founder</span>
              </div>
            </div>

            <!-- Right Column: Interactive Live Intelligence Dashboard Widget -->
            <div class="lg:col-span-5 relative">
              <div class="dashboard-frame p-4 sm:p-6 space-y-4 glow-blue">
                
                <!-- Dashboard Header Bar -->
                <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div class="flex items-center gap-2">
                    <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span class="ml-2 text-xs font-bold text-slate-300 tracking-wide flex items-center gap-1.5">
                      <i data-lucide="activity" class="w-3.5 h-3.5 text-blue-400"></i>
                      POWER BI & PMO INTELLIGENCE
                    </span>
                  </div>
                  <span class="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                    4+ YRS WIPRO
                  </span>
                </div>

                <!-- KPI Metric Grid (Top Row) -->
                <div class="grid grid-cols-2 gap-3">
                  <!-- KPI 1: BI Reporting -->
                  <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/40 transition-colors">
                    <div class="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Enterprise BI Scope</span>
                      <i data-lucide="trending-up" class="w-3.5 h-3.5 text-emerald-400"></i>
                    </div>
                    <div class="text-xl font-extrabold text-slate-100 mt-1">100%</div>
                    <div class="text-[10px] text-emerald-400 font-medium mt-0.5">Automated Dashboards</div>
                  </div>

                  <!-- KPI 2: PMO Governance -->
                  <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/40 transition-colors">
                    <div class="flex items-center justify-between text-[11px] text-slate-400">
                      <span>PMO Milestone Rate</span>
                      <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-blue-400"></i>
                    </div>
                    <div class="text-xl font-extrabold text-slate-100 mt-1">96.4%</div>
                    <div class="text-[10px] text-blue-400 font-medium mt-0.5">Governance Compliance</div>
                  </div>
                </div>

                <!-- Interactive Mini Chart Container -->
                <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-semibold text-slate-300">Reporting & Variance Engine</span>
                    <span class="text-[10px] text-slate-400">Power BI Live Visual</span>
                  </div>
                  <div class="h-36 relative">
                    <canvas id="hero-mini-chart"></canvas>
                  </div>
                </div>

                <!-- Wipro & The BlackIt Strip -->
                <div class="p-3 rounded-xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 flex items-center justify-between text-xs">
                  <div class="flex items-center gap-2">
                    <div class="w-7 h-7 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400">
                      <i data-lucide="layers" class="w-4 h-4"></i>
                    </div>
                    <div>
                      <div class="font-bold text-slate-200">The BlackIt Initiative</div>
                      <div class="text-[10px] text-slate-400">Data • AI • Digital Solutions</div>
                    </div>
                  </div>
                  <span class="px-2 py-1 rounded bg-purple-500/20 text-purple-300 font-bold text-[10px]">
                    Founder
                  </span>
                </div>

              </div>
            </div>

          </div>

          <!-- PROMINENT PERSONAL-BRAND STATEMENT BANNER -->
          <div class="mt-14 p-6 sm:p-8 rounded-3xl glass-card border border-blue-500/30 bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-slate-900/60 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-blue-600/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                <i data-lucide="quote" class="w-8 h-8 text-white"></i>
              </div>
              <div class="space-y-2 text-center md:text-left flex-1">
                <h3 class="text-xl sm:text-2xl font-black text-slate-100 tracking-tight">
                  ${profile.brandStatement}
                </h3>
                <p class="text-sm sm:text-base text-blue-300/90 font-medium leading-relaxed">
                  ${profile.brandStatementSub}
                </p>
              </div>
              <div class="shrink-0">
                <a href="#experience" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-600/25 transition-all">
                  <span>Explore My Work</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;
  },

  initEvents() {
    // Render mini chart on hero component initialization
    setTimeout(() => {
      if (window.ChartRenderer) {
        window.ChartRenderer.renderExecutiveChart('hero-mini-chart');
      }
    }, 100);
  }
};

if (typeof window !== 'undefined') {
  window.HeroComponent = HeroComponent;
}
