describe('test rain sensor', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Датчик дождя';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page options', () => {
        browser.helpers.openSite();
        // открываем страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // открываем страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'ДАТЧИК ДОЖДЯ');
     });

     it(`Check more in detail ${conditions}`, () => {
        // перемещаем курсор к чекбоксу
        browser.moveToObject(`.avn008_option-check_more[data-name="checkbox%${conditions}`); 
        // открываем всплывающее окно
        browser.click(`.avn008_option-check_more[data-name="checkbox%${conditions}`);
        // ждём появления картинки
        browser.waitForVisible('.avn015_content .image-container');
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotOption/rainSensor.png';
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
        const newArray = browser.helpers.checkConditions(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
      });
});