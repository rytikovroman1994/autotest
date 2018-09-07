describe('transmission', () => {
    // количетсво объектов в блоке фильтра
    const filter = () => $$('.avn008_filter-value-item').length;
    // начальное кол-во фильтров
    let primaryFilter;
    // новое количество фильтров
    let newFilter;

    before(() => {
        browser.helpers.openSite();
    });

    // переходим на страницу двигателя
    it('page engine', () => {
        // кликаем по кнопке Бюджет
        browser.click('#react-tabs-4');
        // ожидаем перехода на страницу 
        browser.waitForExist('.gridcontainer.avn008_filter__grid-align');
    });

    // считаем количество объектов в блоке 
    it('consider objects', () => {
        primaryFilter = filter();
        // проверяем что ответ не null
        expect(primaryFilter).to.not.equal(null);
    });

    // добавляем фильтры
    it('add filters', () => {
        // добавляем фильтр
        browser.click('div:nth-child(3) > div > label:nth-child(3)');
        // считаем количество фильтров
        newFilter = filter();
        // проверяем что колво фильтров увеличилось на 1
        expect(newFilter).to.be.equal(primaryFilter + 1);
        // добавляем ещё один фильтр
        browser.click('div:nth-child(3) > div > label:nth-child(4)');
        // считаем количетсво фильтров
        newFilter = filter();
        // проверяем что колво фильров увеличилось на 2
        expect(newFilter).to.be.equal(primaryFilter + 2);
    });

    // удаляем фильтры
    it('add filters', () => {
        // добавляем фильтр
        browser.click('div:nth-child(3) > div > label:nth-child(3)');
        // считаем количество фильтров
        newFilter = filter();
        // проверяем что колво фильтров уменьшилось на 1
        expect(newFilter).to.be.equal(primaryFilter + 1);
        // добавляем ещё один фильтр
        browser.click('div:nth-child(3) > div > label:nth-child(4)');
        // считаем количетсво фильтров
        newFilter = filter();
        // проверяем что колво фильров уменьшилось на 2
        expect(newFilter).to.be.equal(primaryFilter);
    });
});