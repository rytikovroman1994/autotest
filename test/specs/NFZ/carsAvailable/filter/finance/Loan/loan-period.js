describe('test loan loan period', () => {
    // выносим часто используемый класс
    let selector = '.avn008_credit__termSlider';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // переходим на страницу финансы
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
    });

    // проверяем переход на вкладку Кредит и работу слайдера Ежемесячный платёж
    it('Check slider initial paymen', () => {
        // переходим на вкладку Кредит
        browser.click('.rc-slider-step > span:nth-child(2)');
        // запоминаем положение слайдера
        const startPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        // меняем срок кредита
        browser.click('.nfz004_default-marks > div:nth-child(2)');
        // проверяем, что слайдер поменял позицию 
        const finishPosition = browser.getLocation(`${selector} .range-slider-handle.range-slider-handle-2`);
        browser.waitUntil(
            () => (finishPosition != startPosition) === true,
            5000, "Слайдер Ежемесячный платёж не переместился при изменнеии суммы");
    });
});