/**
 * @memberOf Helpers
 * @function moreDetail
 * @param {string} email - дата атрибут конткретного элемента комплектации
 * @param {string} password - дата атрибут конткретного элемента комплектации
 * @example
 *      browser.helpers.logIn('Active Info Display', '/screenshotOption/cruiseControl.png');
 */
// "rytikovroman1994@gmail.com" 12345678q

export default function logIn(email, password) {
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

    // вводим логин номером телефона
    browser.addValue('.form__row [name="username"]', email);
    // вводим пароль
    browser.addValue('.form__row [name="password"]', password);
    // нажимаем кнопку войти
    browser.click('.form__row_btn .btn_cta');
    if(browser.isVisible('.parsley-required') === true) {
        browser.addValue('.form__row [name="username"]', email);
        // нажимаем кнопку войти
        browser.click('.form__row_btn .btn_cta');
    }
    // проверяем, что перешли на страницу ЛК
    browser.waitUntil(
        () => browser.isVisible('.uac008_show-more-tile_inner') === true,
        10000, "Страница ЛК не загрузилась");

    // ожидаем появления иконки ЛК
    browser.waitForVisible('#prompt-toggler_selectLK');
    // кликаем по данной иконке
    browser.click('#prompt-toggler_selectLK');
    // ждёп появления полей
    browser.waitForVisible('.avn023_dropdown-prompt__content a:nth-child(2)');
    // кликаем по полю Профиль пользователя
    browser.click('.avn023_dropdown-prompt__content a:nth-child(2)');
    
    // ждём появления формы
    browser.waitUntil(
        () => browser.isVisible('.sblock.account') === true,
        5000, 'Форма учёной записи не появилась при переходе');
}