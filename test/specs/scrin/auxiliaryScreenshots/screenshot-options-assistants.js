/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-асистенты.*/

describe('screenshots-options', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции-асистенты
    it('filter-options-assistants', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('.avn008_option__slider-card-icon');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/assistants.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-асисстенты адаптивный круиз контроль
    it('filter-cruise Control', () => {
        // открываем страницу 
        browser.click('.avn008_option-check_more[data-name="checkbox%Адаптивный круиз-контроль"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/cruiseControl.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-асисстенты функция auto-hold
    it('filter-auto Hold', () => {
        // открываем страницу система easy open
        browser.click('.avn008_option-check_more[data-name="checkbox%Функция Auto-hold"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/autoHold.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- front assist
    it('filter-front Assist', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Система Front Assist"]');
        // переходим на страницу electric trunk
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Front Assist"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/frontAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-light assist
    it('filter-light Assist', () => {
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Система Light Assist"]', 5, 5);
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Система Light Assist"]');
        // открываем подробнее mirror drive
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Light Assist"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/lightAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-датчик дождя
     it('filter-rain Sensor', () => {
         // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Датчик дождя"]', 10, 10);
        // открываем подробнее keyless access
        browser.click('.avn008_option-check_more[data-name="checkbox%Датчик дождя"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/rainSensor.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-side assist
    it('filter-side Assist', () => {
        // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Система Side Assist"]', 10, 10);
        // открываем подробнее камера заднего вида
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Side Assist"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/sideAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});