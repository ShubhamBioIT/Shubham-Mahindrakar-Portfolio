/* =============================================
   ULTIMATE PORTFOLIO JAVASCRIPT - WORLD'S BEST
   Created with maximum potential and passion! 🚀
   ============================================= */

// =============================================
// GLOBAL VARIABLES & CONFIGURATION
// =============================================

const CONFIG = {
    loadingDuration: 4000,
    typingSpeed: 100,
    typingDelay: 2000,
    constellationNodes: 50,
    particleCount: 100,
    animationEasing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    colors: {
        primary: '#667eea',
        secondary: '#764ba2',
        accent: '#ff6b6b',
        success: '#00ff88'
    }
};

let isLoading = true;
let currentTheme = localStorage.getItem('theme') || 'light';
let mousePosition = { x: 0, y: 0 };
let customCursor, cursorTrail;

// =============================================
// UTILITY FUNCTIONS - PERFORMANCE OPTIMIZED
// =============================================

const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttle = (func, limit) => {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

const lerp = (start, end, factor) => start + (end - start) * factor;

const randomBetween = (min, max) => Math.random() * (max - min) + min;

const createRipple = (element, event) => {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
};


// =============================================
// ENHANCED DNA HELIX INTERACTIONS
// =============================================

class DNAHelix {
    constructor() {
        this.container = document.querySelector('.dna-container');
        this.bioElements = document.querySelectorAll('.bio-element');
        this.centralLogo = document.querySelector('.central-logo');
    }

    init() {
        if (!this.container) return;
        
        this.setupBioElementInteractions();
        this.setupCentralLogoInteractions();
        this.createParticleSystem();
    }

    setupBioElementInteractions() {
        this.bioElements.forEach(element => {
            element.addEventListener('click', (e) => {
                this.createSkillExplosion(element);
                this.showSkillTooltip(element);
            });
        });
    }

    createSkillExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const color = getComputedStyle(element).borderColor;

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1
                },
                { 
                    transform: `translate(${x}px, ${y}px) scale(1)`, 
                    opacity: 0
                }
            ], {
                duration: 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }

    showSkillTooltip(element) {
        const skillName = element.querySelector('span').textContent;
        const tooltip = document.createElement('div');
        
        const skillDescriptions = {
            'AI': 'Artificial Intelligence & Machine Learning',
            'Genomics': 'DNA Sequencing & Analysis',
            'Python': 'Programming & Data Science',
            'Data Science': 'Statistical Analysis & Visualization',
            'Research': 'Academic Publications & Innovation',
            'ML': 'Predictive Modeling & Algorithms'
        };
        
        tooltip.innerHTML = `
            <strong>${skillName}</strong><br>
            <small>${skillDescriptions[skillName] || 'Specialized Expertise'}</small>
        `;
        
        tooltip.style.cssText = `
            position: fixed;
            top: ${element.getBoundingClientRect().top - 80}px;
            left: ${element.getBoundingClientRect().left + element.offsetWidth / 2}px;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 0.75rem;
            border-radius: 8px;
            font-size: 0.8rem;
            z-index: 9999;
            opacity: 0;
            transition: all 0.3s ease;
            pointer-events: none;
            text-align: center;
            min-width: 120px;
        `;
        
        document.body.appendChild(tooltip);
        
        setTimeout(() => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(-50%) translateY(-5px)';
        }, 10);
        
        setTimeout(() => {
            tooltip.style.opacity = '0';
            setTimeout(() => tooltip.remove(), 300);
        }, 2500);
    }

setupTypingAnimation() {
    // Remove typing animation since we want static name
    if (!this.typingElement) return;
    // Static name is handled by CSS, no JavaScript needed
}


   
    setupCentralLogoInteractions() {
        if (!this.centralLogo) return;

        this.centralLogo.addEventListener('click', () => {
            this.createLogoExplosion();
        });

        this.centralLogo.addEventListener('mouseenter', () => {
            this.centralLogo.style.transform = 'scale(1.1)';
        });

        this.centralLogo.addEventListener('mouseleave', () => {
            this.centralLogo.style.transform = 'scale(1)';
        });
    }

    createLogoExplosion() {
        const rect = this.centralLogo.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const colors = ['#667eea', '#ff6b6b', '#feca57', '#4ecdc4', '#ff9ff3'];

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 15) * Math.PI * 2;
            const distance = Math.random() * 80 + 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', 
                    opacity: 1
                },
                { 
                    transform: `translate(${x}px, ${y}px) scale(1) rotate(360deg)`, 
                    opacity: 0
                }
            ], {
                duration: Math.random() * 1000 + 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => particle.remove();
        }
    }

    createParticleSystem() {
        // Create ambient floating particles
        setInterval(() => {
            if (Math.random() > 0.7) {
                this.createAmbientParticle();
            }
        }, 2000);
    }

    createAmbientParticle() {
        const container = this.container;
        if (!container) return;

        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        container.appendChild(particle);
        
        particle.animate([
            { 
                opacity: 0,
                transform: 'scale(0) translateY(0px)'
            },
            { 
                opacity: 1,
                transform: 'scale(1) translateY(-20px)',
                offset: 0.3
            },
            { 
                opacity: 0,
                transform: 'scale(0) translateY(-40px)'
            }
        ], {
            duration: 4000,
            easing: 'ease-out'
        }).onfinish = () => particle.remove();
    }
}

