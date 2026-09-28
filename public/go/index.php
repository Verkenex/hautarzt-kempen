<?php
declare(strict_types=1);

require_once dirname(__DIR__) . '/_analytics/lib.php';

header('X-Robots-Tag: noindex, nofollow', true);
header('Cache-Control: no-store, max-age=0', true);

$action = strtolower((string) ($_GET['action'] ?? ''));
$actions = analytics_actions();

if (!isset($actions[$action])) {
    http_response_code(404);
    exit;
}

analytics_record_click($action);
header('Location: ' . $actions[$action], true, 302);
exit;
