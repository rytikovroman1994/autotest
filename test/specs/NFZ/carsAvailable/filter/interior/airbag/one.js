import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test airbag one', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '1';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '1', 'airbag-1');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '1 подушка');
        // проверяем
        expect(newArray).to.be.equal('1 подушка');
    });
});