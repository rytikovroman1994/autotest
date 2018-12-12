import NfzFilter from 'Pageobjects/nfz-filter.js'

describe.skip('test number-packages 4', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '4';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        bNfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '4', 'seats-4');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '4 сиденья');
        // проверяем
        expect(newArray).to.be.equal('4 сиденья');
    });
});