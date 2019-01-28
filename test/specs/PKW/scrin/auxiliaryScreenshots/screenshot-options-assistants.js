/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-асистенты.*/

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
    // скришот фильтр-опции-асистенты
    it('Filter-options-assistants', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // ожидаем загрузки последей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Система Side Assist"]');
        browser.pause(3000);
        diagonal(nameBrowser, 'assistants');
        browser.windowHandleSize ({width: 1366, height: 768});
    });

    // скришот фильтр-асисстенты адаптивный круиз контроль
    it('Filter-cruise Control', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Адаптивный круиз-контроль');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/cruiseControl.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-асисстенты функция auto-hold
    it('Filter-auto Hold', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Функция Auto-hold');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/autoHold.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- front assist
    it('Filter-front Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Front Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/frontAssist.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-light assist
    it('Filter-light Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Light Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/lightAssist.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-датчик дождя
     it('Filter-rain Sensor', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Датчик дождя');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/rainSensor.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-side assist
    it('Filter-side Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Side Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotOption/${nameBrowser}/sideAssist.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});