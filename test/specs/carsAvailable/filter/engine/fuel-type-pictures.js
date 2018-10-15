describe('test fuel type in pictures', () => {
    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox petrol', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно дизель
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ДИЗЕЛЬ');

        // проверяем, что кнопка "Показать" активна
        browser.waitForVisible('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        browser.pause(2000);
        // проверяем, что в карточке есть условие TDI
        const getView = browser.getText('div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div:nth-child(1)');
        expect(getView).to.be.include('TDI');
    });

    // переъодим обратно в фильтр
    it('open filter', () => {
        browser.click('#prompt-toggler_filter');
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // отключаем условие автоматической трансмисии
        browser.click('.checkbox[data-name="Дизель"]');
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        browser.click('#prompt-toggler_filter');
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox diesel', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Бензин"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно бензин
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('БЕНЗИН');

        // проверяем, что кнопка "Показать" активна
        browser.waitForVisible('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        // проверяем, что в карточке есть условие MPI
        const getView = browser.getText('div:nth-child(1) > div > div > div:nth-child(1) > div > div > div > div:nth-child(3) > div > div > div:nth-child(1) > div > div > div:nth-child(1)');
        expect(getView).to.be.include('MPI');
    });
});