import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test multimedia Bluetooth / Handsfree', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Bluetooth / Handsfree';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'BLUETOOTH / HANDSFREE', 'bluetooth');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});