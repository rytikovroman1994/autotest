export default function openSite() {
    // делаем размер окна браузера максимальным
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://vw.kodix.ru');
    // открываем фильтр
    while(browser.isVisible('.avn008_model_align-center-vertical') === false) {
        browser.click('.avn003_column-left .avn003__action-item');
    }
}