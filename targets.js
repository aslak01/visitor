const puppeteer = require("puppeteer");

const targets = ["https://dagbladet--www-integration.labdevs.com"];

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
