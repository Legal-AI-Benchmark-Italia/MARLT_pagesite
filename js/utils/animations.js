/**
 * Animations Utility
 * 
 * Provides custom animations for various elements
 */

/**
 * Initialize animations
 */
export function initAnimations() {
    // Hero section animations
    initHeroAnimations();
    
    // Pipeline stage animations
    initPipelineAnimations();
    
    // Feature card hover animations
    initFeatureCardAnimations();
    
    // Knowledge Graph rotation animation
    initKGAnimations();
    
    console.log('Animations initialized');
}

/**
 * Initialize hero section animations
 */
function initHeroAnimations() {
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroContent) return;
    
    // Add entry animation class
    heroContent.classList.add('fade-in-animation');
    
    // Add scroll indicator animation
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.classList.add('bounce-animation');
        
        // Hide scroll indicator when user scrolls
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '0.7';
            }
        }, { passive: true });
    }
}

/**
 * Initialize pipeline stage animations
 */
function initPipelineAnimations() {
    const pipelineStages = document.querySelectorAll('.pipeline-stage');
    const pipelineNodes = document.querySelectorAll('.pipeline-node');
    
    if (pipelineStages.length === 0) return;
    
    // Add hover effect to pipeline stages
    pipelineStages.forEach((stage, index) => {
        stage.addEventListener('mouseenter', () => {
            stage.classList.add('hover');
            
            // Highlight corresponding node
            if (pipelineNodes[index]) {
                pipelineNodes[index].classList.add('active');
            }
        });
        
        stage.addEventListener('mouseleave', () => {
            stage.classList.remove('hover');
            
            // Remove highlight if not the active node
            if (pipelineNodes[index] && !pipelineNodes[index].classList.contains('active-permanent')) {
                pipelineNodes[index].classList.remove('active');
            }
        });
    });
    
    // Add node click animations
    pipelineNodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            // Remove active class from all nodes
            pipelineNodes.forEach(n => {
                n.classList.remove('active');
                n.classList.remove('active-permanent');
            });
            
            // Add active class to current node
            node.classList.add('active');
            node.classList.add('active-permanent');
            
            // Add ripple effect
            addRippleEffect(node);
        });
    });
}

/**
 * Initialize feature card animations
 */
function initFeatureCardAnimations() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    if (featureCards.length === 0) return;
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add hover class
            card.classList.add('hover');
            
            // Animate icon
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.classList.add('pulse-animation');
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Remove hover class
            card.classList.remove('hover');
            
            // Stop icon animation
            const icon = card.querySelector('.feature-icon');
            if (icon) {
                icon.classList.remove('pulse-animation');
            }
        });
    });
}

/**
 * Initialize Knowledge Graph animations
 */
function initKGAnimations() {
    const kgVisualization = document.querySelector('.kg-visualization');
    const kg3dImage = document.querySelector('.kg-3d-image');
    
    if (!kgVisualization || !kg3dImage) return;
    
    // Add hover effect
    kgVisualization.addEventListener('mouseenter', () => {
        kg3dImage.classList.add('float-animation');
    });
    
    kgVisualization.addEventListener('mouseleave', () => {
        kg3dImage.classList.remove('float-animation');
    });
}

/**
 * Add ripple effect to element
 * @param {HTMLElement} element - Element to add ripple to
 */
function addRippleEffect(element) {
    // Create ripple element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    // Position ripple at center of element
    ripple.style.width = ripple.style.height = `${Math.max(element.offsetWidth, element.offsetHeight)}px`;
    ripple.style.left = '0';
    ripple.style.top = '0';
    
    // Add ripple to element
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Add typing animation to element
 * @param {HTMLElement} element - Element to animate
 * @param {string} text - Text to type
 * @param {number} speed - Typing speed in ms
 */
export function typeWriterAnimation(element, text, speed = 50) {
    if (!element) return;
    
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/**
 * Add count-up animation to element
 * @param {HTMLElement} element - Element to animate
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 */
export function countUpAnimation(element, target, duration = 2000) {
    if (!element) return;
    
    let start = 0;
    const startTime = performance.now();
    
    function updateCount(timestamp) {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        
        element.textContent = value;
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCount);
}

export default {
    initAnimations,
    typeWriterAnimation,
    countUpAnimation
};