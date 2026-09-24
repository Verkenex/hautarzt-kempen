# Hautärztliches MVZ Kempen

Neue statische Website für `hautarzt-kempen.de`.

## Stack

- Astro 7
- statischer Build (`dist/`)
- kein CMS, keine Datenbank
- Deployment per SFTP auf ALL-INKL

## Lokal

```bash
npm install
npm run dev
npm run build
```

## Grundsätze

- bestehende SEO-relevante URL-Pfade möglichst erhalten
- mobile first
- keine Tracking-/Marketing-Skripte ohne ausdrückliche Entscheidung
- externe Termin- und Anmeldedienste nur bewusst verlinken
- medizinische Detailtexte vor Launch fachlich prüfen

## Launch

DNS und Mail-DNS werden getrennt behandelt. MX, SPF, DKIM und DMARC dürfen beim Web-Launch nicht verändert werden.
