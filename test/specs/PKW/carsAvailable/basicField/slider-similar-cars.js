import PkwListPage from 'Pageobjects/pkw-list.page.js'
import PkwDetail from 'Pageobjects/pkw-detail.page.js'

describe('test slider similar cars', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    // получаем количество переключений слайдера
    const numberSwitching = () => $$('.mk002__dots li').length;
    before('open page list', () => {
        browser.helpers.openList();
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(3);
        // кликаем на карточку
        PkwListPage.card();
        // ожидаем появления картинки на странице деталки
        browser.waitForVisible(PkwDetail.selectorCarImage, 40000);
        // скролим страницу до слайдера 
        browser.scroll('.avn014_content', 0, -800);
        // ожидаем рендеринг поля
        browser.pause(3000);
        
    });

    // проверяем работу нижних кнопок
    it('Check side buttons slider', function() {
        this.retries(3);
        // получаем количество переключений
        const switching = numberSwitching();
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
    it('Check side right buttons slider', async function() {
        this.retries(3);
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
    it('Check side left buttons slider', async function() {
        this.retries(3);
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