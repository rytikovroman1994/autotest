import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test fuel-gasoline', () => {
    const listPetrol = [
        'TSI',
        'MPI'
    ]
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    it('Open page engine', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.engine();
    });

    // выбираем топливо бензин
    it('Check fuel-gasoline', function() {
        this.retries(3);
        browser.helpers.checkCheckboxNfz('Бензин', 'БЕНЗИН', 'gas-type');

        // переходим к списку
        browser.click('.checkbox[data-name="Бензин"]');
        // проверяем что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', function() {
        this.retries(3);
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) [title="Бензиновый двигатель"]');
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