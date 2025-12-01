/**
 * CDT ODONTOLOGIA - JAVASCRIPT
 * Desenvolvido por Weblytics
 * Atenção aos mínimos detalhes
 */

// ==========================================
// LOADING SCREEN
// ==========================================
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');

    // Simula um carregamento mínimo para mostrar a animação
    setTimeout(() => {
        loadingScreen.classList.add('hidden');

        // Remove o elemento do DOM após a transição
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);

        // Inicia as animações da página
        initPageAnimations();
    }, 2000);
});

// ==========================================
// INITIALIZE AOS (Animate On Scroll)
// ==========================================
function initPageAnimations() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100,
        delay: 100
    });
}

// ==========================================
// NAVIGATION
// ==========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll Effect na Navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Smooth Scroll & Active Link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Fecha o menu mobile se estiver aberto
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';

            // Scroll suave
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Update Active Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// HERO PARTICLES
// ==========================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            animation: float ${duration}s ${delay}s infinite ease-in-out;
        `;

        particlesContainer.appendChild(particle);
    }
}

// CSS para animação das partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
        }
        25% {
            transform: translate(20px, -20px) scale(1.1);
            opacity: 0.5;
        }
        50% {
            transform: translate(-20px, -40px) scale(0.9);
            opacity: 0.3;
        }
        75% {
            transform: translate(20px, -20px) scale(1.05);
            opacity: 0.4;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ==========================================
// COUNTER ANIMATION (Stats)
// ==========================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Intersection Observer para iniciar contador quando visível
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            animateCounter(entry.target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statObserver.observe(stat);
});

// ==========================================
// GALLERY FILTER
// ==========================================
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class de todos os botões
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
            const category = item.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ==========================================
// BEFORE/AFTER SLIDER
// ==========================================
function initBeforeAfterSliders() {
    const sliders = document.querySelectorAll('.before-after-images');

    sliders.forEach(slider => {
        const handle = slider.querySelector('.slider-handle');
        const afterImage = slider.querySelector('.image-after');
        let isDown = false;

        // Mouse events
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            updateSlider(e, slider, afterImage);
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            updateSlider(e, slider, afterImage);
        });

        document.addEventListener('mouseup', () => {
            isDown = false;
        });

        // Touch events
        slider.addEventListener('touchstart', (e) => {
            isDown = true;
            updateSlider(e.touches[0], slider, afterImage);
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            updateSlider(e.touches[0], slider, afterImage);
        });

        slider.addEventListener('touchend', () => {
            isDown = false;
        });
    });
}

function updateSlider(e, slider, afterImage) {
    const rect = slider.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    if (percentage >= 0 && percentage <= 100) {
        const handle = slider.querySelector('.slider-handle');
        handle.style.left = `${percentage}%`;
        afterImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    }
}

initBeforeAfterSliders();

// ==========================================
// TESTIMONIALS SLIDER
// ==========================================
class TestimonialSlider {
    constructor() {
        this.track = document.querySelector('.testimonial-track');
        this.slides = document.querySelectorAll('.testimonial-card');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.dotsContainer = document.getElementById('sliderDots');

        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        this.autoplayInterval = null;

        this.init();
    }

    init() {
        // Criar dots
        this.createDots();

        // Event listeners
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Autoplay
        this.startAutoplay();

        // Pausar autoplay no hover
        const sliderContainer = document.querySelector('.testimonials-slider');
        sliderContainer.addEventListener('mouseenter', () => this.stopAutoplay());
        sliderContainer.addEventListener('mouseleave', () => this.startAutoplay());
    }

    createDots() {
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'slider-dot';
            if (i === 0) dot.classList.add('active');

            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
    }

    updateDots() {
        const dots = document.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        this.updateDots();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slideCount;
        this.goToSlide(this.currentSlide);
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
        this.goToSlide(this.currentSlide);
    }

    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoplay() {
        clearInterval(this.autoplayInterval);
    }
}

// Inicializar slider
const testimonialSlider = new TestimonialSlider();

// ==========================================
// CONTACT FORM
// ==========================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

// Máscara de telefone
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        e.target.value = value;
    } else {
        e.target.value = value.slice(0, 15);
    }
});

// Validação e envio do formulário
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Validação
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('Por favor, insira um e-mail válido', 'error');
        return;
    }

    // Validação de telefone
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Por favor, insira um telefone válido', 'error');
        return;
    }

    // Animação de envio
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;

    // Simular envio (substituir por requisição real)
    setTimeout(() => {
        // Aqui você adicionaria a lógica de envio real para o backend
        // Por exemplo: fetch('/api/contact', { method: 'POST', body: formData })

        // Sucesso
        contactForm.style.display = 'none';
        formSuccess.classList.add('active');

        // Reset após 5 segundos
        setTimeout(() => {
            contactForm.style.display = 'flex';
            formSuccess.classList.remove('active');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 5000);

        showNotification('Mensagem enviada com sucesso!', 'success');
    }, 2000);
});

// Sistema de notificações
function showNotification(message, type = 'info') {
    // Remove notificação anterior se existir
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    // Estilos da notificação
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 0.75rem;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Animações para notificações
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// LAZY LOADING IMAGES
// ==========================================
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ==========================================
// PARALLAX EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxElements = document.querySelectorAll('.hero-content');

    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// SMOOTH REVEAL ON SCROLL
// ==========================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.service-card, .doctor-card, .info-card');

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Aplicar estilos iniciais
document.querySelectorAll('.service-card, .doctor-card, .info-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Chamar uma vez no carregamento

// ==========================================
// ANIMATION ON VIEW
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.about-text, .gallery-item').forEach(element => {
    observer.observe(element);
});

// ==========================================
// FORM FIELD ANIMATION
// ==========================================
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
    field.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
    });

    field.addEventListener('blur', (e) => {
        if (!e.target.value) {
            e.target.parentElement.classList.remove('focused');
        }
    });

    // Verificar se já tem valor no carregamento
    if (field.value) {
        field.parentElement.classList.add('focused');
    }
});

// ==========================================
// EASTER EGG - KONAMI CODE
// ==========================================
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Efeito especial quando o código Konami é digitado
    const teeth = ['🦷', '😁', '✨'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const tooth = document.createElement('div');
            tooth.textContent = teeth[Math.floor(Math.random() * teeth.length)];
            tooth.style.cssText = `
                position: fixed;
                font-size: 2rem;
                left: ${Math.random() * 100}vw;
                top: -50px;
                z-index: 99999;
                pointer-events: none;
                animation: fall ${Math.random() * 3 + 2}s linear;
            `;
            document.body.appendChild(tooth);

            setTimeout(() => tooth.remove(), 5000);
        }, i * 100);
    }

    showNotification('🎉 Easter Egg Desbloqueado! Weblytics cuida dos mínimos detalhes! 🎉', 'success');
}

const easterEggStyles = document.createElement('style');
easterEggStyles.textContent = `
    @keyframes fall {
        to {
            top: 110vh;
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(easterEggStyles);

// ==========================================
// PERFORMANCE MONITORING
// ==========================================
if ('PerformanceObserver' in window) {
    // Monitorar carregamento de recursos
    const perfObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            // Aqui você pode enviar métricas para analytics
            console.log(`[Performance] ${entry.name}: ${entry.duration}ms`);
        }
    });

    perfObserver.observe({ entryTypes: ['navigation', 'resource'] });
}

