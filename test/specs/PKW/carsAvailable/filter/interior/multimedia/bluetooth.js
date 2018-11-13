describe('test bluetooth', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Bluetooth';
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };
      before(' open page multimedia', () => {
        browser.helpers.openSite();
        // открываем страницу экстерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ожидаем появление картинки кресла
        browser.waitForVisible('.avn008_image-switcher_image');
        // открываем страницу мульдимедиа
        browser.click('.avn008_filter__second-tab[data-name="Мультимедиа"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Беспроводная зарядка"] img');
    });

     it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'BLUETOOTH', 'bluetooth');
     });

     it(`Check more in detail about ${conditions}`, () => {
        // открываем всплывающее окно подробнее и делаем скриншот
        browser.helpers.moreDetail(conditions);
        // берём скриншот с локала
        ctx.originalScreenshot = 'snapshot/screenshotInterior/bluetooth.png';
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