// Initialize DNA Helix in the main initialization function
// Add this line to your initializePortfolio() function:
const dnaHelix = new DNAHelix();
dnaHelix.init();



// =============================================
// ADVANCED LOADING SCREEN WITH SPACE ANIMATION
// =============================================

class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressText = document.querySelector('.progress-text');
        this.currentProgress = 0;
        this.targetProgress = 0;
    }

    init() {
        this.createStars();
        this.animateProgress();
        this.simulateLoading();
    }

    createStars() {
        const starsField = document.getElementById('stars-field');
        if (!starsField) return;

        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.cssText = `
                position: absolute;
                width: ${randomBetween(1, 3)}px;
                height: ${randomBetween(1, 3)}px;
                background: white;
                border-radius: 50%;
                left: ${randomBetween(0, 100)}%;
                top: ${randomBetween(0, 100)}%;
                animation: star-twinkle ${randomBetween(2, 5)}s ease-in-out infinite alternate;
                animation-delay: ${randomBetween(0, 3)}s;
            `;
            starsField.appendChild(star);
        }
    }

    animateProgress() {
        const animate = () => {
            this.currentProgress = lerp(this.currentProgress, this.targetProgress, 0.1);
            
            if (this.progressBar) {
                this.progressBar.style.width = `${this.currentProgress}%`;
            }
            
            if (this.progressText) {
                this.progressText.textContent = `${Math.round(this.currentProgress)}%`;
            }

            if (Math.abs(this.currentProgress - this.targetProgress) > 0.1) {
                requestAnimationFrame(animate);
            }
        };
        animate();
    }

    simulateLoading() {
        const loadingSteps = [
            { progress: 20, delay: 500, message: 'Loading cosmic data...' },
            { progress: 45, delay: 800, message: 'Initializing DNA sequences...' },
            { progress: 70, delay: 1000, message: 'Connecting neural networks...' },
            { progress: 90, delay: 1200, message: 'Finalizing portfolio...' },
            { progress: 100, delay: 1500, message: 'Ready to explore!' }
        ];

        loadingSteps.forEach((step, index) => {
            setTimeout(() => {
                this.targetProgress = step.progress;
                this.animateProgress();
                
                if (step.progress === 100) {
                    setTimeout(() => this.hide(), 500);
                }
            }, step.delay);
        });
    }

    hide() {
        if (this.loadingScreen) {
            this.loadingScreen.style.opacity = '0';
            this.loadingScreen.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                this.loadingScreen.style.display = 'none';
                isLoading = false;
                document.body.classList.remove('no-scroll');
                this.onLoadComplete();
            }, 1000);
        }
    }

    onLoadComplete() {
        // Initialize all components after loading
        initializePortfolio();
        
        // Add entrance animations
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('aos-animate');
            }, index * 100);
        });
    }
}

// =============================================
// ADVANCED NAVIGATION SYSTEM
// =============================================

