import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test three zone climate', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '3х зонный';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '3-ЗОННЫЙ', 'climate-3');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '3х-зонный климат контроль');
        // проверяем
        expect(newArray).to.be.equal('3х-зонный климат контроль');
    });
});