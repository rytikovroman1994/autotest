import PkwListLk from 'Pageobjects/pkw-lk.page.js'
import faker from "faker"

describe('test account in Personal Area', function() {
    this.retries(2);
    const email = 'rytikovroman1994@gmail.com';
    const password = '12345678q'
    before('open page', function(){
        this.retries(3);
        browser.helpers.openList();
        browser.helpers.logIn(email, password);
    });

    it('Check form Family in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.familyNameText) === true,
            5000, 'Поле фамилия не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.familyNameText) === 'Фамилия *',
            5000, 'Поле фамилия изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.familyNameForm, name);
    });

    it('Check form Name in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.nameText) === true,
            5000, 'Поле имя не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.nameText) === 'Имя *',
            5000, 'Поле имя изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.nameForm, name);
    });

    it('Check form middleName in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.middleNameText) === true,
            5000, 'Поле отчество не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.middleNameText) === 'Отчество',
            5000, 'Поле отчество изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.middleNameForm, name);
    });

    it('Check form email in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.emailText) === true,
            5000, 'Поле эмеил не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.emailText) === 'E-mail *',
            5000, 'Поле эмеил изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.emailForm, name);
    });

    it('Check form number in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.phoneNumberText) === true,
            5000, 'Поле номер телефона не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.phoneNumberText) === 'Номер телефона',
            5000, 'Поле номер телефона изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.phoneNumberForm, name);
    });

    it('Check form address in lk', function() {
        this.retries(1);
        // проверяем, что существует поле Фамилия
        browser.waitUntil(
            () => browser.isVisible(PkwListLk.addressText) === true,
            5000, 'Поле номер телефона не сущеутсвует');
        // проверяем, что поле называется именно фамилия
        browser.waitUntil(
            () => browser.getText(PkwListLk.addressText) === 'Адрес доставки',
            5000, 'Поле номер телефона изменило название');

        // вводим новый текст 
        const name = faker.name.firstName(1);
        browser.addValue(PkwListLk.addressForm, name);
    });
});