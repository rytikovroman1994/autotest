import NfzFilter from 'Pageobjects/nfz-filter.js'

describe.skip('test number-packages 3', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '3';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '3', 'seats-3');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '3 сиденья');
        // проверяем
        expect(newArray).to.be.equal('3 сиденья');
    });
});