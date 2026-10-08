/**
 * POWER BI SHOWCASE COMPONENT
 * Renders dedicated Power BI dashboard gallery with live Chart.js preview, category selector,
 * explicit "Sample Dashboard" labels, and interactive modal drill-down.
 */

const PowerBIComponent = {
  activeDashboardId: 'exec-summary',

  render() {
    const pbiData = window.SITE_DATA.powerbiShowcase;
    const dashboards = pbiData.dashboards;
    const activeDashboard = dashboards.find(d => d.id === this.activeDashboardId) || dashboards[0];

    return `
      <section id="powerbi" class="py-24 relative overflow-hidden bg-slate-950/80">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-amber-400 uppercase border border-amber-500/30">
              <i data-lucide="bar-chart-2" class="w-4 h-4 text-amber-400"></i>
              <span>Power BI Showcase</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              ${pbiData.heading}
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              ${pbiData.subheading}
            </p>
            <p class="text-xs text-amber-400/90 font-medium mt-2 bg-amber-500/10 inline-block px-4 py-1.5 rounded-lg border border-amber-500/20">
              <i data-lucide="info" class="w-3.5 h-3.5 inline mr-1"></i>
              ${pbiData.disclaimer}
            </p>
          </div>

          <!-- Dashboard Tabs Selector -->
          <div class="flex flex-wrap items-center justify-center gap-3 mb-10">
            ${dashboards.map(dash => `
              <button data-dashboard-id="${dash.id}" class="pbi-tab-btn px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${dash.id === this.activeDashboardId ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105' : 'glass-card text-slate-400 hover:text-slate-200 border-slate-800'}">
                <span class="w-2 h-2 rounded-full ${dash.id === this.activeDashboardId ? 'bg-white' : 'bg-slate-600'}"></span>
                <span>${dash.category}</span>
              </button>
            `).join('')}
          </div>

          <!-- Active Dashboard Display Frame -->
          <div class="dashboard-frame p-6 sm:p-8 rounded-3xl border-slate-800 glow-blue">
            
            <!-- Dashboard Top Action Bar -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <div class="flex items-center gap-3">
                  <span class="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                    ${activeDashboard.badge}
                  </span>
                  <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    ${activeDashboard.category}
                  </span>
                </div>
                <h3 class="text-2xl font-extrabold text-slate-100 mt-2">
                  ${activeDashboard.title}
                </h3>
              </div>

              <!-- Action Buttons -->
              <div class="flex items-center gap-3">
                <button id="view-pbi-modal-btn" class="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all flex items-center gap-2">
                  <i data-lucide="maximize-2" class="w-4 h-4"></i>
                  <span>View Dashboard</span>
                </button>
                <button id="view-pbi-case-btn" class="px-4 py-2.5 rounded-xl glass-card text-slate-300 hover:text-white text-xs font-bold border-slate-700 transition-all flex items-center gap-2">
                  <i data-lucide="file-text" class="w-4 h-4 text-blue-400"></i>
                  <span>Explore Case Study</span>
                </button>
              </div>
            </div>

            <!-- KPI Summary Strip -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              ${activeDashboard.metrics.map(m => `
                <div class="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                  <span class="text-xs font-medium text-slate-400">${m.label}</span>
                  <div class="text-2xl font-extrabold text-slate-100 mt-1">${m.value}</div>
                  <span class="text-[11px] font-bold text-emerald-400 mt-0.5 inline-block">${m.change}</span>
                </div>
              `).join('')}
            </div>

            <!-- Interactive Live Chart Canvas -->
            <div class="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 min-h-[320px] relative flex flex-col justify-between">
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Visual Dataset Render: ${activeDashboard.title}
                </span>
                <div class="flex items-center gap-2 text-xs text-slate-400">
                  <span>Filters:</span>
                  ${activeDashboard.filters.map(f => `<span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] text-blue-300 font-medium">${f}</span>`).join('')}
                </div>
              </div>

              <!-- Canvas Container -->
              <div class="h-64 sm:h-72 w-full relative">
                <canvas id="active-pbi-chart"></canvas>
              </div>
            </div>

            <!-- Dashboard Description & Case Highlights -->
            <div class="mt-6 pt-6 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
              <div>
                <span class="font-bold text-slate-100 uppercase tracking-wider text-[10px] block mb-1">Business Challenge:</span>
                <p class="text-slate-400">${activeDashboard.caseStudy.problem}</p>
              </div>
              <div>
                <span class="font-bold text-blue-400 uppercase tracking-wider text-[10px] block mb-1">DAX & Architecture Solution:</span>
                <p class="text-slate-400">${activeDashboard.caseStudy.solution}</p>
              </div>
              <div>
                <span class="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-1">Measurable Business Outcome:</span>
                <p class="text-slate-300 font-semibold">${activeDashboard.caseStudy.outcome}</p>
              </div>
            </div>

          </div>

        </div>

        <!-- Fullscreen Interactive Modal Preview -->
        <div id="pbi-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 modal-overlay">
          <div class="modal-content max-w-5xl w-full glass-panel p-6 sm:p-8 rounded-3xl border-slate-700 max-h-[90vh] overflow-y-auto relative">
            <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div class="flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <h4 class="text-xl font-bold text-slate-100" id="modal-pbi-title">
                  Dashboard Modal Preview
                </h4>
              </div>
              <button id="close-pbi-modal" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div class="space-y-6">
              <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                <strong>Sample Dashboard Demonstration Mode:</strong> This view simulates dynamic Power BI filters, slicers, and drill-downs across enterprise metrics.
              </div>

              <div class="h-80 w-full relative">
                <canvas id="modal-pbi-chart"></canvas>
              </div>

              <div id="modal-pbi-details" class="text-sm text-slate-300 space-y-3">
                <!-- Dynamically injected -->
              </div>
            </div>
          </div>
        </div>

      </section>
    `;
  },

  initEvents() {
    const tabBtns = document.querySelectorAll('.pbi-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dashId = e.currentTarget.getAttribute('data-dashboard-id');
        if (dashId) {
          this.activeDashboardId = dashId;
          const section = document.getElementById('powerbi');
          if (section) {
            section.outerHTML = this.render();
            lucide.createIcons();
            this.initEvents();
            this.renderChart();
          }
        }
      });
    });

    // Modal view handlers
    const modal = document.getElementById('pbi-modal');
    const viewModalBtn = document.getElementById('view-pbi-modal-btn');
    const closeModalBtn = document.getElementById('close-pbi-modal');
    const viewCaseBtn = document.getElementById('view-pbi-case-btn');

    viewModalBtn?.addEventListener('click', () => {
      modal?.classList.remove('hidden');
      modal?.classList.add('active');
      const activeDash = window.SITE_DATA.powerbiShowcase.dashboards.find(d => d.id === this.activeDashboardId);
      const titleEl = document.getElementById('modal-pbi-title');
      const detailsEl = document.getElementById('modal-pbi-details');

      if (titleEl) titleEl.innerText = `${activeDash.title} (${activeDash.badge})`;
      if (detailsEl) {
        detailsEl.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong class="text-blue-400 block mb-1">Problem & Context:</strong>
              ${activeDash.caseStudy.problem}
            </div>
            <div class="p-4 rounded-xl bg-slate-900 border border-slate-800">
              <strong class="text-emerald-400 block mb-1">Technical Solution & DAX Architecture:</strong>
              ${activeDash.caseStudy.solution}
            </div>
          </div>
        `;
      }

      setTimeout(() => {
        if (window.ChartRenderer) {
          if (activeDash.chartType === 'sales-funnel') {
            window.ChartRenderer.renderSalesChart('modal-pbi-chart');
          } else {
            window.ChartRenderer.renderExecutiveChart('modal-pbi-chart');
          }
        }
      }, 100);
    });

    closeModalBtn?.addEventListener('click', () => {
      modal?.classList.add('hidden');
      modal?.classList.remove('active');
    });

    viewCaseBtn?.addEventListener('click', () => {
      // Scroll smoothly to project portfolio case studies
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    });

    this.renderChart();
  },

  renderChart() {
    const activeDash = window.SITE_DATA.powerbiShowcase.dashboards.find(d => d.id === this.activeDashboardId);
    if (!activeDash) return;

    setTimeout(() => {
      if (window.ChartRenderer) {
        if (activeDash.chartType === 'sales-funnel') {
          window.ChartRenderer.renderSalesChart('active-pbi-chart');
        } else if (activeDash.chartType === 'project-gantt') {
          window.ChartRenderer.renderPMOGanttChart('active-pbi-chart');
        } else {
          window.ChartRenderer.renderExecutiveChart('active-pbi-chart');
        }
      }
    }, 100);
  }
};

if (typeof window !== 'undefined') {
  window.PowerBIComponent = PowerBIComponent;
}
