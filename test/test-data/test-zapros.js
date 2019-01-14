describe('test test', () => {
    before('open site', () => {
        browser.url('https://nfz.kodix.ru/');
    });

    it('test test 2', () => {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://nfz.kodix.ru/api/offers/filter`, false);
        xhr.send('trimline":["amarok_1pa_comfortline"]');
        // const text = JSON.parse(xhr.responseText);
        // console.log(text.models);
        console.log();
    });
});