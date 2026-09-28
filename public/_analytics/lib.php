<?php
declare(strict_types=1);

const ANALYTICS_RETENTION_DAYS = 730;
const ANALYTICS_VISITOR_KEY_DAYS = 31;

function analytics_actions(): array {
    return [
        'termin' => 'https://www.doctolib.de/medizinisches-versorgungszentrum-mvz/kempen/hautaerztliches-mvz-kempen-gmbh',
        'onlinedoctor' => 'https://www.onlinedoctor.de/de/doctors/d/dr-med-moritz-berkenkamp',
        'onlinedoctor-kosten' => 'https://www.onlinedoctor.de/partnerversicherungen/',
        'email' => 'mailto:post@hautarzt-kempen.de',
        'telefon' => 'tel:+492152912220',
        'route' => 'https://www.google.com/maps/search/?api=1&query=St.%20Huberter%20Stra%C3%9Fe%2025%2C%2047906%20Kempen',
        'anmeldung' => 'https://gonelly.de/o/coriuskempen/v2',
    ];
}

function analytics_private_dir(): string {
    $accountRoot = dirname(dirname(__DIR__));
    $preferred = $accountRoot . '/.hautarzt-analytics';

    if ((is_dir($preferred) || @mkdir($preferred, 0700, true)) && is_writable($preferred)) {
        return $preferred;
    }

    $fallback = __DIR__ . '/data';
    if (!is_dir($fallback)) {
        @mkdir($fallback, 0700, true);
    }
    if (!is_file($fallback . '/.htaccess')) {
        @file_put_contents($fallback . '/.htaccess', "Require all denied\n");
    }
    return $fallback;
}

function analytics_secret(): string {
    $file = analytics_private_dir() . '/secret.bin';
    if (!is_file($file)) {
        file_put_contents($file, random_bytes(32), LOCK_EX);
        @chmod($file, 0600);
    }
    return (string) file_get_contents($file);
}