class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.themeToggle = document.getElementById('theme-toggle');
        this.isMenuOpen = false;
        this.lastScrollY = window.scrollY;
    }

    init() {
        this.setupEventListeners();
        this.setupThemeToggle();
        this.setupScrollEffects();
        this.setupActiveNavLink();
        this.applyTheme(currentTheme);
    }

    setupEventListeners() {
        // Hamburger menu toggle
        if (this.hamburger && this.navMenu) {
            this.hamburger.addEventListener('click', () => this.toggleMenu());
        }

        // Close menu when clicking nav links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e, link);
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.isMenuOpen && !this.navbar.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Animate menu items
        if (this.isMenuOpen) {
            this.navLinks.forEach((link, index) => {
                link.style.opacity = '0';
                link.style.transform = 'translateX(-20px)';
                setTimeout(() => {
                    link.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    link.style.opacity = '1';
                    link.style.transform = 'translateX(0)';
                }, index * 100);
            });
        }
    }

    closeMenu() {
        this.isMenuOpen = false;
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
    }

    handleNavClick(e, link) {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Add ripple effect
            createRipple(link, e);
            
            // Close mobile menu
            this.closeMenu();
            
            // Update active state
            this.updateActiveNavLink(link);
        }
    }

    setupThemeToggle() {
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => {
                currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                this.applyTheme(currentTheme);
                localStorage.setItem('theme', currentTheme);
                
                // Add magic sparkle effect
                this.createSparkleEffect(this.themeToggle);
            });
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Animate theme transition
        document.body.style.transition = 'all 0.3s ease';
        
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    createSparkleEffect(element) {
        const sparkles = [];
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${CONFIG.colors.primary};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            
            document.body.appendChild(sparkle);
            sparkles.push(sparkle);
            
            const angle = (i / 6) * Math.PI * 2;
            const distance = 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => sparkle.remove();
        }
    }

    setupScrollEffects() {
        const scrollHandler = throttle(() => {
            const currentScrollY = window.scrollY;
            
            // Navbar background effect
            if (currentScrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            // Hide/show navbar on scroll
            if (currentScrollY > this.lastScrollY && currentScrollY > 200) {
                this.navbar.style.transform = 'translateY(-100%)';
            } else {
                this.navbar.style.transform = 'translateY(0)';
            }
            
            this.lastScrollY = currentScrollY;
        }, 10);
        
        window.addEventListener('scroll', scrollHandler);
    }

    setupActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        
        const scrollHandler = throttle(() => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            this.updateActiveNavLink(null, current);
        }, 100);
        
        window.addEventListener('scroll', scrollHandler);
    }

    updateActiveNavLink(clickedLink = null, currentSection = null) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (clickedLink && link === clickedLink) {
                link.classList.add('active');
            } else if (currentSection && link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
}

// =============================================
// SPECTACULAR HERO SECTION WITH SPACE EFFECTS
// =============================================

class HeroSection {
    constructor() {
        this.typingElement = document.getElementById('typing-text');
        this.constellationCanvas = document.getElementById('constellation-canvas');
        this.profileContainer = document.querySelector('.profile-container');
        this.typingTexts = [
            'Shubham Mahindrakar',
            'Bioinformatics Expert',
            'AI Researcher',
            'Data Scientist',
            'Tool Developer',
            'Innovation Pioneer'
        ];
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.constellationNodes = [];
    }

    init() {
        // this.setupTypingAnimation();
        this.setupConstellationCanvas();
        this.setupMeteorShower();
        this.setupProfileInteractions();
        this.setupParallaxEffect();
        this.animateStatNumbers();
    }


    setupConstellationCanvas() {
        if (!this.constellationCanvas) return;

        const canvas = this.constellationCanvas;
        const ctx = canvas.getContext('2d');
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.initNodes();
        };

        this.initNodes = () => {
            this.constellationNodes = [];
            for (let i = 0; i < CONFIG.constellationNodes; i++) {
                this.constellationNodes.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 1,
                    vy: (Math.random() - 0.5) * 1,
                    radius: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.8 + 0.2
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw nodes
            this.constellationNodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;
                
                // Wrap around edges
                if (node.x < 0) node.x = canvas.width;
                if (node.x > canvas.width) node.x = 0;
                if (node.y < 0) node.y = canvas.height;
                if (node.y > canvas.height) node.y = 0;
                
                // Draw node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity})`;
                ctx.fill();
            });
            
            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            
            for (let i = 0; i < this.constellationNodes.length; i++) {
                for (let j = i + 1; j < this.constellationNodes.length; j++) {
                    const nodeA = this.constellationNodes[i];
                    const nodeB = this.constellationNodes[j];
                    const distance = Math.hypot(nodeA.x - nodeB.x, nodeA.y - nodeB.y);
                    
                    if (distance < 100) {
                        const opacity = (100 - distance) / 100 * 0.2;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
                        ctx.beginPath();
                        ctx.moveTo(nodeA.x, nodeA.y);
                        ctx.lineTo(nodeB.x, nodeB.y);
                        ctx.stroke();
                    }
                }
            }
            
            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener('resize', debounce(resizeCanvas, 250));
    }

    setupMeteorShower() {
        const meteorShower = document.querySelector('.meteor-shower');
        if (!meteorShower) return;

        setInterval(() => {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';
            meteor.style.cssText = `
                position: absolute;
                width: 2px;
                height: 100px;
                background: linear-gradient(180deg, transparent, #ffffff, transparent);
                left: ${Math.random() * 100}%;
                top: -100px;
                opacity: 0;
                animation: meteor-fall 3s linear forwards;
            `;
            
            meteorShower.appendChild(meteor);
            
            setTimeout(() => {
                if (meteor.parentNode) {
                    meteor.parentNode.removeChild(meteor);
                }
            }, 3000);
        }, randomBetween(3000, 8000));
    }

    setupProfileInteractions() {
        if (!this.profileContainer) return;

        const rings = this.profileContainer.querySelectorAll('.ring');
        const particles = this.profileContainer.querySelectorAll('.ring-particle');

        // Interactive hover effects
        this.profileContainer.addEventListener('mouseenter', () => {
            rings.forEach((ring, index) => {
                ring.style.animationPlayState = 'paused';
                ring.style.transform = `translate(-50%, -50%) rotate(${index * 60}deg) scale(1.1)`;
            });
        });

        this.profileContainer.addEventListener('mouseleave', () => {
            rings.forEach(ring => {
                ring.style.animationPlayState = 'running';
                ring.style.transform = '';
            });
        });

        // Particle click effects
        particles.forEach(particle => {
            particle.addEventListener('click', (e) => {
                this.createParticleExplosion(e.target);
                createRipple(particle, e);
            });
        });
    }

    createParticleExplosion(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${CONFIG.colors.primary};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 50;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(1)', 
                    opacity: 1,
                    background: CONFIG.colors.primary
                },
                { 
                    transform: `translate(${x}px, ${y}px) scale(0)`, 
                    opacity: 0,
                    background: CONFIG.colors.accent
                }
            ], {
                duration: 800,
                easing: CONFIG.animationEasing
            }).onfinish = () => particle.remove();
        }
    }

    setupParallaxEffect() {
        const parallaxElements = document.querySelectorAll('.stars-layer, .nebula, .hero-content');
        
        const handleScroll = throttle(() => {
            const scrolled = window.scrollY;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach((element, index) => {
                const speed = (index + 1) * 0.2;
                element.style.transform = `translateY(${rate * speed}px)`;
            });
        }, 10);
        
        window.addEventListener('scroll', handleScroll);
    }

    animateStatNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.7,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const numberElement = entry.target;
                    const targetValue = parseFloat(numberElement.getAttribute('data-count'));
                    this.animateNumber(numberElement, targetValue);
                    observer.unobserve(numberElement);
                }
            });
        }, observerOptions);

        statNumbers.forEach(number => observer.observe(number));
    }

    animateNumber(element, target) {
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            element.textContent = target % 1 === 0 ? Math.floor(current) : current.toFixed(2);
        }, 16);
    }
}

