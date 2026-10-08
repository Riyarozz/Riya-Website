/**
 * MAIN APPLICATION ENTRY POINT
 * Orchestrates modular components in strategic order:
 * 1. Navbar
 * 2. Hero (Name, Subtitles, Wipro Badge, 4 Action Buttons, Brand Statement Banner, Live Dashboard)
 * 3. Identity (Where Data Meets Business & Delivery — 4 Pillars)
 * 4. Experience (Wipro: Power BI & PMO 4+ Yrs, Value Pipeline, 2 Areas, Differentiator)
 * 5. Expertise (What I Do — 5 Domain Cards)
 * 6. Power BI (Live Interactive Dashboards Showcase)
 * 7. PMO Suite (Project Governance & Health Tracking)
 * 8. Career Journey (Visual Flow Timeline: 2022 -> Wipro -> PMO -> 4+ Yrs -> The BlackIt)
 * 9. The BlackIt (Founder, Vision & Mission, Our Focus: 5 areas)
 * 10. Projects (Enterprise Case Studies & Portfolio)
 * 11. Insights (Thought Leadership Articles)
 * 12. Resume (Curriculum Vitae Download & Modal)
 * 13. Skills (Interactive Competency Matrix)
 * 14. Testimonials (Client & Stakeholder Endorsements)
 * 15. Contact (Direct Form & Professional Connect)
 * 16. Footer (Brand Credentials & Links)
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
      <div id="powerbi-root"></div>
      <div id="pmo-root"></div>
      <div id="journey-root"></div>
      <div id="blackit-root"></div>
      <div id="projects-root"></div>
      <div id="insights-root"></div>
      <div id="resume-root"></div>
      <div id="skills-root"></div>
      <div id="testimonials-root"></div>
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
  safeRender('powerbi-root', window.PowerBIComponent);
  safeRender('pmo-root', window.PMOComponent);
  safeRender('journey-root', window.JourneyComponent || window.TimelineComponent);
  safeRender('blackit-root', window.BlackITComponent);
  safeRender('projects-root', window.ProjectsComponent);
  safeRender('insights-root', window.InsightsComponent);
  safeRender('resume-root', window.ResumeComponent);
  safeRender('skills-root', window.SkillsComponent);
  safeRender('testimonials-root', window.TestimonialsComponent);
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
  safeInit(window.PowerBIComponent);
  safeInit(window.PMOComponent);
  safeInit(window.JourneyComponent || window.TimelineComponent);
  safeInit(window.BlackITComponent);
  safeInit(window.ProjectsComponent);
  safeInit(window.InsightsComponent);
  safeInit(window.ResumeComponent);
  safeInit(window.SkillsComponent);
  safeInit(window.TestimonialsComponent);
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

// Absolute timeout safety fallback (1.2s max)
setTimeout(() => {
  const loader = document.getElementById('page-loader');
  if (loader && !loader.classList.contains('hidden')) {
    loader.classList.add('hidden');
  }
}, 1200);

