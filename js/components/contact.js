/**
 * CONTACT FORM COMPONENT
 * Renders contact section with interactive validation, honeypot spam protection, and social links.
 */

const ContactComponent = {
  render() {
    const profile = window.SITE_DATA.profile;

    return `
      <section id="contact" class="py-24 relative overflow-hidden bg-slate-950/80 border-t border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Left Info Panel -->
            <div class="lg:col-span-5 space-y-8">
              <div>
                <span class="px-3.5 py-1.5 rounded-full glass-card text-xs font-bold tracking-wider text-blue-400 uppercase border border-blue-500/30">
                  Initiate Connection
                </span>
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 mt-4 tracking-tight">
                  Let's Build Something Meaningful.
                </h2>
                <p class="text-base text-slate-300 mt-4 leading-relaxed">
                  Whether you're looking for data-driven insights, PMO project governance, technology collaboration, or simply want to connect, I'd love to hear from you.
                </p>
              </div>

              <!-- Contact Cards List -->
              <div class="space-y-4">
                <a href="mailto:${profile.email}" class="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <i data-lucide="mail" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <span class="text-[11px] font-bold uppercase text-slate-400">Direct Email</span>
                    <h4 class="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">${profile.email}</h4>
                  </div>
                </a>

                <a href="${profile.linkedin}" target="_blank" rel="noopener" class="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    ${window.brandIcon('linkedin', 'w-6 h-6')}
                  </div>
                  <div>
                    <span class="text-[11px] font-bold uppercase text-slate-400">LinkedIn Profile</span>
                    <h4 class="text-sm font-bold text-slate-200 group-hover:text-blue-400 transition-colors">Connect on LinkedIn</h4>
                  </div>
                </a>

                <a href="${profile.github}" target="_blank" rel="noopener" class="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-blue-500/40 transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                    ${window.brandIcon('github', 'w-6 h-6')}
                  </div>
                  <div>
                    <span class="text-[11px] font-bold uppercase text-slate-400">GitHub Code & Projects</span>
                    <h4 class="text-sm font-bold text-slate-200 group-hover:text-purple-400 transition-colors">View Repositories</h4>
                  </div>
                </a>

                <a href="#blackit" class="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-emerald-500/40 transition-all group">
                  <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <i data-lucide="layers" class="w-6 h-6"></i>
                  </div>
                  <div>
                    <span class="text-[11px] font-bold uppercase text-slate-400">The BlackIt Initiative</span>
                    <h4 class="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">Explore The BlackIt</h4>
                  </div>
                </a>
              </div>
            </div>

            <!-- Right Interactive Contact Form -->
            <div class="lg:col-span-7">
              <div class="glass-card p-8 sm:p-10 rounded-3xl border-slate-800 relative glow-blue">
                
                <h3 class="text-2xl font-extrabold text-slate-100 mb-6">Send a Message</h3>

                <!-- Alert Messages Container -->
                <div id="contact-alert" class="hidden mb-6 p-4 rounded-xl text-xs font-semibold"></div>

                <form id="contact-form" class="space-y-6">
                  <!-- Honeypot anti-spam field -->
                  <input type="text" name="website_url" class="hidden" tabindex="-1" autocomplete="off" />

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-xs font-bold uppercase text-slate-300 mb-2">Your Name *</label>
                      <input type="text" id="contact-name" required placeholder="Jane Doe" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <div>
                      <label class="block text-xs font-bold uppercase text-slate-300 mb-2">Email Address *</label>
                      <input type="email" id="contact-email" required placeholder="jane@example.com" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label class="block text-xs font-bold uppercase text-slate-300 mb-2">Company / Organization</label>
                      <input type="text" id="contact-company" placeholder="Acme Inc." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>

                    <div>
                      <label class="block text-xs font-bold uppercase text-slate-300 mb-2">Subject *</label>
                      <input type="text" id="contact-subject" required placeholder="Power BI / PMO Collaboration" class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase text-slate-300 mb-2">Message *</label>
                    <textarea id="contact-message" rows="5" required placeholder="Describe your project, data requirements, or PMO objectives..." class="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-xs focus:outline-none focus:border-blue-500 transition-colors"></textarea>
                  </div>

                  <button type="submit" id="contact-submit-btn" class="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2">
                    <i data-lucide="send" class="w-4 h-4"></i>
                    <span>Send Message</span>
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>
    `;
  },

  initEvents() {
    const form = document.getElementById('contact-form');
    const alertBox = document.getElementById('contact-alert');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check honeypot
      const honeypot = form.querySelector('input[name="website_url"]');
      if (honeypot && honeypot.value !== '') {
        // Spam detected silently
        return;
      }

      const name = document.getElementById('contact-name')?.value.trim();
      const email = document.getElementById('contact-email')?.value.trim();
      const subject = document.getElementById('contact-subject')?.value.trim();
      const message = document.getElementById('contact-message')?.value.trim();

      if (!name || !email || !subject || !message) {
        if (alertBox) {
          alertBox.className = 'mb-6 p-4 rounded-xl text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 block';
          alertBox.innerText = 'Please complete all required fields (*).';
        }
        return;
      }

      // Show success simulation
      if (alertBox) {
        alertBox.className = 'mb-6 p-4 rounded-xl text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 block';
        alertBox.innerText = `Thank you, ${name}! Your message has been received. I will get back to you shortly.`;
      }

      form.reset();
    });
  }
};

if (typeof window !== 'undefined') {
  window.ContactComponent = ContactComponent;
}
