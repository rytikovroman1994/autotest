import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test carrying to one ton', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Свыше 1т';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'СВЫШЕ 1Т', 'load-capacity-2');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Грузоподъемность свыше 1т');
        // проверяем
        expect(newArray).to.be.equal('Грузоподъемность свыше 1т');
    });
});