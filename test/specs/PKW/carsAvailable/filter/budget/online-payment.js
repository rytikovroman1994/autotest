import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('online-payments', () => {
    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу бюджета
    it('page budget', () => {
        // кликаем по кнопке Бюджет
        PkwFilter.budget();
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // проверяем чек бокс онлайн оплаты
    it('check checkbox online payments', () => {
        browser.waitForVisible('.avn008_budget__checkbox');
        // кликаем на чекбокс 
        browser.click('.icon-nextstep-checkmark');
        // проверяем что атрубут value стал true
        expect(browser.getAttribute('.checkbox__control', "value")).to.be.equal('true');
    });

    // проверяем что в фильтре появился параметр онлайн оплаты
    it('check filter parametr online payments', () => {
        browser.waitForExist('.avn008_filter-value-item_text-self');
        expect(browser.getText('.avn008_filter-value-item_text-self')).to.be.equal('ОНЛАЙН');
    });

    // отключаем онлайн оплату и проверяем что параметр пропал
    it('off online payment', () => {
        browser.click('.icon-nextstep-checkmark');
        // проверяем что атрибут value стал false
        expect(browser.getAttribute('.checkbox__control', "value")).to.be.equal('false');
        // проверяем, что параметр пропал
        browser.waitUntil(
            ()=> browser.isVisible('.avn008_filter-value-item_text-self') === false,
        5000, "Парамент онлайн оплаты не пропал из фильтра");
    });
});