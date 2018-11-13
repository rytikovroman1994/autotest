describe('test mirror drive', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Электропривод зеркал заднего вида';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Камера заднего вида"] img');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'ПРИВОД ЗЕРКАЛ', 'mirrors');
     });

     it(`Check more in detail about ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/mirrorDrive.png';
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('Compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        expect(distance).to.be.below(0.1);
      });

      // проверяем, что условие появилось в деталке машины
      it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Электропривод зеркал');
        // проверяем
        expect(newArray).to.be.equal('Электропривод зеркал');
      });
});