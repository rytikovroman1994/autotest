import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test detail credit', () => {
    // получаем первоначальный платёж 
    let initialPayment;
    // получаем срок кредита 
    let initialMoth;
    // получаем остаточный платёж
    let residualPayment;
    // получаем ежемесячный платёж
    let monthlyPayment;
    // процент ПП
    let percentageInitialPayment;
    // процент ОП
    let percentageResidualPayment;
    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', () => {
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
    });

    // проверяем работу Крединого калькулятора
    it('Choose work KK', () => {
        // проверяем что поле Кредит актинво 
        const textCredit = browser.getText('.mainStageinfo_creditTab.is_active');
        browser.waitUntil(
            () => textCredit == "Кредит",
            5000, `Поле Кредит не является актиным при первым переходе, либо изменился текст на ${textCredit}`);
        // проверяем, что есть кнопка Расчитать
        browser.waitUntil(
            () => browser.isVisible('.mainStageinfo_section-credit .mainStageinfo_button-credit .btn__text') === true,
            5000, "Кнопка Расчитать кредит не отображается в деталке автомобиля");
        // кликаем по кнопке Рассчитать
        NfzDetail.calculate();
        // ожидаем появления слайдеров 
        browser.waitUntil(
            () => browser.isVisible('.nfz002_input__wrap') === true,
            10000, "Поле расчёта кредита в деталке не загрузилось за 10 сукунд");
        // запоминаем ключевые цифры
        // запоминаем первоначальный платёж
        initialPayment = browser.getAttribute('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_input', 'value');
        // процент первоначального платежа 
        percentageInitialPayment = browser.getText('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_suffix');
        // получаем срок кредита 
        initialMoth = browser.getAttribute('.nfz002_input[data-name="Срок кредита"] .ci001-1_input', 'value');
        // получаем остаточный платёж
        residualPayment = browser.getAttribute('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input', 'value');
        // процент остаточного платежа
        percentageResidualPayment = browser.getText('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_suffix');
        // получаем ежемесячный платёж
        monthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
    });

    // проверяем работу сладера первоначальный платёж 
    it('Check the work of the slader initial payment', () => {
        // запоминаем начальное положение слайдера 
        const initialPosition = browser.getLocation('.nfz002_input[data-name="Первоначальный платеж"] .range-slider-handle-2');
        // очищаем вводимое поле
        browser.clearElement('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_input');
        // меняем первоначальный платёж 
        browser.addValue('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_input', '500000');
        browser.keys("Enter");
        // проверяем, что изменился первоначальный платёж
        const currentInitialPayment = browser.getAttribute('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_input', 'value');
        browser.waitUntil(
            () => currentInitialPayment !== initialPayment,
            5000, "Сумма Первоначального платежа не изменилась");
        // проверяем, что процент ПП изменился
        const currentPercentageInitialPayment = browser.getText('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_suffix');
        browser.waitUntil(
            () => currentPercentageInitialPayment !== percentageInitialPayment,
            5000, "Процент ПП не изменился после изменения суммы");
        // проверяем, что слайдер изменил своё положение
        const currentInitialPosition = browser.getLocation('.nfz002_input[data-name="Первоначальный платеж"] .range-slider-handle-2');
        browser.waitUntil(
            () => currentInitialPosition !== initialPosition,
            5000, "Слайдер не изменил своё положение после изменния суммы");
        // проверяем, что изменилась сумма ежемесячного плтежа
        const currentMonthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment !== monthlyPayment,
            5000, "Сумма ежемесячного платежа не изменилась");
    }); 

    // проверяем работу сладйера Остаточный платёж 
    it.skip('Check the work of the slider residual payment', () => {
        // запоминаем начальное положение слайдера 
        const initialPosition = browser.getLocation('.nfz002_input[data-name="Остаточный платеж"] .range-slider-handle-2');
        // очищаем вводимое поле
        browser.clearElement('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input');
        // меняем первоначальный платёж 
        browser.addValue('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input', '500000');
        browser.click('.nfz002_input__wrap');
        // проверяем, что изменился остаточный платёж
        const currentResidualPayment = browser.getAttribute('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input', 'value');
        console.log(currentResidualPayment);
        console.log(residualPayment);
        browser.waitUntil(
            () => currentResidualPayment !== residualPayment,
            5000, "Сумма Остаточного платежа не изменилась");
        // проверяем, что процент ОП изменился
        const currentPercentageResidualPayment = browser.getText('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_suffix');
        browser.waitUntil(
            () => currentPercentageResidualPayment !== percentageResidualPayment,
            5000, "Процент ПП не изменился после изменения суммы");
        // проверяем, что слайдер изменил своё положение
        const currentInitialPosition = browser.getLocation('.nfz002_input[data-name="Остаточный платеж"] .range-slider-handle-2');
        browser.waitUntil(
            () => currentInitialPosition !== initialPosition,
            5000, "Слайдер не изменил своё положение после изменния суммы");
        // проверяем, что изменилась сумма ежемесячного плтежа
        const currentMonthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment !== monthlyPayment,
            5000, "Сумма ежемесячного платежа не изменилась");
    });

     // проверяем, что пропадает Остаточный платёж 
     it('Check that the residual payment is lost', () => {
        // проверяем, что остаточный платёж отображается на странице
        browser.waitUntil(
            () => browser.isVisible('.nfz002_input[data-name="Остаточный платеж"]') === true,
            10000, "Поле с остаточным платежом не отображается на странице");
        // получаем начальное значение процентной ставки 
        const initialRate = browser.getText('div:nth-child(2) > div > div > div.nfz002_param-display_text');
        // выключаем чекбокс
        browser.click('.nfz002_input--checkbox  .checkbox');
        // проверяем, что поле ОП пропало
        browser.waitUntil(
            () => browser.isExisting('.nfz002_input[data-name="Остаточный платеж"]') === false,
            10000, "Поле остаточного платежа не пропало после отключения");
        // получаем тукущее значение кредитной ставки
        const currentRate = browser.getText('div:nth-child(2) > div > div > div.nfz002_param-display_text');
        // проверяем, что оно изменилось
        browser.waitUntil(
            () => currentRate !== initialRate,
            5000, "Процентная ставка не изменилась при отключении Остаточного платежа");
     });
});