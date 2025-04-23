/**
 * Forms Component
 * 
 * Gestisce la validazione e l'invio dei form nel sito
 */

/**
 * Inizializza tutti i form
 */
export function initForms() {
    const contactForm = document.getElementById('contact-form');
    const newsletterForm = document.querySelector('.newsletter-form');
    
    // Inizializza il form di contatto
    if (contactForm) {
        initContactForm(contactForm);
    }
    
    // Inizializza il form newsletter
    if (newsletterForm) {
        initNewsletterForm(newsletterForm);
    }
    
    // Inizializza tutti gli altri form
    document.querySelectorAll('form:not(#contact-form):not(.newsletter-form)').forEach(form => {
        initGenericForm(form);
    });
    
    console.log('Forms initialized');
}

/**
 * Inizializza il form di contatto
 * @param {HTMLFormElement} form - Elemento form di contatto
 */
function initContactForm(form) {
    // Gestisci la validazione in tempo reale
    initFormValidation(form);
    
    // Gestisci l'invio del form
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Verifica la validità del form
        if (!form.checkValidity()) {
            // Mostra messaggi di errore
            showFormErrors(form);
            return;
        }
        
        // Disabilita il form durante l'invio
        setFormLoading(form, true);
        
        try {
            // Simula l'invio del form
            await simulateFormSubmission(form);
            
            // Mostra messaggio di successo
            showFormSuccess(form, 'Messaggio inviato con successo! Ti contatteremo a breve.');
            
            // Resetta il form
            form.reset();
        } catch (error) {
            // Mostra messaggio di errore
            showFormError(form, 'Si è verificato un errore durante l\'invio. Riprova più tardi.');
            console.error('Form submission error:', error);
        } finally {
            // Riabilita il form
            setFormLoading(form, false);
        }
    });
}

/**
 * Inizializza un form newsletter
 * @param {HTMLFormElement} form - Elemento form newsletter
 */
function initNewsletterForm(form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Verifica la validità del form
        if (!form.checkValidity()) {
            return;
        }
        
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value) return;
        
        // Disabilita il form durante l'invio
        setFormLoading(form, true);
        
        try {
            // Simula l'invio del form
            await simulateFormSubmission(form);
            
            // Mostra messaggio di successo
            alert('Iscrizione alla newsletter avvenuta con successo!');
            
            // Resetta il form
            form.reset();
        } catch (error) {
            // Mostra messaggio di errore
            alert('Si è verificato un errore durante l\'iscrizione. Riprova più tardi.');
            console.error('Newsletter subscription error:', error);
        } finally {
            // Riabilita il form
            setFormLoading(form, false);
        }
    });
}

/**
 * Inizializza un form generico
 * @param {HTMLFormElement} form - Elemento form
 */
function initGenericForm(form) {
    // Validazione basica
    initFormValidation(form);
    
    // Gestisci l'invio del form
    form.addEventListener('submit', (e) => {
        // Impedisci l'invio predefinito per il testing
        if (form.getAttribute('data-prevent-submit') === 'true') {
            e.preventDefault();
            alert('Form submission prevented for demonstration purposes.');
        }
    });
}

/**
 * Inizializza la validazione in tempo reale di un form
 * @param {HTMLFormElement} form - Elemento form da validare
 */
function initFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    
    // Validazione al blur (quando l'elemento perde il focus)
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateInput(input);
        });
        
        // Validazione al cambiamento per select e checkbox/radio
        if (input.tagName === 'SELECT' || (input.type === 'checkbox' || input.type === 'radio')) {
            input.addEventListener('change', () => {
                validateInput(input);
            });
        }
        
        // Rimuovi errore quando l'utente inizia a digitare
        input.addEventListener('input', () => {
            if (input.classList.contains('is-invalid')) {
                // Rimuovi solo l'aspetto visivo dell'errore
                input.classList.remove('is-invalid');
                const errorElement = input.parentElement.querySelector('.form-error-message');
                if (errorElement) {
                    errorElement.style.display = 'none';
                }
            }
        });
    });
}

/**
 * Valida un singolo input
 * @param {HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement} input - Elemento da validare
 * @returns {boolean} - true se valido, false altrimenti
 */
