<?php
declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/_analytics/lib.php';
analytics_require_internal_auth();

header('X-Robots-Tag: noindex, nofollow', true);
header('Cache-Control: no-store, max-age=0', true);
header('Content-Type: application/json; charset=utf-8');

try {
    echo json_encode(analytics_import_logs(), JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Logimport fehlgeschlagen.'], JSON_UNESCAPED_UNICODE);
}
