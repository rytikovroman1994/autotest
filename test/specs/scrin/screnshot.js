describe('smoke screenshot test save', () => {
    before(() => {
        browser.windowHandleMaximize ();
        // переходим на страницу
        browser.url('https://vw.kodix.ru');
        // скрываем раздел Фильтр
        const firstFilter = browser.waitForVisible('.avn008_overlay');
        if(firstFilter === false) {
            browser.click('.avn003_column-left');
        }
    });
    it('proverka', () => {
        browser.waitForVisible('.avn008_car__image');
        var screen = browser.saveScreenshot('./snapshot/snapshot.png');
        console.log(screen);
    })
});