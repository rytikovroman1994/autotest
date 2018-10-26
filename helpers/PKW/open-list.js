export default function openList() {
    // делаем размер окна браузера одинакового размера
    browser.windowHandleSize ({width: 1366, height: 768});
    // переходим на страницу
    browser.url('https://vw.kodix.ru');
    // открываем фильтр
    while(browser.isVisible('.avn008_model_align-center-vertical') === true) {
        browser.click('body #prompt-toggler_filter');
    }
}