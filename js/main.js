/**
 * LAIBIT & MERL-T Main JavaScript
 * Versione MVP minima funzionante con fallback per moduli mancanti
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing MVP components...');
    
    // Rimuovi page loader se presente
    const pageLoader = document.getElementById('page-loader');
    if (pageLoader) {
        setTimeout(() => {
            pageLoader.classList.add('fade-out');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 300);
        }, 1000); // Breve timeout per mostrare il loader
    }
    
    // Inizializza navbar
    initNavbar();
    
    // Inizializza modali
    initModals();
    
    // Inizializza pipeline
    initPipeline();
    
    // Inizializza animazioni di scroll
    initScrollAnimations();
    
    // Inizializza contatori statistiche
    initStatCounters();
    
    // Inizializza pulsante "Torna su"
    initBackToTop();
    
    // Aggiorna anno footer
    updateFooterYear();
    
    console.log('MVP components initialized successfully');
});

/**
 * Inizializza la navbar con gestione dello scroll e menu mobile
 */
function initNavbar() {
    const navbar = document.getElementById('main-navbar');
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('main-menu');
    
    if (!navbar) return;
    
    // Gestione stile navbar su scroll
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Controllo iniziale (pagina potrebbe essere già scrollata)
    handleNavbarScroll();
    
    // Aggiungi event listener per lo scroll
    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    
    // Gestione menu mobile
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            const isActive = hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            document.body.classList.toggle('menu-open', isActive);
        });
        
        // Chiudi menu quando si clicca su un link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('menu-open');
            });
        });
    }
    
    // Smooth scrolling per i link interni
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return; // Ignora link vuoti
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('Navbar initialized');
}

/**
 * Inizializza le modali
 */
function initModals() {
    const modalTriggers = document.querySelectorAll('[data-target]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close-btn');
    
    if (modalTriggers.length === 0 || modals.length === 0) return;
    
    // Store previously focused element to restore focus when modal closes
    let previouslyFocusedElement = null;
    
    // Open modal
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModalId = trigger.getAttribute('data-target');
            const modal = document.getElementById(targetModalId);
            
            if (modal) {
                openModal(modal);
            }
        });
    });
    
    // Close with button
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const visibleModal = document.querySelector('.modal.is-visible');
            if (visibleModal) {
                closeModal(visibleModal);
            }
        }
    });
    
    // Modal open function
    function openModal(modal) {
        previouslyFocusedElement = document.activeElement;
        modal.style.display = 'block';
        
        // Force reflow before adding visible class for animation
        modal.offsetHeight;
        
        modal.classList.add('is-visible');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        
        // Focus on modal content
        const focusableElement = modal.querySelector('.modal-content');
        if (focusableElement) {
            setTimeout(() => {
                focusableElement.focus();
            }, 100);
        }
    }
    
    // Modal close function
    function closeModal(modal) {
        modal.classList.remove('is-visible');
        
        setTimeout(() => {
            modal.style.display = 'none';
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            
            // Restore focus
            if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
            }
        }, 300);
    }
    
    // Esporre funzioni modali globalmente per uso in-page
    window.laibit = window.laibit || {};
    window.laibit.openModal = openModal;
    window.laibit.closeModal = closeModal;
    
    console.log('Modals initialized');
}

/**
 * Inizializza la pipeline interattiva
 */
function initPipeline() {
    const pipelineTabs = document.querySelectorAll('.pipeline-tab');
    const pipelineContents = document.querySelectorAll('.pipeline-stage-content');
    const pipelineNodes = document.querySelectorAll('.pipeline-node');
    const pipelineConnectors = document.querySelectorAll('.pipeline-connector');
    
    if (pipelineTabs.length === 0) return;
    
    // Tab switching
    pipelineTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const stage = tab.getAttribute('data-stage');
            
            // Update tabs
            pipelineTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update content
            pipelineContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `stage-${stage}`) {
                    content.classList.add('active');
                }
            });
            
            // Update nodes
            pipelineNodes.forEach(node => {
                node.classList.remove('active');
                if (node.getAttribute('data-stage') === stage) {
                    node.classList.add('active');
                }
            });
            
            // Update connectors
            updatePipelineConnectors(pipelineConnectors, stage);
        });
    });
    
    // Node interaction
    pipelineNodes.forEach(node => {
        node.addEventListener('click', () => {
            const stage = node.getAttribute('data-stage');
            
            // Find and click corresponding tab to reuse logic
            const correspondingTab = document.querySelector(`.pipeline-tab[data-stage="${stage}"]`);
            if (correspondingTab) {
                correspondingTab.click();
            }
        });
    });
    
    // Details button interaction
    const detailsButtons = document.querySelectorAll('.details-btn');
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetModalId = button.getAttribute('data-target');
            const modal = document.getElementById(targetModalId);
            
            if (modal && window.laibit && window.laibit.openModal) {
                window.laibit.openModal(modal);
            }
        });
    });
    
    console.log('Pipeline initialized');
}

