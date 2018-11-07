describe('test wheels light-alloy', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Легкосплавные';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
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