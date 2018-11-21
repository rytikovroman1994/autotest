describe('test budget slider car prise', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу финансы
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
    });

    // проверяем работу слайдера Стоимость автомобиля 
    it('Check slider initial paymen', () => {
        // запоминаем положение правого слайдера
        const leftSlider = browser.getLocation('.rc-slider .rc-slider-handle-1');
        // запоминаем положение левого слайдера
        const rightSlider = browser.getLocation('.rc-slider .rc-slider-handle-2');
        // очищаем поле ввода суммы Стоимости автомобиля
        browser.clearElement('div:nth-child(1) > div.avn008_budget__price-item-self input[type="text"]');
        // вводим свою сумму 
        browser.addValue('div:nth-child(1) > div.avn008_budget__price-item-self input[type="text"]', '3000000');
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
        // проверяем, что слайдер поменял позицию 
        const finishPositionLeft = browser.getLocation('.rc-slider .rc-slider-handle-1');
        browser.waitUntil(
            () => (finishPositionLeft != leftSlider) === true,
            5000, "Левый слайдер Стоимость авто не переместился при изменнеии суммы");

        // очищаем поле ввода суммы Первоначального платежа
        browser.clearElement('div:nth-child(3) > div.avn008_budget__price-item-self input[type="text"]');
        // вводим свою сумму 
        browser.addValue('div:nth-child(3) > div.avn008_budget__price-item-self input[type="text"]', '5000000');
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
        // проверяем, что слайдер поменял позицию 
        const finishPositionRight = browser.getLocation('.rc-slider .rc-slider-handle-2');
        browser.waitUntil(
            () => (finishPositionRight != rightSlider) === true,
            5000, "Правый слайдер Стоимость авто не переместился при изменнеии суммы");
    });

    // проверяем, что в фильтре появилось два условия 
    it('Check  condition budget in the filter', () => {
        // проверяем, что существует условие бюджет ОТ
        const budgetFrom = browser.getText('div:nth-child(1) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text__top');
        browser.waitUntil(
            () => (budgetFrom === "ОТ") === true,
            5000, "Сумма бюджета ОТ не появилась в фильтре");

        const budgetUpTo = browser.getText('div:nth-child(2) > div.avn008_filter-value-item__inner .avn008_filter-value-item_text__top');
        browser.waitUntil(
            () => (budgetUpTo === "ДО") === true,
            5000, "Сумма бюджета ДО не появилась в фильтре");
    });
});