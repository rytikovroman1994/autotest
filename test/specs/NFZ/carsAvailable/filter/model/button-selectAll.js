import NfzModel from 'Pageobjects/nfz-model.page.js'

describe('test button select all', () => {
    // количество комплектаций у модели 
    let nubber;
    // список моделей
    const list = [
        'Caddy',
        'Caddy (коммерческий)',
        'Crafter',
        'Amarok',
        'California',
        'Caravelle',
        'Multivan',
        'Transporter'
    ];
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // провеярем работу кнопки "Выбрать все"
    it('Check button select all', () => {
        // отрываем меню выбора комплектаций в рандомной карточке
        browser.click(`.avn008_car__wrap[data-name="${list[Math.floor(Math.random()*list.length)]}"]`);
        // считаем количество комплектаций
        nubber = $$(NfzModel.Equipment).length;
        // проверяем что нет не одной активной кнопки комплектации
        console.log(NfzModel.selectedEquipment);
        browser.waitUntil(
            () => browser.isExisting(NfzModel.selectedEquipment) === false,
            5000, "На странице есть изначально активная кнопка комплектации");
        // ожидаем появления кнопки
        browser.waitForVisible(`${NfzModel.pickingField} div:nth-child(${nubber})`);
        // кликаем по кнопке "Выбрать всё"
        browser.click(`${NfzModel.pickingField} div:nth-child(${nubber})`);
    });

    // проверяем работу кнопки "Отменить всё"
    it('Check buttun cancel all', () => {
        // нажимаеи на кнопку 
        browser.click(`${NfzModel.pickingField} div:nth-child(${nubber})`);
        // проверяем, что все активные кнопки комплектации пропали
        browser.waitUntil(
            () => browser.isExisting(NfzModel.selectedEquipment) === false,
            5000, "В фильре осталась выбранная комплектация");
    });
});