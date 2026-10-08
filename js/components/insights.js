/**
 * INSIGHTS / BLOG COMPONENT
 * Renders articles and thought leadership posts with category filtering and modal article reader.
 */

const InsightsComponent = {
  activeCategory: 'All',

  render() {
    const posts = window.SITE_DATA.insights;
    const categories = ['All', 'Power BI', 'PMO', 'Business Analysis', 'AI', 'Entrepreneurship'];

    const filtered = posts.filter(p => this.activeCategory === 'All' || p.category === this.activeCategory);

    return `
      <section id="insights" class="py-24 relative overflow-hidden bg-slate-950/40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center max-w-3xl mx-auto mb-12">
            <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-cyan-400 uppercase border border-cyan-500/30">
              Thought Leadership & Articles
            </span>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
              Insights & Industry Perspectives
            </h2>
            <p class="text-base sm:text-lg text-slate-300 mt-4">
              Articles and practical guides covering Power BI architecture, PMO governance, business analysis, and technology execution.
            </p>
          </div>

          <!-- Category Filters -->
          <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
            ${categories.map(cat => `
              <button data-insight-cat="${cat}" class="insight-cat-btn px-4 py-2 rounded-xl text-xs font-semibold transition-all ${cat === this.activeCategory ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'glass-card text-slate-400 hover:text-slate-200 border-slate-800'}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Articles Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            ${filtered.map(post => `
              <div class="glass-card p-8 rounded-3xl flex flex-col justify-between group hover:-translate-y-2 hover:border-blue-500/40 transition-all duration-300">
                <div>
                  <div class="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span class="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-bold text-[10px] uppercase">
                      ${post.category}
                    </span>
                    <span>${post.readTime}</span>
                  </div>

                  <h3 class="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors">
                    ${post.title}
                  </h3>

                  <p class="text-xs text-slate-300 mb-6 leading-relaxed">
                    ${post.summary}
                  </p>
                </div>

                <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span class="text-[11px] text-slate-400">${post.date}</span>
                  <button data-post-id="${post.id}" class="read-post-btn text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                    <span>Read Article</span>
                    <i data-lucide="arrow-right" class="w-4 h-4"></i>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

        </div>

        <!-- Article Reader Modal -->
        <div id="insight-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 modal-overlay">
          <div class="modal-content max-w-3xl w-full glass-panel p-6 sm:p-8 rounded-3xl border-slate-700 max-h-[90vh] overflow-y-auto relative">
            <div class="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span id="post-cat" class="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">CATEGORY</span>
                <h3 id="post-title" class="text-2xl font-extrabold text-slate-100 mt-2">Article Title</h3>
              </div>
              <button id="close-post-modal" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div id="post-content" class="prose prose-invert max-w-none text-sm text-slate-300 space-y-4">
              <!-- Dynamically populated -->
            </div>
          </div>
        </div>

      </section>
    `;
  },

  initEvents() {
    document.querySelectorAll('.insight-cat-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const cat = e.currentTarget.getAttribute('data-insight-cat');
        if (cat) {
          this.activeCategory = cat;
          const sec = document.getElementById('insights');
          if (sec) {
            sec.outerHTML = this.render();
            lucide.createIcons();
            this.initEvents();
          }
        }
      });
    });

    document.querySelectorAll('.read-post-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const postId = e.currentTarget.getAttribute('data-post-id');
        const post = window.SITE_DATA.insights.find(p => p.id === postId);
        if (post) {
          this.openPostModal(post);
        }
      });
    });

    document.getElementById('close-post-modal')?.addEventListener('click', () => {
      const modal = document.getElementById('insight-modal');
      modal?.classList.add('hidden');
      modal?.classList.remove('active');
    });
  },

  openPostModal(post) {
    const modal = document.getElementById('insight-modal');
    const catEl = document.getElementById('post-cat');
    const titleEl = document.getElementById('post-title');
    const contentEl = document.getElementById('post-content');

    if (catEl) catEl.innerText = post.category;
    if (titleEl) titleEl.innerText = post.title;

    if (contentEl) {
      // Basic formatting of post content string
      const formatted = post.content.split('\n\n').map(p => `<p class="leading-relaxed">${p}</p>`).join('');
      contentEl.innerHTML = formatted;
    }

    modal?.classList.remove('hidden');
    modal?.classList.add('active');
    lucide.createIcons();
  }
};

if (typeof window !== 'undefined') {
  window.InsightsComponent = InsightsComponent;
}
