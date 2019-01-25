import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test light halogen', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Галоген';
    before('open page filter', () => {
        browser.helpers.openFilter();
    }); 

    it('Open page exterior', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.exterior();
    });

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, function() {
        this.retries(3);
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ГАЛОГЕН', 'light-halogen');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        this.retries(3);
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Галогеновые фары');
        // проверяем
        expect(newArray).to.be.equal('Галогеновые фары');
    });
});