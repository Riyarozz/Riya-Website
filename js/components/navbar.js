/**
 * NAVBAR COMPONENT
 * Handles sticky navigation, responsive mobile menu, theme toggle, and smooth scrolling.
 */

const NavbarComponent = {
  render() {
    const data = window.SITE_DATA;
    const links = data.navLinks;

    return `
      <header id="navbar" class="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 glass-panel border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <!-- Logo / Brand -->
          <a href="#home" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-lg tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
                ${data.profile.name}
              </span>
              <span class="text-[10px] font-medium tracking-wider text-slate-400 uppercase">
                Data • PMO • Tech
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center gap-6">
            ${links.map(link => `
              <a href="${link.href}" class="nav-link text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors py-1">
                ${link.label}
              </a>
            `).join('')}
          </nav>

          <!-- Right Actions (Theme Toggle & CTA) -->
          <div class="hidden sm:flex items-center gap-4">
            <!-- Theme Toggle Button -->
            <button id="theme-toggle-btn" class="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white transition-all border border-white/10" title="Toggle Light/Dark Theme">
              <i data-lucide="sun" class="w-4 h-4 hidden dark-icon"></i>
              <i data-lucide="moon" class="w-4 h-4 light-icon"></i>
            </button>

            <!-- CTA Button -->
            <a href="#contact" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all">
              <span>Let's Connect</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex sm:hidden items-center gap-3">
            <button id="mobile-theme-toggle" class="p-2 rounded-lg bg-slate-800 text-slate-300">
              <i data-lucide="moon" class="w-4 h-4"></i>
            </button>
            <button id="mobile-menu-btn" class="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-white/10 focus:outline-none">
              <i data-lucide="menu" id="menu-icon" class="w-6 h-6"></i>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu Drawer -->
        <div id="mobile-menu" class="hidden lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 transition-all duration-300">
          ${links.map(link => `
            <a href="${link.href}" class="mobile-nav-link block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-blue-600/20 hover:text-blue-400">
              ${link.label}
            </a>
          `).join('')}
          <div class="pt-4 border-t border-slate-800">
            <a href="#contact" class="mobile-nav-link flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm">
              <span>Let's Connect</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </header>
    `;
  },

  initEvents() {
    const navbar = document.getElementById('navbar');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle');

    // Scroll shrink effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar?.classList.add('py-2', 'bg-slate-950/90', 'shadow-2xl');
        navbar?.classList.remove('py-4');
      } else {
        navbar?.classList.add('py-4');
        navbar?.classList.remove('py-2', 'bg-slate-950/90', 'shadow-2xl');
      }

      // Scroll Spy for nav links
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });

    // Mobile menu toggle
    mobileBtn?.addEventListener('click', () => {
      mobileMenu?.classList.toggle('hidden');
    });

    // Close mobile menu on click link
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu?.classList.add('hidden');
      });
    });

    // Theme Switch logic
    const toggleTheme = () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      // Re-render chart colors if charts exist
      if (window.renderDashboardCharts) {
        window.renderDashboardCharts();
      }
    };

    themeBtn?.addEventListener('click', toggleTheme);
    mobileThemeBtn?.addEventListener('click', toggleTheme);

    // Initial theme check
    if (localStorage.getItem('theme') === 'light') {
      document.body.classList.add('light-mode');
    }
  }
};

if (typeof window !== 'undefined') {
  window.NavbarComponent = NavbarComponent;
}
