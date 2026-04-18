/**
 * auto-index-submit.ts — TheEAIndex
 *
 * Detects new sitemap URLs and submits them to search engines.
 *   1. Submits to Bing/Yandex/Seznam/Naver via IndexNow
 *   2. Pings Google's sitemap endpoint
 *   3. Logs which URLs need manual GSC submission (10/day limit)
 *
 * Usage:  npx tsx scripts/auto-index-submit.ts
 * Env:    INDEXNOW_KEY (required), DRY_RUN=true (optional)
 */

import * as fs from 'fs';
import * as path from 'path';

const SITE_URL = 'https://www.theeaindex.com';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '';
const DRY_RUN = process.env.DRY_RUN === 'true';
const LOG_FILE = path.join(__dirname, '..', 'data', 'submitted-urls.json');

interface SubmissionLog {
  lastRun: string;
  urls: Record<string, { submittedAt: string; indexNow: boolean; googlePinged: boolean }>;
}

async function fetchSitemapUrls(): Promise<string[]> {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const urls: string[] = [];
  const re = /<loc>(.*?)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

function loadLog(): SubmissionLog {
  if (fs.existsSync(LOG_FILE)) return JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
  return { lastRun: '', urls: {} };
}

function saveLog(log: SubmissionLog): void {
  const dir = path.dirname(LOG_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
}

async function submitIndexNow(urls: string[]): Promise<boolean> {
  if (!INDEXNOW_KEY) { console.log('⚠️  INDEXNOW_KEY not set — skipping'); return false; }
  if (!urls.length) return true;

  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  if (DRY_RUN) { console.log(`[DRY RUN] Would submit ${urls.length} URLs`); return true; }

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });
    if (res.ok || res.status === 202) {
      console.log(`✅ IndexNow: ${urls.length} URLs submitted (${res.status})`);
      return true;
    }
    console.error(`❌ IndexNow failed: ${res.status} ${await res.text()}`);
    return false;
  } catch (err) { console.error('❌ IndexNow error:', err); return false; }
}

async function pingGoogle(): Promise<boolean> {
  const url = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  if (DRY_RUN) { console.log(`[DRY RUN] Would ping Google`); return true; }
  try {
    const res = await fetch(url);
    console.log(res.ok ? '✅ Google sitemap ping OK' : `⚠️  Google ping: ${res.status}`);
    return res.ok;
  } catch { console.log('⚠️  Google ping failed (non-critical)'); return false; }
}

async function main() {
  console.log(`\n🔍 TheEAIndex — fetching ${SITEMAP_URL}`);
  const sitemapUrls = await fetchSitemapUrls();
  console.log(`   ${sitemapUrls.length} URLs in sitemap`);

  const log = loadLog();
  const newUrls = sitemapUrls.filter(u => !log.urls[u]);
  const now = new Date().toISOString();

  if (!newUrls.length) {
    console.log('\n✅ No new URLs to submit.');
    log.lastRun = now; saveLog(log); return;
  }

  console.log(`\n🆕 ${newUrls.length} new URLs:`);
  newUrls.forEach(u => console.log(`   ${u}`));

  console.log('\n--- IndexNow ---');
  const inOk = await submitIndexNow(newUrls);

  console.log('\n--- Google Ping ---');
  const gOk = await pingGoogle();

  console.log('\n--- GSC Manual Submission (10/day) ---');
  const sorted = [...newUrls].sort((a, b) => {
    const depth = (u: string) => new URL(u).pathname.split('/').filter(Boolean).length;
    return depth(a) - depth(b);
  });
  sorted.forEach((u, i) => console.log(`   Day ${Math.floor(i / 10) + 1}: ${u}`));
  console.log(`\n   📅 ${newUrls.length} URLs = ${Math.ceil(newUrls.length / 10)} day(s)`);

  for (const u of newUrls) log.urls[u] = { submittedAt: now, indexNow: inOk, googlePinged: gOk };
  log.lastRun = now; saveLog(log);
  console.log(`\n💾 Log saved (${Object.keys(log.urls).length} URLs tracked)`);
}

main().catch(console.error);
