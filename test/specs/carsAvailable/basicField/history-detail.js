describe('test history detail', () => {
    before('open page list', () => {
        browser.helpers.openList();
        // переходим в деталку
        browser.leftClick('.avn001-2_content .gridcontainer', 10, 10);
        // ожидаем загрузки картинки
        browser.waitForVisible('.image-container');
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
        expect(url).to.be.equal('https://vw.kodix.ru/');
    });
});