import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test light bixenon', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Биксенон / Светодиоды';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'БИКСЕНОН / СВЕТОДИОДЫ', 'light-led');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});