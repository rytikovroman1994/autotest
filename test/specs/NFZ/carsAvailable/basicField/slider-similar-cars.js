describe('test slider similar cars', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // получаем количество переключений слайдера
    const numberSwitching = () => $$('.mk002__dots li').length;
    before('open page list', () => {
        browser.helpers.openListNfz();
        // переходим в деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ожидаем загрузки картинки
        browser.waitForVisible('.image-container');
        // скролим страницу до слайдера 
        browser.scroll('.avn022_Footer', 10, -700);
        // ожидаем пока прогрузится блок
        browser.waitForVisible('.avn009_similar-offers div:nth-child(1) > div > a img');
    });

    // проверяем работу нижних кнопок
    it('Check side buttons slider', () => {
        // получаем количество переключений
        const switching = numberSwitching();
        console.log(switching);
        // двигаем слайдер вправо
        for( let i = 2; i <= switching; i++ ) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // переключаем слайдер 
            browser.click(`.mk002__dots li:nth-child(${i}) > button`);
            // жёдм пока слайдер переключит 
            browser.pause(2000);
            // делаем второй скриншот
            ctx.newScreenshot = browser.screenshot().value;

            it('compare screenshots', async () => {
                expect(ctx.originalScreenshot).not.equal(null);
                expect(ctx.newScreenshot).not.equal(null);
                
                const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
                
                expect(distance).to.be.above(0);
            }); 
        }
    });   

    // проверяем работу правой кнопки слайдера
    it('Check side right buttons slider', async () => {
        // получаем количество переключений
        const switching = numberSwitching();
        // двигаем слайдер вправо
        for( let i = 2; i <= switching; i++ ) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // переключаем слайдер 
            browser.click('.slick-next');
            // жёдм пока слайдер переключит 
            browser.pause(2000);
            // делаем второй скриншот
            ctx.newScreenshot = browser.screenshot().value;

            it('compare screenshots', async () => {
                expect(ctx.originalScreenshot).not.equal(null);
                expect(ctx.newScreenshot).not.equal(null);
                
                const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
                
                expect(distance).to.be.above(0);
            }); 
        }
    });

    // проверяем работу левой кнопки слайдера 
    it('Check side left buttons slider', async () => {
        // получаем количество переключений
        const switching = numberSwitching();
        // двигаем слайдер вправо
        for( let i = 2; i <= switching; i++ ) {
            // делаем скриншот 
            ctx.originalScreenshot = browser.screenshot().value;
            // переключаем слайдер 
            browser.click('.slick-prev');
            // жёдм пока слайдер переключит 
            browser.pause(2000);
            // делаем второй скриншот
            ctx.newScreenshot = browser.screenshot().value;

            it('compare screenshots', async () => {
                expect(ctx.originalScreenshot).not.equal(null);
                expect(ctx.newScreenshot).not.equal(null);
                
                const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
                
                expect(distance).to.be.above(0);
            }); 
        }
    });
});