describe.skip('test diff imeges', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };

    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // проверяем работу diff
    it('Test images', async () => {
        // делаем 1 скриншот
        browser.saveScreenshot('./snapshot/diff/test1.png');
        ctx.originalScreenshot = './snapshot/diff/test1.png';
        // открываем модели
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        browser.pause(2000);
        // делаем 2 скриншот
        browser.saveScreenshot('./snapshot/diff/test2.png');
        ctx.newScreenshot = './snapshot/diff/test2.png';

        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);

        const diff = await diffScreenShot(ctx.originalScreenshot, ctx.newScreenshot, '0');

        if(diff.percent != 0) {
            diff.image.write('./snapshot/diff/diff.png');
            console.log(diff.percent);
            expect(diff.percent).to.be.below(0.01);
        }
    }); 
});