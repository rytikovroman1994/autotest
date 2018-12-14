import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test detail leasing', () => {
    // получаем первоначальный платёж 
    let initialPayment;
    // получаем срок лизинга 
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

    // проверяем работу Лизингово калькулятора
    it('Choose work LK', () => {
        // Переходим на страницу расчёта Лизинга 
        browser.click('.mainStageinfo_creditTabs > div:nth-child(2)');
        // проверяем что поле Лизинг актинво 
        const textCredit = browser.getText('.mainStageinfo_creditTab.is_active');
        browser.waitUntil(
            () => textCredit == "Лизинг",
            5000, `Поле Лизинг не является актиным, либо изменился текст на ${textCredit}`);
        // проверяем, что есть кнопка Расчитать
        browser.waitUntil(
            () => browser.isVisible('.mainStageinfo_section-credit .mainStageinfo_button-credit .btn__text') === true,
            5000, "Кнопка Расчитать лизинг не отображается в деталке автомобиля");
        // кликаем по кнопке Рассчитать
        NfzDetail.calculate();
        // ожидаем появления слайдеров 
        browser.waitUntil(
            () => browser.isVisible('.nfz002_input__wrap') === true,
            10000, "Поле расчёта лизинга в деталке не загрузилось за 10 сукунд");
        // запоминаем ключевые цифры
        // запоминаем первоначальный платёж
        initialPayment = browser.getAttribute('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input', 'value');
        // процент первоначального платежа 
        percentageInitialPayment = browser.getText('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_suffix');
        // получаем срок кредита 
        initialMoth = browser.getAttribute('.nfz002_input[data-name="Срок лизинга"] .ci001-1_input', 'value');
        // получаем остаточный платёж
        residualPayment = browser.getAttribute('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_input', 'value');
        // процент остаточного платежа
        percentageResidualPayment = browser.getText('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_suffix');
        // получаем ежемесячный платёж
        monthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
    });

    // проверяем работу сладера первоначальный платёж 
    it('Check the work of the slader initial payment', () => {
        // запоминаем начальное положение слайдера 
        const initialPosition = browser.getLocation('.nfz002_input[data-name="Авансовый лизинговый платеж"] .range-slider-handle-2');
        // меняем первоначальный платёж 
        browser.clearElement('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input')
        browser.setValue('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input', '500000');
        // проверяем, что изменился первоначальный платёж
        const currentInitialPayment = browser.getAttribute('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input', 'value');
        browser.waitUntil(
            () => currentInitialPayment !== initialPayment,
            5000, "Сумма Первоначального платежа не изменилась");
        // проверяем, что процент ПП изменился
        const currentPercentageInitialPayment = browser.getText('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_suffix');
        browser.waitUntil(
            () => currentPercentageInitialPayment !== percentageInitialPayment,
            5000, "Процент ПП не изменился после изменения суммы");
        // проверяем, что слайдер изменил своё положение
        const currentInitialPosition = browser.getLocation('.nfz002_input[data-name="Авансовый лизинговый платеж"] .range-slider-handle-2');
        browser.waitUntil(
            () => currentInitialPosition !== initialPosition,
            5000, "Слайдер не изменил своё положение после изменния суммы");
        // проверяем, что изменилась сумма ежемесячного плтежа
        const currentMonthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment !== monthlyPayment,
            5000, "Сумма ежемесячного платежа не изменилась");
    }); 

    // проверяем работу сладйера Платёж в счёт выкупа
    it('Check the work of the slider residual payment', () => {
        // запоминаем начальное положение слайдера 
        const initialPosition = browser.getLocation('.nfz002_input[data-name="Платеж в счет выкупа"] .range-slider-handle-2');
        // меняем первоначальный платёж 
        browser.clearElement('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_input')
        browser.setValue('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_input', '200000');
        browser.setValue('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input', '500000');
        // проверяем, что изменился остаточный платёж
        const currentResidualPayment = browser.getAttribute('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_input', 'value');
        browser.waitUntil(
            () => currentResidualPayment !== residualPayment,
            5000, "Сумма Первоначального платежа не изменилась");
        // проверяем, что процент ОП изменился
        const currentPercentageResidualPayment = browser.getText('.nfz002_input[data-name="Платеж в счет выкупа"] .ci001-1_suffix');
        browser.waitUntil(
            () => currentPercentageResidualPayment !== percentageResidualPayment,
            5000, "Процент ПП не изменился после изменения суммы");
        // проверяем, что слайдер изменил своё положение
        const currentInitialPosition = browser.getLocation('.nfz002_input[data-name="Платеж в счет выкупа"] .range-slider-handle-2');
        browser.waitUntil(
            () => currentInitialPosition !== initialPosition,
            5000, "Слайдер не изменил своё положение после изменния суммы");
        // проверяем, что изменилась сумма ежемесячного плтежа
        const currentMonthlyPayment = browser.getText('.nfz002_foot__wrap .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment !== monthlyPayment,
            5000, "Сумма ежемесячного платежа не изменилась");
    });
});