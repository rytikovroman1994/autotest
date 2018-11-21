import faker from "faker"

describe('test sign in new user', () => {
    before('open page list', () => {
        browser.helpers.openList();
    });

    // переходим к странице регестрации
    it('Go to personal account page', () => {
        // ждём пока отобразится иконка 
        browser.waitUntil(
            () => browser.isVisible('.avn003_column-right li:nth-child(2) .avn003__action-item') === true,
            10000, "Иконка входа в ЛК не появилась в течении 10 секунд");
        // нажимаем на иконку
        browser.click('.avn003_column-right li:nth-child(2) .avn003__action-item');
        // ждём появления поля Зарегестрироваться
        browser.waitUntil(
            () => browser.isVisible('.avn023_dropdown-prompt__content a:nth-child(2)') === true,
            10000, "Поле Зарегестрироваться не появилось в течении 10 секунд");
        // нажимаем на поле
        browser.click('.avn023_dropdown-prompt__content a:nth-child(2)');
        // проверяем, что перешли на страницу Регистрации
        browser.waitUntil(
            () => browser.isVisible('.form__input[name="email"]') === true,
            10000, "Форма регестрации не загрузилась");
    });

    it('Verification of email input', () => {
        browser.waitForExist('.form__input[name="email"]');
        // вводидим эмеил
        browser.setValue('.form__input[name="email"]', faker.internet.email(1));
    });

    it('Checking phone input', () => {
        // вводим телефонный номер
        browser.waitForExist('.form__input[name="mobile"]');
        browser.setValue('.form__input[name="mobile"]', faker.phone.phoneNumber()); 
        // убираем фокус
        browser.keys('/uE007');

        while(browser.isVisible('.op005_register div:nth-child(5) > div > span') === true) {
            browser.clearElement('.form__input[name="mobile"]');
            browser.setValue('.form__input[name="mobile"]', faker.phone.phoneNumber());
        }
    });

    it('Choose the sex of the person', () => {
        // выбираем гендер
        browser.click('.form__row_checks label:nth-child(1)');
    });

    it('Checking the last name', () => {
        browser.waitForExist('.form__input[name="lastName"]');
        // вводим фамилию
        browser.setValue('.form__input[name="lastName"]', faker.name.firstName(1));
    });

    it('Input check name', () => {
        browser.waitForExist('.form__input[name="firstName"]');
        // вводим имя
        browser.setValue('.form__input[name="firstName"]', faker.name.firstName(1));
    });

    it('Entry check patronymic', () => {
        browser.waitForExist('.form__input[name="user.attributes.patronomic"]');
        // вводим отчество
        browser.setValue('.form__input[name="user.attributes.patronomic"]', faker.name.firstName(1));
    });

    it('Entry check password', () => {
        // вводим пароль 
        browser.setValue('.form__input[name="password"]', "12345678");
        browser.waitForVisible('.form__input[name="password-confirm"]');
        // повторяем пароль
        browser.setValue('.form__input[name="password-confirm"]', "12345678");
    });

    it('Check that we are back', () => {
        // проверям, что кнопка Зарегестрироваться работает
        browser.click('.form__row .btn_cta');
        // ожидаем загрузку карточки
        browser.waitUntil(
            () => browser.isExisting('.form__input[name="firstName"]') === false,
            10000, "Заявка на регестрацию не отравляется");
        // проверем, что перешли к списку автомобилей
        browser.waitUntil(
            () => browser.isExisting('.avn001_catalogue') === true,
            5000, "При регестрации редеректит не на список автомобилей");
    });
});