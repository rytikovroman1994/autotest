/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-руль
    it('filter-helm', () => {
        // переходим на страницу интерьер
        browser.click('#react-tabs-8');
        // переходим на страницу руль
        browser.waitForExist('#react-tabs-14');
        browser.click('#react-tabs-14');
        // ожидаем загрузки картинки руля
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/helm.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-климат
    it('filter-climate', () => {
        // переходим на страницу климат
        browser.click('#react-tabs-16');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('div.avn008_climate-images_main > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/climate.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-мультимедия
    it('filter-dynamic', () => {
        // открываем страницу мультимедиа 
        browser.click('#react-tabs-18');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div:nth-child(6) > div > div > div.avn008_option-check_image > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/dynamic.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-active info display
    it('filter-active info display', () => {
        // переходим на страницу active info display
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/activeInfoDisplay.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-app connect
    it('filter-app connect', () => {
        browser.waitForVisible('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // открываем подробнее app connect
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/appConnect.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-bluetooth
     it('filter-bluetooth', () => {
        browser.waitForVisible('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // открываем подробнее bluetooth
        browser.click('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/bluetooth.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-навигация
    it('filter-navigation', () => {
        // открываем подробнее навигация
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/navigation.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-премиум аудио
    it('filter-premium audio', () => {
        browser.waitForVisible('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // открываем подробнее пакет отделки премиум аудио
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/premiumAudio.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-безпроводная зарядка
    it('filter-wireless charger', () => {
        browser.waitForVisible('div:nth-child(6) > div > div > div.avn008_option-check_more');
        // открываем подробнее безпроводная зарядка
        browser.click('div:nth-child(6) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/wirelessСharger.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});