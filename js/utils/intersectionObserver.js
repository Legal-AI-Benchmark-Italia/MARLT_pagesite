/**
 * Intersection Observer for Scroll Animations
 * 
 * Handles all scroll-based animations on the page using
 * the IntersectionObserver API for better performance.
 */

/**
 * Initialize scroll animations using IntersectionObserver
 */
export function initScrollAnimations() {
    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers: just make elements visible
        const animatedElements = document.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach(el => el.classList.add('is-visible'));
        return;
    }
    
    // Observer options
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px', // no margin
        threshold: 0.15 // trigger when 15% of the element is visible
    };
    
    // Create observer instance
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Use requestAnimationFrame for smoother start
                requestAnimationFrame(() => {
                    entry.target.classList.add('is-visible');
                });
                
                // Optional: unobserve after animation to save resources
                if (!entry.target.dataset.repeat) {
                    observer.unobserve(entry.target);
                }
            } else {
                // If element should repeat animation when out of viewport
                if (entry.target.dataset.repeat) {
                    entry.target.classList.remove('is-visible');
                }
            }
        });
    }, observerOptions);
    
    // Get all elements to animate
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Observe each element
    animatedElements.forEach(el => {
        // Apply delay if data-delay attribute exists
        const delay = el.getAttribute('data-delay');
        if (delay) {
            el.style.transitionDelay = `${delay}ms`;
        }
        
        // Apply custom duration if data-duration attribute exists
        const duration = el.getAttribute('data-duration');
        if (duration) {
            el.style.transitionDuration = `${duration}ms`;
        }
        
        animationObserver.observe(el);
    });
    
    console.log('Scroll animations initialized');
}

/**
 * Initialize lazy loading for images
 * This is separated from animations for better organization
 */
export function initLazyLoading() {
    if (!('IntersectionObserver' in window)) {
        // Fallback for older browsers: load images immediately
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.setAttribute('src', img.getAttribute('data-src'));
            img.removeAttribute('data-src');
        });
        return;
    }
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                
                // When image loads, add a class to fade it in
                img.onload = () => {
                    img.classList.add('loaded');
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Initialize active section highlighting for navigation
 */
export function initScrollSpy() {
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    // Create section observer with negative rootMargin equal to navbar height
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Update active state in navigation
                navLinks.forEach(link => {
                    const href = link.getAttribute('href').substring(1); // Remove #
                    
                    if (href === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        rootMargin: `-${navbarHeight}px 0px -${window.innerHeight / 2}px 0px`,
        threshold: 0
    });
    
    // Observe all sections
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
}

/**
 * Initialize count-up animations for numbers
 */
export function initCountUp() {
    const countElements = document.querySelectorAll('[data-count]');
    
    if (countElements.length === 0) return;
    
    const countObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const countTo = parseInt(element.getAttribute('data-count'), 10);
                const duration = parseInt(element.getAttribute('data-duration'), 10) || 2000;
                
                animateCount(element, 0, countTo, duration);
                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.5
    });
    
    countElements.forEach(element => {
        countObserver.observe(element);
    });
}

/**
 * Animate a counter from start to end value
 * @param {HTMLElement} element - Element to animate
 * @param {number} start - Start value
 * @param {number} end - End value
 * @param {number} duration - Animation duration in ms
 */
function animateCount(element, start, end, duration) {
    let startTime = null;
    
    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smoother animation
        const easeOutQuad = t => t * (2 - t);
        const easedProgress = easeOutQuad(percentage);
        
        const currentCount = Math.floor(start + (end - start) * easedProgress);
        element.textContent = currentCount;
        
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end;
        }
    }
    
    window.requestAnimationFrame(step);
}

// Export all functions
export default {
    initScrollAnimations,
    initLazyLoading,
    initScrollSpy,
    initCountUp
};