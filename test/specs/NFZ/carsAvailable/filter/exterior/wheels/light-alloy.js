describe('test wheels light-alloy', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Легкосплавные';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('body #react-tabs-6');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'ЛЕГКОСПЛАВНЫЕ ДИСКИ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Легкосплавные диски');
        // проверяем
        expect(newArray).to.be.equal('Легкосплавные диски');
    });
});