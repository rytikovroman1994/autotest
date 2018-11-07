describe('test wheels 15', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Стальные';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('body #react-tabs-6');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'СТАЛЬНЫЕ ДИСКИ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Стальные диски');
        // проверяем
        expect(newArray).to.be.equal('Стальные диски');
    });
});