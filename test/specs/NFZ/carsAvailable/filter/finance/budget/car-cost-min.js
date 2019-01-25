import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test budget slider car prise', () => {
    // начальное положение левого слайера
    let leftSlider;
    before('open page filter', function() {
        this.retries(3);
        browser.helpers.openFilter();
        // переходим на страницу финансы
        NfzFilter.finance();
    });

    // проверяем работу слайдера Стоимость автомобиля 
    it('Check slider initial paymen', function() {
        this.retries(3);
        // запоминаем положение правого слайдера
        leftSlider = browser.getLocation('.rc-slider .rc-slider-handle-1');
        // вводим свою сумму 
        browser.setValue('div:nth-child(1) > div.avn008_budget__price-item-self input[type="text"]', '2000000');
        browser.pause(2000);
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
        // проверяем, что слайдер поменял позицию 
        const finishPositionLeft = browser.getLocation('.rc-slider .rc-slider-handle-1');
        browser.waitUntil(
            () => (finishPositionLeft != leftSlider) === true,
            5000, "Левый слайдер Стоимость авто не переместился при изменнеии суммы");
        // вводим свою сумму 
        browser.setValue('div:nth-child(3) > div.avn008_budget__price-item-self input[type="text"]', '3000000');
        browser.pause(2000);
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
    });

    // проверяем, что в фильтре появилось два условия 
    it('Check  condition budget in the filter', function() {
        this.retries(3);
        // проверяем, что существует условие бюджет ОТ
        const budgetFrom = browser.getText('div:nth-child(1) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text__top');
        browser.waitUntil(
            () => (budgetFrom === "ОТ") === true,
            5000, "Сумма бюджета ОТ не появилась в фильтре");
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
        // получаем кординаты левого слайдера
        const newleftSlider = browser.getLocation('.rc-slider .rc-slider-handle-1');
        // проверяем, что они равны изначальным
        browser.waitUntil(
            () => newleftSlider.x === leftSlider.x,
            5000, "ERROR - левый слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});