describe('test skip', () => {
    it('test', () => {
    const log = browser.session();
    console.log(log);
    console.log(log.value.browserName);
    if( log.value.browserName === 'chrome') {
        it('test great', () => {
            browser.url('https://vw.kodix.ru');
        });
    }
});
    it.skip('test failed', () => {
        try {

        } catch(e) {
            console.log('Ошибка did not match a known command из-за того, что браузер ФФ не умеет двигать курсор');
            //  проба комента!
        }
    });
});