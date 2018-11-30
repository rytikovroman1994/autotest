export default function openFilter() {
    // делаем размер окна браузера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://nfz.kodix.ru');
    // открываем фильтр
    while(browser.isVisible('.react-tabs[data-tabs="true"]') === false) {
        browser.click('body #prompt-toggler_filter');
    }
}