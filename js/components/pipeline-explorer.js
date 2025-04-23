/**
 * Pipeline Explorer Component
 * 
 * Handles the interactive pipeline visualization:
 * - Tab switching
 * - Pipeline node highlighting
 * - Animation flow
 * - Modal interactions
 */

/**
 * Initialize the pipeline explorer functionality
 */
export function initPipeline() {
    const pipelineSection = document.getElementById('pipeline');
    
    if (!pipelineSection) return;
    
    // Initialize pipeline tabs
    initPipelineTabs();
    
    // Initialize pipeline nodes interaction
    initPipelineNodes();
    
    // Initialize details buttons for modals
    initDetailsButtons();
}

/**
 * Initialize the pipeline tabs functionality
 */
function initPipelineTabs() {
    const pipelineTabs = document.querySelectorAll('.pipeline-tab');
    const pipelineStageContents = document.querySelectorAll('.pipeline-stage-content');
    const pipelineNodes = document.querySelectorAll('.pipeline-node');
    const pipelineConnectors = document.querySelectorAll('.pipeline-connector');
    
    if (pipelineTabs.length === 0) return;
    
    // Handle tab click
    pipelineTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const stage = tab.getAttribute('data-stage');
            
            // Update tabs
            pipelineTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update stage content
            pipelineStageContents.forEach(content => {
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
            updateConnectors(pipelineConnectors, stage);
        });
    });
}

/**
 * Initialize pipeline nodes interaction
 */
function initPipelineNodes() {
    const pipelineNodes = document.querySelectorAll('.pipeline-node');
    const pipelineTabs = document.querySelectorAll('.pipeline-tab');
    const pipelineStageContents = document.querySelectorAll('.pipeline-stage-content');
    const pipelineConnectors = document.querySelectorAll('.pipeline-connector');
    
    if (pipelineNodes.length === 0) return;
    
    // Handle node click
    pipelineNodes.forEach(node => {
        node.addEventListener('click', () => {
            const stage = node.getAttribute('data-stage');
            
            // Update nodes
            pipelineNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            
            // Update tabs
            pipelineTabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('data-stage') === stage) {
                    tab.classList.add('active');
                }
            });
            
            // Update stage content
            pipelineStageContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `stage-${stage}`) {
                    content.classList.add('active');
                }
            });
            
            // Update connectors
            updateConnectors(pipelineConnectors, stage);
        });
    });
}

/**
 * Update connectors based on active stage
 * @param {NodeList} connectors - The pipeline connector elements
 * @param {string} activeStage - The currently active stage number
 */
function updateConnectors(connectors, activeStage) {
    if (connectors.length === 0) return;
    
    connectors.forEach((connector, index) => {
        const previousStage = index + 1;
        const nextStage = index + 2;
        
        // Add active class to connector if it's between the previous stage and active stage
        if (previousStage === parseInt(activeStage) - 1 || previousStage === parseInt(activeStage)) {
            connector.classList.add('active-connection');
            
            // Add animation delay for sequential flow
            connector.style.animationDelay = `${(index * 0.2)}s`;
        } else {
            connector.classList.remove('active-connection');
            connector.style.animationDelay = '';
        }
    });
}

/**
 * Initialize details buttons for modals
 */
function initDetailsButtons() {
    const detailsButtons = document.querySelectorAll('.details-btn');
    
    if (detailsButtons.length === 0) return;
    
    detailsButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetModalId = button.getAttribute('data-target');
            if (targetModalId) {
                openModal(targetModalId);
            }
        });
    });
}

/**
 * Open a modal by ID
 * @param {string} modalId - The ID of the modal to open
 */
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    
    if (!modal) return;
    
    // Store previously focused element to restore focus when modal closes
    const previouslyFocusedElement = document.activeElement;
    
    // Show modal
    modal.classList.add('is-visible');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Focus first focusable element in modal
    const modalContent = modal.querySelector('.modal-content');
    if (modalContent) {
        modalContent.setAttribute('tabindex', '-1');
        setTimeout(() => {
            modalContent.focus();
        }, 100);
    }
    
    // Close button functionality
    const closeButton = modal.querySelector('.close-btn');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            closeModal(modal, previouslyFocusedElement);
        });
    }
    
    // Close on background click
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal, previouslyFocusedElement);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(event) {
        if (event.key === 'Escape') {
            closeModal(modal, previouslyFocusedElement);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
    
    // Trap focus within modal
    trapFocus(modal);
}

/**
 * Close a modal
 * @param {HTMLElement} modal - The modal element to close
 * @param {HTMLElement} elementToFocus - Element to focus after closing
 */
function closeModal(modal, elementToFocus) {
    if (!modal) return;
    
    modal.classList.remove('is-visible');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
    
    // Restore focus
    if (elementToFocus) {
        setTimeout(() => {
            elementToFocus.focus();
        }, 100);
    }
}

/**
 * Focus trap for modals (accessibility)
 * @param {HTMLElement} modal - The modal element
 */
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    const trapFocusHandler = (event) => {
        if (event.key === 'Tab') {
            // If Shift+Tab on first element, move to last
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
            // If Tab on last element, move to first
            else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    };
    
    modal.addEventListener('keydown', trapFocusHandler);
    
    // Remove event listener when modal closes
    const modalObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' && !modal.classList.contains('is-visible')) {
                modal.removeEventListener('keydown', trapFocusHandler);
                modalObserver.disconnect();
            }
        });
    });
    
    modalObserver.observe(modal, { attributes: true });
}

/**
 * Create an interactive animation sequence for the pipeline
 * This can be triggered manually or set to auto-play
 */
export function animatePipeline(autoPlay = false) {
    const pipelineNodes = document.querySelectorAll('.pipeline-node');
    const pipelineTabs = document.querySelectorAll('.pipeline-tab');
    
    if (pipelineNodes.length === 0 || pipelineTabs.length === 0) return;
    
    let currentStage = 1;
    const totalStages = pipelineNodes.length;
    
    // Function to advance to next stage
    const advancePipeline = () => {
        // Simulate click on next tab
        const nextTab = document.querySelector(`.pipeline-tab[data-stage="${currentStage}"]`);
        if (nextTab) {
            nextTab.click();
        }
        
        // Increment stage
        currentStage++;
        
        // If reached end, reset to beginning
        if (currentStage > totalStages) {
            currentStage = 1;
        }
    };
    
    // If auto-play is enabled
    if (autoPlay) {
        let pipelineInterval;
        const pipelineContainer = document.querySelector('.pipeline-navigator');
        
        if (pipelineContainer) {
            // Start interval when pipeline is in viewport
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Start animation
                        pipelineInterval = setInterval(advancePipeline, 3000);
                    } else {
                        // Stop animation when not visible
                        clearInterval(pipelineInterval);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(pipelineContainer);
            
            // Pause animation on hover
            pipelineContainer.addEventListener('mouseenter', () => {
                clearInterval(pipelineInterval);
            });
            
            // Resume animation on mouse leave
            pipelineContainer.addEventListener('mouseleave', () => {
                pipelineInterval = setInterval(advancePipeline, 3000);
            });
        }
    }
    
    // Return control function to manually advance pipeline
    return {
        advance: advancePipeline,
        goToStage: (stage) => {
            if (stage >= 1 && stage <= totalStages) {
                currentStage = stage;
                advancePipeline();
            }
        }
    };
}

// Export pipeline module
export default {
    initPipeline,
    animatePipeline
};