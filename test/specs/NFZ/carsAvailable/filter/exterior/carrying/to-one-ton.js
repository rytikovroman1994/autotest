import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test carrying to one ton', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'До 1т';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ДО 1Т', 'load-capacity-1');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Грузоподъемность до 1т');
        // проверяем
        expect(newArray).to.be.equal('Грузоподъемность до 1т');
    });
});