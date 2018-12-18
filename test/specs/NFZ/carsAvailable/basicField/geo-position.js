import NfzListPage from 'Pageobjects/nfz-list.page.js'

describe('test geo position', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
    });

    // проверяем работу геолокации при удалёности 
    it('Check button remoteness', () => {
        // проверяем, что сейчас не показывает растояние от вас
        browser.waitUntil(
            () => $('.avn001-2_section_with-border .avn001-2_dealer-link__bottomText span').isVisible() === false,
            5000, "Растояние до диллера показывается без включения кнопки удалёности");

        // ожидаем появления кнопки удалёность
        browser.waitForVisible('.avn001-1_left > div > div:nth-child(3)');
        // кликаем на кнопку Удалёность 
        NfzListPage.remoteness();
        // проверяем, что сейчас показывает растояние от вас
        browser.waitUntil(
            () => $('.avn001-2_section_with-border .avn001-2_dealer-link__bottomText span').isVisible() === true,
            5000, "Растояние до диллера не показывается при включеной кнопке удалёности");
    });
});