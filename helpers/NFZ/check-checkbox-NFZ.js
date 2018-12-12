/**
 * @memberOf Helpers
 * @function checkCheckboxNfz
 * @param {string} atribut - селектор чекбокса
 * @param {string} condition - title условия в фильтре
 * @param {string} picture - название картинке в ссылке на неё
 * @example
 *      browser.helpers.checkCheckbox('.prefix_l_1 > div > label:nth-child(4)', 'AT', 'wheel');
 */
import NfzFilter from 'Pageobjects/nfz-filter.js'

export default function checkCheckboxNfz(atribut, condition, picture) {
    // находим елемент на странице 
    const checkbox = $(`.checkbox[data-name="${atribut}"]`);
    browser.pause(1000);
    // выбираем чекбокс
    checkbox.click();
    // проверяем, что появилось условие в фильтре
    browser.waitUntil(
        () => browser.isExisting(NfzFilter.conditionFilter) === true,
        5000, "Условие не появилось в фильтре");
    // проверяем что это именно выбранное условие
    expect(browser.getText('.avn008_filter-value-item_text__bottom')).to.be.equal(condition);
    // получаем ссылку на картинку условия в фильтре
    const linkPicture = browser.getAttribute('.avn008_filter-value-item_image img', 'src');
    // проверяем что подставилась нужная картинка 
    expect(linkPicture).to.be.include(picture);
    console.log(linkPicture)
    // проверяем что картинка отображается
    const checkStatus = () => {
        var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", `${linkPicture}`, false);
        xhr.send("result_cat=true");
        return xhr.status;
    }
    console.log(checkStatus());
    browser.waitUntil(
        () => checkStatus() != 404,
        5000, `У ${atribut} отсутствует картинка в фильтре`);  
    // убираем условие
    browser.click(`.checkbox[data-name="${atribut}"]`);
    // проверяем, что условие пропало
    browser.waitUntil(
        ()=> browser.isVisible(NfzFilter.conditionFilter) === false,
    5000, "На странице уже есть одно условие фильтра");
}