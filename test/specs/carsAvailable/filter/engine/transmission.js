describe('transmission', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу двигателя
    it('page engine', () => {
        // кликаем по кнопке Бюджет
        browser.click('#react-tabs-4');
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
        // нажимает на чекбокс 
        browser.click('.prefix_l_1  label:nth-child(3)');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('AT');

        // выключаем чекбокс 
        browser.click('.prefix_l_1  label:nth-child(3)');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу чекбокса "Механическая"
    it('check checkboxes mech', () => {
        // нажимает на чекбокс 
        browser.click('.prefix_l_1  label:nth-child(4)');
        // проверяем что появился пункт в фильтре
        browser.waitForExist('.avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal('MT');

        // выключаем чекбокс 
        browser.click('.prefix_l_1  label:nth-child(4)');
        // проверяем что пункт фильтра пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item__with-image') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });

    // проверяем работу сразу двух чекбоксов
    it('check checkboxes auto and mech', () => {
        // нажимает на чекбокс auto
        browser.click('.prefix_l_1  label:nth-child(3)');
        // нажимает на чекбокс mech
        browser.click('.prefix_l_1  label:nth-child(4)');
        // проверяем что появился пункт auto в фильтре
        browser.waitForExist('div:nth-child(1) > .avn008_filter-value-item__with-image');
        // проверяем что появился пункт mech в фильтре
        browser.waitForExist('div:nth-child(2) > .avn008_filter-value-item__with-image');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(1) > .avn008_filter-value-item__with-image')).to.be.equal('AT');
        // проверяем что это именно автоматическая
        expect(browser.getText('div:nth-child(2) > .avn008_filter-value-item__with-image')).to.be.equal('MT');

        // выключаем чекбокс auto
        browser.click('.prefix_l_1  label:nth-child(3)');
        // выключаем чекбокс mech
        browser.click('.prefix_l_1  label:nth-child(4)');
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