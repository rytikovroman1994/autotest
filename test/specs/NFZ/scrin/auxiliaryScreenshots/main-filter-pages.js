describe.skip('test nfz main filter pages', () => {
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/nfzMainFilterPages/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    // запоминаем имя браузера
    let nameBrowser;
    before('open first page', () => {
        browser.helpers.openFilter();
        // ожидаем пока загрузится последняя картинка модели
        browser.waitForVisible('div:nth-child(8) .image-container img');
        // делаем непрозрачный фон фильтра
        browser.execute(
            () => document.getElementsByClassName('avn008_filter')[0].style.background = 'rgba(29,31,32,1)'
        );
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
    });

    // делаем скриншот страницы Модель
    it('Screenshot of the model page', () => {
        diagonal(nameBrowser, 'model');
    });

    // делаем скриншот страницы Двигатель 
    it('Screenshot of the page engine', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Двигатель"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_engine__card-image[data-name="Трансмиссия"]');

        diagonal(nameBrowser,'engine');
    });

    // делаем скриншот страницы Цвет-Экстерьер 
    it('Screenshot of the color page', () => {
        // переходим на страницу двигатель 
        browser.click('.avn008_filter__tab[data-name="Цвет"]');
        // ждём пока загрузится последняя страница 
        browser.waitForVisible('.avn008_image-switcher_image');
        diagonal(nameBrowser, 'color-door');
    });

    // делаем скриншот страницы Цвет-ИНтерьер
    it('Screenshot of the color page interier', () => {
        // переключаемся на интерьер
        browser.click('.grid_s_12:nth-child(1) .rc-slider-dot:nth-child(1)');
        diagonal(nameBrowser,'color-seet');
    });

    // делаем скриншот страницы Экстерьер 
    it('Screenshot of the page exterier', () => {
        // переходим на страницу экстерьер 
        browser.click('.avn008_filter__tab[data-name="Экстерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        diagonal(nameBrowser,'exterier');
    });

    // делаем скриншот страницы Интерьер
    it('Screenshot of the page interier', () => {
        // переходим на страницу интерьер 
        browser.click('.avn008_filter__tab[data-name="Интерьер"]');
        // ждём пока загрузится последняя картинка 
        browser.waitForVisible('div:nth-child(4) img');
        diagonal(nameBrowser,'interier');
    });

     // делаем скриншот страницы Финансы
     it('Screenshot of the page finance', () => {
        // переходим на страницу финансы 
        browser.click('.avn008_filter__tab[data-name="Финансы"]');
        diagonal(nameBrowser,'finance');
    });
    
    // делаем скриншот старницы Кредит
    it('Screenshot of the page credit', () => {
        // переходим на страницу кредит 
        browser.click('.rc-slider-step > span:nth-child(2)');
        diagonal(nameBrowser,'credit');
    });

    // делаем скриншот старницы Лизинг
    it('Screenshot of the page leasing', () => {
        // переходим на страницу кредит 
        browser.click('.rc-slider-step > span:nth-child(1)');
        diagonal(nameBrowser,'leasing');
    });

    // делаем скриншот страницы Дилеры
    it('Screenshot of the page dealers', () => {
        // переходим на страницу Дилеры 
        browser.click('.avn008_filter__tab[data-name="Дилеры"]');
        diagonal(nameBrowser,'dealers');
    });
});