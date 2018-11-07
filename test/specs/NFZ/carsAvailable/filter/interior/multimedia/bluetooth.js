describe('test multimedia Bluetooth / Handsfree', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Bluetooth / Handsfree';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'BLUETOOTH / HANDSFREE');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, conditions);
        // проверяем
        expect(newArray).to.be.equal(conditions);
    });
});