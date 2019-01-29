import faker from "faker"
import PkwListPage from 'Pageobjects/pkw-list.page.js'
import PkwDetail from 'Pageobjects/pkw-detail.page.js'

describe.skip('test button to book', () => {
    const buttonClass = '.avn007-2_price .btn__text';
    before('open page', () => {
        browser.helpers.openList();
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(1);
        // кликаем на карточку
        PkwListPage.card();
        // ожидаем появления картинки на странице деталки
        browser.waitForVisible(PkwDetail.selectorCarImage, 40000);
    });

    // проверяем что кнопка забронировать есть на странице
    it('check button book it', function() {
        this.retries(3);
        // проверяем, что картинка есть в доме и она отображется
        browser.waitForExist(buttonClass);
        browser.waitForVisible(buttonClass);
        // проверяем, что текст кнопки забронировать
        const textButton = browser.getText(buttonClass);
        expect(textButton).to.be.equal('Забронировать');
    });

    // проверяем, что кнопка кликабельна
    it('Check the clickability of the booking button', function() {
        this.retries(3);
        // кликаем на кнопку
        PkwDetail.book();
        // ждём пока прогрузится картинка
        browser.waitForVisible('.uac001_image-status img');
        // проверяем что есть кнпока отправить заказ
        browser.click('.op005_form-btn .btn_cta');
        // переходим на страницу Зарегестрироваться
        browser.click('.cblock__overhang-inner .gridcontainer div:nth-child(2)');
        // проверяем, что перешли на страницу заполнения формы
        browser.waitUntil(
            () => browser.isExisting('.cblock') === true,
            10000, "Форма Регистрании не появилась");
    });

    // принимаем рекапцу
    it('Enter button recapcha', function() {
        this.timeout(20000);
            browser.leftClick('#kc-register-form > div:nth-child(9) div .g-recaptcha', 15, 15);
            if(browser.isVisible('#rc-imageselect')){
            $.ajax({
                url: "",
                context: document.body,
                success: function(s,x){
                    $(this).html(s);
                }
            });
            }
    });

    it('Verification of email input', function() {
        this.retries(3);
        browser.waitForExist('.form__input[name="email"]');
        // вводидим эмеил
        browser.setValue('.form__input[name="email"]', faker.internet.email(1));
    });

    it('Checking phone input', function() {
        this.retries(3);
        // вводим телефонный номер
        browser.waitForExist('.form__input.phone-mask');
        browser.setValue('.form__input.phone-mask', `960${faker.random.number(9999999)}`); 
        // убираем фокус
        browser.keys('/uE007');

        while(browser.isVisible('.op005_register div:nth-child(5) > div > span') === true) {
            browser.clearElement('.form__input.phone-mask');
            browser.setValue('.form__input.phone-mask', `960${faker.random.number(9999999)}`);
        }
    });

    it('Choose the sex of the person', function() {
        this.retries(3);
        // выбираем гендер
        browser.click('.form__row_checks label:nth-child(1)');
    });

    it('Checking the last name', function() {
        this.retries(3);
        browser.waitForExist('.form__input[name="lastName"]');
        // вводим фамилию
        browser.setValue('.form__input[name="lastName"]', faker.name.firstName(1));
    });

    it('Input check name', function() {
        this.retries(3);
        browser.waitForExist('.form__input[name="firstName"]');
        // вводим имя
        browser.setValue('.form__input[name="firstName"]', faker.name.firstName(1));
    });

    it('Entry check patronymic', function() {
        this.retries(3);
        browser.waitForExist('.form__input[name="middleName"]');
        // вводим отчество
        browser.setValue('.form__input[name="middleName"]', faker.name.firstName(1));
    });

    it('Entry check password', function() {
        this.retries(3);
        // вводим пароль 
        browser.setValue('.form__input[name="password"]', "12345678");
        browser.waitForVisible('.form__input[name="password-confirm"]');
        // повторяем пароль
        browser.setValue('.form__input[name="password-confirm"]', "12345678");
    });

    // принимаем согласие на обработку
    it('Agree to the processing', () => {
        browser.click('#kc-register-form > div:nth-child(10) > label > div');
        browser.pause(3000);
    });
    // принимаем согласие на комуникацию 
    it('Accept consent to communication', () => {
        browser.click('#kc-register-form > div:nth-child(11) > label > div');
        browser.pause(3000);
    });

    it('Check that we are back', function() {
        this.retries(1);
        // проверям, что кнопка Зарегестрироваться работает
        browser.click('.form__row .btn_cta');
        // ожидаем загрузку карточки
        browser.waitUntil(
            () => browser.isExisting('.form__input[name="firstName"]') === false,
            10000, "Заявка на регестрацию не отравляется");
        // проверяем на наличие лоадера ожидания
        if(browser.isVisible('.mk004__text') === true) {
            // проверяем текст
            const textError = browser.getText('.mk004__text');
            browser.waitUntil(
                () => (textError != "К сожалению, error check rse car reserved.") === true,
                10000, "Выбранный автомобиль не удалось забронировать");
        }
        // ожидаем появления сообщения
        browser.waitUntil(
            () => browser.isExisting('.mk004__inner.gridcontainer') === true,
            30000, "Сообение Ваш заказ оформлен! не появилось после 30 секунд");
        // Получаем текст, что заказ оформлен
        const getText = browser.getText('.mk004__inner.gridcontainer h1');
        expect(getText).to.be.equal('Ваш заказ оформлен!');

        // проверяем что кнопка Перейти в каталог отображается
        browser.waitUntil(
            () => browser.isVisible('.mk004__btn .btn__text') === true,
            10000, "Кнопка Перейти в ЛК не отображается");
        // переходим в каталог
        browser.click('.mk004__btn .btn__text');
        // проверяем, что перешли именно к списку
        browser.waitUntil(
            () => browser.isVisible('.uac008_tile-list_container .uac008_tile-item-container') === true,
            10000, "Кнопка не ведёт на страницу ЛК");
    });
});