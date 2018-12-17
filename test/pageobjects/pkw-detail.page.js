import Page from './page'

class PkwDetail extends Page {

    // селектор, отвечающий за картинку в деталке
    get selectorCarImage () { return '.avn007-1_car-image img'}
    // селектор, нажимающий на кнопку Подробнее о комплектации
    get buttonShowMore () { return $('.avn013_usp_item--blue .avn013_usp_item_text') }
    // селектор, нажимающий на кнопку Забронировать в деталке
    get buttonBook () { return $('.avn007-2_price .btn__text') }
    // селектор, нажимающий на кнопку Забронировать в верхнем меню
    get buttonBookMenu () { return $('.avn012_content .btn__text') }
    // селектор, отвечающий за цену автомобиля в деталке
    get selectorCarPrice () { return 'div:nth-child(1) > div > div.avn007-2_price-item-text .price-text' }
    // селектор, отвечающий за сумму крудита в месяц 
    get selectorCreditPrise () { return 'div:nth-child(2) > div > div.avn007-2_price-item-text .price-text' }
    // селектор, нажимающий на кнопку Добавить к сравнению 
    get buttonCompare () { return $('.avn007-2_main-info-block > div:nth-child(2) > div > div:nth-child(1)') }
    // селектор, нажимающий на кнопку Добавить в избранное 
    get buttonFavourites () { return $('.avn007-2_main-info-block > div:nth-child(2) > div > div:nth-child(2)') }


    showMore () {
        this.buttonShowMore.click();
    }

    book () {
        this.buttonBook.click();
    }

    bookMenu () {
        this.buttonBookMenu.click();
    }

    compare () {
        this.buttonCompare.click();
    }

    favourites () {
        this.buttonFavourites.click();
    }
}

export default new PkwDetail()