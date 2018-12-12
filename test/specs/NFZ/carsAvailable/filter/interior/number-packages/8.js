import NfzFilter from 'Pageobjects/nfz-filter.js'

describe.skip('test number-packages 8', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '8';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '8', 'seats-8');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '8 сидений');
        // проверяем
        expect(newArray).to.be.equal('8 сидений');
    });
});