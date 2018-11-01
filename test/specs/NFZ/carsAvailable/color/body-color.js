describe('test body color', () => {
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
        browser.waitForVisible('body #react-tabs-4');
        // переходим в раздел Цвет
        browser.click('body #react-tabs-4');
        // ожидаем появления картинки дверей
        browser.waitForVisible('.avn008_image-switcher_image');
    });

    it('Check the color of the door', () => {
        // получаем количество доступных цветов
        const numberColor = $$('.avn_color-container--enabled').length;
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