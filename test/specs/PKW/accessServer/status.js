describe('status server', () => {
    before(() => {
        // переходим на страницу
        browser.url('https://vw.kodix.ru');
    });
    it('check status server', () => {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://vw.kodix.ru/api/offers/cities', false);
        const result = xhr.send("result_cat=true");
        console.log(result);

        if (xhr.status != 200) {
            // обработать ошибку
            console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
          } 
    });
});