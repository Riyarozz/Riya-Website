/**
 * CAREER JOURNEY COMPONENT
 * Section: 📈 Career Journey
 * Visual Roadmap:
 * - 2022 🎓 Started professional journey
 * - Wipro 💼 Power BI / Business Intelligence
 * - PMO Experience 📋 Project Governance & Business Operations
 * - 4+ Years Experience 📊 Data + Business + Project Management
 * - The BlackIt 🚀 Founder / Technology Entrepreneur
 */

const TimelineComponent = {
  render() {
    const journey = window.SITE_DATA.careerJourney;

    return `
      <section id="journey" class="py-24 relative overflow-hidden bg-slate-950/70 border-t border-white/10">
        <!-- Ambient Radial Glow -->
        <div class="absolute -top-32 right-1/4 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-4 py-1.5 rounded-full glass-card text-xs font-black tracking-widest text-purple-400 uppercase border border-purple-500/30 glow-blue">
              📈 Career Milestones
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 mt-5 tracking-tight">
              Career Journey
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed">
              A progressive evolution uniting data intelligence, structured governance, and entrepreneurial leadership.
            </p>
          </div>

          <!-- Visual Career Journey Flowchart Cards -->
          <div class="max-w-4xl mx-auto relative">
            
            <!-- Center Vertical Connector Spine (visible on sm+) -->
            <div class="hidden sm:block absolute left-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-rose-500 -translate-x-1/2 rounded-full"></div>

            <div class="space-y-8 sm:space-y-12">
              ${journey.map((step, idx) => {
                const isEven = idx % 2 === 0;
                const isLast = idx === journey.length - 1;

                return `
                  <div class="relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''} group">
                    
                    <!-- Center Timeline Icon Bubble -->
                    <div class="hidden sm:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-2xl bg-slate-900 border-2 border-blue-500 group-hover:border-purple-400 items-center justify-center text-blue-400 group-hover:text-purple-300 shadow-xl shadow-blue-500/20 group-hover:scale-110 transition-all">
                      <i data-lucide="${step.icon}" class="w-5 h-5"></i>
                    </div>

                    <!-- Step Content Card -->
                    <div class="w-full sm:w-1/2 ${isEven ? 'sm:pl-12' : 'sm:pr-12'}">
                      <div class="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 group-hover:-translate-y-1 shadow-xl">
                        
                        <!-- Top Header Pill -->
                        <div class="flex items-center justify-between gap-3 mb-3">
                          <span class="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-mono text-xs font-black border border-blue-500/30">
                            ${step.year}
                          </span>
                          <span class="text-[10px] font-black uppercase tracking-wider text-slate-400">
                            ${step.badge}
                          </span>
                        </div>

                        <!-- Title & Subtitle -->
                        <h3 class="text-lg sm:text-xl font-black text-slate-100 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                          <i data-lucide="${step.icon}" class="w-4 h-4 sm:hidden text-blue-400 shrink-0"></i>
                          <span>${step.title}</span>
                        </h3>
                        <p class="text-xs font-bold text-purple-400 mt-0.5 mb-3">
                          ${step.subtitle}
                        </p>

                        <!-- Description -->
                        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          ${step.description}
                        </p>

                      </div>
                    </div>

                    <!-- Mobile Downward Connector Arrow -->
                    ${!isLast ? `
                      <div class="sm:hidden flex justify-center py-2 text-blue-400">
                        <i data-lucide="arrow-down" class="w-5 h-5 animate-bounce"></i>
                      </div>
                    ` : ''}

                  </div>
                `;
              }).join('')}
            </div>

          </div>

          <!-- Bottom Summary Badge -->
          <div class="mt-16 text-center">
            <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300">
              <span class="font-bold text-blue-400">Current Focus:</span>
              <span>Power BI Analytics • Enterprise PMO • The BlackIt Entrepreneurship</span>
            </div>
          </div>

        </div>
      </section>
    `;
  },

  initEvents() {}
};

// Aliased as JourneyComponent
const JourneyComponent = TimelineComponent;

if (typeof window !== 'undefined') {
  window.TimelineComponent = TimelineComponent;
  window.JourneyComponent = JourneyComponent;
}
