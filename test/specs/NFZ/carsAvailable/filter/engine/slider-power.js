describe('test slider power', () => {

    // допустимая мощность двигателей
    const list = [
        '204 - 224',
        '150 - 180',
        '102 - 140',
        '102 - 224'
    ];

    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // переходим на страницу "Двигатель"
    it('Check open page engine', () => {
        // открываем страницу двигатель
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожтдаем закрузки послденей картинки
        browser.waitForVisible('.grid_m_2 img');
        // провеярем, что появился слайдер
        browser.waitUntil(
            () => browser.isVisible('.avn008_engine__card--power') === true,
            5000, "Поле с слайдером мощности не отображается");
    });

    // проверяем работу слайдера
    it('Check slider power', () => {
        for( let i = 1; i <= 4; i++ ) {
            // выбираем мощность двигателя
            browser.click(`.rc-slider-step > span:nth-child(${i})`);
            // проверяем, что в фильтре появилось условие
            browser.waitUntil(
                () => browser.isExisting('.avn008_filter-value-item') === true,
                5000, "Условие с мощностью двигателя не отобразтлоась в фильтре");
            // получаем мощность двигателя в фильтре
            const powerFilter = browser.getText('.avn008_filter-value-item_text-self');
            // проверяем что в фильтре отображается правильная мощность
            expect(powerFilter).to.be.equal(list[i-1]);
        }
    });
});