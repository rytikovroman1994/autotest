/* Вспомогательный тест для создания базы актуальных скриншотов основных страниц фильтра
*/

describe.skip('smoke screenshot test save', () => {
    before(() => {
        browser.windowHandleMaximize ();
        // переходим на страницу
        browser.url('https://vw.kodix.ru');
        // скрываем раздел Фильтр
        const firstFilter = browser.waitForVisible('.avn008_overlay');
        if(firstFilter === false) {
            browser.click('.avn003_column-left');
        }
    });
    // скриншот фильтр-модель
    it('filter-model', () => {
        browser.waitForVisible('.avn008_car__image');
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/model.png');
        expect(screen).to.not.equal(null);
    });
    // скришот фильтр-бюджет
    it('filter-budget', () => {
        // переходим на страницу бюджет
        browser.click('.avn008_filter__tab[data-name="Бюджет"]');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/budget.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-двигатель
    it('filter-enhine', () => {
        // переходим на страницу двигатель
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_engine__card-image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/enhine.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-экстерьер
    it('filter-exterior', () => {
        // переходим на страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/exterior.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-интерьер
    it('filter-interior', () => {
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_image-switcher_image');
        browser.pause(1000);
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/interior.png');
        expect(screen).to.not.equal(null);
    });

    // скришот фильтр-опции
    it('filter-option', () => {
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки елементов
        browser.waitForVisible('.avn008_option-check_image img');
        browser.waitForVisible('div:nth-child(7) > div > div > .avn008_option-check_image img');
        // делаем скриншот
        var screen = browser.saveScreenshot('./snapshot/mainFilterPages/option.png');
        expect(screen).to.not.equal(null);
    });
});