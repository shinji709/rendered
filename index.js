const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(require('fs').readFileSync(0).toString());
    const bodyHandle = await page.$('body');
    const text = await bodyHandle.evaluate(body => body.innerText);
    console.log(text);
    await browser.close();
})();
