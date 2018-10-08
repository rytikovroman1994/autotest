/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // скриншот фильтр - сиденья
    it('filter-seats', () => {
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем загрузки картинки сиденья
        browser.waitForVisible('.avn008_image-switcher_image');
        // открываем всплывающее окно подробнее
        browser.click('.avn008_option-check_more[data-name="checkbox%Алькантара"]');
        // ждём загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/seats.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });
    // скришот фильтр-руль
    it('filter-helm', () => {
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
    it('filter-climate', () => {
        // переходим на страницу климат
        browser.click('.avn008_filter__second-tab[data-name="Климат"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.grid_6.push_3 > div > div > div:nth-child(1)  img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/climate.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-мультимедия
    it('filter-dynamic', () => {
        // открываем страницу мультимедиа 
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.image-container > img');
        // ожидаем загрузки картинки диагональ экрана
        browser.waitForVisible('.avn008_option__slider-card__image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/dynamic.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-active info display
    it('filter-active info display', () => {
        // переходим на страницу active info display
        browser.click('.avn008_option-check_more[data-name="checkbox%Active Info Display"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/activeInfoDisplay.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-app connect
    it('filter-app connect', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%App Connect"]');
        // открываем подробнее app connect
        browser.click('.avn008_option-check_more[data-name="checkbox%App Connect"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/appConnect.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-bluetooth
     it('filter-bluetooth', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Bluetooth"]');
        // открываем подробнее bluetooth
        browser.click('.avn008_option-check_more[data-name="checkbox%Bluetooth"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/bluetooth.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-навигация
    it('filter-navigation', () => {
        // открываем подробнее навигация
        browser.click('.avn008_option-check_more[data-name="checkbox%Навигация"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/navigation.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-премиум аудио
    it('filter-premium audio', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Премиум Аудио"]');
        // открываем подробнее пакет отделки премиум аудио
        browser.click('.avn008_option-check_more[data-name="checkbox%Премиум Аудио"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/premiumAudio.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-безпроводная зарядка
    it('filter-wireless charger', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Беспроводная зарядка"]');
        // открываем подробнее безпроводная зарядка
        browser.click('.avn008_option-check_more[data-name="checkbox%Беспроводная зарядка"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn015_content .image-container');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotInterior/wirelessСharger.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});