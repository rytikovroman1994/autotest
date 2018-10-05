/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe('screenshots-exterior', () => {
    before(() => {
        browser.helpers.openSite();
    });
    // скришот фильтр-disks
    it('filter-disks', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на страницу диски
        browser.waitForExist('.avn008_filter__second-tab[data-name="Диски"]');
        browser.click('.avn008_filter__second-tab[data-name="Диски"]');
        // ожидаем загрузки картинки дисков
        browser.waitForVisible('div:nth-child(2) > div > div.disc-item_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/disks.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-свет
    it('filter-shine', () => {
        // переходим на страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_container img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/shine.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-динамический поворотый свет
    it('filter-dynamic', () => {
        // открываем подробнее 
        browser.click('.avn008_option-check_more[data-name="checkbox%Динамический поворотный свет"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/dynamic.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-опции
    it('filter-option', () => {
        // переходим на страницу опции
        browser.waitForVisible('.avn008_filter__second-tab[data-name="Опции"]');
        browser.click('.avn008_filter__second-tab[data-name="Опции"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('div:nth-child(5) > div > div > .avn008_option-check_image img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/option.png');
        expect(screen).to.not.equal(null);
    });

    // скриншот фильтр-фаркоп
    it('filter-hitch', () => {
        // открываем подробнее фаркоп
        browser.click('.avn008_option-check_more[data-name="checkbox%Складной фаркоп"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/hitch.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-люк
     it('filter-Luke', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Панорамный люк"]');
        // открываем подробнее люк
        browser.click('.avn008_option-check_more[data-name="checkbox%Панорамный люк"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/Luke.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-рейлинги
    it('filter-railings', () => {
        // открываем подробнее рейлинги
        browser.click('.avn008_option-check_more[data-name="checkbox%Рейлинги"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/railings.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-пакет отделки r-line
    it('filter-rline', () => {
        browser.waitForVisible('.avn008_option-check_more[data-name="checkbox%Пакет отделки R-line"]');
        // открываем подробнее пакет отделки r-line
        browser.click('.avn008_option-check_more[data-name="checkbox%Пакет отделки R-line"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/rline.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-тонировка
    it('filter-toning', () => {
        // передвигаем курсор на чекбокс
        browser.moveToObject('.avn008_option-check_more[data-name="checkbox%Тонировка"]');
        // открываем подробнее пакет отделки r-line
        browser.click('.avn008_option-check_more[data-name="checkbox%Тонировка"]');
        // ожидаем загрузки картинки 
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/screenshotExterior/toning.png');
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });
});