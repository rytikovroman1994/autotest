describe('test sittings scin', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Кожа';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'КОЖАНЫЙ САЛОН');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, 'Кожаные сидения');
        // проверяем
        expect(newArray).to.be.equal('Кожаные сидения');
    });
});