describe('test mechanical transmission', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу двигателя
    it('page engine', () => {
        // кликаем по кнопке Бюджет
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // проверяе что картинка на месте
    it('check images transmision', () => {
        // проверяем что картинка видна
        browser.waitForVisible('.prefix_l_1 img');
        // проверяем что отображается нужная картинка
        const image = browser.getAttribute('.prefix_l_1 img', 'src');
        expect(image).to.be.include('https://183024.selcdn.ru/vwgr_available_cars/option_images/icons/m/transmission.png');
    });

    // проверяем работу чекбокса "Автоматическая"
    it('check checkboxes auto', () => {
        browser.helpers.checkCheckboxNfz('Механическая', 'MT', 'transmission');
    });
});