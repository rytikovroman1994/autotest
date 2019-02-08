import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test drive unit in pictures', function() {
    this.retries(3);
    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox four-wheel drive', () => {
        // ожидаем появления кнопки
        browser.waitForVisible('.avn008_filter__tab[data-name="Двигатель"]');
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Передний привод"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно передний
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ПЕРЕДНИЙ');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        PkwFilter.show();
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_drive"]');
        expect(getView).to.be.include('FWD');
    });

    // переъодим обратно в фильтр
    it('open filter', () => {
        PkwFilter.filter();
        // ожидаем появления кнопки
        browser.waitForVisible('.avn008_filter__tab[data-name="Двигатель"]');
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // отключаем условие автоматической трансмисии
        browser.click('.checkbox[data-name="Передний привод"]');
        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        PkwFilter.show();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox front-wheel drive', () => {
        PkwFilter.filter();
        // ожидаем появления кнопки
        browser.waitForVisible('.avn008_filter__tab[data-name="Двигатель"]');
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Полный привод"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно полный
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ПОЛНЫЙ');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        PkwFilter.show();
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_drive"]');
        expect(getView).to.be.include('4WD');
    });
});