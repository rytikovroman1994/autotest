import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test loan - presence residual payment', () => {
    // получаем процентную ставку по креиту
    const rate = () => browser.getText('.avn008_credit__rate p');
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    it('Open page finance', function() {
        this.retries(3);
        // переходим на страницу финансы
        NfzFilter.finance();
        // переходим в раздел Кредит
        browser.click('.rc-slider-step > span:nth-child(2)');
    });

    // провеярем, что Остаточный платёж включён и пропадает при отключении
    it('Check slider residual payment', function() {
        this.retries(3);
        // ддя страховки скролим до чекбокса 
        browser.scroll('.checkbox[data-name="Остаточный платеж"]', 5, 5);
        // проверяем, что видно чебокс 
        browser.waitUntil(
            () => browser.isVisible('.checkbox[data-name="Остаточный платеж"]') === true,
            5000, "Чекбокс - остаточный платёж не доступен");
        // проверяем, что слайдер Остатончный платёж виден
        browser.waitUntil(
            () => browser.isExisting('.avn008_credit__firstPaySlider[data-name="Остаточный платёж"]') === true,
            5000, "Слайдер Остаточный платёж не отображается при переходе в Кредит");
        // выключаем Остаточный платёж
        browser.click('.checkbox[data-name="Остаточный платеж"]');
        // проверяем, что слайдер пропал
        browser.waitUntil(
            () => browser.isExisting('.avn008_credit__firstPaySlider[data-name="Остаточный платёж"]') === false,
            5000, "Сладйер Остаточный платёж не пропал после выклчения чекбокса");
        // получаем кредитную ставку
        let rateDiseble = rate();
        // проверяем, что она равна 14.8%
        console.log(rateDiseble);
        browser.waitUntil(
            () => rateDiseble == "Ставка от 14.8%",
            5000, "Ставка по кредиту без остаточного платежа не равна 14.8%");
    });

    // проверяем, что при включении чекбокса появляется слайдер Остаточный платёж
    it('Check the slider when the checkbox is enabled', function() {
        this.retries(3);
        // выключаем чекбокс 
        browser.click('.checkbox[data-name="Остаточный платеж"]');
        // проверяем, что слайдер Остаточный платёж появился
        browser.waitUntil(
            () => browser.isExisting('.avn008_credit__firstPaySlider[data-name="Остаточный платёж"]') === true,
            5000, "Слайдер Остаточный платёж не отображается при переходе в Кредит");
        // получаем кредитную ставку
        let rateActive = rate();
        console.log(rateActive);
        // проверяем, что она равна 14.8%
        browser.waitUntil(
            () => rateActive == "Ставка от 8.9%",
            5000, "Ставка по кредиту c остаточным платежом не равна 8.9%");
    });
});