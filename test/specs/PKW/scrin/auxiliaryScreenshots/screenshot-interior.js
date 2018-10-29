/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe.skip('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
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
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/seats.png');
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
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/helm.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-климат
    it('Filter-climate', () => {
        // переходим на страницу климат
        browser.click('.avn008_filter__second-tab[data-name="Климат"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.grid_6.push_3 > div > div > div:nth-child(1)  img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/climate.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-мультимедия
    it('Filter-dynamic', () => {
        // открываем страницу мультимедиа 
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_option-check_image[data-name="Беспроводная зарядка"]');
        browser.pause(3000);
        // ожидаем загрузки картинки диагональ экрана
        browser.waitForVisible('.avn008_option__slider-card__image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/dynamic.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-active info display
    it('Filter-active info display', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Active Info Display');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/activeInfoDisplay.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-app connect
    it('Filter-app connect', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('App Connect');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/appConnect.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-bluetooth
     it('Filter-bluetooth', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Bluetooth');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/bluetooth.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-навигация
    it('Filter-navigation', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Навигация');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/navigation.png');
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
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/premiumAudio.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-безпроводная зарядка
    it('Filter-wireless charger', () => {
        browser.helpers.moreDetail('Беспроводная зарядка');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/wirelessСharger.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});