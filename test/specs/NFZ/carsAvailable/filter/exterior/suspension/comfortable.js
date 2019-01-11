import NfzFilter from 'Pageobjects/nfz-filter.js'

describe('test suspension comfortable', () => {
    // выносим часто используемое название условия комплектации
    let conditions = 'Комфортная';
    before('open page filter', () => {
        browser.helpers.openFilter();
        // проверяем переход на страницу Экстерьер
        NfzFilter.exterior();
    }); 

    // проверяем работу чекбоскса
    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
       browser.helpers.checkCheckboxNfz(conditions, 'КОМФОРТНАЯ', 'suspension-1');
    });  

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditionsNfz(conditions, `${conditions} подвеска`);
        // проверяем
        expect(newArray).to.be.equal(`${conditions} подвеска`);
    });
});