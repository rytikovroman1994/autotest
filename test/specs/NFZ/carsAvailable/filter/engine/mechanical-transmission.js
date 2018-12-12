import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test mechanical transmission', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу "Двигатель"
        NfzFilter.engine();
    });

    // выбираем механическую коробку передач
    it('Check the manual transmission', () => {
        browser.helpers.checkCheckboxNfz('Механическая', 'MT', 'transmission');

        // переходим к списку
        browser.click('.checkbox[data-name="Механическая"]');
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
        // проверяем, что в карточке есть условие МКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) [title="Ручная КП"]');
        expect(getView).to.be.include('МКП');
    });
});