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
    it('page engine', () => {
        // кликаем по кнопке Бюджет
        browser.click('#react-tabs-4');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');

        // получем кординаты 
        startPosition = Buttun();
        // проверяем что это не null
        expect(startPosition).to.not.equal(null);
    });

    // проверяем сдвиг ползунка до отмки 150
    it('check the slider step1', () => {
        // двигаем ползунок 
        browser.helpers.slider( '.rc-slider-handle','.rc-slider-step > span:nth-child(3)', 5, 5 );
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
    it('check the slider step2', () => {
        // двигаем ползунок
        browser.helpers.slider( '.rc-slider-handle','.rc-slider-step > span:nth-child(2)', 5, 5 );
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
    it('check the slider step3', () => {
        // двигаем ползунок
        browser.helpers.slider( '.rc-slider-handle','.rc-slider-step > span:nth-child(1)', 5, 5 );
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
    it('check the slider step4', () => {
        // двигаем ползунок
        browser.helpers.slider( '.rc-slider-handle','.rc-slider-step > span:nth-child(4)', 5, 5 );
        // получаем новую локацию
        newPosition = Buttun();
        // проверяем что локация кнопки изменилась
        expect(newPosition).to.not.equal(startPosition);
        // получаем новые цифры мощности двигателя 
        newPower = GetPower();
        // проверяем что данные иземенилсь 
        expect(newPower).to.not.equal(startPower);
    });
});