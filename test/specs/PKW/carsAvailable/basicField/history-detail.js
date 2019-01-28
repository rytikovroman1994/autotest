import PkwListPage from 'Pageobjects/pkw-list.page.js'
import PkwDetail from 'Pageobjects/pkw-detail.page.js'

describe('test history detail', () => {
    before('open page list', () => {
        browser.helpers.openList();
    }); 

    // выносим проверку в отдельный тест
    it('Check images', function() {
        this.retries(2);
        // кликаем на карточку
        PkwListPage.card();
        // ожидаем появления картинки на странице деталки
        browser.waitForVisible(PkwDetail.selectorCarImage, 40000);
    });

    // проверяем переход по хистори
    it('Check button histiry', function() {
        this.retries(3);
        // нажимаем на кнопку 
        browser.click('.avn003_content .avn003_column-left');
        // ожидаем появления карточки
        browser.waitForExist('.avn001-2_content .gridcontainer');
        // получаем URL страницы, на которую перешли
        const url = browser.getUrl();
        // проверяем что он https://vw.kodix.ru
        expect(url).to.be.equal('https://vw.kodix.ru/');
    });
});