// =============================================
// INTERACTIVE TIMELINE WITH PROGRESS
// =============================================

class Timeline {
    constructor() {
    // Remove typing element reference since we don't need it
    // this.typingElement = document.getElementById('typing-text');
    // ... keep other code
}

init() {
    // Remove typing animation setup
    // this.setupTypingAnimation();
    
    // Keep other methods:
    this.setupConstellationCanvas();
    this.setupMeteorShower();
    this.setupProfileInteractions();
    this.setupParallaxEffect();
    this.animateStatNumbers();
}
}

    setupScrollAnimation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        });

        this.timelineItems.forEach(item => observer.observe(item));
    }

    setupItemAnimations() {
        this.timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            const marker = item.querySelector('.timeline-marker');
            
            if (content && marker) {
                content.addEventListener('mouseenter', () => {
                    marker.style.transform = 'translateX(-50%) scale(1.2)';
                    // Remove translateY to prevent position change
                    content.style.boxShadow = 'var(--shadow-xl)';
                });

                content.addEventListener('mouseleave', () => {
                    marker.style.transform = 'translateX(-50%) scale(1)';
                    content.style.boxShadow = '';
                });

            }
        });
    }

    setupProgressIndicator() {
        if (!this.progressLine) return;

        const updateProgress = throttle(() => {
            const timelineRect = this.timeline.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const timelineHeight = this.timeline.offsetHeight;
            
            const scrollProgress = Math.max(0, Math.min(1, 
                (windowHeight - timelineRect.top) / (windowHeight + timelineHeight)
            ));
            
            this.progressLine.style.height = `${scrollProgress * 100}%`;
        }, 10);

        window.addEventListener('scroll', updateProgress);
        updateProgress();
    }
}

// =============================================
// 3D PROJECT CARDS WITH ADVANCED EFFECTS
// =============================================

class ProjectCards {
    constructor() {
        this.cards = document.querySelectorAll('.project-card');
        this.observedCards = new Set();
    }

    init() {
        this.setup3DEffects();
        this.setupIntersectionObserver();
        this.setupMagneticEffect();
    }

