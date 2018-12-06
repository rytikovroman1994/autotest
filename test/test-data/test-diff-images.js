describe('test diff imeges', () => {
    const ctx = {
        originalScreenshot: null,
        newScreenshot: null,
      };

    before('open page filter', () => {
        // делаем размер окна браузера
        browser.windowHandleSize ({width: 1100, height: 1200});
        // переходим на страницу
        browser.url('https://nfz.kodix.ru');
        // открываем фильтр
        while(browser.isVisible('.react-tabs[data-tabs="true"]') === false) {
            browser.click('body #prompt-toggler_filter');
        }
        // переходим на страницу Интерьер
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
        // ждём загрузку последне картинкии
        browser.waitForVisible('.avn008_image-switcher_image');
    });
    // проверяем работу diff
    it('Test images', () => {z
        browser.saveScreenshot('./snapshot/diff/test4.png');
        browser.saveElementScreenshot('./snapshot/diff/test3.png', '.avn008_display-item_content');
    }); 
});