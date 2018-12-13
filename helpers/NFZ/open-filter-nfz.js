import NfzFilter from 'Pageobjects/nfz-filter.js'

export default function openFilter() {
    // делаем размер окна браузера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://nfz.kodix.ru');
    // открываем фильтр
    while(browser.isExisting('.avn008_filter') === false) {
        NfzFilter.filter();
    }
}