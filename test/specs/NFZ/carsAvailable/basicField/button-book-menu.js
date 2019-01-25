import faker from "faker"
import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'
import NfzForm from 'Pageobjects/nfz-form.page.js'

describe('button book in the menu', () => {
    const buttonClass = '.avn012_content .btn__text';
    before('open page', () => {
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
    });

    // проверяем что кнопка забронировать есть на странице
    it('Check button book it', function() {
        this.retries(3); 
        // скролим вниз страницы, чтобы появилось меню
        browser.scroll(0, 800);
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
        browser.click(buttonClass);
        // ждём пока прогрузится картинка
        browser.waitForVisible('.uac001_image-status img')
        // проверяем, что перешли на страницу заполнения формы
        browser.waitForVisible('.op020_form');
        // проверяем, что кнопка отправить заказ отображается
        browser.waitForVisible('.op020_form .btn_with_loader');
        // проверяем, что кнопка задизейблина
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === true,
            5000, "Кнопку Отправить заказ активна без входных данных");
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
        // вводим имя 
        NfzForm.fieldName.setValue( faker.name.firstName(1));
        NfzForm.fieldSurname.scroll(0, 10);
        // вводим фамилию
        NfzForm.fieldSurname.setValue(faker.name.firstName(1));
        // вводим Отчество 
        NfzForm.fieldPatronymic.setValue(faker.name.firstName(1));
        NfzForm.fieldPhone.scroll(0, 10);
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
        // проверяем, что кнопка стала активной 
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === false,
            5000, "Кнопка отправить заявку на кредит не стала активной");
        // нажимает кнопку
        NfzForm.send();
        // магическая дичь, ожидаем пока пропадёт оверлей 
        browser.pause(4000);

        
        // ожидаем загрузку карточки
        browser.waitUntil(
            () => browser.isExisting('.op005_form-item[data-name="Имя"] input') === false,
            10000, "Заявка на запрос автомобиля не отравляется");
        // Получаем текст, что нужно подтвердить емаил
        const getText = browser.getText('.op005_form_title');
        expect(getText).to.be.equal('Заявка отправлена');
    });
});