describe('test automatic transmission', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу "Двигатель"
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
    });

    // выбираем автоматическую коробку передач
    it('Check the automatic transmission', () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckboxNfz('Автоматическая', 'AT', 'transmission');
        
        // переходим к списку
        browser.click('.checkbox[data-name="Автоматическая"]');
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
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) [title="Автоматическая КП"]');
        expect(getView).to.be.include('АКП');
    });
});