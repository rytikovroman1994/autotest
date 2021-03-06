import PkwFilter from 'Pageobjects/pkw-filter.page.js'

describe('engine-power', () => {
    const Buttun = () => browser.getLocation('.rc-slider-handle');
    const GetPower = () => browser.getText ('.avn008_filter-value-item_text-self');

    // начальная позиция ползука
    let startPosition;
    // новая локация
    let newPosition;
    // начальная возможная мощность двигателя
    let startPower;
    // новая можность двигателя
    let newPower;

    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу бюджета
    it('Page engine', () => {
        // кликаем по кнопке Бюджет
        PkwFilter.engine();
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');

        // получем кординаты 
        startPosition = Buttun();
        // проверяем что это не null
        expect(startPosition).to.not.equal(null);
    });

    // проверяем сдвиг ползунка до отмки 150
    it('Check the slider step1', () => {
        // двигаем ползунок 
        browser.click('.rc-slider-step > span:nth-child(3)');
        // получаем новую локацию
        newPosition = Buttun();
        // проверяем что локация кнопки изменилась
        expect(newPosition).to.not.equal(startPosition);
        // Проверяем что в фильтре появились данные
        browser.waitForExist('.avn008_filter-value-item_text-self');
        // Получаем мощность в цифрах
        startPower = GetPower();
    });
    // проверяем сдвиг ползунка до отмки 150-200
    it('Check the slider step2', () => {
        // двигаем ползунок
        browser.click( '.rc-slider-step > span:nth-child(2)');
        // получаем новую локацию
        newPosition = Buttun();
        // проверяем что локация кнопки изменилась
        expect(newPosition).to.not.equal(startPosition);
        // получаем новые цифры мощности двигателя 
        newPower = GetPower();
        // проверяем что данные иземенилсь 
        expect(newPower).to.not.equal(startPower);
    });

    // проверяем сдвиг ползунка до отмки более 200
    it('Check the slider step3', () => {
        // двигаем ползунок
        browser.click( '.rc-slider-step > span:nth-child(1)');
        // получаем новую локацию
        newPosition = Buttun();
        // проверяем что локация кнопки изменилась
        expect(newPosition).to.not.equal(startPosition);
        // получаем новые цифры мощности двигателя 
        newPower = GetPower();
        // проверяем что данные иземенилсь 
        expect(newPower).to.not.equal(startPower);
    });

    // проверяем сдвиг ползунка до отметки показать все
    it('Check the slider step4', () => {
        // двигаем ползунок
        browser.click('.rc-slider-step > span:nth-child(4)');
        // получаем новую локацию
        newPosition = Buttun();
        // проверяем что локация кнопки изменилась
        expect(newPosition).to.not.equal(startPosition);
        // получаем новые цифры мощности двигателя 
        newPower = GetPower();
        // проверяем что данные иземенилсь 
        expect(newPower).to.not.equal(startPower);
    });

    // проверяем, что условие фильтра сбрасывается
    it('Check that the filter is cleared', () => {
        // ожидаем, пока пропадёт блок подвала
        browser.pause(2000);
        // сбрасываем условие фильтра
        browser.click('.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item');
        // ждём пока подвал станет активным
        browser.waitUntil(
            () => browser.isExisting('.avn008_overlay_bar.avn008_overlay_bar--progress') === false,
            10000, "Подвал не стал активным после 10 секунд ожидания");
        // получаем кординаты слайдера
        newPosition = Buttun();
        // проверяем, что они равны изначальным
        browser.waitUntil(
            () => (newPosition.y == startPosition.y) === true,
            5000, "ERROR - слайдер не изменил свою поцию на изначальную при очистке фильтра");
    });
});