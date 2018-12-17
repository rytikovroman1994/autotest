import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test materials fabric', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Ткань';
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        PkwFilter.interior();
    });

    // проверяем работу чекбокса 
    it(`Check checkboxes ${conditions}`, () => {
        browser.helpers.checkCheckboxNfz(conditions, 'ТКАНЕВЫЙ САЛОН', 'seats-cloth');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Тканевые сидения');
        // проверяем
        expect(newArray).to.be.equal('Тканевые сидения');
      });
});