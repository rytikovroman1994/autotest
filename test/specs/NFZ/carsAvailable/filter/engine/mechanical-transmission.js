describe('test mechanical transmission', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу "Двигатель"
        browser.click('#react-tabs-2');
        // ожидаем загрузки последней картинки 
    });

    // выбираем механическую коробку передач
    it('Check the manual transmission', () => {
        // выбираем чекбокс
        browser.click('.prefix_l_1 > div > label:nth-child(3)');
        // проверяем, что появилось условие в фильтре
        browser.waitUntil(
            () => browser.isExisting('.avn008_filter-value-item') === true,
            5000, "Условие не появилось в фильтре");
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('MT');
        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isVisible('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");  
        // переходим к списку
        browser.click('.avn008_overlay_bar_column-right .btn_cta');
    });

    // ожидаем, пока загрузится первая карточка и проверяем наличие комплектации
    it('Check condition in the card', () => {
        // ожидаем, пока появится карточка
        browser.waitForVisible('.avn001-2_content');
        // ожидаем, пока перерендерится список карточек
        browser.pause(2000);
        // проверяем, что в карточке есть условие МКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .gridcontainer > div:nth-child(4) > div > div > div:nth-child(1) > div > div > div:nth-child(2) > div.avn001-2_specs-item_text');
        expect(getView).to.be.include('МКП');
    });
});