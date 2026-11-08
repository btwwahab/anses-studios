const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const outDir = '/home/hp/.gemini/antigravity/brain/db58158f-7e40-4bd9-8f07-57a599be1106';

  // 1. Privacy Policy Top
  await page.goto('http://localhost:3000/privacy', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'page_privacy_top.png') });

  // Privacy Policy Scrolled
  await page.evaluate(() => window.scrollTo(0, 700));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(outDir, 'page_privacy_middle.png') });

  // 2. Terms & Conditions Top
  await page.goto('http://localhost:3000/terms', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'page_terms_top.png') });

  // Terms & Conditions Scrolled
  await page.evaluate(() => window.scrollTo(0, 700));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(outDir, 'page_terms_middle.png') });

  // 3. Home Footer Legal links check
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(outDir, 'page_home_footer.png') });

  await browser.close();
  console.log('Legal pages & footer captured successfully');
})();
