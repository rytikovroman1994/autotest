import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test suspension reinforced', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Усиленная';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'УСИЛЕННАЯ', 'suspension-2');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, `${conditions} подвеска`);
        // проверяем
        expect(newArray).to.be.equal(`${conditions} подвеска`);
    });
});