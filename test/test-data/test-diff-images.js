describe.skip('test diff imeges', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };

    before('open page filter', () => {
        browser.helpers.openListNfz();
        // переходим в деталку
        // переходим в деталку 
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.preview_img img', 60000);
    });

    // проверяем работу diff
    it('Test images', () => {
        browser.saveElementScreenshot('./snapshot/diff/test3.png', '.detailCarInfo');
    }); 
});