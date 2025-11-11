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

### 3. Skapa miljöfiler (.env.development, .env.production)

Skapa en `.env.development`-fil i projektets rotkatalog med följande innehåll:

```bash
VITE_ENV="development"
VITE_AUTH_API_URL="http://localhost:3001"
VITE_DOMAIN_API_URL="http://localhost:3002"
VITE_RECAPTCHA_KEY="6Lfb_OkrAAAAAKwVU7G0vNKTewyt_0PUuq0yHpsg"
VITE_CSP="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://www.gstatic.com/recaptcha/ https://www.google.com/; font-src 'self'; connect-src 'self' http://localhost:3001 http://localhost:3002 ws://localhost:5173; frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/; object-src 'none'; base-uri 'none'; upgrade-insecure-requests; form-action 'self';"
```

Skapa en `.env.production`-fil i projektets rotkatalog med följande innehåll:

```bash
VITE_ENV="production"
VITE_AUTH_API_URL="http://localhost:3001"
VITE_DOMAIN_API_URL="http://localhost:3002"
VITE_RECAPTCHA_KEY="6Lfb_OkrAAAAAKwVU7G0vNKTewyt_0PUuq0yHpsg"
VITE_CSP="default-src 'self';   script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.gstatic.com;   style-src  'self';   img-src 'self' data: blob: https://www.gstatic.com/recaptcha/ https://www.google.com/; font-src 'self';   connect-src 'self' http://localhost:3001 http://localhost:3002;   frame-src  https://www.google.com/recaptcha/ https://recaptcha.google.com/;   object-src 'none';   base-uri   'none';      upgrade-insecure-requests; form-action 'self';"
```

> **Tips:** Justera portarna vid behov beroende på din lokala
> backend-konfiguration.

---

## Starta Storybook

För att starta Storybook-miljön:

```bash
npm run storybook
```
