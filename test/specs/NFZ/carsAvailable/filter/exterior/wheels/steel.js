describe('test wheels steel', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Стальные';
    before('open page filter', () => {
        browser.helpers.openFilter();
    }); 

    it('Open page exterior', function() {
        this.retries(3);
        // проверяем переход на страницу Интерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
    });

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, function() {
        this.retries(3);
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'СТАЛЬНЫЕ ДИСКИ','steel-wheel');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        this.retries(3);
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Стальные диски');
        // проверяем
        expect(newArray).to.be.equal('Стальные диски');
    });
});