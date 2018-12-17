import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test materials leather', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Кожа';
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        PkwFilter.interior();
    });

    // проверяем работу чекбокса
    it(`Check checkboxes ${conditions}`, () => {
        browser.helpers.checkCheckboxNfz(conditions, 'КОЖАНЫЙ САЛОН', 'seats-leather');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Кожаные сидения');
        // проверяем
        expect(newArray).to.be.equal('Кожаные сидения');
      });
});