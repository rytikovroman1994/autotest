describe('test interier colors', () => {
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
    });

    // переключаем на цвет интерьера
    it('Open page interier', () => {
        // кликаем по кнопке интерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(1)');
        // проверяем, что появилась картинка кресла
        const imegeSeet = browser.getAttribute('.grid_s_12:nth-child(2) img', 'src');
        expect(imegeSeet).to.be.include('/cloth-gray');
    });

    // проверяем добавление цвета кресла при условии "Показать всё"
    it('Check color show all', () => {
        // скролим страницу
        browser.scroll('.avn008_image-switcher_image', 0, 400);
        // получаем количество доступных цветов
        const numberColor = $$('.avn_color-container--enabled').length;
        for( let i = 1;  i <= numberColor; i++ ) {
            if( browser.isVisible(`.avn008_color-colors > div:nth-child(${i})`) === true) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // выбираем цвет 
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // проверяем что в фильтре появилось условие
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === true,
                10000, "Цвет кузова не появился в фильтре");
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
                10000, "Цвет кузова не исчез из фильтра");
            }
        }
    });

    // проверяем цвет кресла при условии что сидения кожанные
    it('Check color skin', () => {
        // пеерключаем на кожанные сидения 
        browser.click('.grid_s_12:nth-child(3) .rc-slider-dot:nth-child(2)');
        // проверяем, что в фильтре появилось услови "Кожанный салон"
        browser.waitUntil(
            () => browser.isVisible('.avn008_filter-value-item') === true,
            10000, "Кожанный салон не появился в фильре");
        // получаем название условия в фильтре
        const bottomText = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(bottomText).to.be.equal('КОЖАНЫЙ САЛОН');

        // получаем количество доступных цветов
        const numberColor = $$('.avn_color-container_wrapper').length;
        for( let i = 1;  i <= numberColor; i++ ) {
            if( browser.isVisible(`.avn008_color-colors > div:nth-child(${i})`) === true) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // выбираем цвет 
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // проверяем что в фильтре появилось условие
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item__with-color') === true,
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
                () => browser.isVisible('.avn008_filter-value-item__with-color') === false,
                10000, "Цвет кузова не исчез из фильтра");
            }
        }
    });

    // проверем цвет седений в разделе ткань 
    it('Check color fabric', () => {
        // пеерключаем на тканевые сидения 
        browser.click('.grid_s_12:nth-child(3) .rc-slider-dot:nth-child(1)');
        // проверяем, что в фильтре появилось услови "Тканевый салон"
        browser.waitUntil(
            () => browser.isVisible('.avn008_filter-value-item') === true,
            10000, "Тканевый салон не появился в фильре");
        // получаем название условия в фильтре
        const bottomText = browser.getText('.avn008_filter-value-item_text__bottom');
        expect(bottomText).to.be.equal('ТКАНЕВЫЙ САЛОН');

        // получаем количество доступных цветов
        const numberColor = $$('.avn_color-container_wrapper').length;
        for( let i = 1;  i <= numberColor; i++ ) {
            if( browser.isVisible(`.avn008_color-colors > div:nth-child(${i})`) === true) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // выбираем цвет 
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // проверяем что в фильтре появилось условие
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item__with-color') === true,
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
                () => browser.isVisible('.avn008_filter-value-item__with-color') === false,
                10000, "Цвет кузова не исчез из фильтра");
            }
        }
    });
});