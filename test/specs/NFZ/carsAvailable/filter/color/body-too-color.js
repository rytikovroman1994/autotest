describe('test body too color', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // переходим нас траницу Цвет
    it('Open page Color', () => {
        // ожидаем пока появится кнопка Цвет
        browser.waitForVisible('.avn008_filter__tab[data-name="Цвет"]');
        // переходим в раздел Цвет
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ожидаем появления картинки дверей
        browser.waitForVisible('.avn008_image-switcher_image');
        // переключаемся на два цвета
        browser.click('.grid_s_12:nth-child(3) .rc-slider-dot:nth-child(1)');
    });

    it('Check the too color of the door', () => {
        // получаем количество доступных цветов
        const numberColor = $$('.avn_double_color__main').length;
        // скролим страницу
        browser.scroll('.avn008_image-switcher_image', 0, 200);
        for( let i = 1;  i <= numberColor; i++ ) {
            if( browser.isVisible(`.avn008_color-colors > div:nth-child(${i})`) === true) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // выбираем цвет 
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // проверяем что в фильтре появилось условие
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === true,
                5000, "Цвет кузова не появился в фильтре");
            // жёдм пока цвет двери переключится 
            browser.pause(1000);
            // делаем второй скриншот
            ctx.newScreenshot = browser.screenshot().value;

            it('compare screenshots', async () => {
                expect(ctx.originalScreenshot).not.equal(null);
                expect(ctx.newScreenshot).not.equal(null);
                
                const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
                
                expect(distance).to.be.above(0);
            });

            // отключаем условие в фильтре
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // проверяем, что условие убралось
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === false,
                5000, "Цвет кузова не исчез из фильтра");
        }
        }
    });
});