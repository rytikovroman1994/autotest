import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test sittings electric seat drive', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Электропривод сидений';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        bNfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ПРИВОД СИДЕНИЙ', 'seats-transform');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});