/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-disks
    it('filter-disks', () => {
        // переходим на страницу экстерьер
        browser.click('#react-tabs-6');
        // переходим на страницу диски
        browser.waitForExist('#react-tabs-14');
        browser.click('#react-tabs-14');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/disks.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-свет
    it('filter-shine', () => {
        // переходим на страницу свет
        browser.click('#react-tabs-16');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_container img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/shine.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-динамический поворотый свет
    it('filter-dynamic', () => {
        // открываем подробнее 
        browser.click('.link-like');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/dynamic.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-опции
    it('filter-option', () => {
        // переходим на страницу опции
        browser.waitForVisible('#react-tabs-18');
        browser.click('#react-tabs-18');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div:nth-child(5) > div > div > div.avn008_option-check_image > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/option.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-фаркоп
    it('filter-hitch', () => {
        // открываем подробнее фаркоп
        browser.click('div:nth-child(1) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/hitch.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-люк
     it('filter-Luke', () => {
        browser.waitForVisible('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // открываем подробнее люк
        browser.click('div:nth-child(2) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/Luke.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-рейлинги
    it('filter-railings', () => {
        // открываем подробнее рейлинги
        browser.click('div:nth-child(3) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/railings.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-пакет отделки r-line
    it('filter-rline', () => {
        browser.waitForVisible('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // открываем подробнее пакет отделки r-line
        browser.click('div:nth-child(4) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/rline.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-тонировка
    it('filter-toning', () => {
        // открываем подробнее пакет отделки r-line
        browser.click('div:nth-child(5) > div > div > div.avn008_option-check_more');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div.avn015_image > div > div.LazyLoad.is-visible > div > img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/toning.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });
});