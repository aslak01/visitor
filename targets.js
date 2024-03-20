const puppeteer = require("puppeteer");

const targets = [
  "https://dagbladet--www-integration.labdevs.com",
  "https://image-www-kasper.labdevs.com",
  "https://dagbladet--www-aslak.labdevs.com/skatt"
];

targets.forEach((tar) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(tar, {
      timeout: 10_000,
      waitUntil: "networkidle2",
    });
    await browser.close();
  })();
});
