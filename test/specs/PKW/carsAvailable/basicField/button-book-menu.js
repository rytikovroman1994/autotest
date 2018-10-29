import faker from "faker"

describe('button book in the menu', () => {
    const buttonClass = '.avn012_content .btn__text';
    before('open page', () => {
        browser.helpers.openList();
        // переходим в деталку
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // ждём появления картинки
        browser.waitForVisible('.avn007-1_car-image img');
    });

    // проверяем что кнопка забронировать есть на странице
    it('check button book it', () => { 
        // скролим вниз страницы, чтобы появилось меню
        browser.scroll(0, 600);
        // проверяем, что картинка есть в доме и она отображется
        browser.waitForExist(buttonClass);
        browser.waitForVisible(buttonClass);
        // проверяем, что текст кнопки забронировать
        const textButton = browser.getText(buttonClass);
        expect(textButton).to.be.equal('Забронировать');
    });

    // проверяем, что кнопка кликабельна
    it('check the clickability of the booking button', () => {
        // кликаем на кнопку
        browser.click(buttonClass);
        // ждём пока прогрузится картинка
        browser.waitForVisible('.uac001_image-status img')
        // проверяем, что перешли на страницу заполнения формы
        browser.waitForVisible('.op005_form_first');
        // проверяем, что кнопка отправить заказ отображается
        browser.waitForVisible('.op005_form_first .op005_form-btn');
        // переходим на след страницу
        browser.click('.op005_form_first .op005_form-btn');
        // ждём пока загрузится авторизация в ЛК
        browser.waitForVisible('.cblock');
        // кликаем по кнопке зарегестрироваться
        browser.click('.cblock__overhang_short div:nth-child(2)');
    });

    it('verification of email input', () => {
        browser.waitForExist('body #email');
        // вводидим эмеил
        browser.setValue('body #email', faker.internet.email(1));
    });
    it('checking phone input', () => {
        // вводим телефонный номер
        browser.waitForExist('body #mobile');
        browser.setValue('body #mobile', faker.phone.phoneNumber(0));
    });
    it('checking the last name', () => {
        // выбираем гендер
        browser.click('.form__radio span');
        browser.waitForExist('body #lastName');
        // вводим фамилию
        browser.setValue('body #lastName', faker.name.lastName(1));
    });
    it('input check name', () => {
        // вводим имя
        browser.setValue('body #firstName', faker.name.firstName(1));
    });
    it('entry check patronymic', () => {
        // вводим отчество
        browser.setValue('body #patronomic', faker.name.lastName(1));
    });
    it('enter the password', () => {
        const password = faker.internet.password(10);
        // вводим пароль
        browser.setValue('body #password', password);
        // подтверждаем пароль
        browser.setValue('body #password-confirm', password);
    });
    it('check that we are back', () => {
        // кликаем по кнопке "Зарегестрироваться"
        browser.click('.btn_cta[type="submit"]');
        // ожидаем загрузку карточки
        browser.waitForExist('.cblock');
        // Получаем текст, что нужно подтвердить емаил
        const getText = browser.getText('.cblock__title');
        expect(getText).to.be.equal('Подтверждение адреса E-mail');
    });
});