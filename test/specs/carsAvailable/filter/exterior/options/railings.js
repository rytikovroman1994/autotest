describe('test railings', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Рейлинги';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before(' open page railings', () => {
        browser.helpers.openSite();
        // открываем страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // открываем страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Опции"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Тонировка"] img');
    });

     it(`Сheck checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'РЕЙЛИНГИ');
     });

     it(`Сheck more in detail about ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotExterior/railings.png';
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('Сompare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        expect(distance).to.be.below(0.1);
      });

      // проверяем, что условие появилось в деталке машины
      it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
      });
});