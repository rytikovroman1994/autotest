import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test booking car', () => {
    // получаем цену
    let getPrise;
    // получаем диллера
    let getDilerName
    // получаем номер телефона
    let getPhone;
    before('open site', () => {
        browser.helpers.openListNfz();
        // ждём пока карточки станут видны
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1)');
    }); 

    // выбираем первую картинку и переходим в деталку
    it('Go to details', () => {
        // выбираем первую машину и получаем её цену
        getPrise = browser.getText('.avn001_display > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_price__current .price-text');
        // получаем диллера
        let getDiler = browser.getText('.avn001_display > div:nth-child(1) > div > div > div:nth-child(1) .avn001-2_dealer-link__text');
        // избавляемся от города
        getDilerName = getDiler.split(', ')[0];
    });

    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', () => {
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(fzDetail.selectorImage);
    });

    // проверем что в деталке цена и диллер не поменялся
    it('Compare price and dealer', () => {
        // получаем цену автомобиля в деталке
        let getPriseDetal = browser.getText(selectorCarPrice);
        // проверяем что цена в деталка равна цене в выборке
        expect(getPriseDetal).to.be.equal(getPrise);
        // получаем диллера в деталке
        let getDilerDetal = browser.getText('.mainStageAction_link');
        // проверяем что диллер такой же как в выборе
        expect(getDilerDetal).to.be.equal(NfzDetail.selectorPrice);
        // запоминаем номер телефона
        getPhone = browser.getText('.mainStageAction-phone a');
    }); 

    // проверяем что в разделе карты тот же дилер и тот же номер телефона
    it('Compare dealer and phone number', () => {
        // скролим до раздела карты
        browser.scroll('.avn008_bg__right', 0, 0);
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