/**
 * Aggiorna connettori della pipeline
 * @param {NodeList} connectors - Connettori della pipeline
 * @param {string} activeStage - Stage attualmente attivo
 */
function updatePipelineConnectors(connectors, activeStage) {
    if (connectors.length === 0) return;
    
    connectors.forEach((connector, index) => {
        const previousStage = index + 1;
        const nextStage = index + 2;
        
        // Add active class to connector if it's between the previous stage and active stage
        if (previousStage === parseInt(activeStage) - 1 || previousStage === parseInt(activeStage)) {
            connector.classList.add('active-connection');
        } else {
            connector.classList.remove('active-connection');
        }
    });
}

/**
 * Inizializza animazioni on scroll
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length === 0) return;
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });
        
        // Observe each element
        animatedElements.forEach(el => {
            // Apply delay if specified
            const delay = el.getAttribute('data-delay');
            if (delay) {
                el.style.transitionDelay = `${delay}ms`;
            }
            
            observer.observe(el);
        });
    } else {
        // Fallback: make all elements visible
        animatedElements.forEach(el => el.classList.add('is-visible'));
    }
    
    console.log('Scroll animations initialized');
}

/**
 * Inizializza contatori statistiche
 */
function initStatCounters() {
    const statElements = document.querySelectorAll('.stat-number');
    
    if (statElements.length === 0) return;
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const countTo = parseInt(element.dataset.count, 10);
                    
                    // Add visible class for CSS animations
                    element.classList.add('visible');
                    
                    // Animate counter
                    animateCounter(element, countTo);
                    
                    // Unobserve after animation starts
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        // Observe each element
        statElements.forEach(el => observer.observe(el));
    } else {
        // Fallback: show final values without animation
        statElements.forEach(element => {
            const countTo = parseInt(element.dataset.count, 10);
            element.classList.add('visible');
            element.textContent = countTo;
        });
    }
    
    console.log('Stat counters initialized');
}

/**
 * Animate counter from 0 to target value
 * @param {HTMLElement} element - Element to animate
 * @param {number} targetValue - Target value to count to
 */
function animateCounter(element, targetValue) {
    let startValue = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        // Calculate elapsed time
        const elapsedTime = currentTime - startTime;
        
        // Calculate progress (0 to 1)
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Calculate current value
        const currentValue = Math.floor(targetValue * progress);
        
        // Update element text
        element.textContent = currentValue;
        
        // Continue animation if not complete
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is exactly the target
            element.textContent = targetValue;
        }
    }
    
    // Start animation
    requestAnimationFrame(updateCounter);
}

/**
 * Inizializza pulsante back-to-top
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('Back to top button initialized');
}

/**
 * Aggiorna anno corrente nel footer
 */
function updateFooterYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Gestione form di contatto
 */
document.addEventListener('submit', function(e) {
    // Intercetta tutti i submit di form
    const form = e.target;
    
    // Previeni l'invio reale del form (per demo)
    e.preventDefault();
    
    // Mostra un messaggio di successo
    alert('Form inviato con successo! (Funzionalità simulata per demo)');
    
    // Reset del form
    form.reset();
});

/**
 * Feature link handlers
 */
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('feature-link') || e.target.closest('.feature-link')) {
        e.preventDefault();
        alert('Dettagli completi disponibili a breve! (Funzionalità simulata per demo)');
    }
    
    if (e.target.classList.contains('kg-explore-btn') || e.target.closest('.kg-explore-btn')) {
        e.preventDefault();
        alert('Esplorazione Knowledge Graph disponibile a breve! (Funzionalità simulata per demo)');
    }
    
    if (e.target.classList.contains('try-btn') || e.target.closest('.try-btn')) {
        e.preventDefault();
        alert('Accesso demo completa disponibile per i membri della community LAIBIT! (Funzionalità simulata per demo)');
    }
});