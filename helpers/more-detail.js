/**
 * @memberOf Helpers
 * @function moreDetail
 * @param {string} conditions - дата атрибут конткретного элемента комплектации
 * @param {string} way - пусть к сриншоту на локале
 * @example
 *      browser.helpers.checkCheckbox('Active Info Display', '/screenshotOption/cruiseControl.png');
 */

export default function moreDetail(conditions) {
    // открываем всплывающее окно
    browser.click(`.avn008_option-check_more[data-name="${conditions}"]`);
    // ждём появления картинки
    browser.waitForVisible('.avn015_content .image-container img');
}