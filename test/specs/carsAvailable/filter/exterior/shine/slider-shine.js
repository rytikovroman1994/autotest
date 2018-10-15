describe('test slider in page shine', () => {
    // список допустимых вижов фар
    const list = [
        'Галоген',
        'Светодиод',
        'Ксенон'
    ];

    before('open page filter', () => {
        browser.helpers.openSite();
        // переходим на страницу экстрерьера
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // переходим на страницу свет
        browser.click('.avn008_filter__second-tab[data-name="Свет"]');
        // ожидаем прогрузки картинки
        browser.waitForVisible('.avn008_image-switcher_image');
    });

    // проверяем работу Слайдера
    it('check slider in page shine', () => {
        // в цикле проверяем работу слайдера
        for(let i = 3; i >= 1; i-- ) {
            // двигаем слайдер
            browser.helpers.slider('.rc-slider-handle', `.rc-slider-step span:nth-child(${i})`, 5 , 5);
            // провеярем, что появилось условие в фильтре 
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === true,
                5000, `Функция ${list[i - 1]} не доступна`);
            // получаем название вида фар
            const nameSHine = browser.getText('.avn008_filter-value-item_text__bottom');   
            expect(nameSHine).to.be.equal(list[i - 1].toUpperCase());
        }
    });
});