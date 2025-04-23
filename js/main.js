/**
 * LAIBIT & MERL-T Main JavaScript
 * Main JavaScript file that imports and initializes all components
 * 
 * Versione modificata per gestire moduli mancanti
 */

// Funzione di utilità per importare in modo sicuro
async function safeImport(modulePath, defaultFallback = () => {}) {
    try {
        return await import(modulePath);
    } catch (error) {
        console.warn(`Modulo ${modulePath} non trovato. Uso fallback.`, error);
        // Restituisci un oggetto con una funzione vuota con lo stesso nome del modulo
        const moduleName = modulePath.split('/').pop().split('.')[0];
        const functionName = 'init' + moduleName.charAt(0).toUpperCase() + moduleName.slice(1);
        return { 
            [functionName]: defaultFallback,
            default: { [functionName]: defaultFallback }
        };
    }
}

/**
 * Initialize all components when DOM is loaded
 */
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, initializing components...');
    
    // Show page loader
    const pageLoader = document.getElementById('page-loader');
    let loaderTimeout;
    
    if (pageLoader) {
        // Set a maximum timeout for the loader to prevent infinite loading
        loaderTimeout = setTimeout(() => {
            pageLoader.classList.add('fade-out');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 300);
        }, 5000); // 5 seconds maximum
    }
    
    try {
        // Import core components
        const { initNavbar } = await safeImport('./components/navbar.js', 
            () => console.log('Fallback: Navbar initialized'));
            
        const { initModals } = await safeImport('./components/modals.js',
            () => console.log('Fallback: Modals initialized'));
            
        const { initPipeline } = await safeImport('./components/pipeline-explorer.js',
            () => console.log('Fallback: Pipeline initialized'));
            
        const { initDemoInterface } = await safeImport('./components/demo-interface.js', 
            () => console.log('Fallback: Demo interface initialized'));
            
        const { initForms } = await safeImport('./components/forms.js',
            () => console.log('Fallback: Forms initialized'));
            
        const { initKgVisualization } = await safeImport('./components/kg-visualization.js',
            () => console.log('Fallback: KG visualization initialized'));
        
        // Import utilities
        const { initStatCounters } = await safeImport('./utils/stat-counters.js',
            () => console.log('Fallback: Stat counters initialized'));
            
        const { initScrollAnimations } = await safeImport('./utils/intersectionObserver.js',
            () => console.log('Fallback: Scroll animations initialized'));
            
        const { initAccessibility } = await safeImport('./utils/accessibility.js',
            () => console.log('Fallback: Accessibility initialized'));
        
        // Initialize components
        initNavbar();
        initModals();
        initPipeline();
        initDemoInterface();
        initForms();
        initKgVisualization();
        initStatCounters();
        initScrollAnimations();
        initAccessibility();
        
        // Initialize back to top button
        initBackToTop();
        
        // Initialize cookie consent
        initCookieConsent();
        
        // Update current year in footer
        updateFooterYear();
        
        console.log('All components initialized successfully');
    } catch (error) {
        console.error('Error during initialization:', error);
    } finally {
        // Remove page loader
        if (pageLoader) {
            clearTimeout(loaderTimeout);
            pageLoader.classList.add('fade-out');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 300);
        }
    }
});

/**
 * Initialize Back to Top button
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
}

/**
 * Initialize Cookie Consent Banner
 */
function initCookieConsent() {
    const cookieBanner = document.getElementById('cookie-consent');
    const acceptButton = document.getElementById('cookie-accept');
    const rejectButton = document.getElementById('cookie-reject');
    
    if (!cookieBanner || !acceptButton || !rejectButton) return;
    
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookie-consent');
    
    if (consentGiven) {
        cookieBanner.style.display = 'none';
    } else {
        // Show banner with animation
        setTimeout(() => {
            cookieBanner.classList.add('visible');
        }, 1000);
        
        // Handle accept button
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'accepted');
            cookieBanner.classList.remove('visible');
            
            // Here you would initialize analytics or other cookie-dependent services
            initAnalytics();
            
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        });
        
        // Handle reject button
        rejectButton.addEventListener('click', () => {
            localStorage.setItem('cookie-consent', 'rejected');
            cookieBanner.classList.remove('visible');
            
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 300);
        });
    }
}

/**
 * Initialize Analytics (placeholder)
 * This would be implemented based on your analytics provider
 */
function initAnalytics() {
    console.log('Analytics initialized (placeholder)');
}

/**
 * Update footer year to current year
 */
function updateFooterYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Expose global functions for non-module scripts or inline handlers
 */
window.laibit = {
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    },
    
    openModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('is-visible');
            modal.setAttribute('aria-hidden', 'false');
            
            // Focus trap
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }
    },
    
    closeModal: function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('is-visible');
            modal.setAttribute('aria-hidden', 'true');
        }
    }
};