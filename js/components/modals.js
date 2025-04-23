/**
 * Modals Component
 * 
 * Handles modal functionality including:
 * - Opening and closing modals
 * - Focus trapping for accessibility
 * - Keyboard navigation
 * - Animation
 */

// Store previously focused element to restore focus when modal closes
let previouslyFocusedElement = null;

// Store currently open modal
let currentOpenModal = null;

/**
 * Initialize all modals
 */
export function initModals() {
    const modalTriggers = document.querySelectorAll('[data-target]');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal .close-btn');
    
    // Initialize modal triggers
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const targetModalId = trigger.getAttribute('data-target');
            openModal(targetModalId);
        });
    });
    
    // Initialize close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close when clicking outside modal content
    modals.forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Close only if click is directly on the modal background
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && currentOpenModal) {
            closeModal(currentOpenModal);
        }
    });
    
    // Update state when history changes (back button)
    window.addEventListener('popstate', () => {
        if (currentOpenModal) {
            closeModal(currentOpenModal, false); // Don't push state on back button
        }
    });
}

/**
 * Open a modal by ID
 * @param {string} modalId - The ID of the modal to open
 * @param {boolean} pushState - Whether to push state to history (default: true)
 */
export function openModal(modalId, pushState = true) {
    const modal = document.getElementById(modalId);
    
    if (!modal || modal.classList.contains('is-visible')) {
        return;
    }
    
    // Store current focus
    previouslyFocusedElement = document.activeElement;
    
    // Show modal with animation
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');
    
    // Force browser to acknowledge display change before adding visible class for animation
    setTimeout(() => {
        modal.classList.add('is-visible');
    }, 10);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    // Store reference to current open modal
    currentOpenModal = modal;
    
    // Add to browser history if requested
    if (pushState) {
        const state = { modalId: modalId };
        const title = '';
        const url = window.location.pathname + window.location.search + '#' + modalId;
        history.pushState(state, title, url);
    }
    
    // Set focus on modal content for accessibility
    setupModalFocus(modal);
    
    // Set up focus trap
    trapFocus(modal);
    
    // Dispatch custom event
    modal.dispatchEvent(new CustomEvent('modal:open', { bubbles: true }));
}

/**
 * Close a modal
 * @param {HTMLElement} modal - The modal element to close
 * @param {boolean} pushState - Whether to push state to history (default: true)
 */
export function closeModal(modal, pushState = true) {
    if (!modal || !modal.classList.contains('is-visible')) {
        return;
    }
    
    // Start closing animation
    modal.classList.remove('is-visible');
    
    // Wait for animation to finish before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        
        // Restore body scrolling
        document.body.style.overflow = '';
        
        // Clear current modal reference
        currentOpenModal = null;
        
        // Restore focus to previous element
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
            previouslyFocusedElement = null;
        }
        
        // Update browser history if requested
        if (pushState) {
            const state = { modalId: null };
            const title = '';
            const url = window.location.pathname + window.location.search;
            history.pushState(state, title, url);
        }
        
        // Dispatch custom event
        modal.dispatchEvent(new CustomEvent('modal:close', { bubbles: true }));
    }, 300); // Match this to your CSS transition time
}

/**
 * Set initial focus within modal
 * @param {HTMLElement} modal - The modal element
 */
function setupModalFocus(modal) {
    // Try to focus on the first focusable element in the modal content
    const modalContent = modal.querySelector('.modal-content');
    
    if (modalContent) {
        // Set tabindex to make the content focusable
        modalContent.setAttribute('tabindex', '-1');
        
        // Focus after a short delay (allows animation to start)
        setTimeout(() => {
            modalContent.focus();
        }, 100);
    }
}

/**
 * Create a focus trap within the modal for accessibility
 * @param {HTMLElement} modal - The modal element
 */
