/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe.skip('screenshots-exterior', () => {
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    // запоминаем имя браузера
    let nameBrowser;
    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });

    // скриншот фильтр - сиденья
    it('Filter-seats', () => {
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем загрузки картинки сиденья
        browser.waitForVisible('.avn008_image-switcher_image');
        // открываем всплывающее окно подробнее
        browser.click('.avn008_option-check_more[data-name="Алькантара"]');
        // ждём загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // пауза на случай долгого появления картинки
        browser.pause(3000);
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/seats.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });
    // скришот фильтр-руль
    it('Filter-helm', () => {
        // переходим на страницу руль
        browser.waitForExist('.avn008_filter__second-tab[data-name="Руль"]');
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
        // ожидаем загрузки картинки руля
        browser.waitForVisible('.avn008_image-switcher_image');
        browser.pause(5000);
        // делаем скриншот
        diagonal(nameBrowser, 'helm');
    });

    // скришот фильтр-климат
    it('Filter-climate', () => {
        // переходим на страницу климат
        browser.click('.avn008_filter__second-tab[data-name="Климат"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.grid_6.push_3 > div > div > div:nth-child(1)  img');
        diagonal(nameBrowser, 'climate');
    });

    // скриншот фильтр-мультимедия
    it('Filter-multimedia', () => {
        // открываем страницу мультимедиа 
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_option-check_image[data-name="Беспроводная зарядка"]');
        browser.pause(3000);
        // ожидаем загрузки картинки диагональ экрана
        browser.waitForVisible('.avn008_option__slider-card__image');
        diagonal(nameBrowser, 'multimedia');
        browser.windowHandleSize ({width: 1366, height: 768});
    });

    // скриншот фильтр-active info display
    it('Filter-active info display', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Active Info Display');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/activeInfoDisplay.png`);
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-app connect
    it('Filter-app connect', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('App Connect');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/appConnect.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-bluetooth
     it('Filter-bluetooth', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Bluetooth');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/bluetooth.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-навигация
    it('Filter-navigation', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Навигация');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/navigation.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-премиум аудио
    it('Filter-premium audio', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Премиум Аудио');
        browser.waitForVisible('.avn008_option-check_more[data-name="Премиум Аудио"]');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/premiumAudio.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-безпроводная зарядка
    it('Filter-wireless charger', () => {
        browser.helpers.moreDetail('Беспроводная зарядка');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotInterior/${nameBrowser}/wirelessСharger.png`);
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});