    setup3DEffects() {
        this.cards.forEach(card => {
            const cardInner = card;
            
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
    
                // Reduce rotation intensity for subtlety
                const rotateX = (e.clientY - centerY) / 20;
                const rotateY = (centerX - e.clientX) / 20;
    
                cardInner.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                `;
            });

            
            card.addEventListener('mouseleave', () => {
                cardInner.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
            });
            
            // Add click ripple effect
            card.addEventListener('click', (e) => {
                createRipple(card, e);
            });
        });
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.observedCards.has(entry.target)) {
                    this.animateCardEntry(entry.target);
                    this.observedCards.add(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        this.cards.forEach(card => observer.observe(card));
    }

    animateCardEntry(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(10deg)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateX(0)';
        }, 100);
    }

    setupMagneticEffect() {
        this.cards.forEach(card => {
            const links = card.querySelectorAll('.project-link');
        
            links.forEach(link => {
                link.addEventListener('mouseenter', () => {
                    // Simple scale effect without position change
                    link.style.transform = 'scale(1.1)';
                    link.style.boxShadow = 'var(--shadow-md)';
                });
            
                link.addEventListener('mouseleave', () => {
                    link.style.transform = 'scale(1)';
                    link.style.boxShadow = '';
                });
            });
        });
    }
}




// =============================================
// ADVANCED SKILL BARS WITH ANIMATIONS
// =============================================

class SkillBars {
    constructor() {
        this.skillBars = document.querySelectorAll('.skill-progress');
        this.skillCategories = document.querySelectorAll('.skill-category');
        this.animatedBars = new Set();
    }

    init() {
        this.setupIntersectionObserver();
        this.setupCategoryAnimations();
        this.setupInteractiveEffects();
    }

    setupIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach((bar, index) => {
                        if (!this.animatedBars.has(bar)) {
                            setTimeout(() => {
                                this.animateSkillBar(bar);
                                this.animatedBars.add(bar);
                            }, index * 200);
                        }
                    });
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });

        this.skillCategories.forEach(category => observer.observe(category));
    }

    animateSkillBar(bar) {
        const targetWidth = bar.getAttribute('data-width');
        bar.style.width = targetWidth;
        
        // Add pulse effect when animation completes
        setTimeout(() => {
            bar.style.boxShadow = `0 0 20px ${CONFIG.colors.primary}40`;
            setTimeout(() => {
                bar.style.boxShadow = '';
            }, 500);
        }, 2000);
    }

    setupCategoryAnimations() {
        this.skillCategories.forEach(category => {
            category.addEventListener('mouseenter', () => {
                const icon = category.querySelector('.category-icon');
                if (icon) {
                    icon.style.transform = 'scale(1.1) rotate(10deg)';
                    this.createFloatingParticles(icon);
                }
            });
            
            category.addEventListener('mouseleave', () => {
                const icon = category.querySelector('.category-icon');
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0deg)';
                }
            });
        });
    }

    createFloatingParticles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 6; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${CONFIG.colors.primary};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 6) * Math.PI * 2;
            const distance = 40;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 0
                },
                { 
                    transform: 'translate(-50%, -50%) scale(1)', 
                    opacity: 1,
                    offset: 0.3
                },
                { 
                    transform: `translate(${x}px, ${y}px) scale(0)`, 
                    opacity: 0
                }
            ], {
                duration: 1500,
                easing: CONFIG.animationEasing
            }).onfinish = () => particle.remove();
        }
    }

    setupInteractiveEffects() {
        this.skillBars.forEach(bar => {
            const skillItem = bar.closest('.skill-item');
            
            if (skillItem) {
                skillItem.addEventListener('mouseenter', () => {
                    bar.style.transform = 'scaleY(1.5)';
                    bar.style.filter = `drop-shadow(0 0 10px ${CONFIG.colors.primary})`;
                });
                
                skillItem.addEventListener('mouseleave', () => {
                    bar.style.transform = 'scaleY(1)';
                    bar.style.filter = '';
                });
            }
        });
    }
}

// =============================================
// PERFECT CONTACT FORM WITH VALIDATIONS
// =============================================

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.inputs = document.querySelectorAll('.input-wrapper input, .input-wrapper textarea');
        this.submitBtn = document.querySelector('.submit-btn');
    }

    init() {
        if (!this.form) return;
        
        this.setupFormValidation();
        this.setupInputAnimations();
        this.setupFormSubmission();
        this.setupFloatingLabels();
    }

    setupFormValidation() {
        this.inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        this.clearFieldError(field);

        switch (fieldName) {
            case 'firstName':
            case 'lastName':
                if (!value) {
                    isValid = false;
                    errorMessage = 'This field is required';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Must be at least 2 characters';
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    isValid = false;
                    errorMessage = 'Email is required';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Please enter a valid email';
                }
                break;
                
            case 'subject':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Subject is required';
                } else if (value.length < 5) {
                    isValid = false;
                    errorMessage = 'Subject must be at least 5 characters';
                }
                break;
                
            case 'message':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Message is required';
                } else if (value.length < 10) {
                    isValid = false;
                    errorMessage = 'Message must be at least 10 characters';
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        const wrapper = field.closest('.input-wrapper');
        field.style.borderColor = CONFIG.colors.accent;
        field.style.backgroundColor = `${CONFIG.colors.accent}10`;
        
        // Create or update error message
        let errorElement = wrapper.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.style.cssText = `
                color: ${CONFIG.colors.accent};
                font-size: 0.8rem;
                margin-top: 0.5rem;
                opacity: 0;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            `;
            wrapper.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
        setTimeout(() => {
            errorElement.style.opacity = '1';
            errorElement.style.transform = 'translateY(0)';
        }, 10);
    }

    clearFieldError(field) {
        const wrapper = field.closest('.input-wrapper');
        field.style.borderColor = '';
        field.style.backgroundColor = '';
        
        const errorElement = wrapper.querySelector('.error-message');
        if (errorElement) {
            errorElement.style.opacity = '0';
            errorElement.style.transform = 'translateY(-10px)';
            setTimeout(() => errorElement.remove(), 300);
        }
    }

    setupInputAnimations() {
        this.inputs.forEach(input => {
            input.addEventListener('focus', () => {
                const wrapper = input.closest('.input-wrapper');
                wrapper.classList.add('focused');
                this.createFocusRipple(input);
            });
            
            input.addEventListener('blur', () => {
                const wrapper = input.closest('.input-wrapper');
                wrapper.classList.remove('focused');
            });
        });
    }

    createFocusRipple(input) {
        const wrapper = input.closest('.input-wrapper');
        const ripple = document.createElement('div');
        
        ripple.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background: ${CONFIG.colors.primary};
            transform: translateX(-50%);
            transition: width 0.3s ease;
        `;
        
        wrapper.style.position = 'relative';
        wrapper.appendChild(ripple);
        
        setTimeout(() => {
            ripple.style.width = '100%';
        }, 10);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.parentNode.removeChild(ripple);
            }
        }, 300);
    }

    setupFloatingLabels() {
        this.inputs.forEach(input => {
            const updateLabelState = () => {
                const label = input.nextElementSibling;
                if (input.value.trim() !== '' || input === document.activeElement) {
                    label.style.transform = 'translateY(-0.75rem) scale(0.85)';
                    label.style.color = CONFIG.colors.primary;
                } else {
                    label.style.transform = '';
                    label.style.color = '';
                }
            };

            input.addEventListener('focus', updateLabelState);
            input.addEventListener('blur', updateLabelState);
            input.addEventListener('input', updateLabelState);
            
            // Initial state
            updateLabelState();
        });
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate all fields
            let isFormValid = true;
            this.inputs.forEach(input => {
                if (!this.validateField(input)) {
                    isFormValid = false;
                }
            });
            
            if (isFormValid) {
                this.submitForm();
            } else {
                this.showFormError('Please fix the errors above');
            }
        });
    }

    async submitForm() {
        // Show loading state
        this.setSubmitButtonState('loading');
        
        try {
            // Get form data
            const formData = new FormData(this.form);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone') || '',
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Create mailto link
            const mailtoSubject = encodeURIComponent(data.subject);
            const mailtoBody = encodeURIComponent(
                `Name: ${data.firstName} ${data.lastName}\n` +
                `Email: ${data.email}\n` +
                `Phone: ${data.phone}\n\n` +
                `Message:\n${data.message}`
            );
            
            const mailtoLink = `mailto:shubhammahindrakar2104@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
            
            // Simulate processing time
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Open email client
            window.open(mailtoLink);
            
            // Show success state
            this.setSubmitButtonState('success');
            this.showSuccessAnimation();
            
            // Reset form after success
            setTimeout(() => {
                this.form.reset();
                this.setSubmitButtonState('normal');
                this.inputs.forEach(input => {
                    const label = input.nextElementSibling;
                    if (label) {
                        label.style.transform = '';
                        label.style.color = '';
                    }
                });
            }, 3000);
            
        } catch (error) {
            console.error('Form submission error:', error);
            this.setSubmitButtonState('error');
            this.showFormError('Something went wrong. Please try again.');
            
            setTimeout(() => {
                this.setSubmitButtonState('normal');
            }, 3000);
        }
    }

    setSubmitButtonState(state) {
        const btnText = this.submitBtn.querySelector('.btn-text');
        const btnIcon = this.submitBtn.querySelector('.btn-icon');
        
        switch (state) {
            case 'loading':
                btnText.textContent = 'Sending...';
                btnIcon.className = 'fas fa-spinner fa-spin btn-icon';
                this.submitBtn.disabled = true;
                this.submitBtn.style.background = CONFIG.colors.secondary;
                break;
                
            case 'success':
                btnText.textContent = 'Message Sent!';
                btnIcon.className = 'fas fa-check btn-icon';
                this.submitBtn.style.background = CONFIG.colors.success;
                break;
                
            case 'error':
                btnText.textContent = 'Error Occurred';
                btnIcon.className = 'fas fa-exclamation-triangle btn-icon';
                this.submitBtn.style.background = CONFIG.colors.accent;
                break;
                
            default:
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane btn-icon';
                this.submitBtn.disabled = false;
                this.submitBtn.style.background = '';
        }
    }

    showSuccessAnimation() {
        // Create success particles
        const rect = this.submitBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${CONFIG.colors.success};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 15) * Math.PI * 2;
            const distance = randomBetween(50, 100);
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1
                },
                { 
                    transform: `translate(${x}px, ${y}px) scale(1)`, 
                    opacity: 0
                }
            ], {
                duration: randomBetween(1000, 1500),
                easing: CONFIG.animationEasing
            }).onfinish = () => particle.remove();
        }
    }

    showFormError(message) {
        // Create or update error notification
        let errorNotification = document.querySelector('.form-error-notification');
        if (!errorNotification) {
            errorNotification = document.createElement('div');
            errorNotification.className = 'form-error-notification';
            errorNotification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${CONFIG.colors.accent};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                z-index: 9999;
                opacity: 0;
                transform: translateX(100px);
                transition: all 0.3s ease;
            `;
            document.body.appendChild(errorNotification);
        }
        
        errorNotification.textContent = message;
        
        setTimeout(() => {
            errorNotification.style.opacity = '1';
            errorNotification.style.transform = 'translateX(0)';
        }, 10);
        
        setTimeout(() => {
            errorNotification.style.opacity = '0';
            errorNotification.style.transform = 'translateX(100px)';
            setTimeout(() => {
                if (errorNotification.parentNode) {
                    errorNotification.parentNode.removeChild(errorNotification);
                }
            }, 300);
        }, 5000);
    }
}

