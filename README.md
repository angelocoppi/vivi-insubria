# Vivi Insubria — Sito Web

Sito statico costruito con **Astro** + **Decap CMS**, deployabile gratuitamente su **Netlify**.

## Stack tecnologico

- **Astro 4** — generatore di siti statici, zero JS in pagina per default
- **Decap CMS** — pannello admin via browser per collaboratori non tecnici
- **Netlify** — hosting gratuito + build automatiche + form contatti

---

## Setup iniziale (una volta sola)

### 1. Prerequisiti
- Node.js 18+ installato
- Account GitHub (gratuito)
- Account Netlify (gratuito)

### 2. Clona e installa
```bash
git clone https://github.com/TUO-USERNAME/vivi-insubria.git
cd vivi-insubria
npm install
npm run dev
```
Il sito gira su `http://localhost:4321`

### 3. Deploy su Netlify

1. Vai su [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
2. Collega il tuo repository GitHub
3. Impostazioni build:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clicca "Deploy"

Il sito sarà online su `https://vivi-insubria.netlify.app`

### 4. Attiva Netlify Identity (per il CMS admin)

1. Nel pannello Netlify → Site settings → Identity → **Enable Identity**
2. Registration: imposta su **Invite only** (solo tu puoi creare account admin)
3. Services → Git Gateway → **Enable Git Gateway**
4. Invite yourself: Identity → Invite users → inserisci la tua email

### 5. Accedi al pannello admin

Vai su `https://tuo-sito.netlify.app/admin` e accedi con l'email che hai invitato.

---

## Come usare il CMS

### Visibilità pagine (controllo admin)
Vai su **Admin → ⚙️ Impostazioni sito → Visibilità pagine**

Qui puoi attivare/disattivare ogni sezione del menu:
- ✅ Gite (attiva di default)
- ❌ Esperienze, Ricette, Storia, Shop, Merchandising, Blog (disattivate)

Le pagine disattivate scompaiono dal menu e reindirizzano alla home.

### Aggiungere una gita
1. Admin → 🥾 Gite → "New Gite"
2. Compila tutti i campi
3. **Pubblicata: OFF** = bozza visibile solo a te
4. **Pubblicata: ON** = appare sul sito
5. Clicca "Publish" → il sito si rebuilda in automatico su Netlify (1-2 minuti)

### Form contatti
I messaggi del form di contatto arrivano direttamente nella sezione **Forms** del pannello Netlify. Zero configurazione, zero costi.

---

## Struttura del progetto

```
vivi-insubria/
├── public/
│   ├── admin/
│   │   ├── index.html      ← Pannello CMS
│   │   └── config.yml      ← Configurazione CMS (collezioni, campi)
│   └── images/             ← Immagini pubbliche
├── src/
│   ├── content/
│   │   ├── config.ts       ← Schema collezioni Astro
│   │   ├── impostazioni/
│   │   │   ├── generale.json   ← Nome sito, email, social
│   │   │   └── pagine.json     ← Visibilità pagine (on/off)
│   │   ├── gite/           ← File .md per ogni gita
│   │   ├── blog/           ← Articoli blog
│   │   └── ricette/        ← Ricette
│   ├── layouts/
│   │   └── Layout.astro    ← Layout principale con nav dinamico
│   └── pages/
│       ├── index.astro     ← Home
│       ├── gite/
│       │   ├── index.astro     ← Lista gite
│       │   └── [slug].astro    ← Pagina singola gita
│       ├── chi-sono.astro
│       ├── contatti.astro
│       ├── esperienze.astro    ← Placeholder (attivabile dal CMS)
│       ├── ricette.astro
│       ├── storia.astro
│       ├── shop.astro
│       ├── merchandising.astro
│       ├── blog.astro
│       └── 404.astro
├── astro.config.mjs
├── netlify.toml
└── package.json
```

---

## Dominio personalizzato

Quando sei pronto ad usare `viviinsubria.it`:
1. Netlify → Domain settings → Add custom domain
2. Aggiorna i DNS del tuo dominio (Aruba/Register.it) puntando ai nameserver Netlify
3. SSL/HTTPS viene configurato automaticamente

---

## Aggiungere lo Shop in futuro

Quando decidi di attivare lo Shop:
1. Crea account su [Snipcart](https://snipcart.com) (2% per transazione, no canone fisso)
2. Aggiungi il loro script nella sezione `<head>` del Layout
3. Attiva la sezione Shop dal pannello CMS → Impostazioni → Visibilità pagine
4. Costruisci la pagina `shop.astro` con i prodotti

---

## Comandi utili

```bash
npm run dev      # Sviluppo locale su localhost:4321
npm run build    # Build produzione nella cartella dist/
npm run preview  # Anteprima della build
```
