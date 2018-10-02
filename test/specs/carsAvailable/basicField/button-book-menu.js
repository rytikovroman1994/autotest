import faker from "faker"

describe('button book in the menu', () => {
    const buttonClass = '.avn012_content .btn__text';
    before('open page', () => {
        browser.helpers.openList();
        // переходим в деталку
        browser.leftClick('.avn001-2_content .gridcontainer', 10, 10);
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
        browser.waitForVisible('.op005_register form');
    });

    // заполняем форму
    it('fill out the booking form', () => {
        // выбираем гендер
        browser.leftClick('.radiobtn__control[value="М"]');
        // вводим имя
        browser.setValue('.input__field[placeholder="Введите ваше имя"]', faker.name.firstName());
        // вводим фамилию
        browser.setValue('.input__field[placeholder="Фамилия"]', faker.name.lastName());
        // вводим отчество 
        browser.setValue('.input__field[placeholder="Отчество"]', faker.name.lastName());
        // вводим номер телефона
        browser.setValue('.input__field[placeholder="Телефон"]', faker.phone.phoneNumberFormat(0));
        if (browser.isVisible('.is_filled.is_invalid') === true) {
            // очищаем поле
            browser.clearElement('.input__field[placeholder="Телефон"]');
            // вводим новый телефоннный номер
            browser.setValue('.input__field[placeholder="Телефон"]', faker.phone.phoneNumberFormat(0));
        }
        // вводим эмеил
        browser.setValue('.input__field[placeholder="Email"]', faker.internet.email());
        
        // проверяет, что пропала неактивная кнопка 
        browser.waitUntil(
            () => browser.isVisible('.btn_cta.is_disabled') === false,
            5000, "Кнопка Отправить заказ всё ещё не активна");
        // проверяем что существует кнопка "Отправить заказ" и что она отображается на странице
        browser.waitForExist('.btn_with_loader ');
        browser.waitForVisible('.btn_with_loader ');
    });

    // проверяем кликбельность кнопки "Отправить заказ" и переход на нудную страницу
    it('check order submit button', () => {
        // кликаем на кнопку
        browser.click('.btn_with_loader');
    });
});