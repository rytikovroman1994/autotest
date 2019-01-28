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
        'Teramont',
        'Tiguan',
        'Новый Touareg'
    ];

    // допустимые мождели хэтчбэка
    const hatchback = [
        'Golf'
    ];

    before('open page filter', () => {
        browser.helpers.openSite();
    });

    // проверяем что в категории седан, только седаны
    it('check categories sedan', function() {
        this.retries(3);
        // создаём массив
        const listSedan =[];
        // перехоим на вкладку седан
        browser.click('.avn008_model_tabs div:nth-child(2)');
        // получаем количетсво моделей в категории
        const numberModel = browser.getText('.avn008_car__title');
        console.log(numberModel);
        for( let i = 1; i <= numberModel.length; i++ ) {
            // проверяем, что все карточки имеют допустимое для седанов название
            const getNameModel = browser.getText(`div:nth-child(${i}) > div > div > div > h4`);
            console.log(getNameModel);
            listSedan.push(getNameModel);
            if(browser.isVisible('.slick-next') === true) {
                if(browser.isVisible('.slick-next .slick-disabled') === false)
                // двигаем слайдер
                browser.click('.slick-next');
            }
        }
        
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(sedan,listSedan);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является седаном`);
    });

    // проверяем что в категории универсал, только универсалы
    it('check categories MPV', function() {
        this.retries(3);
        // создаём массив
        const listSedan =[];
        // перехоим на вкладку седан
        browser.click('.avn008_model_tabs div:nth-child(3)');
        // получаем количетсво моделей в категории
        const numberModel = browser.getText('.avn008_car__title');
        console.log(numberModel);
        for( let i = 1; i <= numberModel.length; i++ ) {
            // проверяем, что все карточки имеют допустимое для седанов название
            const getNameModel = browser.getText(`div:nth-child(${i}) > div > div > div > h4`);
            console.log(getNameModel);
            listSedan.push(getNameModel);
            if(browser.isVisible('.slick-next') === true) {
                if(browser.isVisible('.slick-next .slick-disabled') === false)
                // двигаем слайдер
                browser.click('.slick-next');
            }
        }
        
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(MPV, listSedan);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является универсалом`);
    });

    // проверяем что в категории внедорожники, только внедорожники
    it('check categories SUV', function() {
        this.retries(3);
        // создаём массив
        const listSedan =[];
        // перехоим на вкладку седан
        browser.click('.avn008_model_tabs div:nth-child(4)');
        // получаем количетсво моделей в категории
        const numberModel = browser.getText('.avn008_car__title');
        console.log(numberModel);
        for( let i = 1; i <= numberModel.length; i++ ) {
            // проверяем, что все карточки имеют допустимое для седанов название
            const getNameModel = browser.getText(`div:nth-child(${i}) > div > div > div > h4`);
            console.log(getNameModel);
            listSedan.push(getNameModel);
            if(browser.isVisible('.slick-next') === true) {
                if(browser.isVisible('.slick-next .slick-disabled') === false)
                // двигаем слайдер
                browser.click('.slick-next');
            }
        }
        
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(SUV, listSedan);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является внедорожником`);
    });

    // проверяем что в категории внедорожники, только внедорожники
    it('check categories hatchback', function() {
        this.retries(3);
        let numberModelArray;
        // создаём массив
        const listSedan =[];
        // перехоим на вкладку седан
        browser.click('.avn008_model_tabs div:nth-child(5)');
        // получаем количетсво моделей в категории
        const numberModel = browser.getText('.avn008_car__title');
        if((typeof numberModel == 'string') === true) {
            numberModelArray = 1;
        }
        for( let i = 1; i <= numberModelArray; i++ ) {
            // проверяем, что все карточки имеют допустимое для седанов название
            const getNameModel = browser.getText(`div:nth-child(${i}) > div > div > div > h4`);
            console.log(getNameModel);
            listSedan.push(getNameModel);
            if(browser.isVisible('.slick-next') === true) {
                if(browser.isVisible('.slick-next .slick-disabled') === false)
                // двигаем слайдер
                browser.click('.slick-next');
            }
        }
        
        // проверяем совпадение массивов
        const result = browser.helpers.compareArray(hatchback, listSedan);
        // считаем количество несовпадений между массивами
        const emptyArray = result.length;
        // количество элементов в массиве не должно быть больше 0
        browser.waitUntil(
            () => (emptyArray == 0) === true,
            5000, `${result[0]} не является хэтчбеком`);
    });
});