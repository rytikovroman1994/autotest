describe('test mechanical transmission', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу "Двигатель"
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем загрузки последней картинки 
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
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .gridcontainer > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div.avn001-2_specs-item_text');
        expect(getView).to.be.include('МКП');
    });
});