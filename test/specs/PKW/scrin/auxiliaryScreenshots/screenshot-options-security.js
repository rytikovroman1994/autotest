/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции.*/

describe.skip('screenshots-exterior', () => {
    function diagonal(namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    }
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции
    it('filter-options', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/helm.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-комфорт система area view
    it('filter-area view', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Area View');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/areaView.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-комфорт система easy open
    it('filter-easy open', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Easy Open');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/easyOpen.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-'электропривод двери багажного отделения
    it('filter-electric trunk', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Электропривод двери багажного отделения');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/electricTrunk.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-электро привод зеркал заднего вида
    it('filter-mirror drive', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Электропривод зеркал заднего вида');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/mirrorDrive.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-keyless access
     it('filter-keyless access', () => {
         // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Keyless Access');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/keylessAccess.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-камера заднего вида
    it('filter-Rear View Camera', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Камера заднего вида');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/rearViewCamera.png');
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
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/pressureMeter.png');
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
        diagonal('security');
    });
});