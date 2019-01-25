import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test airbag too', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '2';
    before('open page filter', () => {
        browser.helpers.openFilter();
    }); 

    it('Open page interior', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        NfzFilter.interior();
    });

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, function() {
        this.retries(3);
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '2', 'airbag-2');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        this.retries(3);
        const newArray = browser.helpers.checkConditionsNfz(conditions, '2 подушки');
        // проверяем
        expect(newArray).to.be.equal('2 подушки');
    });
});