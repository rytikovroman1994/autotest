import Page from './page'

class NfzFilter extends Page {

    // селектор отвечающий за кнопку Очистить
    get buttomClear () { return '.avn008_overlay_bar_column-left .avn008_overlay_bar_action-item'}
    // селектор отвечающий за кнопку Показать
    get buttomShow () { return '.avn008_overlay_bar_content .avn008_overlay_submit-block_btn'}
    // селектор отвечающий за первое условие в фильтре
    get conditionFilter () { return '.avn008_filter-value-item' }
    // селектор отвечающий за количетсво автомобилей
    get numberCars () { return '.avn008_overlay_submit-block .avn008_overlay_submit-block_amount span'}
    // селектор отвечающий за минимальную цену автомобиля
    get minCarPrise () {return '.avn008_overlay_bar_column-right .avn008_overlay_submit-block_text__with-price .price-text'}


    // селектор, при нажатии на который, открывается фильтр
    get buttonFilter () { return $('body #prompt-toggler_filter') }
    // селектор, при нажатии на который, открывается страница Сравнения
    get buttonCompare () { return $('.avn003_column-right li:nth-child(1)') }
    // селектор, при нажатии на который, открывается всплывашка выбора местоположения
    get buttonPosition () { return $('.avn003_column-right li:nth-child(2)') }
    // селектор, который при нажатии подтверждает выбор города
    get buttonPositionYes () { return $('.avn005_geolocation-prompt__content .btn.aye-btn') }
    // селектор, который при нажатии выбирает другой город 
    get buttonAnotherCity () { return $('.avn005_geolocation-prompt__content .btn.nay-btn') }


    // селектор, при нажатии на который, открывается страница Модель
    get buttonModel () { return $('.avn008_filter__tab[data-name="Модель"]') }
    // селектор, при нажатии на который, открывается страница Двигатель
    get buttonEngine () { return $('.avn008_filter__tab[data-name="Двигатель"]') }
    // селектор, при нажатии на который, открывается страница Цвет
    get buttonColor () { return $('.avn008_filter__tab[data-name="Цвет"]') }
    // селектор, при нажатии на который, открывается страница Экстерьер
    get buttonExterior () { return $('.avn008_filter__tab[data-name="Экстерьер"]') }
    // селектор, при нажатии на который, открывается страница Интерьер
    get buttonInterior () { return $('.avn008_filter__tab[data-name="Интерьер"]') }
    // селектор, при нажатии на который, открывается страница Финансы
    get buttonFinance () { return $('.avn008_filter__tab[data-name="Финансы"]') }
    // селектор, при нажатии на который, открывается страница Дилеры
    get buttonDilers () { return $('.avn008_filter__tab[data-name="Дилеры"]') }
    
    open () {
        super.open()
    }
    // действия в нижнем фильтре
    clear () {
        browser.pause(1000);
        this.buttomClear.click();
    }

    show () {
        browser.pause(1000);
        this.buttomShow.click();
    }

    // дейтсвия в верхнем фильтре 
    filter () {
        browser.pause(1000);
        this.buttonFilter.click();
    }

    compare () {
        browser.pause(1000);
        this.buttonCompare.click();
    }

    position () {
        browser.pause(1000);
        this.buttonPosition.click();
    }

    yes () {
        browser.pause(1000);
        this.buttonPositionYes.click();
    }

    anotherCity () {
        browser.pause(1000);
        this.buttonAnotherCity.click();
    }

    // дейтсвия в меню 
    model () {
        browser.pause(1000);
        this.buttonModel.click();
    }

    engine () {
        browser.pause(1000);
        this.buttonEngine.click();
    }

    color () {
        browser.pause(1000);
        this.buttonColor.click();
    }

    exterior () {
        browser.pause(1000);
        this.buttonExterior.click();
    }

    interior () {
        browser.pause(1000);
        this.buttonInterior.click();
    }

    finance () {
        browser.pause(1000);
        this.buttonFinance.click();
    }

    dilers () {
        browser.pause(1000);
        this.buttonDilers.click();
    }
}

export default new NfzFilter()