import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test history detail', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
    }); 

    // выносим проверку по картинке, для того, что бы проверка теста от неё не зависила
    it('Check detail images', () => {
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
    });

    // проверяем переход по хистори
    it('Check button histiry', () => {
        // нажимаем на кнопку 
        browser.click('.avn003_content .avn003_column-left');
        // ожидаем появления карточки
        browser.waitForExist('.avn001-2_content .gridcontainer');
        // получаем URL страницы, на которую перешли
        const url = browser.getUrl();
        // проверяем что он https://vw.kodix.ru
        expect(url).to.be.equal('https://nfz.kodix.ru/');
    });
});