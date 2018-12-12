import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test totalMass over-3.5-ton', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Более 3.5т';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'БОЛЕЕ 3.5Т', 'weight-3');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Полная масса более 3.5т');
        // проверяем
        expect(newArray).to.be.equal('Полная масса более 3.5т');
    });
});