function analytics_db(): PDO {
    static $db = null;
    if ($db instanceof PDO) {
        return $db;
    }

    $file = analytics_private_dir() . '/stats.sqlite';
    $db = new PDO('sqlite:' . $file);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $db->exec('PRAGMA journal_mode=WAL');
    $db->exec('PRAGMA busy_timeout=5000');

    $db->exec("
        CREATE TABLE IF NOT EXISTS clicks (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            ts TEXT NOT NULL,
            day TEXT NOT NULL,
            action TEXT NOT NULL,
            source_path TEXT NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_clicks_day ON clicks(day);
        CREATE INDEX IF NOT EXISTS idx_clicks_action ON clicks(action);

        CREATE TABLE IF NOT EXISTS pageviews (
            day TEXT NOT NULL,
            path TEXT NOT NULL,
            views INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY(day, path)
        );

        CREATE TABLE IF NOT EXISTS visitor_keys (
            day TEXT NOT NULL,
            visitor_hash TEXT NOT NULL,
            PRIMARY KEY(day, visitor_hash)
        );

        CREATE TABLE IF NOT EXISTS daily_visits (
            day TEXT PRIMARY KEY,
            visits INTEGER NOT NULL DEFAULT 0
        );

        CREATE TABLE IF NOT EXISTS referrers (
            day TEXT NOT NULL,
            source TEXT NOT NULL,
            visits INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY(day, source)
        );

        CREATE TABLE IF NOT EXISTS search_terms (
            day TEXT NOT NULL,
            term TEXT NOT NULL,
            visits INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY(day, term)
        );

        CREATE TABLE IF NOT EXISTS processed_files (
            fingerprint TEXT PRIMARY KEY,
            file_name TEXT NOT NULL,
            processed_at TEXT NOT NULL
        );
    ");

    return $db;
}

function analytics_is_bot(string $ua): bool {
    return (bool) preg_match(
        '~bot|spider|crawler|slurp|bingpreview|facebookexternalhit|headless|monitoring|uptime|python-requests|curl/|wget/~i',
        $ua
    );
}

function analytics_source_path(): string {
    $referer = $_SERVER['HTTP_REFERER'] ?? '';
    if ($referer === '') {
        return '(direkt)';
    }

    $host = parse_url($referer, PHP_URL_HOST);
    $currentHost = preg_replace('~:\d+$~', '', (string) ($_SERVER['HTTP_HOST'] ?? ''));
    if (!$host || strcasecmp((string) $host, (string) $currentHost) !== 0) {
        return '(extern)';
    }

    $path = (string) (parse_url($referer, PHP_URL_PATH) ?: '/');
    return analytics_normalize_path($path);
}

function analytics_record_click(string $action): void {
    if (!array_key_exists($action, analytics_actions())) {
        return;
    }

    $ua = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');
    if (analytics_is_bot($ua)) {
        return;
    }

    $now = new DateTimeImmutable('now', new DateTimeZone('Europe/Berlin'));
    $stmt = analytics_db()->prepare(
        'INSERT INTO clicks(ts, day, action, source_path) VALUES(:ts, :day, :action, :source)'
    );
    $stmt->execute([
        ':ts' => $now->format(DateTimeInterface::ATOM),
        ':day' => $now->format('Y-m-d'),
        ':action' => $action,
        ':source' => analytics_source_path(),
    ]);
}

function analytics_require_internal_auth(): void {
    $user = $_SERVER['REMOTE_USER'] ?? $_SERVER['PHP_AUTH_USER'] ?? '';
    if ($user === '') {
        header('X-Robots-Tag: noindex, nofollow', true);
        http_response_code(403);
        header('Content-Type: text/plain; charset=utf-8');
        echo "Statistikbereich ist noch nicht durch den ALL-INKL-Verzeichnisschutz freigeschaltet.";
        exit;
    }
}

function analytics_normalize_path(string $path): string {
    $path = '/' . ltrim($path, '/');
    $path = preg_replace('~/+~', '/', $path) ?: '/';
    if ($path !== '/' && !str_ends_with($path, '/') && pathinfo($path, PATHINFO_EXTENSION) === '') {
        $path .= '/';
    }
    return $path;
}

function analytics_is_page_path(string $path): bool {
    $path = analytics_normalize_path($path);
    $blocked = [
        '/assets/', '/_astro/', '/go/', '/intern/', '/_analytics/', '/usage/',
        '/favicon', '/robots.txt', '/sitemap', '/404'
    ];
    foreach ($blocked as $prefix) {
        if (str_starts_with($path, $prefix)) {
            return false;
        }
    }

    $base = basename(rtrim($path, '/'));
    if ($path === '/') {
        return true;
    }
    if (!str_contains($base, '.')) {
        return true;
    }
    return (bool) preg_match('~\.(?:html?|php)$~i', $base);
}

function analytics_log_dir(): ?string {
    $env = getenv('ANALYTICS_LOG_DIR');
    if ($env && is_dir($env)) {
        return rtrim($env, '/');
    }

    $docroot = dirname(__DIR__);
    $accountRoot = dirname($docroot);
    $candidates = [
        $accountRoot . '/logs',
        dirname($accountRoot) . '/logs',
        $docroot . '/logs',
    ];

    foreach ($candidates as $candidate) {
        if (is_dir($candidate) && is_readable($candidate)) {
            return $candidate;
        }
    }
    return null;
}

function analytics_search_term(string $referer): ?string {
    $host = strtolower((string) parse_url($referer, PHP_URL_HOST));
    if ($host === '') {
        return null;
    }

    parse_str((string) parse_url($referer, PHP_URL_QUERY), $query);
    $key = null;

    if (str_contains($host, 'bing.')) {
        $key = 'q';
    } elseif (str_contains($host, 'duckduckgo.')) {
        $key = 'q';
    } elseif (str_contains($host, 'ecosia.')) {
        $key = 'q';
    } elseif (str_contains($host, 'yahoo.')) {
        $key = 'p';
    } elseif (str_contains($host, 'google.')) {
        $key = 'q';
    }

    if (!$key || empty($query[$key]) || !is_string($query[$key])) {
        return null;
    }

    $term = trim(mb_substr($query[$key], 0, 180));
    return $term !== '' ? $term : null;
}

function analytics_external_referrer(string $referer): ?string {
    if ($referer === '' || $referer === '-') {
        return null;
    }

    $host = strtolower((string) parse_url($referer, PHP_URL_HOST));
    $host = preg_replace('~^www\.~', '', $host ?? '') ?? '';
    if ($host === '' || $host === 'hautarzt-kempen.de') {
        return null;
    }
    return mb_substr($host, 0, 190);
}

function analytics_parse_log_line(string $line): ?array {
    $patterns = [
        '~^(\S+)\s+\S+\s+\S+\s+\[([^\]]+)\]\s+"([A-Z]+)\s+([^ ]+)\s+[^"]+"\s+(\d{3})\s+\S+\s+"([^"]*)"\s+"([^"]*)"~',
        '~^\S+\s+(\S+)\s+\S+\s+\S+\s+\[([^\]]+)\]\s+"([A-Z]+)\s+([^ ]+)\s+[^"]+"\s+(\d{3})\s+\S+\s+"([^"]*)"\s+"([^"]*)"~',
    ];

    foreach ($patterns as $pattern) {
        if (preg_match($pattern, $line, $m)) {
            return [
                'ip' => $m[1],
                'date' => $m[2],
                'method' => $m[3],
                'target' => $m[4],
                'status' => (int) $m[5],
                'referer' => $m[6],
                'ua' => $m[7],
            ];
        }
    }
    return null;
}

function analytics_import_logs(): array {
    $dir = analytics_log_dir();
    if (!$dir) {
        return ['processed' => 0, 'pages' => 0, 'visitors' => 0, 'message' => 'Kein lesbares ALL-INKL-Logverzeichnis gefunden.'];
    }

    $files = glob($dir . '/*') ?: [];
    $files = array_values(array_filter($files, static function (string $file): bool {
        $name = strtolower(basename($file));
        return is_file($file)
            && str_contains($name, 'access')
            && (str_ends_with($name, '.gz') || str_ends_with($name, '.log'));
    }));
    sort($files);

    $db = analytics_db();
    $secret = analytics_secret();
    $processed = 0;
    $pageCount = 0;
    $visitorCount = 0;

    foreach ($files as $file) {
        if (!str_ends_with(strtolower($file), '.gz') && filemtime($file) > time() - 7200) {
            continue;
        }

        $fingerprint = hash('sha256', realpath($file) . '|' . filesize($file) . '|' . filemtime($file));
        $check = $db->prepare('SELECT 1 FROM processed_files WHERE fingerprint = :fp');
        $check->execute([':fp' => $fingerprint]);
        if ($check->fetchColumn()) {
            continue;
        }

        $pageAgg = [];
        $refAgg = [];
        $termAgg = [];
        $visitorAgg = [];
        $daysTouched = [];

        $isGz = str_ends_with(strtolower($file), '.gz');
        $handle = $isGz ? @gzopen($file, 'rb') : @fopen($file, 'rb');
        if (!$handle) {
            continue;
        }

        while (($line = $isGz ? gzgets($handle) : fgets($handle)) !== false) {
            $row = analytics_parse_log_line($line);
            if (!$row || $row['method'] !== 'GET' || !in_array($row['status'], [200, 304], true)) {
                continue;
            }
            if (analytics_is_bot($row['ua'])) {
                continue;
            }

            $targetPath = parse_url($row['target'], PHP_URL_PATH);
            if (!is_string($targetPath) || !analytics_is_page_path($targetPath)) {
                continue;
            }

            $dt = DateTimeImmutable::createFromFormat('d/M/Y:H:i:s O', $row['date']);
            if (!$dt) {
                continue;
            }
            $day = $dt->setTimezone(new DateTimeZone('Europe/Berlin'))->format('Y-m-d');
            $path = analytics_normalize_path($targetPath);
            $pageAgg[$day][$path] = ($pageAgg[$day][$path] ?? 0) + 1;
            $daysTouched[$day] = true;

            $visitorHash = hash_hmac('sha256', $day . '|' . $row['ip'] . '|' . $row['ua'], $secret);
            $visitorAgg[$day][$visitorHash] = true;

            $ref = analytics_external_referrer($row['referer']);
            if ($ref) {
                $refAgg[$day][$ref] = ($refAgg[$day][$ref] ?? 0) + 1;
            }

            $term = analytics_search_term($row['referer']);
            if ($term) {
                $termAgg[$day][$term] = ($termAgg[$day][$term] ?? 0) + 1;
            }
        }

        $isGz ? gzclose($handle) : fclose($handle);

        $db->beginTransaction();
        try {
            $pageStmt = $db->prepare(
                'INSERT INTO pageviews(day, path, views) VALUES(:day, :path, :views)
                 ON CONFLICT(day, path) DO UPDATE SET views = views + excluded.views'
            );
            foreach ($pageAgg as $day => $paths) {
                foreach ($paths as $path => $views) {
                    $pageStmt->execute([':day' => $day, ':path' => $path, ':views' => $views]);
                    $pageCount += $views;
                }
            }

            $visitorStmt = $db->prepare(
                'INSERT OR IGNORE INTO visitor_keys(day, visitor_hash) VALUES(:day, :hash)'
            );
            foreach ($visitorAgg as $day => $hashes) {
                foreach (array_keys($hashes) as $hash) {
                    $visitorStmt->execute([':day' => $day, ':hash' => $hash]);
                }
            }

            $refStmt = $db->prepare(
                'INSERT INTO referrers(day, source, visits) VALUES(:day, :source, :visits)
                 ON CONFLICT(day, source) DO UPDATE SET visits = visits + excluded.visits'
            );
            foreach ($refAgg as $day => $sources) {
                foreach ($sources as $source => $visits) {
                    $refStmt->execute([':day' => $day, ':source' => $source, ':visits' => $visits]);
                }
            }

            $termStmt = $db->prepare(
                'INSERT INTO search_terms(day, term, visits) VALUES(:day, :term, :visits)
                 ON CONFLICT(day, term) DO UPDATE SET visits = visits + excluded.visits'
            );
            foreach ($termAgg as $day => $terms) {
                foreach ($terms as $term => $visits) {
                    $termStmt->execute([':day' => $day, ':term' => $term, ':visits' => $visits]);
                }
            }

            $dailyStmt = $db->prepare(
                'INSERT INTO daily_visits(day, visits)
                 VALUES(:day, (SELECT COUNT(*) FROM visitor_keys WHERE day = :day))
                 ON CONFLICT(day) DO UPDATE SET visits = excluded.visits'
            );
            foreach (array_keys($daysTouched) as $day) {
                $dailyStmt->execute([':day' => $day]);
            }

            $processedStmt = $db->prepare(
                'INSERT INTO processed_files(fingerprint, file_name, processed_at) VALUES(:fp, :name, :at)'
            );
            $processedStmt->execute([
                ':fp' => $fingerprint,
                ':name' => basename($file),
                ':at' => (new DateTimeImmutable('now', new DateTimeZone('Europe/Berlin')))->format(DateTimeInterface::ATOM),
            ]);

            $db->commit();
            $processed++;

            foreach ($visitorAgg as $hashes) {
                $visitorCount += count($hashes);
            }
        } catch (Throwable $e) {
            if ($db->inTransaction()) {
                $db->rollBack();
            }
            throw $e;
        }
    }

    analytics_cleanup();

    return [
        'processed' => $processed,
        'pages' => $pageCount,
        'visitors' => $visitorCount,
        'log_dir' => $dir,
        'message' => $processed > 0 ? 'Import abgeschlossen.' : 'Keine neuen Logdateien.',
    ];
}

function analytics_cleanup(): void {
    $db = analytics_db();
    $cutoff = (new DateTimeImmutable('today', new DateTimeZone('Europe/Berlin')))
        ->modify('-' . ANALYTICS_RETENTION_DAYS . ' days')
        ->format('Y-m-d');
    $visitorCutoff = (new DateTimeImmutable('today', new DateTimeZone('Europe/Berlin')))
        ->modify('-' . ANALYTICS_VISITOR_KEY_DAYS . ' days')
        ->format('Y-m-d');

    foreach (['clicks', 'pageviews', 'daily_visits', 'referrers', 'search_terms'] as $table) {
        $stmt = $db->prepare("DELETE FROM {$table} WHERE day < :cutoff");
        $stmt->execute([':cutoff' => $cutoff]);
    }
    $stmt = $db->prepare('DELETE FROM visitor_keys WHERE day < :cutoff');
    $stmt->execute([':cutoff' => $visitorCutoff]);
}
