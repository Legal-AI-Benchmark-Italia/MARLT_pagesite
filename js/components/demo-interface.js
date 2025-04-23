/**
 * Demo Interface Component
 * 
 * Gestisce l'interfaccia interattiva della demo MERL-T
 */

/**
 * Inizializza il componente di demo
 */
export function initDemoInterface() {
    const demoTabs = document.querySelectorAll('.demo-tab');
    const demoContents = document.querySelectorAll('.demo-content');
    
    if (demoTabs.length === 0) return;
    
    // Gestione delle tab della demo
    demoTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const demoId = tab.getAttribute('data-demo');
            
            // Aggiorna tab attiva
            demoTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Aggiorna contenuto attivo
            demoContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `demo-${demoId}`) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Gestione del pulsante "Prova tu stesso"
    const tryButton = document.querySelector('.try-btn');
    if (tryButton) {
        tryButton.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Funzionalità di demo completa disponibile per i membri della community LAIBIT');
        });
    }
    
    console.log('Demo interface initialized');
}

export default {
    initDemoInterface
};