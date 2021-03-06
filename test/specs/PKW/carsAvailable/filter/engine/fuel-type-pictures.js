import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test fuel type in pictures', () => {
    const listPetrol = [
        'TSI',
        'MPI',
        'FSI'
    ]

    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox petrol', () => {
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно дизель
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ДИЗЕЛЬ');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        browser.waitForVisible('.avn008_overlay_submit-block_btn .btn.btn_cta');
        // переходим к списку 
        PkwFilter.show();
        browser.pause(2000);
        // проверяем, что в карточке есть условие TDI
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_engine"]');
        expect(getView).to.be.include('TDI');
    });

    // переходим обратно в фильтр
    it('Open filter', () => {
        PkwFilter.filter();
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // отключаем условие автоматической трансмисии
        browser.click('.checkbox[data-name="Дизель"]');
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        PkwFilter.show();
        PkwFilter.filter();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox diesel', () => {
        // ожидаем появления кнопки
        browser.waitForVisible('.avn008_filter__tab[data-name="Двигатель"]');
        // переходим на страницу двигатель 
        PkwFilter.engine();
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Бензин"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно бензин
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('БЕНЗИН');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        browser.pause(3000);
        // переходим к списку 
        PkwFilter.show();
        // проверяем, что в карточке есть условие MPI
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_engine"]');
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray([getView.split(' ')[0]], (listPetrol));
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не входит в список доступных видов бензина`);
    });
});