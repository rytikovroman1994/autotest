/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции
    it('filter-helm', () => {
        // переходим на страницу опции
        browser.click('#react-tabs-10');
        // ожидаем загрузки картинки
        browser.waitForVisible('div:nth-child(7) > div > div > div.avn008_option-check_image > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/helm.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-комфорт система area view
    it('filter-area view', () => {
        // открываем страницу система area view
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/areaView.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-комфорт система easy open
    it('filter-easy open', () => {
        // открываем страницу система easy open
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/easyOpen.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-'электропривод двери багажного отделения
    it('filter-electric trunk', () => {
        browser.waitForVisible('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // переходим на страницу electric trunk
        browser.click('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/electricTrunk.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-электро привод зеркал заднего вида
    it('filter-mirror drive', () => {
        browser.waitForVisible('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // открываем подробнее mirror drive
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/mirrorDrive.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-keyless access
     it('filter-keyless access', () => {
         // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('div:nth-child(5) > div > div > div.avn008_option-check_more', 10, 10);
        // открываем подробнее keyless access
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/keylessAccess.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-камера заднего вида
    it('filter-Rear View Camera', () => {
        // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('div:nth-child(6) > div > div > div.avn008_option-check_more', 10, 10);
        // открываем подробнее камера заднего вида
        browser.click('div:nth-child(6) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/rearViewCamera.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-датчик контроля давления в шинах
    it('filter-pressure meter', () => {
        // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('div:nth-child(7) > div > div > div.avn008_option-check_more', 10, 10);
        browser.waitForVisible('div:nth-child(7) > div > div > div.avn008_option-check_more');
        // открываем подробнее датчик контроля давления в шинах
        browser.click('div:nth-child(7) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/pressureMeter.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });
});