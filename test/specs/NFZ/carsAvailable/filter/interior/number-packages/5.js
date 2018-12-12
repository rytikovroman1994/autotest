import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test number-packages 5', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '5';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '5', 'seats-5');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '5 сидений');
        // проверяем
        expect(newArray).to.be.equal('5 сидений');
    });
});