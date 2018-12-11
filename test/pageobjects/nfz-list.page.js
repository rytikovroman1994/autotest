import Page from './page'

class NfzListPage extends Page {

    // селектор, отвечающий за кнопку переключения отображения карточек
    get buttonList () { return '.is_visible .toggle_switch__states span'}
    // селектор, отвечающий за нажатие на карточку 
    get carCards () { return $('.avn001_display__enable-hover > div:nth-child(1) > div > div > div:nth-child(1) img')}
    // селектор, отвечающий за нажатие на кнопку Цена
    get buttonPrice () { return $('.avn001-1_inner .avn001-1_sort div:nth-child(2)') }
    // селектор, отвечающий за нажатие на кнопку Удалёность 
    get buttonRemoteness () { return $('.avn001-1_inner .avn001-1_sort div:nth-child(2)') }

    open () {
        super.open()
    }

    card () {
        this.carCards.click();
    }

    price () {
        this.buttonPrice.click();
    }

    remoteness () {
        this.buttonRemoteness.click();
    }
}

export default new NfzListPage()