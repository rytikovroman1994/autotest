describe('test slider in page parking assistant', () => {
    // список допустимых видов асистента парковки
    const list = [
        'Park Assist',
        'Park Pilot',
        'Trailer Assist'
    ];

    before('open page filter', () => {
        browser.helpers.openSite();
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем прогрузки картинки
        browser.waitForVisible('.avn008_option__cards > div > div > div:nth-child(6) img');
    });

    // проверяем работу Слайдера
    it('check slider in page parking assistant', () => {
        // в цикле проверяем работу слайдера
        for(let i = 3; i >= 1; i-- ) {
            console.log(i);
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