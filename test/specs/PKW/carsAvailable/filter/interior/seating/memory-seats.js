describe('test memory seats', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Память';
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем работу чекбокса
    it(`Check checkboxes ${conditions}`, () => {
        browser.helpers.checkCheckboxNfz(conditions, 'ПАМЯТЬ СИДЕНИЙ', 'seats-memory');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Память сидений');
        // проверяем
        expect(newArray).to.be.equal('Память сидений');
      });
});