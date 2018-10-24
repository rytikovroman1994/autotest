describe('test transmission in pictures', () => {
    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox AT transmissiion', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Автоматическая"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('AT');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        // ожидаем, когд перерендерится карточки
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_gearing"]');
        expect(getView).to.be.include('АКП');
    });

    // переъодим обратно в фильтр
    it('open filter', () => {
        browser.click('body #prompt-toggler_filter');
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // отключаем условие автоматической трансмисии
        browser.click('.checkbox[data-name="Автоматическая"]');
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        browser.click('body #prompt-toggler_filter');
    });

    // проверяем наличие условия и появления его в фильтре
    it('Check checkbox MT transmissiion', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Механическая"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('MT');

        // проверяем, что кнопка "Показать" активна
        browser.waitUntil(
            () => browser.isExisting('avn008_overlay_bar--progress') === false,
            10000, "Кнопка Показать не активна в течении 10 секунд");
        // переходим к списку 
        browser.click('.avn008_overlay_bar_content .avn008_overlay_submit-block_btn');
        // ожидаем пока карточки перерендерятся
        browser.pause(2000);
        // проверяем, что в карточке есть условие АКП
        const getView = browser.getText('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_specs-item[data-type="catalogue_item_specs_gearing"]');
        expect(getView).to.be.include('МКП');
    });
});