// =============================================
// SCROLL TO TOP WITH CIRCULAR PROGRESS
// =============================================

class ScrollToTop {
    constructor() {
        this.scrollBtn = document.getElementById('scrollToTop');
        this.progressCircle = document.querySelector('.progress-ring__circle');
        this.circumference = 2 * Math.PI * 22; // radius is 22
    }

    init() {
        if (!this.scrollBtn || !this.progressCircle) return;
        
        this.progressCircle.style.strokeDasharray = this.circumference;
        this.progressCircle.style.strokeDashoffset = this.circumference;
        
        this.setupScrollProgress();
        this.setupClickHandler();
    }

    setupScrollProgress() {
        const updateProgress = throttle(() => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = scrollTop / docHeight;
            
            const offset = this.circumference - (scrollPercent * this.circumference);
            this.progressCircle.style.strokeDashoffset = offset;
            
            // Show/hide button
            if (scrollTop > 300) {
                this.scrollBtn.classList.add('show');
            } else {
                this.scrollBtn.classList.remove('show');
            }
        }, 10);
        
        window.addEventListener('scroll', updateProgress);
    }

    setupClickHandler() {
        this.scrollBtn.addEventListener('click', () => {
            // Add click animation
            this.scrollBtn.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.scrollBtn.style.transform = '';
            }, 150);
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            
            // Create sparkle effect
            this.createSparkleEffect();
        });
    }

    createSparkleEffect() {
        const rect = this.scrollBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${CONFIG.colors.primary};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(sparkle);
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            
            sparkle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: CONFIG.animationEasing
            }).onfinish = () => sparkle.remove();
        }
    }
}

