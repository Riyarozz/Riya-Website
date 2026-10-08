document.addEventListener('DOMContentLoaded', () => {
    
    // --- Loader ---
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                revealOnScroll(); // Trigger initial reveals
            }, 500);
        }, 500); // Small artificial delay for effect
    });

    // --- Navbar Scroll Effect & Mobile Menu ---
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // --- Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
    
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('reveal-active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    // --- 3D Card Hover Effect ---
    const tiltCards = document.querySelectorAll('.tilt-card');
    
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            // Calculate tilt angle (-10 to 10 degrees)
            const tiltX = ((y - centerY) / centerY) * -10;
            const tiltY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.transition = 'none';
            card.style.zIndex = '10';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease';
            card.style.zIndex = '1';
        });
    });

    // --- Parallax Effect on Hero Image ---
    const heroBg = document.querySelector('.hero-bg img');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if(heroBg && scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });

    // --- Particle System (Hero Canvas) ---
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        });

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 4 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * -1 - 0.2; // Move upwards mainly
                
                // Rose gold and blush colors
                const colors = ['rgba(183,110,121,0.5)', 'rgba(250,220,217,0.6)', 'rgba(255,255,255,0.7)'];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                // Reset if off screen
                if (this.y < 0) {
                    this.y = canvas.height;
                    this.x = Math.random() * canvas.width;
                }
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        function initParticles() {
            particlesArray = [];
            let numParticles = 80;
            // Less particles on mobile
            if(window.innerWidth < 768) numParticles = 40;
            
            for (let i = 0; i < numParticles; i++) {
                particlesArray.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    }

    // --- Form Submission (Prevent Default) ---
    const form = document.getElementById('contact-form');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            
            setTimeout(() => {
                btn.textContent = 'Message Sent!';
                btn.style.background = 'linear-gradient(135deg, #4CAF50, #81C784)';
                form.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = ''; // restore css logic
                }, 3000);
            }, 1000);
        });
    }

});
