# Documentazione del Progetto LAIBIT Website

## Struttura delle Cartelle e Moduli

### 1. `src/`
Contiene tutto il codice sorgente dell'applicazione React.

#### a. `assets/`
- **images/**: Cartella predisposta per immagini statiche (attualmente vuota).
- **react.svg**: Esempio di asset SVG.

#### b. `components/`
Contiene tutti i componenti React riutilizzabili, organizzati in sottocartelle:

- **layout/**
  - `Layout.tsx`: Wrapper principale che incapsula Navbar, Footer e il contenuto centrale della pagina.
  - `Navbar.tsx`: Barra di navigazione responsive, con menu desktop/mobile, dropdown e pulsanti di azione.
  - `Footer.tsx`: Footer informativo con link social, navigazione secondaria e info legali.

- **sections/**
  Ogni file rappresenta una sezione tematica della landing page:
  - `HeroSection.tsx`: Sezione di apertura con claim, call-to-action e indicatori di scroll.
  - `ChallengeSection.tsx`: Espone la sfida giuridica, con statistiche animate.
  - `SolutionSection.tsx`: Presenta la soluzione proposta dal progetto.
  - `PipelineSection.tsx`: Illustra il flusso di lavoro o pipeline del progetto.
  - `KnowledgeGraphSection.tsx`: Spiega il knowledge graph e la sua importanza.
  - `StakeholdersSection.tsx`: Sezione dedicata ai diversi stakeholder (giuristi, sviluppatori, istituzioni, ricercatori).
  - `ResourcesSection.tsx`: Elenco di risorse utili e materiali di approfondimento.
  - `CommunitySection.tsx`: Invito e spiegazione della community.
  - `ContactSection.tsx`: Form e informazioni di contatto.

- **ui/**
  - Componenti UI atomici e compositi (button, dialog, table, toast, menubar, ecc.), pensati per essere riutilizzabili e accessibili.
  - **custom/AccessibilityControls.tsx**: Widget fisso per accessibilità (alto contrasto, font per dislessia, dimensione testo, "torna su").

#### c. `hooks/`
- `useIsMobile.tsx`: Hook per rilevare se la viewport è mobile (breakpoint 768px), utile per logiche responsive.
- `use-toast.ts`: Hook avanzato per gestire notifiche toast, con limitazione, dismiss automatico e API per mostrare/aggiornare/dismissare toast.

#### d. `lib/`
- `utils.ts`: Funzione `cn` per unire classi CSS in modo sicuro e pulito (usa clsx e tailwind-merge).

#### e. File principali
- `App.tsx`: Entry point React, gestisce la struttura della pagina, le animazioni e l'inclusione delle sezioni.
- `main.tsx`: Bootstrap dell'app React, monta `<App />` su `#root`.
- `index.css`: Stili globali, variabili CSS, regole per accessibilità, animazioni e responsive design.
- `App.css`: Eventuali stili aggiuntivi specifici dell'app.
- `vite-env.d.ts`: Tipizzazioni ambientali Vite.

### 2. File di Configurazione
- `package.json`: Gestione dipendenze e script di progetto.
- `tailwind.config.js`: Configurazione Tailwind CSS.
- `tsconfig.json`: Configurazione TypeScript.
- `vite.config.ts`: Configurazione Vite.

---

## Dettaglio dei Moduli Principali

### Layout e Navigazione
- **Layout.tsx**: Garantisce una struttura coerente tra le pagine, incapsulando Navbar e Footer.
- **Navbar.tsx**: Gestisce la navigazione principale, con menu responsive e dropdown per stakeholder.
- **Footer.tsx**: Fornisce informazioni legali, link utili e social.

### Sezioni di Pagina
Ogni sezione è un componente React indipendente, facilmente riordinabile o estendibile. Le sezioni sono pensate per essere animate e accessibili.

### Componenti UI
- Ampia libreria di componenti atomici e compositi, pensati per accessibilità e riuso.
- **AccessibilityControls.tsx**: Permette all'utente di personalizzare contrasto, font, dimensione testo e di tornare rapidamente all'inizio della pagina.

### Hooks
- **useIsMobile**: Centralizza la logica per il rilevamento della viewport mobile.
- **useToast**: Gestisce notifiche toast in modo centralizzato e scalabile.

### Utility
- **cn**: Unisce classi CSS in modo sicuro, evitando conflitti e duplicazioni.

### Stili e Accessibilità
- **index.css**: Definisce variabili CSS, animazioni, stili per accessibilità (alto contrasto, font per dislessia, skip-link, focus visibile, touch target).

---

## Flusso di Rendering
1. `main.tsx` monta `<App />` su `#root`.
2. `App.tsx` inizializza animazioni e accessibilità, e renderizza la struttura principale.
3. Ogni sezione viene renderizzata in ordine, incapsulata dal layout.

---

## Best Practice e Convenzioni
- Nomi chiari e autoesplicativi per file, componenti e funzioni.
- Nessun magic number: i breakpoint e i limiti sono definiti come costanti.
- Ogni file ha una responsabilità ben definita.
- Logiche ripetute sono astratte in hook o utility.
- Forte attenzione a stili e controlli per l'accessibilità.
- Struttura delle cartelle logica e pulita. 