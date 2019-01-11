import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test leasing initial payment', () => {
    // выносим часто используемый класс
    let selector = '.avn008_credit__firstPaySlider[data-name="Авансовый лизинговый платеж"]';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу финансы
        NfzFilter.finance();
    });

    // проверяем переход на вкладку Лизинг и работу слайдера Первоначальный платёж
    it('Check slider initial paymen', () => {
        // переходим на вкладку Кредит
        browser.click('.rc-slider-step > span:nth-child(1)');
        // запоминаем положение слайдера
        const startPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        // очищаем поле ввода суммы Первоначального платежа
        browser.clearElement(`${selector} .ci001-1_input`);
        // вводим свою сумму 
        browser.addValue(`${selector} .ci001-1_input`, '3000000');
        // убираем фокус, чтобы сумма применилась
        browser.click('form');
        // проверяем, что слайдер поменял позицию 
        const finishPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        browser.waitUntil(
            () => (finishPosition != startPosition) === true,
            5000, "Слайдер Первоначальный платёж не переместился при изменнеии суммы");
    });
});