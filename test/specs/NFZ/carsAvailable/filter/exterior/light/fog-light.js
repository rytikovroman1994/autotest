import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test light fog light', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Противотуманные фары';
    before('open page filter', () => {
        browser.helpers.openFilter();
    }); 

    it('Open page exterior', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.exterior();
    });

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, function() {
        this.retries(3);
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ПРОТИВОТУМАННЫЕ ФАРЫ', 'fog-light');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        this.retries(3);
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});