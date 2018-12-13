import Page from './page'

class NfzForm extends Page {
    
    // поле ввода имени
    get fieldName () { return $('.op005_form-item[data-name="Имя"] input') }
    // поле ввода фамилии 
    get fieldSurname () { return $('.op005_form-item[data-name="Фамилия"] input') }
    // поле ввода отчетва 
    get fieldPatronymic () { return $('.op005_form-item[data-name="Отчество"] input') }
    // поле ввода телефона
    get fieldPhone () { return $('.op005_form-item[data-name="Телефон"] input') }
    // поле ввода эмейла
    get fieldEmail () { return $('.op005_form-item[data-name="Email"] input') }
    // поле ввода наименования кампании
    get fieldCompany () { return $('.op005_form-item[data-name="Наименование организации"] input') }
    // поле ввода адресса 
    get fieldAddress () { return $('.op005_form-item[data-name="Адрес"] input') }
    // поле ввода должности
    get fielAppointment () { return $('.op005_form-item[data-name="Должность"] input') }
    // кнопка Отправить заявку 
    get buttonSend () { return $('.btn_with_loader') }

    // кликаем на кнопку Отправить заявку
    send () {
        this.buttonSend.click();
    }
}

export default new NfzForm()