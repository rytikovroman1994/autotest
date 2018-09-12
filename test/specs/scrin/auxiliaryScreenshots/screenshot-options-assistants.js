/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-асистенты.*/

describe('screenshots-options', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции-асистенты
    it('filter-options-assistants', () => {
        // переходим на страницу опции
        browser.click('#react-tabs-10');
        // переходим на страницу асистенты
        browser.click('#react-tabs-16');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/assistants.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-асисстенты адаптивный круиз контроль
    it('filter-cruise Control', () => {
        // открываем страницу 
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/cruiseControl.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-асисстенты функция auto-hold
    it('filter-auto Hold', () => {
        // открываем страницу система easy open
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/autoHold.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- front assist
    it('filter-front Assist', () => {
        browser.waitForVisible('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // переходим на страницу electric trunk
        browser.click('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/frontAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-light assist
    it('filter-light Assist', () => {
        browser.moveToObject('div:nth-child(4) > div > div > div.avn008_option-check_more', 5, 5);
        browser.waitForVisible('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // открываем подробнее mirror drive
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/lightAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-датчик дождя
     it('filter-rain Sensor', () => {
         // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('div:nth-child(5) > div > div > div.avn008_option-check_more', 10, 10);
        // открываем подробнее keyless access
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/rainSensor.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-side assist
    it('filter-side Assist', () => {
        // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('div:nth-child(6) > div > div > div.avn008_option-check_more', 10, 10);
        // открываем подробнее камера заднего вида
        browser.click('div:nth-child(6) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/sideAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});