/**
 * MAIN APPLICATION ENTRY POINT
 * Orchestrates modular components in strategic order:
 * 1. Navbar
 * 2. Hero (Name, Subtitles, Wipro Badge, 4 Action Buttons, Brand Statement Banner)
 * 3. Identity (Where Data Meets Business & Delivery — 4 Pillars)
 * 4. Experience (Wipro: Power BI & PMO 4+ Yrs, Value Pipeline, 2 Areas, Differentiator)
 * 5. Expertise (What I Do — 5 Domain Cards)
 * 6. Career Journey (Visual Flow Timeline: 2022 -> Wipro -> PMO -> 4+ Yrs -> The BlackIt)
 * 7. The BlackIt (Founder, Vision & Mission, Our Focus)
 * 8. Projects (Enterprise Case Studies & Portfolio)
 * 9. Skills (Interactive Competency Matrix)
 * 10. Contact (Direct Form & Professional Connect)
 * 11. Footer (Brand Credentials & Links)
 */

document.addEventListener('DOMContentLoaded', () => {
  const appContainer = document.getElementById('app');
  if (!appContainer) return;

  // Mount components layout
  appContainer.innerHTML = `
    <div id="navbar-root"></div>
    <main>
      <div id="hero-root"></div>
      <div id="identity-root"></div>
      <div id="experience-root"></div>
      <div id="expertise-root"></div>
      <div id="journey-root"></div>
      <div id="blackit-root"></div>
      <div id="projects-root"></div>
      <div id="skills-root"></div>
      <div id="contact-root"></div>
    </main>
    <div id="footer-root"></div>
  `;

  // Safe component render & init helpers
  const safeRender = (id, comp) => {
    try {
      const el = document.getElementById(id);
      if (el && comp && typeof comp.render === 'function') {
        el.innerHTML = comp.render();
      }
    } catch (err) {
      console.error(`Error rendering ${id}:`, err);
    }
  };

  const safeInit = (comp) => {
    try {
      if (comp && typeof comp.initEvents === 'function') {
        comp.initEvents();
      }
    } catch (err) {
      console.error('Error in initEvents:', err);
    }
  };

  // Render components
  safeRender('navbar-root', window.NavbarComponent);
  safeRender('hero-root', window.HeroComponent);
  safeRender('identity-root', window.IdentityComponent || window.StatsComponent);
  safeRender('experience-root', window.ExperienceComponent || window.AboutComponent);
  safeRender('expertise-root', window.ExpertiseComponent);
  safeRender('journey-root', window.JourneyComponent || window.TimelineComponent);
  safeRender('blackit-root', window.BlackITComponent);
  safeRender('projects-root', window.ProjectsComponent);
  safeRender('skills-root', window.SkillsComponent);
  safeRender('contact-root', window.ContactComponent);
  safeRender('footer-root', window.FooterComponent);

  // Initialize Lucide icons
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  } catch (err) {
    console.error('Lucide error:', err);
  }

  // Initialize Component Events
  safeInit(window.NavbarComponent);
  safeInit(window.HeroComponent);
  safeInit(window.IdentityComponent || window.StatsComponent);
  safeInit(window.AboutComponent || window.ExperienceComponent);
  safeInit(window.ExpertiseComponent);
  safeInit(window.JourneyComponent || window.TimelineComponent);
  safeInit(window.BlackITComponent);
  safeInit(window.ProjectsComponent);
  safeInit(window.SkillsComponent);
  safeInit(window.ContactComponent);
  safeInit(window.FooterComponent);

  // Scroll Reveal Animations setup
  const observerOptions = {
    threshold: 0.06,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('reveal-on-scroll');
    revealObserver.observe(sec);
  });

  // Minimal look: drop decorative emoji from section labels, then start motion layer
  const emoji = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}‍️]+\s*/gu;
  document.querySelectorAll('section span.rounded-full').forEach(el => {
    el.textContent = el.textContent.replace(emoji, '').trim();
  });
  try {
    if (typeof window.initEffects === 'function') window.initEffects();
  } catch (err) {
    console.error('Effects error:', err);
  }

  // Hide page loader with smooth fade-out
  const hideLoader = () => {
    const loader = document.getElementById('page-loader');
    if (loader && !loader.classList.contains('hidden')) {
      loader.classList.add('hidden');
    }
  };

  setTimeout(hideLoader, 250);
});

// Window load safety fallback
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  if (loader && !loader.classList.contains('hidden')) {
    setTimeout(() => loader.classList.add('hidden'), 200);
  }
});
