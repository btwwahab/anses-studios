const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  const outDir = '/home/hp/.gemini/antigravity/brain/db58158f-7e40-4bd9-8f07-57a599be1106';

  // 1. Top with Navbar & Hero
  await page.screenshot({ path: path.join(outDir, 'section_hero_top.png') });

  // 2. Scroll down 300px to test Navbar sticky state
  await page.evaluate(() => window.scrollTo(0, 300));
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(outDir, 'section_navbar_scrolled.png') });

  // 3. Scroll to Teaser / Synopsis section
  const synopsisEl = await page.$('#synopsis');
  if (synopsisEl) {
    await synopsisEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'section_synopsis.png') });
  }

  // 4. Scroll to Characters section
  const charactersEl = await page.$('#characters');
  if (charactersEl) {
    await charactersEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'section_characters.png') });
  }

  // 5. Scroll to Craft / Behind the story section
  const craftEl = await page.$('#craft');
  if (craftEl) {
    await craftEl.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, 'section_craft.png') });
  }

  await browser.close();
  console.log('Sections captured successfully');
})();
