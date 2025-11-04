# FWK24S-WAI Projektarbete - Frontend

## Starta projektet lokalt

### 1. Klona projektet

Kör följande kommando i terminalen:

```bash
git clone https://github.com/hampusvh/FWK24S-WAI-Projektarbete-Frontend.git
```

### 2. Installera beroenden

Navigera in i projektmappen och installera nödvändiga paket:

```bash
npm install
```

### 3. Skapa miljöfil (.env)

Skapa en `.env`-fil i projektets rotkatalog med följande innehåll:

```bash
VITE_AUTH_API_URL="http://localhost:3001"
VITE_DOMAIN_API_URL="http://localhost:3002"
VITE_RECAPTCHA_KEY="application key"
```

> **Tips:** Justera portarna vid behov beroende på din lokala
> backend-konfiguration.

---

## Starta Storybook

För att starta Storybook-miljön:

```bash
npm run storybook
```
