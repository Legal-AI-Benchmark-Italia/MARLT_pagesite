/**
 * Stat Counters Utility
 * 
 * Handles number animations for statistics
 */

/**
 * Initialize counters for statistics
 */
export function initStatCounters() {
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
                    
                    // Start counting animation
                    animateCounter(element, countTo);
                    
                    // Unobserve after starting animation
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        // Observe each stat element
        statElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver
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
 * @param {HTMLElement} element - The element to animate
 * @param {number} targetValue - The target value to count to
 */
function animateCounter(element, targetValue) {
    // Start from 0
    let currentValue = 0;
    
    // Duration of the animation (ms)
    const duration = 2000;
    
    // Timestamp of animation start
    const startTime = performance.now();
    
    // Animation function
    function updateCounter(currentTime) {
        // Calculate elapsed time
        const elapsedTime = currentTime - startTime;
        
        // Calculate progress (0 to 1)
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Use easing function for smoother animation
        const easedProgress = easeOutQuart(progress);
        
        // Calculate current value
        currentValue = Math.floor(targetValue * easedProgress);
        
        // Update element text
        element.textContent = formatNumber(currentValue);
        
        // Continue animation if not complete
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            // Ensure final value is exactly the target
            element.textContent = formatNumber(targetValue);
        }
    }
    
    // Start animation
    requestAnimationFrame(updateCounter);
}

/**
 * Easing function for smoother animation
 * @param {number} x - Progress value between 0 and 1
 * @returns {number} - Eased value
 */
function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

/**
 * Format number with commas for thousands
 * @param {number} num - Number to format
 * @returns {string} - Formatted number
 */
function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

export default {
    initStatCounters
};