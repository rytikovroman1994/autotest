export default function openSite() {
    // делаем размер окна браузера максимальным
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://vw.kodix.ru');
    // скрываем раздел Фильтр
    const firstFilter = browser.waitForVisible('.avn008_overlay', 60000);
    if(firstFilter === false) {
        browser.click('.avn003_column-left');
    }
    if(firstFilter === false) {
        browser.click('.avn003_column-left');
    }
}