describe.skip('test nfz main filter pages', () => {
    before('open first page', () => {
        browser.helpers.openFilter();
        // ожидаем пока загрузится последняя картинка модели
        browser.waitForVisible('div:nth-child(8) .image-container img');
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
    });

    // делаем скриншот страницы Модель
    it('Screenshot of the model page', () => {
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/model.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Двигатель 
    it('Screenshot of the page engine', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_engine__card-image[data-name="Трансмиссия"]');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/engine.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Цвет-Экстерьер 
    it('Screenshot of the color page', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_image-switcher_image');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/color-door.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Цвет-ИНтерьер
    it('Screenshot of the color page interier', () => {
        // переключаемся на интерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(1)');
        // ждём пока перерендерится картинка
        browser.pause(3000);
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/color-seet.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Экстерьер 
    it('Screenshot of the page exterier', () => {
        // переходим на страницу экстерьер 
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/exterier.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Интерьер
    it('Screenshot of the page interier', () => {
        // переходим на страницу интерьер 
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/interier.png');
        expect(screen).to.not.equal(null);
    });

     // делаем скриншот страницы Финансы
     it('Screenshot of the page finance', () => {
        // переходим на страницу финансы 
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/finance.png');
        expect(screen).to.not.equal(null);
    });

    // делаем скриншот страницы Дилеры
    it('Screenshot of the page dealers', () => {
        // переходим на страницу Дилеры 
        browser.click('.avn008_filter__tab[data-name="Дилеры"]');
        var screen = browser.saveScreenshot('./snapshot/nfzMainFilterPages/dealers.png');
        expect(screen).to.not.equal(null);
    });
});