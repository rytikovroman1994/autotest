
export default function openListNfz() {
    // делаем размер окна браузера одинакового размера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://nfz.kodix.ru');
    // открываем фильтр
    while(browser.isVisible('.avn008_filter') === true) {
        browser.click('body #prompt-toggler_filter');
    }
}