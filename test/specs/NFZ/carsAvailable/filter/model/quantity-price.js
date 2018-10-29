describe('test quantity and price', () => {
    before('open page filter', () => {
        browser.helpers.openFilter();
    });

    // проверяем что у всех карточек количество машин более нуля
    it('Check quantity', () => {
        // получаем список карточек
        const cars = $$('.avn008_car__wrap');
        for( let i = 1; i <= cars.length; i++) {
            // получаем имя модели
            const nameCar = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            // получаем количество автомобилей в каждой карточке
            const quantityCarS = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__number`);
            // проверяем что количество не является отрицательным числом
            browser.waitUntil(
                () => +quantityCarS > 0, 5000, `У модели ${nameCar} число автобобилей меньше нуля или не отображается`);
        }
    });

    // проверяем что у всех машин цена не менее 500 000
    it('Check price cars', () => {
        // получаем список карточек
        const cars = $$('.avn008_car__wrap');
        for( let i = 1; i <= cars.length; i++ ) {
            // получаем имя модели
            const nameCar = browser.getText(`div:nth-child(${i}) > div > div > div.avn008_car__info > div.avn008_car__desc > h4`);
            // получаем цены моделей
            const priseCar = browser.getText(`div:nth-child(${i}) > div > div > .avn008_car__info .avn008_car__desc .price-text`);
            // убираем пробелы междку цифрами
            const prise = priseCar.replace(/\s/g, '')
            // проверяем что автомобиль не стоит менее 1 000 000 
            browser.waitUntil(
                () => +prise > 1000000, 5000, `Стоимость модели ${nameCar} менее заявленной дилером или отсутвует`);
        }
    })
});