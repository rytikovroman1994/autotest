/* Вспомогательный тест для создания базы актуальных скриншотов основных страниц фильтра
*/

describe.skip('smoke screenshot test save', () => {
    function diagonal(namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/mainFilterPages/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    }
    before(() => {
        browser.helpers.openSite();
    });
    // скриншот фильтр-модель
    it('filter-model', () => {
        browser.waitForVisible('.avn008_car__image');
        diagonal('model');
    });
    // скришот фильтр-бюджет
    it('filter-budget', () => {
        // переходим на страницу бюджет
        browser.click('.avn008_filter__tab[data-name="Бюджет"]');
        diagonal('budget');
    });

    // скришот фильтр-двигатель
    it('filter-enhine', () => {
        // переходим на страницу двигатель
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.grid_m_2 img');
        diagonal('engine');
    });

    // скришот фильтр-экстерьер
    it('filter-exterior', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal('exterior');
    });

    // скришот фильтр-интерьер
    it('filter-interior', () => {
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal('interior');
    });

    // скришот фильтр-опции
    it('filter-option', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_option-check_image img');
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        diagonal('option');
    });
});