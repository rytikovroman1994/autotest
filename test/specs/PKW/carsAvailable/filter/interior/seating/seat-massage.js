import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test electric seat drive', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Массаж';
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        PkwFilter.exterior();
    });

    // проверяем работу чекбокса
    it(`Check checkboxes ${conditions}`, () => {
        browser.helpers.checkCheckboxNfz(conditions, 'СИДЕНИЯ С МАССАЖЕМ', 'seats-massage');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Сидения с массажем');
        // проверяем
        expect(newArray).to.be.equal('Сидения с массажем');
      });
});