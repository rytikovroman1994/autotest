import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('test lap', function() {
    this.retries(2);
    let conditions = 'Колени';
    before('Open page secutity', () => {
        browser.helpers.openSite();
    });

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(3);
        // переходим на страницу 
        PkwFilter.options();
        // переходим в вкладку безопастность 
        browser.click('.avn008_filter__second-tab[data-name="Безопасность"]');
        // ожидаем загрузку картинки
        browser.waitForVisible('.avn008_safety-images_main img');
    });

    it(`Check checkbox ${conditions}`, function() {
        // проверяем работу чекбокса
        browser.helpers.checkCheckbox(conditions, 'Б/П КОЛЕНЕЙ', 'airbag');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail', function() {
        const newArray = browser.helpers.checkConditions(conditions, 'Фронтальные подушки безопасности');
        // проверяем
        expect(newArray).to.be.equal('Фронтальные подушки безопасности');
      });
}); 