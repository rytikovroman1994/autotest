/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-зимний пакет.*/

describe.skip('screenshots-options', () => {
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
    // скришот фильтр-опции-зимний пакет
    it('Filter-options-winter package', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницузимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // ожидаем загрузки последней картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Стояночный отопитель"]');
        browser.pause(3000);
        diagonal(nameBrowser, 'winterPackage');
        browser.windowHandleSize ({width: 1366, height: 768});
    });

    // скришот фильтр-подогрев зеркал
    it('Filter-heated mirrors', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Подогрев зеркал');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/heatedMirrors.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-подогрев руля
    it('Filter-heated steering wheel', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Подогрев руля');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/heatedWheel.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- подогрев лобового стекла
    it('Filter-heated windshield', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Подогрев лобового стекла');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/heatedWindshield.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-стояночный отопитель
    it('Filter-parking heater', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Стояночный отопитель');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/parkingHeater.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});