import fs from "file-system"
import Jimp from 'jimp';
import reporter from 'wdio-allure-reporter'

describe('test diff imeges', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
      // имя тестируемой страницы
      let namePage = 'color-door';
      // запоминаем имя браузера
    let nameBrowser;
    let image;
    let diff;
    let distance;
    before(() => {
        browser.helpers.openFilter();
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_image-switcher_image');
        // изменение програчности фильтра
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });
    it('Сompare screenshots 400', async () => {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        // берём скриншот с локала
        ctx.originalScreenshot = `./snapshot/nfzMainFilterPages/${nameBrowser}/800-${namePage}.png`;
        // делаем текущий скриншот
        ctx.newScreenshot = browser.screenshot().value;

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        diff = await browser.helpers.compareScreenshotsDiff(ctx.originalScreenshot, ctx.newScreenshot, '0');
        console.log(distance);
        console.log(diff.percent);
    
        // expect(distance).to.be.above(0);
        if(diff.percent > 0.04 || distance > 0.07) {
            browser.helpers.reportDiifImage(diff, nameBrowser, namePage)
            // проверяем допустипость отличия в пикселях
            expect(diff.percent).to.be.below(0.04);
            // проверем допустимость отличия в растоянии
            expect(distance).to.be.below(0.1);
        }
    });
});