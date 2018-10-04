describe('fuel-type', () => {
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
    it('check images fuel-type', () => {
        // проверяем что картинка видна
        browser.waitForVisible('.grid_12.grid_s_4.grid_m_2 img');
        // проверяем что отображается нужная картинка
        const image = browser.getAttribute('.grid_12.grid_s_4.grid_m_2 img', 'src');
        expect(image).to.be.include('https://183024.selcdn.ru/vwgr_available_cars/option_images/icons/m/gas-type.png');
    });

    // проверяем работу чекбокса "бензин"
    it('check checkboxes petrol', () => {
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Бензин"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('БЕНЗИН');

        // выключаем чекбокс 
        browser.click('.checkbox[data-name="Бензин"]');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу чекбокса "Дизиль"
    it('check checkboxes diesel', () => {
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ДИЗЕЛЬ');

        // выключаем чекбокс 
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу сразу двух чекбоксов
    it('check checkboxes petrol and diesel', () => {
        // нажимает на чекбокс auto
        browser.click('.checkbox[data-name="Бензин"]');
        // нажимает на чекбокс mech
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что появился пункт auto в фильтре
        browser.waitForExist('div:nth-child(1) > .avn008_filter-value-item__with-image');
        // проверяем что появился пункт mech в фильтре
        browser.waitForExist('div:nth-child(2) > .avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(1) > .avn008_filter-value-item__with-image')).to.be.equal('БЕНЗИН');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(2) > .avn008_filter-value-item__with-image')).to.be.equal('ДИЗЕЛЬ');

        // выключаем чекбокс auto
        browser.click('.checkbox[data-name="Бензин"]');
        // выключаем чекбокс mech
        browser.click('.checkbox[data-name="Дизель"]');
        // проверяем что пункт auto фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('div:nth-child(1) > .avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
         // проверяем что пункт mech фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('div:nth-child(1) > .avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });
});