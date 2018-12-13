import NfzFilter from 'Pageobjects/nfz-filter.js'

export default function openFilter() {
    // делаем размер окна браузера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://nfz.kodix.ru');
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'https://vw.kodix.ru/', false);
        xhr.send("result_cat=true");

        if (xhr.status != 200) {
            // обработать ошибку
            console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
          } 
    // ждём пока откроется фильтр 
    browser.waitForVisible('.avn008_filter');
    // открываем фильтр
    while(browser.isExisting('.avn008_filter') === false) {
        NfzFilter.filter();
    }
}