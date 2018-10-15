describe('test slider in page winter package', () => {
    // список допустимых видов подогрева сидений
    const list = [
        'Задние',
        'Передние'
    ];
    // список название подогрева сидений в фильтре 
    const listFilter = [
        'Подогрев пер. сидений',
        'Подогрев зад. сидений'
    ];

    before('open page filter', () => {
        browser.helpers.openSite();
        // переходим на страницу опции
        browser.click('.avn008_filter__tab[data-name="Опции"]');
        // переходим на страницу зимний пакет
        browser.click('.avn008_filter__second-tab[data-name="Зимний пакет"]');
        // ожидаем прогрузки картинки
        browser.waitForVisible('.avn008_option__cards > div > div > div:nth-child(4)');
    });

    // проверяем работу Слайдера
    it('check slider in page winter package', () => {
        // в цикле проверяем работу слайдера
        for(let i = 2; i >= 1; i-- ) {
            // двигаем слайдер
            browser.helpers.slider('.rc-slider-handle', `.rc-slider-step span:nth-child(${i})`, 5 , 5);
            // провеярем, что появилось условие в фильтре 
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === true,
                5000, `Функция ${list[i - 1]} не доступна`);
            // получаем название вида фар
            const nameSHine = browser.getText('.avn008_filter-value-item_text__bottom');   
            expect(nameSHine).to.be.equal(listFilter[i - 1].toUpperCase());
        }
    });
});