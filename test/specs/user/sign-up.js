import faker from "faker"

describe('signUp', () => {
    before(() => {
        // вызываем хелпер, который открывает сайт и проверяет открыто ли окно фильтра
        browser.helpers.openSite();
    })
    
    it('registration page', () => {
        // кликаем на иконку профиля
        browser.click('#prompt-toggler_selectLK');
        // выбираем "Зарегестрироваться"
        browser.click('.avn004_prompt__content  a:nth-child(2)');
        // ожидаем загрузки страницы ввода данных
        browser.waitForVisible('.logo__img_desktop');
    })
    it('checking phone input', () => {
        // вводим телефонный номер
        browser.setValue('#username', faker.phone.phoneNumber(0));
    });
    it('verification of email input', () => {
        // вводидим эмеил
        browser.setValue('#email', faker.internet.email(1));
    });
    it('checking the last name', () => {
        // выбираем гендер
        browser.click('.form__radio span');
        // вводим фамилию
        browser.setValue('#lastName', faker.name.lastName(1));
    });
    it('input check name', () => {
        // вводим имя
        browser.setValue('#firstName', faker.name.firstName(1));
    });
    it('entry check patronymic', () => {
        // вводим отчество
        browser.setValue('#kc-register-form > div:nth-child(6) > input', faker.name.lastName(1));
    });
    it('enter the password', () => {
        const password = faker.internet.password(10);
        // вводим пароль
        browser.setValue('#password', password);
        // подтверждаем пароль
        browser.setValue('#password-confirm', password);
    });
    it('check that we are back', () => {
        // кликаем по кнопке "Зарегестрироваться"
        browser.click('.btn_cta[type="submit"]');
        // ожидаем загрузку карточки, чтобы проверить url (вместо пауз)
        browser.waitForExist('.avn001_container');
        const url = browser.getUrl();
        expect(url).to.equal('https://vw.kodix.ru/');
    });
});