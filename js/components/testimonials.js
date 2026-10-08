/**
 * TESTIMONIALS COMPONENT
 * Renders editable client & colleague feedback recommendations.
 */

const TestimonialsComponent = {
  render() {
    const testimonials = window.SITE_DATA.testimonials;

    return `
      <section id="testimonials" class="py-24 relative overflow-hidden bg-slate-950/40 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-amber-400 uppercase border border-amber-500/30">
              Endorsements & Feedback
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              What Stakeholders Say
            </h2>
            <p class="text-xs text-slate-400 mt-2">
              Note: Testimonials below represent editable placeholder feedback that can be customized with actual endorsements.
            </p>
          </div>

          <!-- Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${testimonials.map(item => `
              <div class="glass-card p-8 rounded-3xl flex flex-col justify-between border-slate-800 hover:border-blue-500/40 transition-all">
                <div class="space-y-4">
                  <div class="text-amber-400 flex items-center gap-1">
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
                    <i data-lucide="star" class="w-4 h-4 fill-amber-400"></i>
                  </div>
                  <p class="text-xs text-slate-300 italic leading-relaxed">
                    "${item.quote}"
                  </p>
                </div>

                <div class="mt-8 pt-4 border-t border-slate-800 flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold flex items-center justify-center text-xs border border-blue-500/30 shrink-0">
                    ${item.name.charAt(0) || 'E'}
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-slate-100">${item.name}</h4>
                    <p class="text-[11px] text-slate-400">${item.role} • <span class="text-blue-400">${item.company}</span></p>
                  </div>
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
  window.TestimonialsComponent = TestimonialsComponent;
}
