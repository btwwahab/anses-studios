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

  // Scroll through the page to trigger all lazy-loaded images
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });

  // Wait for all network assets to settle
  await new Promise((r) => setTimeout(r, 1500));

  const outDir = '/home/hp/.gemini/antigravity/brain/db58158f-7e40-4bd9-8f07-57a599be1106';

  // Desktop full page
  await page.screenshot({ path: path.join(outDir, 'fullpage_desktop.png'), fullPage: true });
  console.log('Desktop full page captured with all assets loaded');

  // Mobile full page
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, 'fullpage_mobile.png'), fullPage: true });
  console.log('Mobile full page captured with all assets loaded');

  await browser.close();
  console.log('Finished QA capture!');
})();
