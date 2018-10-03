describe('test model categories cars', () => {

    // допустимые модели седана
    const sedan = [
        'Polo',
        'Jetta',
        'Passat'
    ];

    // допустимые модели универсал
    const MPV = [
        'Passat Variant',
        'Passat Alltrack'
    ];

    // допустимые модели внедорожника
    const SUV = [
        'Tiguan',
        'Touareg',
        'Новый Touareg'
    ];

    Array.prototype.diff = function(a) {
        return this.filter(function(i){
            return a.indexOf(i) < 0;});
    };
    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем что в категории седан, только седаны
    it('check categories sedan', () => {
        // перехоим на вкладку седан
        browser.click('.avn008_model_tabs div:nth-child(2)');
        // проверяем, что все карточки имеют допустимое для седанов название
        const getNameModel = browser.getText('.avn008_car__title');
        console.log(getNameModel);
        
        // проверяем совпадение массивов
        const result = sedan.diff(getNameModel);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является седаном`);
    });

    // проверяем что в категории универсал, только универсалы
    it('check categories MPV', () => {
        // перехоим на вкладку универсал
        browser.click('.avn008_model_tabs div:nth-child(3)');
        // проверяем, что все карточки имеют допустимое для седанов название
        const getNameModel = browser.getText('.avn008_car__title');
        console.log(getNameModel);
        
        // проверяем совпадение массивов
        const result = MPV.diff(getNameModel);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является универсалом`);
    });

    // проверяем что в категории внедорожники, только внедорожники
    it('check categories SUV', () => {
        // перехоим на вкладку универсал
        browser.click('.avn008_model_tabs div:nth-child(4)');
        // проверяем, что все карточки имеют допустимое для седанов название
        const getNameModel = browser.getText('.avn008_car__title');
        console.log(getNameModel);
        
        // проверяем совпадение массивов
        const result = SUV.diff(getNameModel);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является внедорожником`);
    });
});