function trapFocus(modal) {
    const focusableElements = modal.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), ' +
        'input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    
    if (focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Function to handle keyboard navigation inside modal
    function trapFocusHandler(e) {
        if (e.key === 'Tab') {
            // If Shift+Tab on first element, move to last
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
            // If Tab on last element, move to first
            else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
    
    modal.addEventListener('keydown', trapFocusHandler);
    
    // Remove event listener when modal closes
    const cleanup = () => {
        modal.removeEventListener('keydown', trapFocusHandler);
        modal.removeEventListener('modal:close', cleanup);
    };
    
    modal.addEventListener('modal:close', cleanup);
}

/**
 * Check if a modal is open
 * @returns {boolean} - Whether a modal is currently open
 */
export function isModalOpen() {
    return currentOpenModal !== null;
}

/**
 * Get the currently open modal
 * @returns {HTMLElement|null} - The currently open modal element or null
 */
export function getCurrentModal() {
    return currentOpenModal;
}

/**
 * Create and open a dynamic modal
 * @param {Object} options - Options for creating the modal
 * @param {string} options.id - ID for the modal
 * @param {string} options.title - Modal title
 * @param {string} options.content - Modal content (HTML)
 * @param {string} options.size - Modal size (sm, md, lg, xl)
 * @param {Function} options.onConfirm - Callback for confirmation (for confirm modals)
 * @param {Function} options.onCancel - Callback for cancellation (for confirm modals)
 * @param {string} options.confirmText - Text for confirm button
 * @param {string} options.cancelText - Text for cancel button
 * @param {string} options.type - Modal type (default, confirm, success, error, etc.)
 */
export function createModal(options) {
    // Default options
    const defaults = {
        id: 'dynamic-modal-' + Date.now(),
        title: 'Modal Title',
        content: '',
        size: 'md',
        onConfirm: null,
        onCancel: null,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        type: 'default'
    };
    
    // Merge defaults with provided options
    const settings = { ...defaults, ...options };
    
    // Check if modal already exists
    let modal = document.getElementById(settings.id);
    
    // Create modal if it doesn't exist
    if (!modal) {
        // Create modal element
        modal = document.createElement('div');
        modal.id = settings.id;
        modal.className = 'modal';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.setAttribute('aria-labelledby', `${settings.id}-title`);
        modal.setAttribute('aria-hidden', 'true');
        
        // Add modal size class
        if (settings.size) {
            modal.classList.add(`modal-${settings.size}`);
        }
        
        // Add modal type class
        if (settings.type !== 'default') {
            modal.classList.add(settings.type + '-modal');
        }
        
        // Create modal structure
        let modalContent = '';
        
        // Different content based on modal type
        if (settings.type === 'confirm') {
            modalContent = `
                <div class="modal-dialog">
                    <div class="modal-content" tabindex="-1">
                        <button class="close-btn" aria-label="Close">&times;</button>
                        <h3 id="${settings.id}-title">${settings.title}</h3>
                        <div class="modal-body">${settings.content}</div>
                        <div class="modal-buttons">
                            <button class="btn btn-secondary confirm-btn">${settings.confirmText}</button>
                            <button class="btn btn-outline cancel-btn">${settings.cancelText}</button>
                        </div>
                    </div>
                </div>
            `;
        } else if (settings.type === 'success' || settings.type === 'error') {
            const iconClass = settings.type === 'success' ? 'fa-circle-check' : 'fa-circle-xmark';
            
            modalContent = `
                <div class="modal-dialog">
                    <div class="modal-content" tabindex="-1">
                        <button class="close-btn" aria-label="Close">&times;</button>
                        <div class="status-icon">
                            <i class="fa-solid ${iconClass}"></i>
                        </div>
                        <h3 id="${settings.id}-title">${settings.title}</h3>
                        <div class="modal-body">${settings.content}</div>
                        <div class="modal-buttons">
                            <button class="btn btn-primary ok-btn">OK</button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            modalContent = `
                <div class="modal-dialog">
                    <div class="modal-content" tabindex="-1">
                        <button class="close-btn" aria-label="Close">&times;</button>
                        <h3 id="${settings.id}-title">${settings.title}</h3>
                        <div class="modal-body">${settings.content}</div>
                    </div>
                </div>
            `;
        }
        
        modal.innerHTML = modalContent;
        document.body.appendChild(modal);
        
        // Set up event handlers
        const closeBtn = modal.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }
        
        // Click outside to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
        
        // Confirm button handler
        if (settings.type === 'confirm' && typeof settings.onConfirm === 'function') {
            const confirmBtn = modal.querySelector('.confirm-btn');
            if (confirmBtn) {
                confirmBtn.addEventListener('click', () => {
                    settings.onConfirm();
                    closeModal(modal);
                });
            }
        }
        
        // Cancel button handler
        if (settings.type === 'confirm' && typeof settings.onCancel === 'function') {
            const cancelBtn = modal.querySelector('.cancel-btn');
            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => {
                    settings.onCancel();
                    closeModal(modal);
                });
            }
        }
        
        // OK button handler for success/error modals
        if ((settings.type === 'success' || settings.type === 'error')) {
            const okBtn = modal.querySelector('.ok-btn');
            if (okBtn) {
                okBtn.addEventListener('click', () => {
                    closeModal(modal);
                    if (typeof settings.onConfirm === 'function') {
                        settings.onConfirm();
                    }
                });
            }
        }
    } else {
        // Update existing modal content if needed
        const titleElement = modal.querySelector(`#${settings.id}-title`);
        const bodyElement = modal.querySelector('.modal-body');
        
        if (titleElement) titleElement.textContent = settings.title;
        if (bodyElement) bodyElement.innerHTML = settings.content;
    }
    
    // Open the modal
    openModal(settings.id);
    
    return modal;
}

/**
 * Show a confirmation modal
 * @param {Object} options - Options for the confirmation modal
 * @returns {Promise} - Resolves with boolean (true for confirm, false for cancel)
 */
export function showConfirmation(options) {
    return new Promise((resolve) => {
        // Create modal with type 'confirm'
        createModal({
            ...options,
            type: 'confirm',
            onConfirm: () => resolve(true),
            onCancel: () => resolve(false)
        });
    });
}

/**
 * Show a success message modal
 * @param {string} message - The success message
 * @param {string} title - The modal title
 */
export function showSuccess(message, title = 'Success') {
    createModal({
        title: title,
        content: message,
        type: 'success'
    });
}

/**
 * Show an error message modal
 * @param {string} message - The error message
 * @param {string} title - The modal title
 */
export function showError(message, title = 'Error') {
    createModal({
        title: title,
        content: message,
        type: 'error'
    });
}

// Export modal module
export default {
    initModals,
    openModal,
    closeModal,
    isModalOpen,
    getCurrentModal,
    createModal,
    showConfirmation,
    showSuccess,
    showError
};