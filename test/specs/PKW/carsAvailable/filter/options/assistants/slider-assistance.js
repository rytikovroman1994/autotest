import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test slider in page parking assistant', () => {
    // список допустимых видов асистента парковки
    const list = [
        'Park Assist',
        'Park Pilot',
        'Trailer Assist'
    ];
    // позиция слайдера
    const statePosition = () => browser.getLocation('.rc-slider-handle');
    // начальная позиция слайдера 
    let statePositionSlider;

    before('open page filter', function() {
        this.retries(3);
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(3);
        // переходим на страницу 
        PkwFilter.options();
        // открываем страницу асистенты
        browser.click('.avn008_filter__second-tab[data-name="Ассистенты"]');
        // ожидаем загрузки послденей картинки
        browser.waitForVisible('.avn008_option-check_image[data-name="Система Side Assist"] img');
        // ожидаем прогрузки картинки
        browser.waitForVisible('.avn008_option__cards > div > div > div:nth-child(6) img');
    });

    // проверяем работу Слайдера
    it('Check slider in page parking assistant', function() {
        this.retries(3)
        // получаем началью позицию слайдера 
        statePositionSlider = statePosition();
        // в цикле проверяем работу слайдера
        for(let i = 1; i <= 3; i++ ) {
            console.log(i);
            // двигаем слайдер
            browser.click(`.rc-slider-step span:nth-child(${i})`);
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
    it('Check that the filter is cleared', function() {
        this.retries(3);
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
            () => (newPositionSlider.y === statePositionSlider.y) === true,
            5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});