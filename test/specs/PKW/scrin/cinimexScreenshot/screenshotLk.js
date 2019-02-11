import PkwListLk from 'Pageobjects/pkw-lk.page.js'

describe('test screenShot page LK', function() {
    this.retries(2);
    function diagonal(nameBrowser, namePage) {
        // делаем мобильный размер экрана
        browser.windowHandleSize ({width: 400, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/account/${nameBrowser}/400-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем планшетный размер экрана
        browser.windowHandleSize ({width: 800, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/account/${nameBrowser}/800-${namePage}.png`);
        expect(screen).to.not.equal(null);

        // делаем пк размер экрана
        browser.windowHandleSize ({width: 1366, height: 1200});
        browser.pause(3000);
        var screen = browser.saveScreenshot(`./snapshot/account/${nameBrowser}/1366-${namePage}.png`);
        expect(screen).to.not.equal(null);
    };

    const email = 'rytikovroman1994@gmail.com';
    const password = '12345678q'
    // запоминаем имя браузера
    let nameBrowser;
    before('open page', function(){
        this.retries(3);
        browser.helpers.openList();
        // получаем имя браузера 
        nameBrowser = browser.desiredCapabilities.browserName;
        browser.helpers.logIn(email, password);
    });

    // скриншот учёной записи
    it('LK-account', () => {
        browser.pause(1000);
        diagonal(nameBrowser, 'account');
    });

    // скриншот страницы смены пароля
    it('LK-password', () => {
        // переходим на сттаницу пароль  
        PkwListLk.password();
        browser.pause(1000);
        diagonal(nameBrowser, 'password');
    });

    // скриншот страницы безопасность 
    it('Lk-security', () => {
        // переходим на сттаницу безопастность   
        PkwListLk.security();
        browser.pause(1000);
        diagonal(nameBrowser, 'security');
    });

    // скриншот страницы социальные 
    it('LK-social', () => {
        // переходим на сттаницу социальные   
        PkwListLk.social();
        browser.pause(1000);
        diagonal(nameBrowser, 'social');
    });

    // скриншот страницы активные сеансы 
    it('LK-activ', () => {
        // переходим на сттаницу активные сеансы   
        PkwListLk.activ();
        browser.pause(1000);
        diagonal(nameBrowser, 'activ');
    });

    // скриншот страницы приложения 
    it('LK-attachment', () => {
        // переходим на сттаницу активные сеансы   
        PkwListLk.attachment();
        browser.pause(1000);
        diagonal(nameBrowser, 'attachment');
    });

    // скриншот страницы выход 
    it('LK-exit', () => {
        // переходим на сттаницу активные сеансы   
        PkwListLk.exit();
        browser.pause(1000);
        diagonal(nameBrowser, 'exit');
    });
});