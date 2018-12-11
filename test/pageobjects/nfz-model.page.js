import Page from './page'

class NfzModel extends Page {

    // селектор отвечается за выбранную комплектацию в модели автомобиля
    get selectedEquipment () { return '.avn008_kits__btn--selected' }
    // селектор отвечает за наличие комплектаций у моделей
    get Equipment () { return '.avn008_kits__btn' }
    // селектрок отвечает за наличие поля со всеми комплектациями
    get pickingField () { return '.avn008_kits__inner' }
    open () {
        super.open()
    }
}

export default new NfzModel()