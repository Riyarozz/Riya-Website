/**
 * PROJECTS & PORTFOLIO COMPONENT
 * Renders filterable project portfolio with search input, category tags, and detailed case-study modal reader.
 */

const ProjectsComponent = {
  activeCategory: 'All',
  searchQuery: '',

  render() {
    const projects = window.SITE_DATA.projects;
    const categories = ['All', 'Power BI', 'Data Analytics', 'PMO', 'Business Analysis', 'AI', 'Technology'];

    // Filter projects by category and search term
    const filteredProjects = projects.filter(proj => {
      const matchCat = this.activeCategory === 'All' || proj.category.toLowerCase().includes(this.activeCategory.toLowerCase());
      const matchSearch = this.searchQuery === '' ||
        proj.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        proj.shortDesc.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        proj.tags.some(t => t.toLowerCase().includes(this.searchQuery.toLowerCase()));

      return matchCat && matchSearch;
    });

    return `
      <section id="projects" class="py-24 relative overflow-hidden bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-blue-400 uppercase border border-blue-500/30">
              Selected Engagements & Consulting Deliverables
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              Project Portfolio & Case Studies
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              Detailed breakdown of solutions delivered across Power BI development, PMO governance, business analysis, and technology strategy.
            </p>
          </div>

          <!-- Controls: Category Filter Buttons & Real-Time Search Bar -->
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            
            <!-- Category Chips -->
            <div class="flex flex-wrap items-center justify-center gap-2">
              ${categories.map(cat => `
                <button data-category="${cat}" class="proj-cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all ${cat === this.activeCategory ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30' : 'glass-card text-slate-400 hover:text-slate-200 border-slate-800'}">
                  ${cat}
                </button>
              `).join('')}
            </div>

            <!-- Search Input Box -->
            <div class="relative w-full md:w-72">
              <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="project-search-input" value="${this.searchQuery}" placeholder="Search projects or tech..." class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

          </div>

          <!-- Project Cards Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${filteredProjects.length > 0 ? filteredProjects.map(proj => `
              <div class="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300">
                <div>
                  <!-- Category & Tag -->
                  <div class="flex items-center justify-between mb-4">
                    <span class="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                      ${proj.category}
                    </span>
                    ${proj.featured ? '<span class="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">Featured</span>' : ''}
                  </div>

                  <!-- Title -->
                  <h3 class="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                    ${proj.title}
                  </h3>

                  <!-- Short Description -->
                  <p class="text-xs text-slate-300 mb-6 leading-relaxed">
                    ${proj.shortDesc}
                  </p>

                  <!-- Impact Solution Snapshot -->
                  <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 mb-6 space-y-2 text-xs">
                    <div>
                      <strong class="text-blue-400 text-[10px] uppercase block">Key Role:</strong>
                      <span class="text-slate-300 font-medium">${proj.role}</span>
                    </div>
                    <div>
                      <strong class="text-emerald-400 text-[10px] uppercase block">Outcome:</strong>
                      <span class="text-slate-200 font-semibold">${proj.outcome}</span>
                    </div>
                  </div>

                  <!-- Technology Tags -->
                  <div class="flex flex-wrap gap-1.5 mb-6">
                    ${proj.tags.map(t => `<span class="px-2 py-0.5 rounded bg-slate-900 text-[10px] text-slate-400 border border-slate-800">${t}</span>`).join('')}
                  </div>
                </div>

                <!-- View Case Study Action -->
                <button data-project-id="${proj.id}" class="open-case-study-btn w-full py-3 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                  <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
                  <span>View Case Study</span>
                </button>
              </div>
            `).join('') : `
              <div class="col-span-full py-12 text-center text-slate-400">
                <i data-lucide="folder-search" class="w-12 h-12 mx-auto text-slate-600 mb-3"></i>
                <p class="text-base font-semibold">No projects matching your search criteria.</p>
                <button id="reset-project-filters" class="mt-4 px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-blue-400">Reset Filters</button>
              </div>
            `}
          </div>

        </div>

        <!-- Detailed Case Study Modal Window -->
        <div id="case-study-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 modal-overlay">
          <div class="modal-content max-w-4xl w-full glass-panel p-6 sm:p-8 rounded-3xl border-slate-700 max-h-[90vh] overflow-y-auto relative">
            <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span id="cs-category" class="px-2.5 py-1 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">CATEGORY</span>
                <h3 id="cs-title" class="text-2xl font-extrabold text-slate-100 mt-2">Case Study Title</h3>
              </div>
              <button id="close-cs-modal" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div id="cs-body" class="space-y-6 text-sm text-slate-300">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>

      </section>
    `;
  },

  initEvents() {
    // Category tabs click
    document.querySelectorAll('.proj-cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-category');
        if (cat) {
          this.activeCategory = cat;
          this.refreshSection();
        }
      });
    });

    // Search input
    const searchInput = document.getElementById('project-search-input');
    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.refreshSection();
    });

    // Reset filters
    document.getElementById('reset-project-filters')?.addEventListener('click', () => {
      this.activeCategory = 'All';
      this.searchQuery = '';
      this.refreshSection();
    });

    // Modal Case Study triggers
    document.querySelectorAll('.open-case-study-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-project-id');
        const proj = window.SITE_DATA.projects.find(p => p.id === projId);
        if (proj) {
          this.openCaseStudyModal(proj);
        }
      });
    });

    document.getElementById('close-cs-modal')?.addEventListener('click', () => {
      const modal = document.getElementById('case-study-modal');
      modal?.classList.add('hidden');
      modal?.classList.remove('active');
    });
  },

  refreshSection() {
    const sec = document.getElementById('projects');
    if (sec) {
      sec.outerHTML = this.render();
      lucide.createIcons();
      this.initEvents();
      // Keep focus on search input if active
      const searchInput = document.getElementById('project-search-input');
      if (searchInput && this.searchQuery) {
        searchInput.focus();
        searchInput.setSelectionRange(this.searchQuery.length, this.searchQuery.length);
      }
    }
  },

  openCaseStudyModal(proj) {
    const modal = document.getElementById('case-study-modal');
    const catEl = document.getElementById('cs-category');
    const titleEl = document.getElementById('cs-title');
    const bodyEl = document.getElementById('cs-body');

    if (catEl) catEl.innerText = proj.category;
    if (titleEl) titleEl.innerText = proj.title;

    if (bodyEl) {
      bodyEl.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
          <div>
            <strong class="text-xs uppercase text-slate-400 block">My Role:</strong>
            <span class="font-bold text-slate-100">${proj.role}</span>
          </div>
          <div>
            <strong class="text-xs uppercase text-slate-400 block">Category Focus:</strong>
            <span class="font-bold text-blue-400">${proj.category}</span>
          </div>
          <div>
            <strong class="text-xs uppercase text-slate-400 block">Tech Stack:</strong>
            <span class="font-semibold text-slate-200">${proj.tags.join(', ')}</span>
          </div>
        </div>

        <div class="space-y-4">
          <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 class="font-bold text-rose-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="alert-circle" class="w-4 h-4"></i> Business Problem & Challenge
            </h4>
            <p class="text-slate-300 leading-relaxed">${proj.problem}</p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 class="font-bold text-blue-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="cpu" class="w-4 h-4"></i> Analytical & Technical Approach
            </h4>
            <p class="text-slate-300 leading-relaxed">Conducted comprehensive requirements analysis, structured the underlying data model with optimal DAX relationships, and implemented governance frameworks to ensure accurate decision making.</p>
          </div>

          <div class="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h4 class="font-bold text-purple-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="check-square" class="w-4 h-4"></i> Implemented Solution
            </h4>
            <p class="text-slate-300 leading-relaxed">${proj.solution}</p>
          </div>

          <div class="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
            <h4 class="font-bold text-emerald-400 uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
              <i data-lucide="trending-up" class="w-4 h-4"></i> Measurable Business Outcome
            </h4>
            <p class="text-slate-100 font-bold text-base">${proj.outcome}</p>
          </div>
        </div>
      `;
    }

    modal?.classList.remove('hidden');
    modal?.classList.add('active');
    lucide.createIcons();
  }
};

if (typeof window !== 'undefined') {
  window.ProjectsComponent = ProjectsComponent;
}
