import NfzListPage from 'Pageobjects/nfz-list.page.js'
import NfzDetail from 'Pageobjects/nfz-detail.page.js'

describe('test cost of owning a slider', () => {
    before('open page list', () => {
        browser.helpers.openListNfz();
    }); 

    // выносим ожидание картинки в отдельный тест
    it('Check image previes', () => {
        // ждём появления картинки в карточках 
        browser.waitForVisible('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img');
        // кликаем по карточке
        NfzListPage.card();
        // проверм что появилась картинка в деталке
        browser.waitForVisible(NfzDetail.selectorCarImage, 40000);
    });

    // проверяем, что сущуествует блок Стоимость владения автомобилем и в нём есть слайдер 
    it('Check block cost owning and slider', () => {
        if(browser.isExisting('.bg-white') === true) {
            // скролим до данного блока
            browser.scroll('.bg-white', 0, 50);
            // ищём чекбоксы срока эксплуатации 
            const operationPeriod = $$('.radio-group__item').length;
            console.log(operationPeriod);
            // проверяем, наличе слайдеров 
            for( let i = 1; i <= operationPeriod; i++) {
                // выбираем срок эксплуатации 
                browser.click(`.radio-group__horizontal > div:nth-child(${i}) > label`);
                // ждём пока блок перерендерится
                browser.pause(2000);
                // проверяеем, что слайдер отображется 
                browser.waitUntil(
                    () => browser.isVisible('.rc-slider-with-marks .rc-slider-handle') === true,
                    5000, "Слайдер не отображается в Срок Эксплотации");
            }
        }
    });
});