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
    // проверяем что блоки не налазят друг на друга
    const positionImg = browser.getLocation('.avn015_content .image-container img', 'y');
    const sizeImg = browser.getElementSize('.avn015_content .image-container img','height');

    const positionText = browser.getLocation('.avn015_content .avn015_description', 'y');
    const sizeText = browser.getElementSize('.avn015_content .avn015_description', 'height');

    const positionBottomText = browser.getLocation('.avn015_content .avn015_disclaimer', 'y');
    const sizeBottomText = browser.getElementSize('.avn015_content .avn015_disclaimer', 'height');

    browser.waitUntil(
        () => (positionImg + sizeImg) < (positionText + sizeText) < (positionBottomText + sizeBottomText),
        5000, "Блоки в подробнее наскакивают друг на друга");
    // страховочная пауза
    browser.pause(2000);
}