/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-зимний пакет.*/

describe('screenshots-options', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции-зимний пакет
    it('filter-options-winter package', () => {
        // переходим на страницу опции
        browser.click('#react-tabs-10');
        // переходим на страницузимний пакет
        browser.click('#react-tabs-18');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/winterPackage.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-подогрев зеркал
    it('filter-heated mirrors', () => {
        // открываем страницу 
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedMirrors.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-подогрев руля
    it('filter-heated steering wheel', () => {
        browser.waitForVisible('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // открываем страницу 
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedWheel.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- подогрев лобового стекла
    it('filter-heated windshield', () => {
        browser.waitForVisible('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // переходим на страницу 
        browser.click('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/heatedWindshield.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-стояночный отопитель
    it('filter-parking heater', () => {
        browser.moveToObject('div:nth-child(4) > div > div > div.avn008_option-check_more', 5, 5);
        browser.waitForVisible('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // открываем подробнее 
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/parkingHeater.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});