# Interne Praxis-Statistik

Die Website nutzt ein eigenes, serverseitiges Statistikmodul ohne Drittanbieter-Analytics, Cookies oder dauerhafte Nutzerkennung.

## Erfasste Kennzahlen

- Besuche und Seitenaufrufe aus den ALL-INKL-Access-Logs
- Top-Seiten und externe Referrer
- Suchbegriffe, soweit ein Suchanbieter sie im Referrer tatsächlich mitsendet
- Klicks auf Doctolib, OnlineDoctor, E-Mail, Telefon, Route und digitale Anmeldung
- Ursprungsseite eines Funktionsklicks

## Datenschutz

- keine Cookies / kein LocalStorage
- kein JavaScript-Analytics
- keine externe Analytics-Plattform
- keine IP-Adresse in der Statistikdatenbank
- Tagesbesucher werden mit einem tagesgebundenen HMAC aus IP + User-Agent dedupliziert
- diese temporären HMAC-Werte werden nach 31 Tagen entfernt
- aggregierte Statistik- und Klickdaten werden nach 730 Tagen gelöscht
- die SQLite-Datei liegt standardmäßig außerhalb des Document-Root

## ALL-INKL-Einrichtung

1. Im KAS unter Einstellungen → Logs & Statistiken die Statistik/Logs für die Domain aktivieren.
2. Website wie üblich bauen und den Inhalt von dist/ hochladen.
3. Im KAS unter Tools → Verzeichnisschutz das Verzeichnis /intern/statistik/ mit Benutzername und starkem Passwort schützen.
   - Das Dashboard verweigert ohne erfolgreichen HTTP-Verzeichnisschutz grundsätzlich den Zugriff.
4. Dashboard aufrufen:
   - https://www.hautarzt-kempen.de/intern/statistik/
5. Einmal testweise den Logimport öffnen:
   - https://www.hautarzt-kempen.de/intern/statistik/import.php
6. Im KAS unter Tools → Cronjobs einen täglichen Cronjob anlegen:
   - URL: https://www.hautarzt-kempen.de/intern/statistik/import.php
   - z. B. täglich 03:30 Uhr
   - unter den zusätzlichen Einstellungen denselben HTTP-Benutzer und dasselbe Passwort wie beim Verzeichnisschutz eintragen.

ALL-INKL kann HTTP(S)-Cronjobs mit HTTP-Benutzer/Passwort aufrufen.

## Logpfad

Das Modul sucht automatisch in den üblichen accountnahen logs-Verzeichnissen nach rotierten Access-Logs (access*.gz / access*.log).

Falls im Dashboard nach dem ersten nächtlichen Lauf weiterhin keine Seitenaufrufe erscheinen, muss der konkrete Logpfad des Accounts einmal geprüft werden. Optional kann serverseitig die Umgebungsvariable ANALYTICS_LOG_DIR gesetzt werden.

## SQLite

ALL-INKL unterstützt SQLite. Die Datenbank wird beim ersten Zugriff automatisch erstellt. Es ist keine zusätzliche MariaDB erforderlich.
