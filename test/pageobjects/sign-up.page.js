import FormPage from "./form.page";
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const shortPassword = faker.internet.password({
    length: 11,
    pattern: /[0-9A-z_@]/,
    prefix: "1@",
});
const password = faker.internet.password({
    length: 12,
    pattern: /[0-9A-z_@]/,
    prefix: "1@",
});
const noUpperCasePsw = faker.internet.password({
    length: 12,
    pattern: /[0-9a-z_@]/,
    prefix: "1@",
});

class SignUpPage extends FormPage {
    get firstNameField() {
        return $("#first_name");
    }
    get lastNameField() {
        return $("#last_name");
    }
    get passwordField() {
        return $("#password");
    }
    get tersmConditionsBox() {
        return $("#terms_and_conditions");
    }
    get signUpBtn() {
        return $('button[type="submit"]');
    }
    get paswErrorLengthMsg() {
        return $("#passwordMinLength");
    }
    get firstNameErrMsg() {
        return $("#first_name_message");
    }
    get lastNameErrMsg() {
        return $("#last_name_message");
    }
    get emailErrMsg() {
        return $(".c-UUKrH.c-UUKrH-kDyeyw-type-error");
    }
    get noUpperCaseErrMsg() {
        return $("#passwordUpperCase");
    }
    get termsCondErrMsg() {
        return $("#terms_and_conditions_message");
    }
    async typeFirstName() {
        await this.firstNameField.setValue(firstName);
    }
    async typeLastName() {
        await this.lastNameField.setValue(lastName);
    }
    async typePassword() {
        await this.passwordField.setValue(password);
    }
    async typeShortPassword() {
        await this.passwordField.setValue(shortPassword);
    }
    async typeNoUpperCasePsw() {
        await this.passwordField.setValue(noUpperCasePsw);
    }
    async checkTermsConditionsBox() {
        await this.tersmConditionsBox.click();
    }
    async clickSingUpBtn() {
        await this.signUpBtn.click();
    }
}

export default new SignUpPage();
