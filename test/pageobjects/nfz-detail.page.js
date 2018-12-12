import Page from './page'

class NfzDetail extends Page {

    // селектор, отвечающий за картинку в деталке
    get selectorCarImage () { return '.preview_img img'}
    // селектор, нажимающий на кнопку показать ещё
    get buttonShowMore () { return $('.avn013_usp_item__show-more .avn013_usp_item_text') }
    // селектор, нажимающий на кнопку Забронировать в деталке
    get buttonBook () { return $('.mainStageinfo .btn_cta') }
    // селектор, нажимающий на кнопку Забронировать в верхнем меню
    get buttonBookMenu () { return $('.avn012_content .btn__text') }
    // селектор, нажимающий на кнопку В трейд ин
    get buttonTrade () { return $('.mainStageinfo_section-buy .checkbox') }
    // селектор, нажимающий на кнопку Рассчитать
    get buttonCalculate () { return $('.mainStageinfo_section-credit .mainStageinfo_button-credit')}
    // селектор, нажимающий на кнопку Кредит 
    get buttonCredit () { return $('.mainStageinfo_creditTab') }
    // селектор, нажимающий на кнопку Лизинг 
    get buttonLeasing () { return $('.mainStageinfo_creditTabs > div:nth-child(2)') }
    // селектор, нажимающий на кнопку Заполнить заявку
    get buttonFill () { return $('.nfz002_foot__wrap .btn__text') }
    // селектор, отвечающий за цену автомобиля в деталке
    get selectorCarPrice () { return ('.mainStageinfo_section-buy h3 .price-text') }

    open () {
        super.open()
    }

    selectorImage () {
        this.selectorCarImage();
    }

    selectorPrice () {
        this.selectorCarPrice();
    }

    showMore () {
        this.buttonShowMore.click();
    }

    book () {
        this.buttonBook.click();
    }

    bookMenu () {
        this.buttonBookMenu.click();
    }

    trade () {
        this.buttonTrade.click();
    }

    calculate () {
        this.buttonCalculate.click();
    }

    credit () {
        this.buttonCredit.click();
    }

    leasing () {
        this.buttonLeasing.click();
    }

    fill () {
        this.buttonFill.click();
    }
}

export default new NfzDetail()