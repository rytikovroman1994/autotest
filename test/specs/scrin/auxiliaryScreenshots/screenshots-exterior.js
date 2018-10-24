/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-disks
    it('Filter-disks', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на страницу диски
        browser.waitForExist('.avn008_filter__second-tab[data-name="Диски"]');
        browser.click('.avn008_filter__second-tab[data-name="Диски"]');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image');
        browser.pause(3000);
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/disks.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-свет
    it('Filter-shine', () => {
        // переходим на страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/shine.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-динамический поворотый свет
    it('Filter-dynamic', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Динамический поворотный свет');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/dynamic.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-опции
    it('Filter-option', () => {
        // переходим на страницу опции
        browser.waitForVisible('.avn008_filter__second-tab[data-name="Опции"]');
        browser.click('.avn008_filter__second-tab[data-name="Опции"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_option-check_image[data-name="Тонировка"]');
        browser.pause(3000);
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/option.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-фаркоп
    it('Filter-hitch', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Складной фаркоп');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/hitch.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-люк
     it('Filter-Luke', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Панорамный люк');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/Luke.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-рейлинги
    it('Filter-railings', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Рейлинги');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/railings.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-пакет отделки r-line
    it('Filter-rline', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Пакет отделки R-line');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/rline.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-тонировка
    it('Filter-toning', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Тонировка');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/toning.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });
});