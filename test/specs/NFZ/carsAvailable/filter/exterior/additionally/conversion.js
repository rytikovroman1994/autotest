import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test additionally conversion', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Переоборудование';
    before('open page filter', function() {
        this.retries(3);
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ПЕРЕОБОРУДОВАНИЕ', 'rebuild');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});