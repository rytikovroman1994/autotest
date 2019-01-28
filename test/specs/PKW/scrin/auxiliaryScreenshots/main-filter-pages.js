/* Вспомогательный тест для создания базы актуальных скриншотов основных страниц фильтра
*/

describe.skip('smoke screenshot test save', () => {
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    // запоминаем имя браузера
    let nameBrowser;
    before(() => {
        browser.helpers.openSite();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });
    // скриншот фильтр-модель
    it('filter-model', () => {
        browser.waitForVisible('.avn008_car__image');
        diagonal(nameBrowser, 'model');
    });
    // скришот фильтр-бюджет
    it('filter-budget', () => {
        // переходим на страницу бюджет
        browser.click('.avn008_filter__tab[data-name="Бюджет"]');
        diagonal(nameBrowser, 'budget');
    });

    // скришот фильтр-двигатель
    it('filter-enhine', () => {
        // переходим на страницу двигатель
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.grid_m_2 img');
        diagonal(nameBrowser, 'engine');
    });

    // скришот фильтр-экстерьер
    it('filter-exterior', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal(nameBrowser, 'exterior');
    });

    // скришот фильтр-интерьер
    it('filter-interior', () => {
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal(nameBrowser, 'interior');
    });

    // скришот фильтр-опции
    it('filter-option', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_option-check_image img');
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        diagonal(nameBrowser, 'option');
    });
});