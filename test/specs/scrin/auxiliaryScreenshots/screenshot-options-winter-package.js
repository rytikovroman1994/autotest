/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-зимний пакет.*/

describe('screenshots-options', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции-зимний пакет
    it('filter-options-winter package', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницузимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/winterPackage.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-подогрев зеркал
    it('filter-heated mirrors', () => {
        // открываем страницу 
        browser.click('.avn008_option-check_more[data-name="checkbox%Подогрев зеркал"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedMirrors.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-подогрев руля
    it('filter-heated steering wheel', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Подогрев руля"]');
        // открываем страницу 
        browser.click('.avn008_option-check_more[data-name="checkbox%Подогрев руля"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedWheel.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- подогрев лобового стекла
    it('filter-heated windshield', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Подогрев лобового стекла"]');
        // переходим на страницу 
        browser.click('.avn008_option-check_more[data-name="checkbox%Подогрев лобового стекла"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedWindshield.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-стояночный отопитель
    it('filter-parking heater', () => {
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Стояночный отопитель"]', 5, 5);
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Стояночный отопитель"]');
        // открываем подробнее 
        browser.click('.avn008_option-check_more[data-name="checkbox%Стояночный отопитель"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/parkingHeater.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});