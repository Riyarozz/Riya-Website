/**
 * SKILLS COMPONENT
 * Renders interactive skill matrices and proficiencies across Analytics, PMO, BA, and Tech.
 */

const SkillsComponent = {
  render() {
    const skillGroups = window.SITE_DATA.skills;

    return `
      <section id="skills" class="py-24 relative overflow-hidden bg-slate-950/60 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-blue-400 uppercase border border-blue-500/30">
              Technical & Domain Matrix
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              Skills & Competencies
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              Structured breakdown of analytical tools, project governance methodologies, and digital frameworks.
            </p>
          </div>

          <!-- Skill Category Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${skillGroups.map(group => `
              <div class="glass-card p-8 rounded-3xl border-slate-800 hover:border-blue-500/40 transition-all">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <i data-lucide="${group.icon}" class="w-6 h-6"></i>
                  </div>
                  <h3 class="text-xl font-bold text-slate-100">${group.category}</h3>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${group.items.map(skill => `
                    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                      <span class="text-xs font-semibold text-slate-200">${skill.name}</span>
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold ${
                        skill.level === 'Expert' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                        skill.level === 'Advanced' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                        'bg-slate-800 text-slate-400'
                      }">
                        ${skill.level}
                      </span>
                    </div>
                  `).join('')}
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
  window.SkillsComponent = SkillsComponent;
}
