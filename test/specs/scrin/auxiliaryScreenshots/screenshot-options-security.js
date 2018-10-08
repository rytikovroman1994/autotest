/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-опции.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-опции
    it('filter-options', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки картинки
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/helm.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-комфорт система area view
    it('filter-area view', () => {
        // открываем страницу система area view
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Area View"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/areaView.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скришот фильтр-комфорт система easy open
    it('filter-easy open', () => {
        // открываем страницу система easy open
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Easy Open"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/easyOpen.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-'электропривод двери багажного отделения
    it('filter-electric trunk', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Электропривод двери багажного отделения"]');
        // переходим на страницу electric trunk
        browser.click('.avn008_option-check_more[data-name="checkbox%Электропривод двери багажного отделения"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/electricTrunk.png');
        expect(screen).to.not.equal(null);

        // закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-электро привод зеркал заднего вида
    it('filter-mirror drive', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Электропривод зеркал заднего вида"]');
        // открываем подробнее mirror drive
        browser.click('.avn008_option-check_more[data-name="checkbox%Электропривод зеркал заднего вида"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/mirrorDrive.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-keyless access
     it('filter-keyless access', () => {
         // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Система Keyless Access"]', 10, 10);
        // открываем подробнее keyless access
        browser.click('.avn008_option-check_more[data-name="checkbox%Система Keyless Access"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/keylessAccess.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-камера заднего вида
    it('filter-Rear View Camera', () => {
        // не видно кнопку, нужно к ней проскролить
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Камера заднего вида', 10, 10);
        // открываем подробнее камера заднего вида
        browser.click('.avn008_option-check_more[data-name="checkbox%Камера заднего вида');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
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
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/pressureMeter.png');
        expect(screen).to.not.equal(null);

        // закрываем закрываем динамическое окно
        browser.click('.modal-window_close');
    });

    // скриншот страницы безопасность
    it('filter-pressure meter', () => {
        // ожидаем закрытия всплывающего окна
        browser.waitForVisible('.avn008_filter__second-tab[data-name="Безопасность"]');
        // переходим на вкладку безопасность 
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        browser.waitForVisible('.avn008_safety-images_main div:nth-child(1) img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotOption/security.png');
        expect(screen).to.not.equal(null);
    });
});