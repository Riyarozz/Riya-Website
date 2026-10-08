/**
 * CHART UTILITY & RENDERER
 * Uses Chart.js (or SVG fallback) to render live, interactive charts for Power BI and PMO dashboards.
 */

const ChartRenderer = {
  activeInstances: {},

  // Colors matching theme palette
  colors: {
    blue: '#3B82F6',
    purple: '#8B5CF6',
    cyan: '#06B6D4',
    emerald: '#10B981',
    amber: '#F59E0B',
    rose: '#F43F5E',
    gridDark: 'rgba(255, 255, 255, 0.06)',
    gridLight: 'rgba(0, 0, 0, 0.06)',
    textDark: '#94A3B8',
    textLight: '#475569'
  },

  /**
   * Destroys existing chart instance if it exists on canvasId
   */
  destroy(canvasId) {
    if (this.activeInstances[canvasId]) {
      this.activeInstances[canvasId].destroy();
      delete this.activeInstances[canvasId];
    }
  },

  /**
   * Render Executive / Combo Line & Bar Chart
   */
  renderExecutiveChart(canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    this.destroy(canvasId);

    const isLight = document.body.classList.contains('light-mode');
    const gridColor = isLight ? this.colors.gridLight : this.colors.gridDark;
    const textColor = isLight ? this.colors.textLight : this.colors.textDark;

    this.activeInstances[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
        datasets: [
          {
            type: 'line',
            label: 'Target KPI Margin (%)',
            data: [21.5, 22.0, 23.2, 23.8, 24.1, 24.5, 24.8],
            borderColor: this.colors.cyan,
            borderWidth: 3,
            fill: false,
            tension: 0.3,
            yAxisID: 'y1'
          },
          {
            type: 'bar',
            label: 'Actual Revenue ($M)',
            data: [2.8, 3.2, 3.6, 4.1, 3.9, 4.3, 4.8],
            backgroundColor: 'rgba(59, 130, 246, 0.75)',
            borderColor: this.colors.blue,
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            type: 'bar',
            label: 'Operational Expense ($M)',
            data: [1.9, 2.1, 2.3, 2.6, 2.4, 2.5, 2.7],
            backgroundColor: 'rgba(139, 92, 246, 0.55)',
            borderColor: this.colors.purple,
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor, font: { family: 'Inter', size: 12 } }
          },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: '#0F172A',
            titleColor: '#F8FAFC',
            bodyColor: '#94A3B8',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: gridColor },
            ticks: { color: textColor }
          },
          y: {
            type: 'linear',
            position: 'left',
            grid: { color: gridColor },
            ticks: { color: textColor, callback: value => '$' + value + 'M' }
          },
          y1: {
            type: 'linear',
            position: 'right',
            grid: { drawOnChartArea: false },
            ticks: { color: textColor, callback: value => value + '%' }
          }
        }
      }
    });
  },

  /**
   * Render Sales Funnel & Pipeline Chart
   */
  renderSalesChart(canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    this.destroy(canvasId);

    const isLight = document.body.classList.contains('light-mode');
    const textColor = isLight ? this.colors.textLight : this.colors.textDark;

    this.activeInstances[canvasId] = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Lead Generation', 'Qualified Discovery', 'Proposal & Pitch', 'Contract Negotiation', 'Closed Won'],
        datasets: [
          {
            data: [12.5, 8.2, 4.6, 2.1, 1.1],
            backgroundColor: [
              '#3B82F6',
              '#06B6D4',
              '#8B5CF6',
              '#F59E0B',
              '#10B981'
            ],
            borderWidth: 2,
            borderColor: isLight ? '#FFFFFF' : '#0F172A'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: textColor, font: { family: 'Inter', size: 12 }, padding: 15 }
          },
          tooltip: {
            callbacks: {
              label: ctx => ` ${ctx.label}: $${ctx.raw}M`
            }
          }
        },
        cutout: '65%'
      }
    });
  },

  /**
   * Render PMO Portfolio Milestone Gantt Horizontal Bar
   */
  renderPMOGanttChart(canvasId) {
    const ctx = document.getElementById(canvasId);
    if (!ctx) return;
    this.destroy(canvasId);

    const isLight = document.body.classList.contains('light-mode');
    const gridColor = isLight ? this.colors.gridLight : this.colors.gridDark;
    const textColor = isLight ? this.colors.textLight : this.colors.textDark;

    this.activeInstances[canvasId] = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'ERP System Migration',
          'Customer Data Warehouse',
          'Digital Automation',
          'The BlackIt Accelerator'
        ],
        datasets: [
          {
            label: '% Complete',
            data: [78, 92, 60, 85],
            backgroundColor: [
              'rgba(16, 185, 129, 0.8)',
              'rgba(59, 130, 246, 0.8)',
              'rgba(245, 158, 11, 0.8)',
              'rgba(139, 92, 246, 0.8)'
            ],
            borderRadius: 6
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            max: 100,
            grid: { color: gridColor },
            ticks: { color: textColor, callback: val => val + '%' }
          },
          y: {
            grid: { display: false },
            ticks: { color: textColor }
          }
        }
      }
    });
  }
};

if (typeof window !== 'undefined') {
  window.ChartRenderer = ChartRenderer;
}
