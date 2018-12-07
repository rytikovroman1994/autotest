import faker from "faker"

describe('test application credit', () => {
    // получаем первоначальный платёж 
    let initialPayment;
    // получаем срок кредита 
    let initialMoth;
    // получаем остаточный платёж
    let residualPayment;
    // получаем ежемесячный платёж
    let monthlyPayment;
    // начальная ставка по кредиту
    let initialRate;
    // цена автомобиля в деталке
    let detalPriseCar;
    before('open page list', () => {
        browser.helpers.openListNfz();
        // переходим в деталку 
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.preview_img img', 60000);
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
        browser.click('.mainStageinfo_section-credit .mainStageinfo_button-credit');
        // ожидаем появления слайдеров 
        browser.waitUntil(
            () => browser.isVisible('.nfz002_input__wrap') === true,
            10000, "Поле расчёта кредита в деталке не загрузилось за 10 сукунд");
        // запоминаем ключевые цифры
        // запоминаем первоначальный платёж
        initialPayment = browser.getAttribute('.nfz002_input[data-name="Первоначальный платеж"] .ci001-1_input', 'value');
        // получаем срок кредита 
        initialMoth = browser.getAttribute('.nfz002_input[data-name="Срок кредита"] .ci001-1_input', 'value');
        // получаем остаточный платёж
        residualPayment = browser.getAttribute('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input', 'value');
        // получаем ежемесячный платёж
        monthlyPayment = browser.getText('.nfz002_foot__wrap .h3 .price-text');
        // получаем ставку по кредиту
        initialRate = browser.getText('div:nth-child(1) > div > div.nfz002_param-display_text.h4 > h5');
        // получаем цену автомобиля
        detalPriseCar = browser.getText('.mainStageinfo_section-buy h3 .price-text');

        // нажимаем Заполнить заявку 
        browser.click('.nfz002_foot__wrap .btn__text');
        // жёдм пока загрузится картинка
        browser.waitUntil(
            () => browser.isVisible('.uac001_image-status img') === true,
            10000, "Изображение автомобиля не загрузилось в Заявке на кредит");
        // жёдм загрузку формы
        browser.waitUntil(
            () => browser.isVisible('.nfz0033_credit-form') === true,
            10000, "Форма Заявки на кредит не загрузилась");
    });

    // проверяем что данные в форме совпадают с даными в деталке
    it('Check data match', () => {
        // проверяем совпадение ежемесячного платежа 
        const currentMonthlyPayment = browser.getText('.nfz0033_table > div:nth-child(1) .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment === monthlyPayment,
            5000, "Ежемесячный платёж в Заявке отличается от платежа в деталке");
        // проверем совпадение Срока кредита 
        const currentInitialMoth = browser.getText('.nfz0033_table > div:nth-child(3) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialMoth.split(' ')[0] === initialMoth,
            5000, "Срок кредита в Заявке отличается от срока в деталке");
        // проверяем Размер остаточного платежа 
        const currentrResidualPayment = browser.getText('.nfz0033_table > div:nth-child(5) .price-text');
        browser.waitUntil(
            () => currentrResidualPayment === residualPayment,
            5000, "Размер остаточного платежа в Заявке отличается от платежа в деталке");
        // проверяем Первоначальный платёж 
        const currentInitialPayment = browser.getText('.nfz0033_table > div:nth-child(2) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialPayment === initialPayment,
            5000, "Размер первоначального платежа в Заявке отличается от платежа в деталке");
        // проверяем Ставку кредита 
        const currentInitialRate = browser.getText('.nfz0033_table > div:nth-child(4) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialRate === initialRate,
            5000, "Ставка по кредиту в Заявке отличается от ставки в деталке");
        // проверяем цену автомобиля 
        const currentPriseCar = browser.getText('.uac001_price-block_current-price .price-text');
        browser.waitUntil(
            () => currentPriseCar === detalPriseCar,
            5000, "Цена автомобиля отличается");
        // проверяем Выкупную стоимость автомобиля
        // ПОЛЕ ОТСУТСВУЕТ В ДАННЫЙ МОМЕНТ
        // const applicationPriseCar = browser.getText('.nfz0033_table > div:nth-child(6) .price-text');
        // browser.waitUntil(
        //     () => applicationPriseCar !== detalPriseCar,
        //     5000, "Цена автомобиля в заявке отличается от цена в деталке");
    });

    // заполняем данные и отправляем заявку
    it('Fill in the application', () => {
        // проверяем, что кнопка Отправить не активна
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === true,
            5000, "Кнопка отправить активна без валидных данных");
        browser.scroll('form .radio-group__horizontal div:nth-child(1) label', 0, 10);
        // выбираем гендер
        browser.click('form .radio-group__horizontal div:nth-child(1) label');
        // вводим фамилию
        browser.setValue('.op005_form-item[data-name="Фамилия"] input', faker.name.firstName(1));
        browser.scroll('.op005_form-item[data-name="Имя"] input', 0, 10);
        // вводим имя 
        browser.setValue('.op005_form-item[data-name="Имя"] input', faker.name.firstName(1));
        // вводим телефон 
        browser.setValue('.op005_form-item[data-name="Телефон"] input', faker.phone.phoneNumber(0));
        // клик для применения номера
        browser.click('.op005_form-item[data-name="Email"] input');
        // проверка на некоректный номер
        while(browser.isVisible('.op005_form-item[data-name="Телефон"] .error-container') === true) {
            browser.clearElement('.op005_form-item[data-name="Телефон"] input');
            browser.setValue('.op005_form-item[data-name="Телефон"] input', faker.phone.phoneNumber(0));
        }
        browser.scroll('.op005_form-item[data-name="Email"] input', 0, 10);
        // вводим электронную почту
        browser.setValue('.op005_form-item[data-name="Email"] input', faker.internet.email(1));
        // проверяем, что кнопка стала активной 
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === false,
            5000, "Кнопка отправить заявку на кредит не стала активной");
        // нажимает кнопку
        browser.click('.btn_with_loader');
        // магическая дичь, ожидаем пока пропадёт оверлей 
        browser.pause(4000);

        // ожидаем пока появится поле Заявка отправлена
        browser.waitUntil(
            () => browser.isExisting('.op005_form-wrapper_bg-color') === true,
            10000, "Поле Заявка отправлена не загрузилось");
        // переходим к списку автомобилей
        browser.click('.op005_form-wrapper_content .btn_cta');
        // проверяем, что перешли к списку автомобилей
        browser.waitUntil(
            () => browser.isExisting('.avn001_display') === true,
            10000, "Кнопка Перейти к списку не ведёт к списку автомобиелй");
    });
});