/**
 * Knowledge Graph Visualization Component
 * 
 * Gestisce la visualizzazione interattiva del Knowledge Graph
 */

/**
 * Inizializza la visualizzazione del Knowledge Graph
 */
export function initKgVisualization() {
    const kgExploreBtn = document.querySelector('.kg-explore-btn');
    
    if (!kgExploreBtn) return;
    
    // Gestione del pulsante "Esplora il Knowledge Graph"
    kgExploreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Crea un modale per la visualizzazione del KG
        createKgModal();
    });
    
    // Aggiungi effetto hover alla visualizzazione del KG
    const kgVisualization = document.querySelector('.kg-visualization');
    if (kgVisualization) {
        kgVisualization.addEventListener('mouseenter', () => {
            kgVisualization.classList.add('active');
        });
        
        kgVisualization.addEventListener('mouseleave', () => {
            kgVisualization.classList.remove('active');
        });
    }
    
    console.log('KG visualization initialized');
}

/**
 * Crea un modale per la visualizzazione estesa del Knowledge Graph
 */
function createKgModal() {
    // Controlla se la funzione di creazione modale esiste nel namespace globale
    if (typeof window.laibit !== 'undefined' && typeof window.laibit.openModal === 'function') {
        // Usa la funzione di creazione modale esistente
        window.laibit.openModal('kg-modal');
    } else {
        // Fallback: crea un alert semplice
        alert('Visualizzazione Knowledge Graph completa disponibile a breve');
    }
}

/**
 * Simula una rotazione 3D del grafo KG
 * @param {HTMLElement} element - Elemento contenitore del grafo
 */
export function animateKgRotation(element) {
    if (!element) return;
    
    let angle = 0;
    const speed = 0.5;
    
    function rotate() {
        angle += speed;
        if (angle >= 360) angle = 0;
        
        element.style.transform = `rotateY(${angle}deg)`;
        requestAnimationFrame(rotate);
    }
    
    // Avvia l'animazione
    requestAnimationFrame(rotate);
}

export default {
    initKgVisualization,
    animateKgRotation
};