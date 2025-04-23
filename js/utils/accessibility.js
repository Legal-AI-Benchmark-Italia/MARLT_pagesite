/**
 * Accessibility Utilities
 * 
 * Migliora l'accessibilità del sito, garantendo la conformità WCAG
 */

/**
 * Inizializza le funzionalità di accessibilità
 */
export function initAccessibility() {
    // Aggiunge attributi ARIA mancanti agli elementi interattivi
    addAriaAttributes();
    
    // Gestisce la navigazione tramite tastiera
    initKeyboardNavigation();
    
    // Gestisce lo skip link (salta al contenuto principale)
    initSkipLink();
    
    console.log('Accessibility features initialized');
}

/**
 * Aggiunge attributi ARIA agli elementi che potrebbero non averli
 */
function addAriaAttributes() {
    // Aggiunge label aria alle icone senza testo
    document.querySelectorAll('button:not([aria-label])').forEach(button => {
        if (button.textContent.trim() === '' && button.querySelector('i')) {
            const iconClass = button.querySelector('i').className;
            let actionName = 'Pulsante';
            
            // Determina l'azione in base alla classe dell'icona
            if (iconClass.includes('close')) actionName = 'Chiudi';
            else if (iconClass.includes('search')) actionName = 'Cerca';
            else if (iconClass.includes('menu')) actionName = 'Menu';
            
            button.setAttribute('aria-label', actionName);
        }
    });
    
    // Assicura che le immagini abbiano alt text
    document.querySelectorAll('img:not([alt])').forEach(img => {
        img.setAttribute('alt', 'Immagine');
    });
    
    // Assicura che i form abbiano label appropriate
    document.querySelectorAll('input, textarea, select').forEach(formElement => {
        const id = formElement.id;
        if (id && !document.querySelector(`label[for="${id}"]`)) {
            const placeholder = formElement.getAttribute('placeholder');
            if (placeholder) {
                formElement.setAttribute('aria-label', placeholder);
            }
        }
    });
}

/**
 * Migliora la navigazione tramite tastiera
 */
function initKeyboardNavigation() {
    // Gestisce la navigazione con Tab
    document.addEventListener('keydown', (e) => {
        // Mostra indicatori visivi di focus solo quando si naviga con tastiera
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // Rimuove gli indicatori quando si usa il mouse
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Aggiunge supporto per tasti di scelta rapida
    document.addEventListener('keydown', (e) => {
        // Alt+S: Focus sulla barra di ricerca (se presente)
        if (e.altKey && e.key === 's') {
            const searchInput = document.querySelector('.hero-search input, .search-input');
            if (searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        }
        
        // Alt+M: Apre/chiude il menu mobile
        if (e.altKey && e.key === 'm') {
            const hamburger = document.getElementById('hamburger-menu');
            if (hamburger) {
                e.preventDefault();
                hamburger.click();
            }
        }
    });
}

/**
 * Inizializza lo skip link per saltare alla navigazione principale
 */
function initSkipLink() {
    const skipLink = document.querySelector('.skip-link');
    if (!skipLink) return;
    
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Trova il contenuto principale
        const mainContent = document.getElementById('main-content');
        if (mainContent) {
            // Imposta il focus e lo scroll al contenuto principale
            mainContent.setAttribute('tabindex', '-1');
            mainContent.focus();
            mainContent.scrollIntoView();
        }
    });
}

/**
 * Aggiunge supporto per modalità ad alto contrasto
 */
export function initHighContrastMode() {
    // Controlla se è attiva la modalità ad alto contrasto
    const isHighContrast = window.matchMedia('(forced-colors: active)').matches;
    
    if (isHighContrast) {
        document.documentElement.classList.add('high-contrast-mode');
    }
}

/**
 * Permette di aumentare la dimensione del testo
 */
export function initTextSizeControls() {
    const increaseFontBtn = document.querySelector('.increase-font-size');
    const decreaseFontBtn = document.querySelector('.decrease-font-size');
    const resetFontBtn = document.querySelector('.reset-font-size');
    
    if (!increaseFontBtn && !decreaseFontBtn) return;
    
    // Dimensione corrente (100% di default)
    let currentFontSize = 100;
    
    // Incrementa dimensione testo
    if (increaseFontBtn) {
        increaseFontBtn.addEventListener('click', () => {
            if (currentFontSize < 150) { // Max 150%
                currentFontSize += 10;
                updateFontSize();
            }
        });
    }
    
    // Decrementa dimensione testo
    if (decreaseFontBtn) {
        decreaseFontBtn.addEventListener('click', () => {
            if (currentFontSize > 80) { // Min 80%
                currentFontSize -= 10;
                updateFontSize();
            }
        });
    }
    
    // Ripristina dimensione testo
    if (resetFontBtn) {
        resetFontBtn.addEventListener('click', () => {
            currentFontSize = 100;
            updateFontSize();
        });
    }
    
    // Aggiorna la dimensione del testo
    function updateFontSize() {
        document.documentElement.style.fontSize = `${currentFontSize}%`;
    }
}

export default {
    initAccessibility,
    initHighContrastMode,
    initTextSizeControls
};