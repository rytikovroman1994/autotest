describe('test leasing residual payment', () => {
    // выносим часто используемый класс
    let selector = '.avn008_credit__firstPaySlider[data-name="Остаточный платёж"]';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу финансы
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
    });

    // проверяем переход на вкладку Лизинг и работу слайдера остаточный платёж
    it('Check slider initial paymen', () => {
        // переходим на вкладку Кредит
        browser.click('.rc-slider-step > span:nth-child(1)');
        // запоминаем положение слайдера
        const startPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
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
});