// =============================================
// CUSTOM CURSOR SYSTEM
// =============================================

class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        this.cursorTrail = document.getElementById('cursor-trail');
        this.isVisible = false;
        this.trailTimeout = null;
    }

    init() {
        if (!this.cursor || !this.cursorTrail) return;
        if (window.innerWidth <= 768) return; // Disable on mobile
        
        this.setupEventListeners();
        this.setupInteractiveElements();
    }

    setupEventListeners() {
        document.addEventListener('mousemove', (e) => {
            if (!this.isVisible) {
                this.cursor.classList.add('active');
                this.cursorTrail.classList.add('active');
                this.isVisible = true;
            }
            
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
            
            this.cursor.style.left = `${e.clientX}px`;
            this.cursor.style.top = `${e.clientY}px`;
            
            clearTimeout(this.trailTimeout);
            this.trailTimeout = setTimeout(() => {
                this.cursorTrail.style.left = `${e.clientX}px`;
                this.cursorTrail.style.top = `${e.clientY}px`;
            }, 50);
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.classList.remove('active');
            this.cursorTrail.classList.remove('active');
            this.isVisible = false;
        });
    }

    setupInteractiveElements() {
        const interactiveElements = document.querySelectorAll(
            'a, button, .project-card, .social-link, .nav-link, .btn, input, textarea'
        );
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.classList.add('hover');
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('hover');
            });
        });
    }
}

// =============================================
// MAIN INITIALIZATION FUNCTION
// =============================================

