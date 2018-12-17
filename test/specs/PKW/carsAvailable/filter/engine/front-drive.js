import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test front drive', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу двигателя
    it('Page engine', () => {
        // кликаем по кнопке Двигатель
        PkwFilter.engine();
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // проверяе что картинка на месте
    it('Check images transmision', () => {
        // проверяем что картинка видна
        browser.waitForVisible('.prefix_l_1 img');
        // проверяем что отображается нужная картинка
        const image = browser.getAttribute('div:nth-child(3) > div > div > div > div > div:nth-child(1) > div > img', 'src');
        expect(image).to.be.include('https://183024.selcdn.ru/vwgr_available_cars/option_images/icons/m/chassis.png');
    });

    // проверяем работу чекбокса "Автоматическая"
    it('Check checkboxes auto', () => {
        browser.helpers.checkCheckbox('Передний привод', 'ПЕРЕДНИЙ', 'chassis');
    });
});