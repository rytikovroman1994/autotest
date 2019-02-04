/**
 * @memberOf Helpers
 * @function moreDetail
 * @param {string} conditions - дата атрибут конткретного элемента комплектации
 * @example
 *      browser.helpers.checkCheckbox('Active Info Display', '/screenshotOption/cruiseControl.png');
 */

export default function moreDetail(conditions) {
    browser.waitForVisible(`.avn008_option-check_more[data-name="${conditions}"]`);
    // открываем всплывающее окно
    browser.click(`.avn008_option-check_more[data-name="${conditions}"]`);
    // ждём появления картинки
    browser.waitUntil(
        () => browser.isExisting('.image-lazyload_overlay.is_visible .content-loader__self') === false,
        40000, `Картинка ${conditions} не отображается в Подробнее`);
    browser.waitForVisible('.avn015_content .image-container img');
    // страховочная пауза
    browser.pause(2000);
}