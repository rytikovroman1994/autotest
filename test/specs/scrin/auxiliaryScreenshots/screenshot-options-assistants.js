/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции-асистенты.*/

describe('screenshots-options', () => {
    before(() => {
        browser.helpers.openSite();
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
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/assistants.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-асисстенты адаптивный круиз контроль
    it('Filter-cruise Control', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Адаптивный круиз-контроль');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/cruiseControl.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-асисстенты функция auto-hold
    it('Filter-auto Hold', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Функция Auto-hold');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/autoHold.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр- front assist
    it('Filter-front Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Front Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/frontAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-light assist
    it('Filter-light Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Light Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/lightAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-датчик дождя
     it('Filter-rain Sensor', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Датчик дождя');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/rainSensor.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-side assist
    it('Filter-side Assist', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Система Side Assist');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/sideAssist.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});