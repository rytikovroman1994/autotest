describe.skip('test material and options', () => {
    before('open page helm', () => {
        browser.helpers.openSite();
        // переходим на страницу интерьер
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // переходим на страницу руль 
        browser.click('.avn008_filter__second-tab[data-name="Руль"]');
        // ожидаем загрузки картинки руль
        browser.waitForVisible('.avn008_image-switcher_image');
    })

    // проверяем чекбокс материал-кожа
    it('Material leather', () => {
        browser.helpers.checkCheckbox('Кожа', 'КОЖАНЫЙ РУЛЬ');
    });

    // проверяем, что условие появилось в деталке машины
    it('Check the equipment in detail Кожанный руль', () => {
        const newArray = browser.helpers.checkConditions('Кожа', 'Кожаный руль');
        // проверяем
        expect(newArray).to.be.equal('Кожаный руль');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Кожа', 'Руль');
    });

    // проверяем чекбокс опции- подогрев
    it('Options heating', () => {
        browser.helpers.checkCheckbox('Подогрев', 'ПОДОГРЕВ');
    });

    it('Check the equipment in detail Подогрев', () => {
        const newArray = browser.helpers.checkConditions('Подогрев', 'Подогрев руля');
        // проверяем
        expect(newArray).to.be.equal('Подогрев руля');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Подогрев', 'Руль');
    });

    // проверяем чекбокс опции-мультируль
    it('Options multi-wheel', () => {
        browser.helpers.checkCheckbox('Мультируль', 'МУЛЬТИРУЛЬ');
    });

    it('Check the equipment in detail Мультируль', () => {
        const newArray = browser.helpers.checkConditions('Мультируль', 'Мультируль');
        // проверяем
        expect(newArray).to.be.equal('Мультируль');

        // выходим из деталки 
        browser.helpers.fromDetailToFilter('Интерьер', 'Мультируль', 'Руль');
    });

    // проверыем чекбокс опции-подрулеые лепестки 
    it('Options  paddle-operated gearbox', () => {
        browser.helpers.checkCheckbox('Подрулевые лепестки', 'ПОДРУЛЕВЫЕ ЛЕПЕСТКИ');
    });

    it('Check the equipment in detail Подрулевые лепестки', () => {
        const newArray = browser.helpers.checkConditions('Подрулевые лепестки', 'Подрулевые лепестки');
        // проверяем
        expect(newArray).to.be.equal('Подрулевые лепестки');
    });
});