function validateInput(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return true;
    
    let errorMessage = '';
    
    // Verifica validità
    if (input.required && !input.value.trim()) {
        errorMessage = 'Questo campo è obbligatorio';
    } else if (input.type === 'email' && input.value.trim() && !isValidEmail(input.value)) {
        errorMessage = 'Inserisci un indirizzo email valido';
    } else if (input.pattern && input.value.trim() && !new RegExp(input.pattern).test(input.value)) {
        errorMessage = input.dataset.errorMessage || 'Formato non valido';
    } else if (input.minLength && input.value.trim().length < input.minLength) {
        errorMessage = `Minimo ${input.minLength} caratteri richiesti`;
    }
    
    // Mostra o nascondi errore
    if (errorMessage) {
        formGroup.classList.add('is-invalid');
        formGroup.classList.remove('is-valid');
        
        // Aggiungi o aggiorna messaggio di errore
        let errorElement = formGroup.querySelector('.form-error-message');
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.className = 'form-error-message';
            formGroup.appendChild(errorElement);
        }
        errorElement.textContent = errorMessage;
        errorElement.style.display = 'block';
        
        return false;
    } else {
        formGroup.classList.remove('is-invalid');
        formGroup.classList.add('is-valid');
        
        // Nascondi messaggio di errore
        const errorElement = formGroup.querySelector('.form-error-message');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        
        return true;
    }
}

/**
 * Valida un indirizzo email
 * @param {string} email - Indirizzo email da validare
 * @returns {boolean} - true se valido, false altrimenti
 */
function isValidEmail(email) {
    // Espressione regolare per la validazione semplice delle email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Mostra errori di validazione per un intero form
 * @param {HTMLFormElement} form - Elemento form
 */
function showFormErrors(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        validateInput(input);
    });
    
    // Focus sul primo elemento con errore
    const firstInvalid = form.querySelector('.is-invalid input, .is-invalid textarea, .is-invalid select');
    if (firstInvalid) {
        firstInvalid.focus();
    }
}

/**
 * Imposta lo stato di caricamento di un form
 * @param {HTMLFormElement} form - Elemento form
 * @param {boolean} isLoading - true per mostrare il caricamento, false altrimenti
 */
function setFormLoading(form, isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (isLoading) {
        // Disabilita il form
        form.classList.add('form-loading');
        
        if (submitButton) {
            // Salva il testo originale
            submitButton.dataset.originalText = submitButton.innerHTML;
            
            // Aggiorna il testo del pulsante
            submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Invio in corso...';
            submitButton.disabled = true;
        }
        
        // Disabilita tutti gli input
        form.querySelectorAll('input, textarea, select, button').forEach(el => {
            el.disabled = true;
        });
    } else {
        // Riabilita il form
        form.classList.remove('form-loading');
        
        if (submitButton) {
            // Ripristina il testo originale
            submitButton.innerHTML = submitButton.dataset.originalText || 'Invia';
            submitButton.disabled = false;
        }
        
        // Riabilita tutti gli input
        form.querySelectorAll('input, textarea, select, button').forEach(el => {
            el.disabled = false;
        });
    }
}

/**
 * Mostra un messaggio di successo per il form
 * @param {HTMLFormElement} form - Elemento form
 * @param {string} message - Messaggio di successo
 */
function showFormSuccess(form, message) {
    // Rimuovi messaggi esistenti
    removeFormMessages(form);
    
    // Crea elemento di successo
    const successElement = document.createElement('div');
    successElement.className = 'form-success-message';
    successElement.innerHTML = `<i class="fa-solid fa-circle-check form-message-icon"></i> ${message}`;
    
    // Inserisci all'inizio del form
    form.prepend(successElement);
    
    // Scroll al messaggio
    successElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Mostra un messaggio di errore per il form
 * @param {HTMLFormElement} form - Elemento form
 * @param {string} message - Messaggio di errore
 */
function showFormError(form, message) {
    // Rimuovi messaggi esistenti
    removeFormMessages(form);
    
    // Crea elemento di errore
    const errorElement = document.createElement('div');
    errorElement.className = 'form-error-message';
    errorElement.innerHTML = `<i class="fa-solid fa-circle-xmark form-message-icon"></i> ${message}`;
    
    // Inserisci all'inizio del form
    form.prepend(errorElement);
    
    // Scroll al messaggio
    errorElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Rimuove tutti i messaggi di form
 * @param {HTMLFormElement} form - Elemento form
 */
function removeFormMessages(form) {
    const messages = form.querySelectorAll('.form-success-message, .form-error-message');
    messages.forEach(message => message.remove());
}

/**
 * Simula l'invio di un form con un ritardo
 * @param {HTMLFormElement} form - Elemento form
 * @returns {Promise} - Promise che si risolve dopo un ritardo
 */
function simulateFormSubmission(form) {
    // Ritardo di simulazione (1-2 secondi)
    const delay = Math.floor(Math.random() * 1000) + 1000;
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simula un successo con 90% di probabilità
            const success = Math.random() < 0.9;
            
            if (success) {
                resolve('Form submitted successfully');
            } else {
                reject(new Error('Simulated form submission error'));
            }
        }, delay);
    });
}

export default {
    initForms,
    initContactForm,
    initNewsletterForm,
    initFormValidation
};