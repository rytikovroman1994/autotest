import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test leasing residual payment', () => {
    // выносим часто используемый класс
    let selector = '.avn008_credit__firstPaySlider[data-name="Остаточный платёж"]';
    // позиция слайдера
    const statePosition = () => browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
    // начальная позиция слайдера 
    let startPosition;
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    it('Open page finance', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.finance();
    });

    // проверяем переход на вкладку Лизинг и работу слайдера остаточный платёж
    it('Check slider initial paymen', function() {
        this.retries(3);
        // переходим на вкладку Кредит
        browser.click('.rc-slider-step > span:nth-child(1)');
        // запоминаем положение слайдера
        startPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        // очищаем поле ввода суммы Первоначального платежа
        browser.clearElement(`${selector} .ci001-1_input`);
        // вводим свою сумму 
        browser.addValue(`${selector} .ci001-1_input`, '1500000');
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
        // проверяем, что слайдер поменял позицию 
        const finishPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        browser.waitUntil(
            () => (finishPosition != startPosition) === true,
            5000, "Слайдер Остаточный платёж не переместился при изменнеии суммы");
    });

    // проверяем, что условие фильтра сбрасывается
    it('Check that the filter is cleared', function() {
        this.retries(3);
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