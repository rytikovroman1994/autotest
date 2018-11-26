describe('test slider in page shine', () => {
    // список допустимых вижов фар
    const list = [
        'Галоген',
        'Светодиод',
        'Ксенон'
    ];

    // позиция слайдера
    const statePosition = () => browser.getLocation('.rc-slider-handle');
    // начальная позиция слайдера 
    let statePositionSlider;

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
            browser.helpers.slider(`.rc-slider-step > span:nth-child(${i})`);
            // провеярем, что появилось условие в фильтре 
            browser.waitUntil(
                () => browser.isVisible('.avn008_filter-value-item') === true,
                5000, `Функция ${list[i - 1]} не доступна`);
            // получаем название вида фар
            const nameSHine = browser.getText('.avn008_filter-value-item_text__bottom');   
            expect(nameSHine).to.be.equal(list[i - 1].toUpperCase());
        // проверяе, что позиция ползунка изменилась 
        const newPositionSlider = statePosition();
        browser.waitUntil(
            () => (newPositionSlider !== statePositionSlider) === true,
            5000, `Позиция сайдера не изменилась`);
        }
    });

    // проверяем, что условие фильтра сбрасывается
    it('Check that the filter is cleared', () => {
        // сбрасываем условие фильтра
        browser.click('.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item');
        // ждём пока подвал станет активным
        browser.waitUntil(
            () => browser.isExisting('.avn008_overlay_bar.avn008_overlay_bar--progress') === false,
            10000, "Подвал не стал активным после 10 секунд ожидания");
        // получаем кординаты слайдера
        const newPositionSlider = statePosition();
        // проверяем, что они равны изначальным
        browser.waitUntil(
            () => (newPositionSlider === statePositionSlider) === true,
            5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});