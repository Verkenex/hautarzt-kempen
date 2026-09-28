<?php
declare(strict_types=1);

require_once dirname(__DIR__, 2) . '/_analytics/lib.php';
analytics_require_internal_auth();

header('X-Robots-Tag: noindex, nofollow', true);
header('Cache-Control: no-store, max-age=0', true);
header('Content-Type: text/html; charset=utf-8');

$db = analytics_db();
$allowed = [7, 30, 90, 365];
$range = (int) ($_GET['tage'] ?? 30);
if (!in_array($range, $allowed, true)) {
    $range = 30;
}

$tz = new DateTimeZone('Europe/Berlin');
$today = new DateTimeImmutable('today', $tz);
$from = $today->modify('-' . ($range - 1) . ' days')->format('Y-m-d');
$to = $today->format('Y-m-d');

function scalar(PDO $db, string $sql, array $params = []): int {
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    return (int) ($stmt->fetchColumn() ?: 0);
}

function rows(PDO $db, string $sql, array $params = []): array {
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll() ?: [];
}

$params = [':from' => $from, ':to' => $to];
$visits = scalar($db, 'SELECT SUM(visits) FROM daily_visits WHERE day BETWEEN :from AND :to', $params);
$pageviews = scalar($db, 'SELECT SUM(views) FROM pageviews WHERE day BETWEEN :from AND :to', $params);
$clicks = scalar($db, 'SELECT COUNT(*) FROM clicks WHERE day BETWEEN :from AND :to', $params);
$appointments = scalar($db, "SELECT COUNT(*) FROM clicks WHERE day BETWEEN :from AND :to AND action = 'termin'", $params);

