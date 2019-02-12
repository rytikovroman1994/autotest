import PkwListLk from 'Pageobjects/pkw-lk.page.js'

describe('test new passwors', function() {
    this.retries(2);
    const email = 'rytikovroman1994@gmail.com';
    const password = '12345678q'
    before('open page list', function() {
        this.retries(2);
        browser.helpers.openList();
        browser.helpers.logIn(email, password);
    });

    it('Go to page password', function() {
        this.retries(0);
        // переходим на страницу смены пароля
        PkwListLk.password();
    });

    it('Check for a short password', function() {
        this.retries(1);
        // кликаем по кнопке изменить пароль
        browser.click('.form__row_btn .btn_cta');
        browser.waitForVisible('body #parsley-id-7 > div');
        // проверяем что появилось предупреждение о недопустимом пароле
        let textError = browser.getText('body #parsley-id-7 > div');
        console.log(textError);
        // проверяем коректность текста 
        browser.waitUntil(
            () => textError == 'Поле необходимо заполнить',
            5000, "Текст ошибки при не заполнении пароля отличается");
        // вводим заведомо ложный пароль 
        browser.addValue('body #password', 'fai');
        // кликаем по кнопке изменить пароль
        browser.click('.form__row_btn .btn_cta');
        browser.waitForVisible('body #parsley-id-7 > div');
        // проверяем что появилось предупреждение о недопустимом пароле
        textError = browser.getText('body #parsley-id-7 > div');
        // проверяем коректность текста 
        browser.waitUntil(
            () => textError == 'Пароль слишком короткий',
            5000, "Текст ошибки при вводе короткого пароля отличается");
    });

    it('Check the error if the current password is incorrect', function() {
        this.retries(0);
        const url = browser.getUrl();
        browser.url(url);
        browser.waitForVisible('body #password');
        // вводим текущий пароль
        browser.addValue('body #password', 'fail2');
        browser.addValue('body #password-new', `${password}w`);
        browser.addValue('body #password-confirm', `${password}w`);
        // кликаем по кнопке изменить пароль
        browser.click('.form__row_btn .btn_cta');
        // проверяем что появилась ошибка 
        browser.waitUntil(
            () => browser.getText('.alert-error') == 'Существующий пароль неверный.',
            5000, "Ошибка - Существующий пароль неверный, не появился");
    });

    it('Check the error when entering a new password', function() {
        this.retries(0);
        const url = browser.getUrl();
        browser.url(url);
        browser.waitForVisible('body #password');
        browser.addValue('body #password', 'fail2');
        browser.addValue('body #password-new', `1234`);
        browser.addValue('body #password-confirm', `12345`);
        // кликаем по кнопке изменить пароль
        browser.click('.form__row_btn .btn_cta');
        // проверяем что появилась ошибка некоректного пароля
        browser.waitForVisible('body #parsley-id-9');
        browser.waitUntil(
            () => browser.getText('body #parsley-id-9') == 'Должен содержать одну цифру, одну букву и быть длиной от 8 до 20 символов',
            5000, "Ошибка на проверку валидности пароля не появилась");
        // проыеряем что появилась ошибка не совпадения пароля
        browser.waitUntil(
            () => browser.getText('body #parsley-id-11') == 'Пароли должны совпадать',
            5000, "Ошибка на проверку совпадения нового пароля не появилась");
    });

    it('Change the password', function() {
        this.retries(0);
        const url = browser.getUrl();
        browser.url(url);
        browser.waitForVisible('body #password');
        browser.addValue('body #password', password);
        browser.addValue('body #password-new', password);
        browser.addValue('body #password-confirm', password);
        // кликаем по кнопке изменить пароль
        browser.click('.form__row_btn .btn_cta');
        // проверяем что появился подтверждение изменения пароля 
        browser.waitForExist('.alert-success');
        browser.waitUntil(
            () => browser.getText('.alert-success') == 'Ваш пароль обновлен.', 
            5000, "Текст с подтверждением изменения пароля не появился");
    });
});