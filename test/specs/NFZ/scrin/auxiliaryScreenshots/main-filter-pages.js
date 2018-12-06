describe('test nfz main filter pages', () => {
    function diagonal(namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    }
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
        diagonal('model');
    });

    // делаем скриншот страницы Двигатель 
    it('Screenshot of the page engine', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_engine__card-image[data-name="Трансмиссия"]');

        diagonal('engine');
    });

    // делаем скриншот страницы Цвет-Экстерьер 
    it('Screenshot of the color page', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal('color-door');
    });

    // делаем скриншот страницы Цвет-ИНтерьер
    it('Screenshot of the color page interier', () => {
        // переключаемся на интерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(1)');
        diagonal('color-seet');
    });

    // делаем скриншот страницы Экстерьер 
    it('Screenshot of the page exterier', () => {
        // переходим на страницу экстерьер 
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        diagonal('exterier');
    });

    // делаем скриншот страницы Интерьер
    it('Screenshot of the page interier', () => {
        // переходим на страницу интерьер 
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        diagonal('interier');
    });

     // делаем скриншот страницы Финансы
     it('Screenshot of the page finance', () => {
        // переходим на страницу финансы 
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
        diagonal('finance');
    });
    
    // делаем скриншот старницы Кредит
    it('Screenshot of the page credit', () => {
        // переходим на страницу кредит 
        browser.click('.rc-slider-step > span:nth-child(2)');
        diagonal('credit');
    });

    // делаем скриншот старницы Лизинг
    it('Screenshot of the page leasing', () => {
        // переходим на страницу кредит 
        browser.click('.rc-slider-step > span:nth-child(1)');
        diagonal('leasing');
    });

    // делаем скриншот страницы Дилеры
    it('Screenshot of the page dealers', () => {
        // переходим на страницу Дилеры 
        browser.click('.avn008_filter__tab[data-name="Дилеры"]');
        diagonal('dealers');
    });
});