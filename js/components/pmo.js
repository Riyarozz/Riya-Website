/**
 * PMO DASHBOARD COMPONENT ("Where Data Meets Project Management")
 * Renders project management governance dashboard, status indicators (On Track, At Risk, Delayed),
 * budget tracking, risk matrix, and Gantt progress charts.
 */

const PMOComponent = {
  render() {
    const pmo = window.SITE_DATA.pmoDashboard;

    return `
      <section id="pmo" class="py-24 bg-slate-950/60 relative border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-emerald-400 uppercase border border-emerald-500/30">
              PMO & Governance Integration
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              ${pmo.title}
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              ${pmo.subtitle}
            </p>
          </div>

          <!-- Conceptual PMO Control Panel -->
          <div class="dashboard-frame p-6 sm:p-8 rounded-3xl border-slate-800 space-y-8">
            
            <!-- PMO Health Metrics Overview -->
            <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
              <!-- On Track -->
              <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span>ON TRACK</span>
                  <i data-lucide="check-circle-2" class="w-4 h-4"></i>
                </div>
                <div class="text-3xl font-extrabold text-slate-100 mt-2">${pmo.healthSummary.onTrack}</div>
                <span class="text-[10px] text-slate-400 mt-1 block">Active Streams</span>
              </div>

              <!-- At Risk -->
              <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span>AT RISK</span>
                  <i data-lucide="alert-circle" class="w-4 h-4"></i>
                </div>
                <div class="text-3xl font-extrabold text-slate-100 mt-2">${pmo.healthSummary.atRisk}</div>
                <span class="text-[10px] text-slate-400 mt-1 block">Mitigation Pending</span>
              </div>

              <!-- Delayed -->
              <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span>DELAYED</span>
                  <i data-lucide="alert-triangle" class="w-4 h-4"></i>
                </div>
                <div class="text-3xl font-extrabold text-slate-100 mt-2">${pmo.healthSummary.delayed}</div>
                <span class="text-[10px] text-slate-400 mt-1 block">Escalated to Steering</span>
              </div>

              <!-- Total Budget -->
              <div class="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span>PORTFOLIO VALUE</span>
                  <i data-lucide="dollar-sign" class="w-4 h-4"></i>
                </div>
                <div class="text-3xl font-extrabold text-slate-100 mt-2">${pmo.healthSummary.totalBudget}</div>
                <span class="text-[10px] text-slate-400 mt-1 block">Approved Allocation</span>
              </div>

              <!-- Spent -->
              <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 col-span-2 md:col-span-1">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span>CUMULATIVE SPEND</span>
                  <i data-lucide="pie-chart" class="w-4 h-4"></i>
                </div>
                <div class="text-3xl font-extrabold text-slate-100 mt-2">${pmo.healthSummary.budgetSpent}</div>
                <span class="text-[10px] text-slate-400 mt-1 block">62% Budget Consumed</span>
              </div>
            </div>

            <!-- Main Content Split: Project Status Table & Gantt Progress -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              <!-- Left: Project Health Matrix Table -->
              <div class="lg:col-span-7 space-y-4">
                <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <i data-lucide="list-checks" class="w-5 h-5 text-blue-400"></i>
                  <span>Active PMO Portfolio & Status</span>
                </h3>

                <div class="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/80">
                  <table class="w-full text-left text-xs text-slate-300">
                    <thead class="bg-slate-950 text-slate-400 uppercase text-[10px] font-bold border-b border-slate-800">
                      <tr>
                        <th class="py-3 px-4">Project Initiative</th>
                        <th class="py-3 px-4">Status</th>
                        <th class="py-3 px-4">Progress</th>
                        <th class="py-3 px-4">Milestone</th>
                        <th class="py-3 px-4 text-right">Target</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-800/80">
                      ${pmo.sampleProjects.map(proj => `
                        <tr class="hover:bg-slate-800/50 transition-colors">
                          <td class="py-3 px-4 font-semibold text-slate-200">${proj.name}</td>
                          <td class="py-3 px-4">
                            <span class="px-2.5 py-1 rounded-md text-[10px] font-bold ${
                              proj.health === 'On Track' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' :
                              proj.health === 'At Risk' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                              'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            }">
                              ${proj.health}
                            </span>
                          </td>
                          <td class="py-3 px-4">
                            <div class="flex items-center gap-2">
                              <div class="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div class="h-full ${proj.health === 'At Risk' ? 'bg-amber-400' : 'bg-blue-500'}" style="width: ${proj.progress}%"></div>
                              </div>
                              <span class="font-bold text-slate-200">${proj.progress}%</span>
                            </div>
                          </td>
                          <td class="py-3 px-4 text-slate-400">${proj.keyMilestone}</td>
                          <td class="py-3 px-4 text-right font-mono text-slate-300">${proj.dueDate}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Right: Gantt Milestone Chart Canvas -->
              <div class="lg:col-span-5 space-y-4">
                <h3 class="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <i data-lucide="bar-chart-horizontal" class="w-5 h-5 text-purple-400"></i>
                  <span>Milestone Completion Variance</span>
                </h3>

                <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 h-64 relative">
                  <canvas id="pmo-gantt-chart"></canvas>
                </div>
              </div>

            </div>

            <!-- 4 PMO Governance Pillars Cards -->
            <div class="pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              ${pmo.governancePillars.map(pillar => `
                <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                  <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3">
                    <i data-lucide="${pillar.icon}" class="w-5 h-5"></i>
                  </div>
                  <h4 class="text-sm font-bold text-slate-200 mb-1">${pillar.title}</h4>
                  <p class="text-xs text-slate-400 leading-relaxed">${pillar.desc}</p>
                </div>
              `).join('')}
            </div>

          </div>

        </div>
      </section>
    `;
  },

  initEvents() {
    setTimeout(() => {
      if (window.ChartRenderer) {
        window.ChartRenderer.renderPMOGanttChart('pmo-gantt-chart');
      }
    }, 150);
  }
};

if (typeof window !== 'undefined') {
  window.PMOComponent = PMOComponent;
}
