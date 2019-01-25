import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test wheels light-alloy', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Легкосплавные';
    before('open page filter', () => {
        browser.helpers.openFilter();
    }); 

    it('Open page exterior', function() {
        this.retries(3);
        // проверяем переход на страницу Экстерьера
        NfzFilter.exterior();
    });

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, function() {
        this.retries(3);
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ЛЕГКОСПЛАВНЫЕ ДИСКИ', 'alloy-wheel');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        this.retries(3);
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Легкосплавные диски');
        // проверяем
        expect(newArray).to.be.equal('Легкосплавные диски');
    });
});