import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test diesel-fuel', () => {
    const listPetrol = [
        'TDI',
        'BITDI',
        'V6'
    ]
    before('open page filter', () => {
        browser.helpers.openFilter();
        // открываем страницу "Двигатель"
        NfzFilter.engine();
    });

    // выбираем топливо дизель
    it('Check diesel-fuel', () => {
        browser.helpers.checkCheckboxNfz('Дизель', 'ДИЗЕЛЬ', 'gas-type');

        // переходим к списку
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', () => {
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) [title="Дизельный двигатель"]');
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray([getView.split(' ')[0]], listPetrol);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не входит в список доступных видов бензина`);
    });
});