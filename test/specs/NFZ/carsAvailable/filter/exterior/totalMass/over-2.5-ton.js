import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test totalMass over-2.5-ton', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '2.5т-3.5т';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '2.5Т-3.5Т', 'weight-2');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Полная масса 2.5т-3.5т');
        // проверяем
        expect(newArray).to.be.equal('Полная масса 2.5т-3.5т');
    });
});