$daily = rows($db, '
    SELECT d.day,
           COALESCE(v.visits, 0) AS visits,
           COALESCE(p.views, 0) AS views
    FROM (
        SELECT day FROM daily_visits WHERE day BETWEEN :from AND :to
        UNION
        SELECT day FROM pageviews WHERE day BETWEEN :from AND :to
    ) d
    LEFT JOIN daily_visits v ON v.day = d.day
    LEFT JOIN (
        SELECT day, SUM(views) AS views
        FROM pageviews
        WHERE day BETWEEN :from AND :to
        GROUP BY day
    ) p ON p.day = d.day
    ORDER BY d.day
', $params);

$maxVisits = 1;
foreach ($daily as $row) {
    $maxVisits = max($maxVisits, (int) $row['visits']);
}

$topPages = rows($db, '
    SELECT path, SUM(views) AS value
    FROM pageviews
    WHERE day BETWEEN :from AND :to
    GROUP BY path
    ORDER BY value DESC
    LIMIT 10
', $params);

$actionRows = rows($db, '
    SELECT action, COUNT(*) AS value
    FROM clicks
    WHERE day BETWEEN :from AND :to
    GROUP BY action
    ORDER BY value DESC
', $params);

$clickSources = rows($db, '
    SELECT source_path AS path, COUNT(*) AS value
    FROM clicks
    WHERE day BETWEEN :from AND :to
    GROUP BY source_path
    ORDER BY value DESC
    LIMIT 10
', $params);

$referrers = rows($db, '
    SELECT source, SUM(visits) AS value
    FROM referrers
    WHERE day BETWEEN :from AND :to
    GROUP BY source
    ORDER BY value DESC
    LIMIT 10
', $params);

$terms = rows($db, '
    SELECT term, SUM(visits) AS value
    FROM search_terms
    WHERE day BETWEEN :from AND :to
    GROUP BY term
    ORDER BY value DESC
    LIMIT 10
', $params);

$lastImport = $db->query('SELECT MAX(processed_at) FROM processed_files')->fetchColumn() ?: null;

$labels = [
    'termin' => 'Doctolib',
    'onlinedoctor' => 'OnlineDoctor',
    'onlinedoctor-kosten' => 'Kostenübernahme',
    'email' => 'E-Mail',
    'telefon' => 'Telefon',
    'route' => 'Route',
    'anmeldung' => 'Anmeldung',
];

function e(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}
?>
<!doctype html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>Praxis-Statistik</title>
<style>
:root{--b:#6b1c23;--bd:#4c1218;--ink:#242021;--muted:#74696a;--paper:#fbf8f5;--card:#fff;--line:#ddd1cb}
*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font-family:"Helvetica Neue",Arial,sans-serif}
.wrap{width:min(1180px,calc(100% - 32px));margin:auto;padding:38px 0 64px}
header{display:flex;justify-content:space-between;gap:24px;align-items:flex-end;margin-bottom:30px;padding-bottom:24px;border-bottom:1px solid var(--line)}
.kicker{margin:0 0 8px;color:var(--b);font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase}
h1{margin:0;color:var(--bd);font:400 clamp(32px,5vw,54px)/1.02 Georgia,serif}
.meta{color:var(--muted);font-size:12px;text-align:right}.ranges{display:flex;gap:6px;flex-wrap:wrap;margin:0 0 22px}
.ranges a{padding:7px 11px;border:1px solid var(--line);border-radius:999px;color:var(--b);font-size:12px;text-decoration:none;background:#fff}
.ranges a.active{background:var(--b);border-color:var(--b);color:#fff}
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:22px}
.metric{padding:22px;border:1px solid var(--line);border-radius:14px;background:var(--card)}
.metric strong{display:block;color:var(--bd);font:400 36px/1 Georgia,serif}.metric span{display:block;margin-top:8px;color:var(--muted);font-size:12px}
.panel{padding:24px;border:1px solid var(--line);border-radius:14px;background:var(--card);margin-bottom:18px}
.panel h2{margin:0 0 20px;color:var(--bd);font:400 24px/1.1 Georgia,serif}
.chart{height:170px;display:flex;align-items:flex-end;gap:4px;border-bottom:1px solid var(--line);padding-top:12px}
.bar-wrap{flex:1;min-width:3px;height:100%;display:flex;align-items:flex-end}.bar{width:100%;min-height:2px;background:var(--b);border-radius:3px 3px 0 0;opacity:.82}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:18px}.list{margin:0;padding:0;list-style:none}.list li{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;padding:10px 0;border-bottom:1px solid var(--line);font-size:13px}.list li:last-child{border-bottom:0}.list b{color:var(--b)}
.empty{color:var(--muted);font-size:13px}.footer{margin-top:26px;color:var(--muted);font-size:11px}
@media(max-width:760px){header{display:block}.meta{text-align:left;margin-top:12px}.metrics{grid-template-columns:1fr 1fr}.grid2{grid-template-columns:1fr}}
</style>
</head>
<body>
<div class="wrap">
<header>
  <div><p class="kicker">MVZ Corius Kempen GmbH</p><h1>Praxis-Statistik</h1></div>
  <div class="meta"><?= $lastImport ? 'Logdaten bis ' . e((new DateTimeImmutable($lastImport))->setTimezone($tz)->format('d.m.Y H:i')) : 'Noch kein Logimport' ?></div>
</header>

<nav class="ranges" aria-label="Zeitraum">
<?php foreach ($allowed as $days): ?>
  <a class="<?= $days === $range ? 'active' : '' ?>" href="?tage=<?= $days ?>"><?= $days ?> Tage</a>
<?php endforeach; ?>
</nav>

<section class="metrics">
  <div class="metric"><strong><?= number_format($visits, 0, ',', '.') ?></strong><span>Besuche</span></div>
  <div class="metric"><strong><?= number_format($pageviews, 0, ',', '.') ?></strong><span>Seitenaufrufe</span></div>
  <div class="metric"><strong><?= number_format($clicks, 0, ',', '.') ?></strong><span>Aktions-Klicks</span></div>
  <div class="metric"><strong><?= number_format($appointments, 0, ',', '.') ?></strong><span>Doctolib-Klicks</span></div>
</section>

<section class="panel">
  <h2>Besuche</h2>
  <?php if ($daily): ?>
  <div class="chart" aria-label="Besuche pro Tag">
    <?php foreach ($daily as $row): $height = max(2, (int) round(((int)$row['visits'] / $maxVisits) * 100)); ?>
      <div class="bar-wrap" title="<?= e($row['day']) ?>: <?= (int)$row['visits'] ?>"><div class="bar" style="height:<?= $height ?>%"></div></div>
    <?php endforeach; ?>
  </div>
  <?php else: ?><p class="empty">Noch keine Logdaten.</p><?php endif; ?>
</section>

<div class="grid2">
<section class="panel"><h2>Aktionen</h2>
<?php if ($actionRows): ?><ul class="list">
<?php foreach ($actionRows as $row): ?><li><span><?= e($labels[$row['action']] ?? $row['action']) ?></span><b><?= (int)$row['value'] ?></b></li><?php endforeach; ?>
</ul><?php else: ?><p class="empty">Noch keine Klicks.</p><?php endif; ?>
</section>

<section class="panel"><h2>Top-Seiten</h2>
<?php if ($topPages): ?><ul class="list">
<?php foreach ($topPages as $row): ?><li><span><?= e($row['path']) ?></span><b><?= (int)$row['value'] ?></b></li><?php endforeach; ?>
</ul><?php else: ?><p class="empty">Noch keine Logdaten.</p><?php endif; ?>
</section>

<section class="panel"><h2>Klick-Ursprung</h2>
<?php if ($clickSources): ?><ul class="list">
<?php foreach ($clickSources as $row): ?><li><span><?= e($row['path']) ?></span><b><?= (int)$row['value'] ?></b></li><?php endforeach; ?>
</ul><?php else: ?><p class="empty">Noch keine Klicks.</p><?php endif; ?>
</section>

<section class="panel"><h2>Verweise</h2>
<?php if ($referrers): ?><ul class="list">
<?php foreach ($referrers as $row): ?><li><span><?= e($row['source']) ?></span><b><?= (int)$row['value'] ?></b></li><?php endforeach; ?>
</ul><?php else: ?><p class="empty">Keine externen Verweise im Zeitraum.</p><?php endif; ?>
</section>
</div>

<section class="panel"><h2>Suchbegriffe</h2>
<?php if ($terms): ?><ul class="list">
<?php foreach ($terms as $row): ?><li><span><?= e($row['term']) ?></span><b><?= (int)$row['value'] ?></b></li><?php endforeach; ?>
</ul><?php else: ?><p class="empty">Keine vom Referrer übermittelten Suchbegriffe.</p><?php endif; ?>
</section>

<p class="footer">Nur intern · keine Cookies · keine dauerhafte Besucherkennung</p>
</div>
</body>
</html>