// ==========================================
// ACCESSIBILITY IMPROVEMENTS
// ==========================================
// Adicionar skip to content link
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Pular para o conteúdo';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.prepend(skipLink);

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log(
    '%c🦷 CDT Odontologia',
    'color: #8B9A46; font-size: 24px; font-weight: bold;'
);
console.log(
    '%c💚 Desenvolvido por Weblytics',
    'color: #6D7A35; font-size: 14px;'
);
console.log(
    '%c✨ Cuidando dos mínimos detalhes para sua clínica',
    'color: #A3B359; font-size: 12px; font-style: italic;'
);
console.log(
    '%c📱 Site 100% responsivo | ⚡ Performance otimizada | ♿ Acessível',
    'color: #666; font-size: 11px;'
);

// ==========================================
// SERVICE WORKER (PWA) - Opcional
// ==========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Descomente para ativar PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registrado!', reg))
        //     .catch(err => console.log('Erro ao registrar Service Worker', err));
    });
}

// ==========================================
// ANALYTICS TRACKING (Exemplo)
// ==========================================
function trackEvent(category, action, label) {
    // Integração com Google Analytics, Facebook Pixel, etc.
    console.log(`[Analytics] ${category} - ${action} - ${label}`);

    // Exemplo com Google Analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Rastrear cliques em botões importantes
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        trackEvent('Button', 'Click', e.target.textContent.trim());
    });
});

// Rastrear submissão de formulário
contactForm.addEventListener('submit', () => {
    trackEvent('Form', 'Submit', 'Contact Form');
});

// ==========================================
// FINALIZACAO
// ==========================================
console.log('%c✅ Todos os scripts carregados com sucesso!', 'color: #10B981; font-weight: bold;');

// Expor funcionalidades úteis para debug
window.CDT = {
    version: '1.0.0',
    features: {
        lazyLoading: true,
        animations: true,
        formValidation: true,
        sliders: true,
        filters: true,
        accessibility: true
    },
    utils: {
        showNotification,
        trackEvent
    }
};