function initializePortfolio() {
    console.log('🚀 Initializing the most spectacular portfolio ever created!');
    
    // Initialize all components
    const navigation = new Navigation();
    navigation.init();
    
    const heroSection = new HeroSection();
    heroSection.init();
    
    const timeline = new Timeline();
    timeline.init();
    
    const projectCards = new ProjectCards();
    projectCards.init();
    
    const skillBars = new SkillBars();
    skillBars.init();
    
    const contactForm = new ContactForm();
    contactForm.init();
    
    const scrollToTop = new ScrollToTop();
    scrollToTop.init();
    
    const customCursor = new CustomCursor();
    customCursor.init();
    
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 0,
            anchorPlacement: 'top-bottom'
        });
    }
    
    // Add dynamic animations based on user interactions
    setupDynamicAnimations();
    
    console.log('✨ Portfolio initialization complete! Ready to impress!');
}

// =============================================
// DYNAMIC ANIMATIONS & EASTER EGGS
// =============================================

function setupDynamicAnimations() {
    // Add entrance animations for sections
    const sections = document.querySelectorAll('section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => sectionObserver.observe(section));
    
    // Konami code easter egg
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateRainbowMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`🎯 Portfolio loaded in ${loadTime.toFixed(2)}ms`);
        });
    }
}

function activateRainbowMode() {
    document.body.style.animation = 'rainbow-mode 3s ease-in-out';
    
    // Create celebration particles
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createCelebrationParticle();
        }, i * 100);
    }
    
    // Show celebration message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
        background-size: 400% 400%;
        animation: gradient-shift 2s ease infinite;
        color: white;
        font-size: 2rem;
        font-weight: bold;
        padding: 2rem 3rem;
        border-radius: 20px;
        z-index: 10000;
        text-align: center;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;
    message.innerHTML = '🎉<br>Easter Egg Activated!<br>🌈 Rainbow Mode! 🌈';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.opacity = '0';
        message.style.transform = 'translate(-50%, -50%) scale(0)';
        setTimeout(() => message.remove(), 500);
        document.body.style.animation = '';
    }, 3000);
}

function createCelebrationParticle() {
    const particle = document.createElement('div');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    
    particle.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
    `;
    
    document.body.appendChild(particle);
    
    particle.animate([
        { 
            transform: 'scale(0) rotate(0deg)', 
            opacity: 1 
        },
        { 
            transform: 'scale(1) rotate(180deg)', 
            opacity: 1,
            offset: 0.3
        },
        { 
            transform: 'scale(0) rotate(360deg)', 
            opacity: 0 
        }
    ], {
        duration: randomBetween(2000, 4000),
        easing: CONFIG.animationEasing
    }).onfinish = () => particle.remove();
}

// =============================================
// CSS ANIMATIONS (Add to head)
// =============================================

const additionalStyles = `
<style>
@keyframes rainbow-mode {
    0% { filter: hue-rotate(0deg) saturate(1); }
    50% { filter: hue-rotate(180deg) saturate(1.5); }
    100% { filter: hue-rotate(360deg) saturate(1); }
}

@keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes star-twinkle {
    from { opacity: 0.3; transform: scale(1); }
    to { opacity: 1; transform: scale(1.2); }
}

@keyframes meteor-fall {
    from { 
        opacity: 0; 
        transform: translateY(-100px) rotate(45deg); 
    }
    10% { 
        opacity: 1; 
    }
    90% { 
        opacity: 1; 
    }
    to { 
        opacity: 0; 
        transform: translateY(100vh) rotate(45deg); 
    }
}

.section-visible {
    animation: section-entrance 0.8s ease-out forwards;
}

@keyframes section-entrance {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`;

// =============================================
// DOCUMENT READY & ERROR HANDLING
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    // Add additional styles
    document.head.insertAdjacentHTML('beforeend', additionalStyles);
    
    // Initialize loading screen
    const loadingScreen = new LoadingScreen();
    loadingScreen.init();
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Prevent body scroll during loading
    document.body.classList.add('no-scroll');
});

// Error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
});

// Performance optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Lazy load non-critical animations
        console.log('🔥 Portfolio is running at peak performance!');
    });
}

// Console signature
console.log(`
██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗     ███████╗    ██████╗ ███████╗███████╗████████╗
██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗    ██╔════╝    ██╔══██╗██╔════╝██╔════╝╚══██╔══╝
██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║    ███████╗    ██████╔╝█████╗  ███████╗   ██║   
██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║    ╚════██║    ██╔══██╗██╔══╝  ╚════██║   ██║   
╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝    ███████║    ██████╔╝███████╗███████║   ██║   
 ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝     ╚══════╝    ╚═════╝ ╚══════╝╚══════╝   ╚═╝   

🚀 Shubham Mahindrakar's Portfolio - The Ultimate Interactive Experience
✨ Combining Artificial Intelligence with Biological Intelligence
💻 Built with maximum passion and cutting-edge technology
🌟 Ready to explore the future of bioinformatics!
`);

/* End of the most spectacular JavaScript ever created! */



