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

  // Scroll to world / characters section
  const section = await page.$('#world');
  if (section) {
    await section.scrollIntoView();
  }
  await new Promise(r => setTimeout(r, 600));

  // Find the button for Professor Harrison
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('Professor Harrison')) {
      await btn.click();
      break;
    }
  }

  await new Promise(r => setTimeout(r, 700));

  const outDir = '/home/hp/.gemini/antigravity/brain/db58158f-7e40-4bd9-8f07-57a599be1106';
  await page.screenshot({ path: path.join(outDir, 'verify_professor_card.png') });

  await browser.close();
  console.log('Professor card screenshot captured');
})();
