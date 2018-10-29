/**
 * @memberOf Helpers
 * @function checkCheckbox
 * @param {string} selector - селектор чекбокса
 * @param {string} condition - title условия в фильтре
 * @example
 *      browser.helpers.checkCheckbox('.prefix_l_1 > div > label:nth-child(4)', 'AT');
 */

export default function checkCheckboxNfz(selector, condition) {
    // выбираем чекбокс
    browser.click(selector);
    // проверяем, что появилось условие в фильтре
    browser.waitUntil(
        () => browser.isExisting('.avn008_filter-value-item') === true,
        5000, "Условие не появилось в фильтре");
    // проверяем что это именно автоматическая
    expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal(condition);
    // проверяем, что кнопка "Показать" активна
    browser.waitUntil(
        () => browser.isVisible('avn008_overlay_bar--progress') === false,
        10000, "Кнопка Показать не активна в течении 10 секунд");  
    // переходим к списку
    browser.click('.avn008_overlay_bar_column-right .btn_cta');
}