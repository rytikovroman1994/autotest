export default function openSite() {
    // делаем размер окна браузера максимальным
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://vw.kodix.ru');
    // открываем фильтр
    const firstFilter = browser.waitForVisible('.react-tabs[data-tabs="true"]', 60000);
    if(firstFilter === false) {
        browser.click('#prompt-toggler_filter');
    }
}