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
    it('Check button book it', () => { 
        // скролим вниз страницы, чтобы появилось меню
        browser.scroll(0, 900);
        // проверяем, что картинка есть в доме и она отображется
        browser.waitForExist(buttonClass);
        browser.waitUntil(
            () => browser.isVisible(buttonClass) === true,
            10000, "Кнопка Забронировать не появилась в верхнем меню");
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
        browser.waitUntil(
            () => browser.isExisting('.op005_register') === true,
            10000, "Форма Запросить автомобиль не появилась");
        // проверяем, что кнопка отправить заказ отображается
        browser.waitUntil(
            () => browser.isVisible('.op005_register .op005_form-btn') === true,
            10000, "Кнопка отправить заказ не отображается в форме");
        browser.waitUntil(
            () => browser.isExisting('.btn_cta.is_disabled') === true,
            5000, "Кнопку Отправить заказ активна без входных данных");
    });

    it('Choose the sex of the person', () => {
        // выбираем гендер
        browser.click('div:nth-child(1) > label .radiobtn__title');
    });

    it('Input check name', () => {
        // вводим имя
        browser.setValue('.input__field[placeholder="Введите ваше имя"]', faker.name.firstName(1));
    });
    it('Checking the last name', () => {
        browser.waitForExist('.input__field[placeholder="Фамилия"]');
        // вводим фамилию
        browser.setValue('.input__field[placeholder="Фамилия"]', faker.name.firstName(1));
    });
    it('Entry check patronymic', () => {
        browser.waitForExist('.input__field[placeholder="Отчество"]');
        // вводим отчество
        browser.setValue('.input__field[placeholder="Отчество"]', faker.name.firstName(1));
    });
    it('Checking phone input', () => {
        // вводим телефонный номер
        browser.waitForExist('.input__field[placeholder="Телефон"]');
        browser.setValue('.input__field[placeholder="Телефон"]', faker.phone.phoneNumber());
        // клик для переноса фокуса 
        browser.click('.input__field[placeholder="Отчество"]');

        while(browser.isVisible('.op005_register div:nth-child(5) > div > span') === true) {
            browser.clearElement('.input__field[placeholder="Телефон"]');
            browser.setValue('.input__field[placeholder="Телефон"]', faker.phone.phoneNumber());
        }
    });
    it('Verification of email input', () => {
        browser.waitForExist('.input__field[placeholder="Email"]');
        // вводидим эмеил
        browser.setValue('.input__field[placeholder="Email"]', faker.internet.email(1));
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
            () => browser.isExisting('.input__field[placeholder="Введите ваше имя"]') === false,
            10000, "Заявка на запрос автомобиля не отравляется");
        // Получаем текст, что нужно подтвердить емаил
        const getText = browser.getText('.op006_result-message_title');
        expect(getText).to.be.equal('Спасибо!');

        // проверяем что кнопка Перейти в каталог отображается
        browser.waitUntil(
            () => browser.isVisible('.op006_result-message_btn .btn_cta') === true,
            10000, "Кнопка Перейти в каталог не отображается");
        // переходим в каталог
        browser.click('.op006_result-message_btn .btn_cta');
        // проверяем, что перешли именно к списку
        browser.waitUntil(
            () => browser.isVisible('.avn001_display.avn001_display__view-tiles') === true,
            10000, "Кнопка Перейти в каталог не ведёт к катологу автомобилей");
    });
});