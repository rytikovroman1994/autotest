/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции.*/

describe.skip('screenshots-exterior', () => {
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    // запоминаем имя браузера
    let nameBrowser;
    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });
    // скришот фильтр-опции
    it('filter-options', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        browser.pause(5000);
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/helm.png`);
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-комфорт система area view
    it('filter-area view', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Area View');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/areaView.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-комфорт система easy open
    it('filter-easy open', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Easy Open');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/easyOpen.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-'электропривод двери багажного отделения
    it('filter-electric trunk', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Электропривод двери багажного отделения');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/electricTrunk.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-электро привод зеркал заднего вида
    it('filter-mirror drive', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Электропривод зеркал заднего вида');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/mirrorDrive.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-keyless access
     it('filter-keyless access', () => {
         // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Keyless Access');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/keylessAccess.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-камера заднего вида
    it('filter-Rear View Camera', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Камера заднего вида');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/rearViewCamera.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-датчик контроля давления в шинах
    it('filter-pressure meter', () => {
        browser.waitForVisible('div:nth-child(7) > div > div > div.avn008_option-check_more');
        // открываем подробнее датчик контроля давления в шинах
        browser.click('div:nth-child(7) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        browser.pause(5000);
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/pressureMeter.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот страницы безопасность
    it('filter-pressure meter', () => {
        // ожидаем закрытия всплывающего окна
        browser.waitForVisible('.avn008_filter__second-tab[data-name="Безопасность"]');
        // переходим на вкладку безопасность 
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        browser.waitForVisible('.avn008_safety-images_main div:nth-child(1) img');
        diagonal(nameBrowser, 'security');
    });
});