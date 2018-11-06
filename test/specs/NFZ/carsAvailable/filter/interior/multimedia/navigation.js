describe('test multimedia navigation', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Навигация';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('body #react-tabs-8');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'НАВИГАЦИЯ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});