import Page from './page'

class PkwListLk extends Page {
    // селектор, отвечающий за кнопку переключения чекбокса пол мужчина
    get buttonMan () {return $('.form__row  > label:nth-child(1) > span') }
    // селектор, отвечающий за кнопку пеклчения чекбокса пол женщина
    get buttonWoman () {return $('.form__row  > label:nth-child(2) > span') }

    // селекторы, отвечающие за поле Фамилия
    get familyNameText () {return '.form__label[for="lastName"]'}
    get familyNameForm () { return '#lastName'}

    // селекторы, отвечающие за поле Имя
    get nameText () {return '.form__label[for="firstName"]'}
    get nameForm () {return '#firstName'}

    // селекторы, отвечающие за поле Отчество
    get middleNameText () {return '.form__label[for="middleName"]'}
    get middleNameForm () {return '.form__input[name="user.attributes.middleName"]'}

    // селекторы, отвечающие за поле емаил
    get emailText () {return '.form__label[for="email"]'}
    get emailForm () {return '#email'}

    // селекторы, отвечающие за поле номер телефона 
    get phoneNumberText () {return '.form__label[for="phoneNumber"]'}
    get phoneNumberForm () {return '.form__input.phone-mask[name="user.attributes.phoneNumber"]'}

    // селектор, отвечающий за поле адресс
    get addressText () {return '.form__label[for="address"]'}
    get addressForm () {return '#address'}

    // селекторы, отвечающие за поле дата рождения
    get getAltDate () {return $('#altDate')}

    // селекторы, отвечающие за поле язык интерейса 
    get language () {return $('.form__select')}

    // селектор кнопки учётная запись
    get accountButton () {return $('li:nth-child(1) a')}
    // селектор кнопки пароль
    get passwordButton () {return $('li:nth-child(2) a')}
    // селектор кнопки безопасность 
    get securityButton () {return $('li:nth-child(3) a')}
    // селектор кнопки соц сети
    get socialButton () {return $('li:nth-child(4) a')}
    // селектор кнопки актавные сеансы
    get activSeansButton () {return $('li:nth-child(5) a')}
    // селектор кнопки прилодение
    get attachmentButton () {return $('li:nth-child(6) a')}
    // селектор кнопки выход
    get exitButton () {return $('li:nth-child(7) a')}


    man () {
        this.buttonMan.click();
    }

    woman () {
        this.buttonWoman.click();
    }

    data () {
        this.getAltDate.click();
    }

    language () {
        this.language.click();
    }

    account () {
        this.accountButton.click();
    }

    password () {
        this.passwordButton.click();
    }

    security () {
        this.securityButton.click();
    }

    social () {
        this.socialButton.click();
    }

    activ () {
        this.activSeansButton.click();
    }

    attachment () {
        this.attachmentButton.click();
    }

    exit () {
        this.exitButton.click();
    }
}

export default new PkwListLk()