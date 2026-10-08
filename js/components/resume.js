/**
 * RESUME COMPONENT ("Professional Journey & Resume")
 * Renders resume download & in-app modal resume preview capabilities.
 */

const ResumeComponent = {
  render() {
    const profile = window.SITE_DATA.profile;

    return `
      <section id="resume" class="py-16 relative bg-slate-950/80 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div class="glass-card p-8 sm:p-12 rounded-3xl border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 glow-blue">
            <div class="flex items-center gap-6">
              <div class="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <i data-lucide="file-text" class="w-8 h-8"></i>
              </div>
              <div>
                <span class="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">Curriculum Vitae</span>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-100">Professional Resume</h3>
                <p class="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                  Comprehensive overview of technical Power BI proficiencies, PMO governance engagements, business analysis case studies, and career milestones.
                </p>
              </div>
            </div>

            <!-- Resume Action Buttons -->
            <div class="flex items-center gap-4 shrink-0">
              <button id="view-resume-modal-btn" class="px-5 py-3 rounded-xl glass-card text-slate-200 hover:text-white text-xs font-bold border-slate-700 transition-all flex items-center gap-2">
                <i data-lucide="eye" class="w-4 h-4 text-blue-400"></i>
                <span>View Resume</span>
              </button>

              <a href="${profile.resumeUrl}" download="Resume_${profile.name.replace(/\s+/g, '_')}.pdf" class="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2">
                <i data-lucide="download" class="w-4 h-4"></i>
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </div>

        <!-- In-App Resume Preview Modal -->
        <div id="resume-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 modal-overlay">
          <div class="modal-content max-w-4xl w-full glass-panel p-6 sm:p-8 rounded-3xl border-slate-700 max-h-[90vh] overflow-y-auto relative">
            <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div class="flex items-center gap-3">
                <i data-lucide="file-text" class="w-6 h-6 text-red-400"></i>
                <h3 class="text-xl font-extrabold text-slate-100">Resume Overview</h3>
              </div>
              <button id="close-resume-modal" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div class="space-y-6 text-xs text-slate-300">
              <!-- Summary Header -->
              <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
                <h4 class="text-2xl font-extrabold text-slate-100">${profile.name}</h4>
                <p class="text-xs font-semibold text-blue-400">${profile.title}</p>
                <p class="text-slate-400 text-[11px]">${profile.email} • ${profile.location}</p>
              </div>

              <!-- Executive Summary -->
              <div class="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <strong class="text-blue-400 uppercase text-[10px] block mb-1">Executive Summary:</strong>
                <p class="leading-relaxed text-slate-300">${profile.subheadline}</p>
              </div>

              <!-- Core Competencies -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <strong class="text-slate-100 block text-xs">Power BI & DAX</strong>
                  <span class="text-[10px] text-slate-400">Enterprise BI</span>
                </div>
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <strong class="text-slate-100 block text-xs">PMO Governance</strong>
                  <span class="text-[10px] text-slate-400">Risk & Status</span>
                </div>
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <strong class="text-slate-100 block text-xs">Business Analysis</strong>
                  <span class="text-[10px] text-slate-400">BRD & UAT</span>
                </div>
                <div class="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center">
                  <strong class="text-slate-100 block text-xs">The BlackIt</strong>
                  <span class="text-[10px] text-slate-400">Tech & Innovation</span>
                </div>
              </div>

              <div class="pt-4 flex justify-end">
                <a href="${profile.resumeUrl}" download class="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2">
                  <i data-lucide="download" class="w-4 h-4"></i>
                  <span>Download Complete PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </section>
    `;
  },

  initEvents() {
    const modal = document.getElementById('resume-modal');
    document.getElementById('view-resume-modal-btn')?.addEventListener('click', () => {
      modal?.classList.remove('hidden');
      modal?.classList.add('active');
    });

    document.getElementById('close-resume-modal')?.addEventListener('click', () => {
      modal?.classList.add('hidden');
      modal?.classList.remove('active');
    });
  }
};

if (typeof window !== 'undefined') {
  window.ResumeComponent = ResumeComponent;
}
