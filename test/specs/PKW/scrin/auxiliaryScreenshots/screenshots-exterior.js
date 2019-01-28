/* Вспомогательный тест для генерации актуальных скриншотов в разделе фильтр-эстерьер.*/

describe.skip('screenshots-exterior', () => {
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    // запоминаем имя браузера
    let nameBrowser;
    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
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
        diagonal(nameBrowser, 'disks');
    });

    // скришот фильтр-свет
    it('Filter-shine', () => {
        // переходим на страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
        // ожидаем загрузки картинки фары
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        diagonal(nameBrowser, 'shine');
        browser.windowHandleSize ({width: 1366, height: 768});
    });

    // скриншот фильтр-динамический поворотый свет
    it('Filter-dynamic', () => {
        browser.windowHandleSize ({width: 1366, height: 768});
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Динамический поворотный свет');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/dynamic.png`);
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
        diagonal(nameBrowser, 'option');
        browser.windowHandleSize ({width: 1366, height: 768});
    });

    // скриншот фильтр-фаркоп
    it('Filter-hitch', () => {
        browser.windowHandleSize ({width: 1366, height: 768});
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Складной фаркоп');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/hitch.png`);
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

     // скриншот фильтр-люк
     it('Filter-Luke', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Панорамный люк');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/Luke.png`);
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-рейлинги
    it('Filter-railings', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Рейлинги');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/railings.png`);
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-пакет отделки r-line
    it('Filter-rline', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Пакет отделки R-line');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/rline.png`);
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });

    // скриншот фильтр-тонировка
    it('Filter-toning', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail('Тонировка');
        // делаем скриншот
        var screen = browser.saveScreenshot(`./snapshot/screenshotExterior/${nameBrowser}/toning.png`);
        expect(screen).to.not.equal(null);

        // закрываем окно динамического света
        browser.click('.modal-window_close');
    });
});