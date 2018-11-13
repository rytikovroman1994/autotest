describe('test electric seat drive', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Массаж';
    before('open page materials', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьера
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    });

    // проверяем работу чекбокса "Автоматическая"
    it('Check checkboxes auto', () => {
        browser.helpers.checkCheckboxNfz(conditions, 'СИДЕНИЯ С МАССАЖЕМ', 'seats-massage');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Сидения с массажем');
        // проверяем
        expect(newArray).to.be.equal('Сидения с массажем');
      });
});