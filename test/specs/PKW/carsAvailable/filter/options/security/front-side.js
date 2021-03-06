import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test front side', () => {
    let conditions = 'Передние боковые';
    before('Open page secutity', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', () => {
        // переходим на страницу 
        PkwFilter.options();
        // переходим в вкладку безопастность 
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        // ожидаем загрузку картинки
        browser.waitForVisible('.avn008_safety-images_main img');
    });

    it(`Check checkbox ${conditions}`, () => {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'ПЕРЕДНИЕ БОКОВЫЕ П. Б.', 'airbag');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', () => {
        const newArray = browser.helpers.checkConditions(conditions, 'Фронтальные подушки безопасности');
        // проверяем
        expect(newArray).to.be.equal('Фронтальные подушки безопасности');
      });
}); 