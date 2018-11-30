import faker from "faker"

describe('test button book in the menu', () => {
    const buttonClass = '.mainStageinfo .btn_cta';
    before('open page', () => {
        browser.helpers.openListNfz();
        // переходим в деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.preview_img img');
    });

    // проверяем что кнопка забронировать есть на странице
    it('Check button book it', () => {
        // проверяем, что картинка есть в доме и она отображется
        browser.waitForExist(buttonClass);
        browser.waitForVisible(buttonClass);
        // проверяем, что текст кнопки забронировать
        const textButton = browser.getText(buttonClass);
        expect(textButton).to.be.equal('Забронировать');
    });

    // проверяем, что кнопка кликабельна
    it('Check the clickability of the booking button', () => {
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
    
    it('Choose the sex of the person', () => {
        // выбираем гендер
        browser.click('div:nth-child(1) > label .radiobtn__title.undefined');
    });

    it('Input check name', () => {
        // вводим имя
        browser.setValue('.op005_form-item[data-name="Имя"] input', faker.name.firstName(1));
    });
    it('Checking the last name', () => {
        browser.waitForExist('.op005_form-item[data-name="Фамилия"] input');
        // вводим фамилию
        browser.setValue('.op005_form-item[data-name="Фамилия"] input', faker.name.firstName(1));
    });
    it('Entry check patronymic', () => {
        browser.waitForExist('.op005_form-item[data-name="Отчество"] input');
        // вводим отчество
        browser.setValue('.op005_form-item[data-name="Отчество"] input', faker.name.firstName(1));
    });
    it('Checking phone input', () => {
        // вводим телефонный номер
        browser.waitForExist('.op005_form-item[data-name="Телефон"] input');
        browser.setValue('.op005_form-item[data-name="Телефон"] input', faker.phone.phoneNumber());
        // клик для переноса фокуса 
        browser.click('.op005_form-item[data-name="Отчество"] input');

        while(browser.isVisible('.op005_register div:nth-child(5) > div > span') === true) {
            browser.clearElement('.op005_form-item[data-name="Телефон"] input');
            browser.setValue('.op005_form-item[data-name="Телефон"] input', faker.phone.phoneNumber());
        }
    });
    it('Verification of email input', () => {
        browser.waitForExist('.op005_form-item[data-name="Email"] input');
        // вводидим эмеил
        browser.setValue('.op005_form-item[data-name="Email"] input', faker.internet.email(1));
    });
    it('Check that we are back', () => {
        // проверям, что кнопка стала активной
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === false,
            5000, "Кнопка Отправить заказ не стала активной");
        // кликаем по кнопке "Отправить заказ"
        browser.click('.op005_form-btn .btn_cta');
        // ожидаем загрузку карточки
        browser.waitUntil(
            () => browser.isExisting('.op005_form-item[data-name="Имя"] input') === false,
            10000, "Заявка на запрос автомобиля не отравляется");
        // Получаем текст, что нужно подтвердить емаил
        const getText = browser.getText('.op005_form_title');
        expect(getText).to.be.equal('Заявка отправлена');
    });
});