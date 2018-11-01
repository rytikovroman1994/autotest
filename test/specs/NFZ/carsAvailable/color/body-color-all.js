describe('test body color all', () => {
    const color = () => $$('.avn008_filter-value-item');
    // начальное число цветов
    let initialNumberColor;
    // текущее число цветов
    let currentNumberColor;
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // переходим нас траницу Цвет
    it('Open page Color', () => {
        // ожидаем пока появится кнопка Цвет
        browser.waitForVisible('body #react-tabs-4');
        // переходим в раздел Цвет
        browser.click('body #react-tabs-4');
        // ожидаем появления картинки дверей
        browser.waitForVisible('.avn008_image-switcher_image');
    });

    it('Check the color of the door', () => {
        // скролим страницу
        browser.scroll('.avn008_image-switcher_image', 0, 200);
        // запоминаем начальное кол-во 
        initialNumberColor = color().length;
        for( let i = 1;  i <= 8; i++ ) {
            if( browser.isVisible(`.avn008_color-colors > div:nth-child(${i})`) === true) {
            // выбираем цвет 
            browser.click(`.avn008_color-colors > div:nth-child(${i})`);
            // получаем текущие кол-во цветов в фильтре
            currentNumberColor = color().length;
            // проверяем, что стало на 1 больше
            browser.waitUntil(
                () => currentNumberColor == (initialNumberColor + 1) === true,
                5000, `${i} цвет не добавился в фильтр`);

            initialNumberColor = currentNumberColor;
            }
        }
    });
});