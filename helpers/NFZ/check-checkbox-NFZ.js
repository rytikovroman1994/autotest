/**
 * @memberOf Helpers
 * @function checkCheckbox
 * @param {string} atribut - селектор чекбокса
 * @param {string} condition - title условия в фильтре
 * @example
 *      browser.helpers.checkCheckbox('.prefix_l_1 > div > label:nth-child(4)', 'AT');
 */

export default function checkCheckboxNfz(atribut, condition) {
    // выбираем чекбокс
    browser.click(`.checkbox[data-name="${atribut}"]`);
    // проверяем, что появилось условие в фильтре
    browser.waitUntil(
        () => browser.isExisting('.avn008_filter-value-item') === true,
        5000, "Условие не появилось в фильтре");
    // проверяем что это именно автоматическая
    expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal(condition);
    // проверяем, что кнопка "Показать" активна
    browser.waitUntil(
        () => browser.isVisible('.avn008_overlay_bar--progress') === false,
        10000, "Кнопка Показать не активна в течении 10 секунд");  
    // убираем условие
    browser.click(`.checkbox[data-name="${atribut}"]`);
    // проверяем, что условие пропало
    browser.waitUntil(
        ()=> browser.isVisible('.avn008_overlay_bar .avn008_filter-value-item_image') === false,
    5000, "На странице уже есть одно условие фильтра");
}