# Hautärztliches MVZ Kempen

Neue statische Website für `hautarzt-kempen.de`.

## Stack

- Astro 7
- statischer Build (`dist/`)
- kein CMS, keine Datenbank
- Deployment per SFTP auf ALL-INKL

## Voraussetzungen

- Node.js **22.12.0 oder neuer**
- npm
- empfohlen: offizielle Astro-Erweiterung für VS Code

Prüfen:

```bash
node -v
npm -v
```

## Lokal starten

Wichtig: Dieses Projekt wird **nicht** mit PHP gestartet.

```bash
npm install
npm run dev
```

Danach im Browser öffnen:

```text
http://localhost:4321/
```

Wenn VS Code in einer VM, einem Container oder per Remote-Verbindung läuft:

```bash
npm run dev:host
```

Dann die von Astro ausgegebene Network-Adresse bzw. die VS-Code-Portweiterleitung für Port 4321 verwenden.

Produktionsbuild prüfen:

```bash
npm run build
npm run preview
```

## ALL-INKL

Nur der Inhalt aus `dist/` wird auf den Webspace hochgeladen. Quellcode, `node_modules/` und Astro selbst gehören nicht auf den Server.

Für Staging wird ein eigenes Unterverzeichnis verwendet; die produktive Domain `hautarzt-kempen.de` wird erst beim finalen Launch umgeschaltet.

## Grundsätze

- bestehende SEO-relevante URL-Pfade möglichst erhalten
- mobile first
- keine Tracking-/Marketing-Skripte ohne ausdrückliche Entscheidung
- externe Termin- und Anmeldedienste nur bewusst verlinken
- medizinische Detailtexte vor Launch fachlich prüfen

## Launch

DNS und Mail-DNS werden getrennt behandelt. MX, SPF, DKIM und DMARC dürfen beim Web-Launch nicht verändert werden.
