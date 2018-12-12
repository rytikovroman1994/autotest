import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test totalMass to-2.5-ton', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'До 2.5т';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ДО 2.5Т', 'weight-1');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Полная масса до 2.5т');
        // проверяем
        expect(newArray).to.be.equal('Полная масса до 2.5т');
    });
});