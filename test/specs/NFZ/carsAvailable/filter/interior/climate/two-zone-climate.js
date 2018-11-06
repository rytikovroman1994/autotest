describe('test two zone climate', () => {
    // выносим часто используемое название условия комплектации
    let conditions = '2х зонный';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Интерьер
        browser.click('body #react-tabs-8');
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, '2-ЗОННЫЙ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, '2х-зонный климат контроль');
        // проверяем
        expect(newArray).to.be.equal('2х-зонный климат контроль');
    });
});