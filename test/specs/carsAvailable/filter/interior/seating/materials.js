describe('test materials', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Алькантара';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем чекбокс кожа
    it('check checkbox materials leather', () => {
        browser.helpers.checkCheckbox('Кожа', 'КОЖАНЫЙ САЛОН');
    });

    // проверяем чекбокс ткань
    it('check checkbox materials cloth', () => {
        browser.helpers.checkCheckbox('Ткань', 'ТКАНЕВЫЙ САЛОН');
    });

    // проверяем чекбокс алькантара
    it('check checkbox materials Alcantara', () => {
        browser.helpers.checkCheckbox(conditions, 'САЛОН АЛЬКАНТАРА');
    });
    // проверяем псплывающее окно скриншотом
    it('check more in detail about dynamic light', () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/seats.png';
        // делаем актуальный скриншот
        ctx.newScreenshot = browser.screenshot().value;
     });

     it('compare screenshots', async () => {
        expect(ctx.originalScreenshot).not.equal(null);
        expect(ctx.newScreenshot).not.equal(null);
    
        const distance = await browser.helpers.compareScreenshots(ctx.originalScreenshot, ctx.newScreenshot);
        expect(distance).to.be.below(0.1);
      });

      // проверяем, что условие появилось в деталке машины
      it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Салон Алькантара');
        // проверяем
        expect(newArray).to.be.equal('Салон Алькантара');
      });
});