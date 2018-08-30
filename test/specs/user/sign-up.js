import faker from "faker"

describe('signUp', () => {
    before(() => {
        // вызываем хелпер, который открывает сайт и проверяет открыто ли окно фильтра
        browser.helpers.openSite();
    })
    
    it('registration page', () => {
        // кликаем на иконку профиля
        browser.click('#prompt-toggler_selectLK');
        // проверяем страницу, на которой находимся
        const urlSite = browser.getUrl();
        if(urlSite != "https://vw.kodix.ru/auth/realms/vwgr/login-actions/registration?client_id=vw-offers&tab_id=agoWZa5pShs") {
            browser.click('.cblock__overhang.cblock__overhang_short > div > div > div:nth-child(2)');
        } else {// выбираем "Зарегестрироваться"
        browser.click('.avn004_prompt__content  a:nth-child(2)');
        }
        // ожидаем загрузки страницы ввода данных
        browser.waitForVisible('.logo__img_desktop');
    })
    it('checking phone input', () => {
        // вводим телефонный номер
        browser.setValue('#phone', faker.phone.phoneNumber(0));
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
        browser.setValue('#patronomic', faker.name.lastName(1));
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
        // ожидаем загрузку карточки
        browser.waitForExist('.uac008_show-more-tile_inner');
    });
});