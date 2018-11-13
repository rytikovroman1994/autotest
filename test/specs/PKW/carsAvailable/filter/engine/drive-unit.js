describe.skip('transmission', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу двигателя
    it('page engine', () => {
        // кликаем по кнопке Двигатель
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // проверяе что картинка на месте
    it('check images transmision', () => {
        // проверяем что картинка видна
        browser.waitForVisible('div:nth-child(3) .avn008_engine__card-image img');
    });

    // проверяем работу чекбокса "Передний привод"
    it('check checkboxes full', () => {
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Передний привод"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ПЕРЕДНИЙ');

        // выключаем чекбокс 
        browser.click('.checkbox[data-name="Передний привод"]');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу чекбокса "Полный привод"
    it('check checkboxes front', () => {
        // нажимает на чекбокс 
        browser.click('.checkbox[data-name="Полный привод"]');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('ПОЛНЫЙ');

        // выключаем чекбокс 
        browser.click('.checkbox[data-name="Полный привод"]');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу сразу двух чекбоксов
    it('check checkboxes full and front', () => {
        // нажимает на чекбокс auto
        browser.click('.checkbox[data-name="Передний привод"]');
        // нажимает на чекбокс mech
        browser.click('.checkbox[data-name="Полный привод"]');
        // проверяем что появился пункт auto в фильтре
        browser.waitForExist('div:nth-child(1) > .avn008_filter-value-item__with-image');
        // проверяем что появился пункт mech в фильтре
        browser.waitForExist('div:nth-child(2) > .avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(1) > .avn008_filter-value-item__with-image')).to.be.equal('ПЕРЕДНИЙ');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(2) > .avn008_filter-value-item__with-image')).to.be.equal('ПОЛНЫЙ');

        // выключаем чекбокс auto
        browser.click('.checkbox[data-name="Передний привод"]');
        // выключаем чекбокс mech
        browser.click('.checkbox[data-name="Полный привод"]');
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