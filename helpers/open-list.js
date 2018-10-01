export default function openList() {
    // делаем размер окна браузера одинакового размера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://vw.kodix.ru');
    // открываем фильтр
    const firstFilter = browser.waitForVisible('.avn008_model_align-center-vertical', 20000);
    if(firstFilter === true) {
        browser.click('#prompt-toggler_filter');
    }
}