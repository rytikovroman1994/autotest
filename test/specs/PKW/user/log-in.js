describe('test login up', () => {
    before('open page list', () => {
        browser.helpers.openList();
    });

    // переходим к странице входа в ЛК
    it('Go to personal account page', () => {
        // ждём пока отобразится иконка входа в ЛК
        browser.waitUntil(
            () => browser.isVisible('.avn003_column-right li:nth-child(2) .avn003__action-item') === true,
            10000, "Иконка входа в ЛК не появилась в течении 10 секунд");
        // нажимаем на иконку
        browser.click('.avn003_column-right li:nth-child(2) .avn003__action-item');
        // ждём появления поля Войти в ЛК
        browser.waitUntil(
            () => browser.isVisible('.avn023_dropdown-prompt__content a:nth-child(1)') === true,
            10000, "Поле Войти в ЛК не появилось в течении 10 секунд");
        // нажимаем на поле
        browser.click('.avn023_dropdown-prompt__content a:nth-child(1)');
        // проверяем, что перешли на страницу вода логи и пароля
        browser.waitUntil(
            () => browser.isVisible('.form__row [name="username"]') === true,
            10000, "Форма входа в ЛК не загрузилась");
    });

    it('Enter user data', () => {
        // вводим логин номером телефона
        browser.setValue('.form__row [name="username"]', "88905457133");
        // вводим пароль
        browser.setValue('.form__row [name="password"]', "12345678");
        // нажимаем кнопку войти
        browser.click('.form__row_btn .btn_cta');
        // проверяем, что появилось поле ввода смс подтверждения
        browser.waitUntil(
            () => browser.isVisible('.sms_row .sms_input') === true,
            10000, "Страница с подтверждением СМС не загрузилась");
        // вводим смс 
        browser.setValue('.sms_row .sms_input', "Dfw9NgY ");
        // нажимаем кнопку Подтвердить
        browser.click('.sms_row .sms_submit');
        // проверяем, что перешли на страницу ЛК
        browser.waitUntil(
            () => browser.isVisible('.uac008_show-more-tile_inner') === true,
            10000, "Страница ЛК не загрузилась при переходе от СМС подстверждения");
    }); 
});