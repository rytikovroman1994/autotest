import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test loan loan period', () => {
    // выносим часто используемый класс
    let selector = '.avn008_credit__termSlider[data-name="Срок кредита"]';
    // позиция слайдера
    const statePosition = () => browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
    // начальная позиция слайдера 
    let startPosition;
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу финансы
        NfzFilter.finance();
    });

    // проверяем переход на вкладку Кредит и работу слайдера Ежемесячный платёж
    it('Check slider initial paymen', () => {
        // переходим на вкладку Кредит
        browser.click('.rc-slider-step > span:nth-child(2)');
        // запоминаем положение слайдера
        startPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        // меняем срок кредита
        browser.click('.nfz004_default-marks > div:nth-child(2)');
        // проверяем, что слайдер поменял позицию 
        const finishPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        browser.waitUntil(
            () => (finishPosition != startPosition) === true,
            5000, "Слайдер Ежемесячный платёж не переместился при изменнеии суммы");
    });

    // проверяем, что условие фильтра сбрасывается
    it('Check that the filter is cleared', () => {
        // ждём пока подвал станет активным
        browser.pause(3000);
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
            () => newPositionSlider.x === startPosition.x,
            5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});