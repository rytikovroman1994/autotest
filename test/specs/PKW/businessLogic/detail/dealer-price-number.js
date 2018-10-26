describe('test booking car', () => {
    // получаем цену
    let getPrise;
    // получаем диллера
    let getDilerName
    // получаем номер телефона
    let getPhone;
    before('open site', () => {
        browser.helpers.openList();
        // ждём пока карточки станут видны
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1)');
    }); 

    // выбираем первую картинку и переходим в деталку
    it('go to details', () => {
        // выбираем первую машину и получаем её цену
        getPrise = browser.getText('.avn001_display > div:nth-child(1) > div > div > div:nth-child(1) .price-text');
        // получаем диллера
        let getDiler = browser.getText('.avn001_display > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_dealer-link__text');
        // избавляемся от города
        getDilerName = getDiler.split(', ')[0];
        // кликаем по карточке
        browser.click('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // проверм что появилась картинка в деталке
        browser.waitForVisible('.avn007-1_car-image  img');
    });

    // проверем что в деталке цена и диллер не поменялся
    it('compare price and dealer', () => {
        // получаем цену автомобиля в деталке
        let getPriseDetal = browser.getText('.avn007-2_price-item__purchase .price-text');
        // проверяем что цена в деталка равна цене в выборке
        expect(getPriseDetal).to.be.equal(getPrise);
        // получаем диллера в деталке
        let getDilerDetal = browser.getText('.avn007-2_contact-item-text_link');
        // проверяем что диллер такой же как в выборе
        expect(getDilerDetal).to.be.equal(getDilerName);
        // запоминаем номер телефона
        getPhone = browser.getText('.avn007-2_contact-item-text__big a');
    }); 

    // проверяем что в разделе карты тот же дилер и тот же номер телефона
    it('compare dealer and phone number', () => {
        // получаем диллера в разделе геолокации
        let getDilerDetal = browser.getText('.avn008_info_title h2');
        // проверяем что диллер такой же как в выборе
        expect(getDilerDetal).to.be.equal(getDilerName);
        // получаем номер телефона в разделе геолокации
        let getPhoneDetal = browser.getText('.avn008_info_link-item__phone .avn008_info_link-item-text');
        // проверяем, что номер такой же как в начале страницы
        expect(getPhoneDetal).to.be.equal(getPhone);
    });
}); 
