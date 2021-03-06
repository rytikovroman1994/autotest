import faker from "faker"
import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'
import NfzForm from 'Pageobjects/nfz-form.page.js'

describe('test application leasing', () => {
    // получаем первоначальный платёж 
    let initialPayment;
    // получаем срок лизинга 
    let initialMoth;
    // получаем остаточный платёж
    let residualPayment;
    // получаем ежемесячный платёж
    let monthlyPayment;
    // начальная ставка по лизингу
    let initialRate;
    // цена автомобиля в деталке
    let detalPriseCar;
    // сумма договора лизинга 
    let leasingContract;
    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', function() {
        this.retries(3);
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
        // Переходим на страницу расчёта Лизинга 
        browser.click('.mainStageinfo_creditTabs > div:nth-child(2)');
    });

    // проверяем работу Крединого калькулятора
    it('Choose work KK', function() {
        // проверяем что поле Лизинг актинво 
        const textCredit = browser.getText('.mainStageinfo_creditTab.is_active');
        browser.waitUntil(
            () => textCredit == "Лизинг",
            5000, `Поле Лизинг не является актиным при первым переходе, либо изменился текст на ${textCredit}`);
        // проверяем, что есть кнопка Расчитать
        browser.waitUntil(
            () => browser.isVisible('.mainStageinfo_section-credit .mainStageinfo_button-credit .btn__text') === true,
            5000, "Кнопка Расчитать лизинг не отображается в деталке автомобиля");
        // кликаем по кнопке Рассчитать
        browser.click('.mainStageinfo_section-credit .mainStageinfo_button-credit');
        // ожидаем появления слайдеров 
        browser.waitUntil(
            () => browser.isVisible('.nfz002_input__wrap') === true,
            10000, "Поле расчёта лизинга в деталке не загрузилось за 10 сукунд");
        // запоминаем ключевые цифры
        // запоминаем первоначальный платёж
        initialPayment = browser.getAttribute('.nfz002_input[data-name="Авансовый лизинговый платеж"] .ci001-1_input', 'value');
        // получаем срок лизинга 
        initialMoth = browser.getAttribute('.nfz002_input[data-name="Срок лизинга"] .ci001-1_input', 'value');
        // получаем остаточный платёж
        residualPayment = browser.getAttribute('.nfz002_input[data-name="Остаточный платеж"] .ci001-1_input', 'value');
        // получаем ежемесячный платёж
        monthlyPayment = browser.getText('.nfz002_param-display_text .h3 .price-text');
        // НДС к позмещению
        initialRate = browser.getText('div:nth-child(1) > div > div.nfz002_param-display_text.h4 > h5 > span > span.price-text');
        // получаем цену автомобиля
        detalPriseCar = browser.getText('.mainStageinfo_section-buy h3 .price-text');
        // получаем сумму договра лизинга
        leasingContract = browser.getText('div:nth-child(2) > div > div.nfz002_param-display_text.h4 > h5 > span > span.price-text');
    
        // нажимаем Заполнить заявку 
        browser.click('.nfz002_foot__wrap .btn__text');
        // жёдм пока загрузится картинка
        browser.waitUntil(
            () => browser.isVisible('.uac001_image-status img') === true,
            10000, "Изображение автомобиля не загрузилось в Заявке на лизинга");
        // жёдм загрузку формы
        browser.waitUntil(
            () => browser.isVisible('.nfz0033_credit-form') === true,
            10000, "Форма Заявки на лизинга не загрузилась");
    });

    // проверяем что данные в форме совпадают с даными в деталке
    it('Check data match', function() {
        this.retries(3);
        // проверяем совпадение ежемесячного платежа 
        const currentMonthlyPayment = browser.getText('.nfz0033_table > div:nth-child(1) .price-text');
        browser.waitUntil(
            () => currentMonthlyPayment === monthlyPayment,
            5000, "Ежемесячный платёж в Заявке отличается от платежа в деталке");
        // проверем совпадение Срока лизинга 
        const currentInitialMoth = browser.getText('.nfz0033_table > div:nth-child(3) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialMoth.split(' ')[0] === initialMoth,
            5000, "Срок лизинга в Заявке отличается от срока в деталке");
        // проверяем Размер остаточного платежа 
        const currentrResidualPayment = browser.getText('.nfz0033_table > div:nth-child(5) .price-text');
        browser.waitUntil(
            () => currentrResidualPayment === residualPayment,
            5000, "Плаьёж в счёт выкупа в Заявке отличается от платежа в деталке");
        // проверяем Первоначальный платёж 
        const currentInitialPayment = browser.getText('.nfz0033_table > div:nth-child(2) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialPayment === initialPayment,
            5000, "Авансовый лизинговый платёж в Заявке отличается от платежа в деталке");
        // проверяем НДС к возмещению
        const currentInitialRate = browser.getText('.nfz0033_table > div:nth-child(4) .nfz0033_table-item_text');
        browser.waitUntil(
            () => currentInitialRate === initialRate,
            5000, "НДС к возмещению в Заявке отличается от ставки в деталке");
        // проверяем цену автомобиля 
        const currentPriseCar = browser.getText('.uac001_price-block_current-price .price-text');
        browser.waitUntil(
            () => currentPriseCar === detalPriseCar,
            5000, "Цена автомобиля отличается");
        // проверяем Выкупную стоимость автомобиля
        const currentLeasingContract = browser.getText('.nfz0033_table > div:nth-child(6) .price-text');
        browser.waitUntil(
            () => currentLeasingContract === leasingContract,
            5000, "Цена автомобиля в заявке отличается от цена в деталке");
    });

    // заполняем данные и отправляем заявку
    it('Fill in the application', function() {
        // проверяем, что кнопка Отправить не активна
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === true,
            5000, "Кнопка отправить активна без валидных данных");
        browser.scroll('form .radio-group__horizontal div:nth-child(1) label', 0, 10);
        // выбираем гендер
        browser.click('form .radio-group__horizontal div:nth-child(1) label');
        // вводим фамилию
        NfzForm.fieldSurname.setValue(faker.name.firstName(1));
        NfzForm.fieldName.scroll(0, 10);
        // вводим имя 
        NfzForm.fieldName.setValue( faker.name.firstName(1));
        // вводим телефон 
        NfzForm.fieldPhone.setValue(`960${faker.random.number(9999999)}`);
        // клик для применения номера
        browser.click('.op005_form-item[data-name="Email"] input');
        // проверка на некоректный номер
        while(browser.isVisible('.op005_form-item[data-name="Телефон"] .error-container') === true) {
            $('.op005_form-item[data-name="Телефон"] .input__field').value='';
            browser.clearElement('.op005_form-item[data-name="Телефон"] .input__field');
            NfzForm.fieldPhone.setValue(`960${faker.random.number(9999999)}`);
        }
        NfzForm.fieldEmail.scroll(0, 10);
        // вводим электронную почту
        NfzForm.fieldEmail.setValue(faker.internet.email(1));
        // вводим Наименование компании
        NfzForm.fieldCompany.setValue(faker.company.companyName(1));
        NfzForm.fieldAddress.scroll(0, 10);
        // вводим адресс 
        NfzForm.fieldAddress.setValue(faker.address.streetAddress(1));
        // вводим должность 
        NfzForm.fielAppointment.setValue(faker.lorem.words(2));
        // проверяем, что кнопка стала активной 
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === false,
            5000, "Кнопка отправить заявку на кредит не стала активной");
        browser.scroll('.btn_with_loader', 0, 10);
        // нажимает кнопку
        NfzForm.send();
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