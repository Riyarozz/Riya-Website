/**
 * FOOTER COMPONENT
 * Renders sophisticated brand footer with links, copyright, and tagline.
 */

const FooterComponent = {
  render() {
    const profile = window.SITE_DATA.profile;

    return `
      <footer class="py-12 bg-slate-950 border-t border-white/10 text-xs text-slate-400">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <!-- Brand -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
              </div>
              <div>
                <h4 class="font-extrabold text-base text-slate-100">${profile.name}</h4>
                <p class="text-[11px] text-blue-400 font-semibold">${profile.title}</p>
              </div>
            </div>

            <!-- Social Links -->
            <div class="flex items-center gap-4">
              <a href="${profile.linkedin}" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 hover:text-white transition-colors">
                <i data-lucide="linkedin" class="w-4 h-4"></i>
              </a>
              <a href="${profile.github}" target="_blank" rel="noopener" class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 hover:text-white transition-colors">
                <i data-lucide="github" class="w-4 h-4"></i>
              </a>
              <a href="mailto:${profile.email}" class="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 hover:text-white transition-colors">
                <i data-lucide="mail" class="w-4 h-4"></i>
              </a>
            </div>
          </div>

          <!-- Links & Copyright Row -->
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p>© 2026 ${profile.name}. All rights reserved.</p>
              <p class="text-[11px] text-slate-400 mt-0.5">Built with data, technology & purpose.</p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-400">
              <a href="#home" class="hover:text-blue-400 transition-colors">Home</a>
              <a href="#identity" class="hover:text-blue-400 transition-colors">Identity</a>
              <a href="#experience" class="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#powerbi" class="hover:text-blue-400 transition-colors">Power BI</a>
              <a href="#pmo" class="hover:text-blue-400 transition-colors">PMO Suite</a>
              <a href="#journey" class="hover:text-blue-400 transition-colors">Career Journey</a>
              <a href="#blackit" class="hover:text-blue-400 transition-colors">The BlackIt</a>
              <a href="#projects" class="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

        </div>
      </footer>
    `;
  },

  initEvents() {}
};

if (typeof window !== 'undefined') {
  window.FooterComponent = FooterComponent;
}
