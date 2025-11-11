# MindJournal

Ett grupprojekt utvecklat inom kursen **Webbsäkerhet: Analys & Implementation**.  
Projektet syftar till att utforska hur centrala principer inom **GDPR och webbsäkerhet** kan implementeras i en modern webbapplikation.

Applikationen har ett klassiskt användarflöde med **registrering, inloggning och användarinställningar**, där varje användare kan:
- skapa och hantera egna journalanteckningar,  
- uppdatera sina kontouppgifter (e-post, telefonnummer),  
- exportera eller radera sin data i enlighet med GDPR.  

Gränssnittet fungerar som ett konkret exempel på hur **integritet, samtycke och dataportabilitet** kan tillämpas i praktiken.

---

## Projektöversikt

**Frontend**  
[FWK24S-WAI-Projektarbete-Frontend](https://github.com/hampusvh/FWK24S-WAI-Projektarbete-Frontend)  
React-applikation som visualiserar GDPR-flöden med Storybook, samtyckeskomponenter och transparensgränssnitt.  

**Auth Backend**  
[grupp4-auth-backend](https://github.com/andreasLoetzsch/grupp4-auth-backend)  
Hanterar autentisering, sessions- och audit-loggning kopplat till användarhändelser och samtycken.  

**Domain Service**  
[FWK24S-WAI-projektarbete-domain-service](https://github.com/angelika-friis/FWK24S-WAI-projektarbete-domain-service)  
Backend för affärslogik och journaldatan. Utvecklad i mindre omfattning då fokus låg på säkerhet och GDPR-efterlevnad.  

**Proxy Server**  
[grupp4-proxyserver](https://github.com/Akke/grupp4-proxyserver)  
Proxy-lager som hanterar HTTPS och kommunikation mellan frontend och backend-tjänster.  

> Projektet är uppdelat i flera tjänster för att efterlikna en verklig applikationsstruktur, men fokus låg på säkerhet, dataskydd och transparens snarare än omfattande affärslogik.

---

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
VITE_ENV="development"
VITE_AUTH_API_URL="http://localhost:3001"
VITE_DOMAIN_API_URL="http://localhost:3002"
VITE_RECAPTCHA_KEY="6Lfb_OkrAAAAAKwVU7G0vNKTewyt_0PUuq0yHpsg"
VITE_CSP="default-src 'self'; script-src 'self' https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://www.gstatic.com; style-src 'self'; img-src 'self' data: blob: https://www.gstatic.com/recaptcha/ https://www.google.com/; font-src 'self'; connect-src 'self' http://localhost:3001 http://localhost:3002; frame-src https://www.google.com/recaptcha/ https://recaptcha.google.com/; object-src 'none'; base-uri 'none'; upgrade-insecure-requests; form-action 'self';"
```

> **Tips:** Justera portarna vid behov beroende på din lokala backend-konfiguration.

---

## Starta Storybook

För att starta Storybook-miljön:

```bash
npm run storybook
```

---

## GDPR‑fokus och utvärderingspunkter

Projektet baserades på följande 17 punkter som låg till grund för bedömningen av GDPR‑efterlevnad:

1. **Consent Management (Artikel 7)**  
   Verifiera att applikationen erhåller explicit samtycke för databehandling och att användaren kan ge eller återkalla samtycke.

2. **Data Access Requests (Artikel 15)**  
   Testa att användare kan begära och få tillgång till en kopia av sin persondata i strukturerat format.

3. **Data Deletion Requests (Artikel 17)**  
   Säkerställ att användaren kan begära radering av sin data och att applikationen utför detta säkert.

4. **Data Portability (Artikel 20)**  
   Kontrollera att data kan exporteras i ett vanligt maskinläsbart format.

5. **Privacy Notices & Transparency (Artikel 12)**  
   Verifiera att applikationen tillhandahåller tydliga och lättillgängliga integritetsmeddelanden.

6. **Cookie Consent (Artiklar 6 & 7)**  
   Testa att samtycke för cookies hanteras korrekt och kan ändras av användaren.

7. **Security Measures (Artikel 32)**  
   Kontrollera att lämpliga säkerhetsåtgärder finns, inklusive kryptering och autentisering.

8. **Data Retention Policies (Artiklar 5 & 17)**  
   Säkerställ att data inte lagras längre än nödvändigt och att raderingsrutiner finns.

9. **User Account Management (Artikel 17)**  
   Bekräfta att användare kan ta bort sina konton och associerad data.

10. **Third‑Party Data Sharing (Artiklar 28 & 46)**  
    Undersök hur eventuell tredjepartsbehandling informeras om och regleras.

11. **Incident Response & Breach Notification (Artiklar 33 & 34)**  
    Utvärdera applikationens förmåga att hantera dataintrång och notifiera användare.

12. **User Support for GDPR Requests (Artikel 12 & 15)**  
    Säkerställ att användare kan kontakta support för GDPR‑relaterade ärenden.

13. **Testing Across Browsers & Devices**  
    Kontrollera att funktionalitet och tillgänglighet är konsekvent över olika miljöer.

14. **Documentation Review (Artiklar 13 & 14)**  
    Granska dokumentation och hjälpsektioner kring GDPR‑processer.

15. **Consent Logs & Audit Trails (Artikel 30)**  
    Verifiera att applikationen loggar när och hur samtycken ges eller dras tillbaka.

16. **Regular Updates (Artikel 24)**  
    Kontrollera att applikationen uppdateras i takt med förändringar i regelverket.

17. **Data Protection by Design & Default (Artikel 25)**  
    Säkerställ att dataskydd är integrerat i designen från grunden.

---
Projektet demonstrerar hur principer för dataskydd, transparens och användarkontroll kan implementeras i en modern webbaserad applikation – med fokus på säker hantering av persondata och tydlig kommunikation mot användaren.

---