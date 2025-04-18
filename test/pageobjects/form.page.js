import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const businessEmail = faker.internet.email();
const companyName = faker.company.name();
const companyPhone = faker.phone.number({ style: "international" });
const phone = faker.number.int({ min: 100000000, max: 999999999 });
const request = faker.lorem.words(2);
const longPnoneNumber = faker.number.int({ min: 999999999999999 });
const wrongEmailFormat = "test@test@test.com";

export default class FormPage {
  get firstNameField () {return $("#FirstName")};
  get lastNameField () {return $("#LastName", { timeout: 12000 });}
  get businessEmailField () {return $("#Email");}
  get companyName () {return $("#Company");}
  get countryExt () {return $("#Phone_Number_Extension__c");}
  get phoneNumberField () {return $("#Phone_Number_Base__c");}
  get addInfoRequestField () {return $("#Form_Additional_Information__c");}
  get submitButton () {return $('button[type="submit"]');}
  get invalidEmailMsg () {return $("#ValidMsgEmail");}
  get emailField () {return $("#email");}

 async typeFirstName() {
    await this.firstNameField.setValue(firstName);
  }
  async typeLastName() {
    await this.lastNameField.setValue(lastName);
  }
  async typeBusinessEmail() {
    await this.businessEmailField.setValue(businessEmail);
  }
  async typeEmail() {
    await this.emailField.setValue(businessEmail);
  }
  async typeInvalidEmail() {
    await this.emailField.setValue(wrongEmailFormat);
  }
  async typeCompanyName() {
    await this.companyName.setValue(companyName);
  }
  async typeMobilePhone() {
    await this.mobilPhone.setValue(companyPhone);
  }
  async selectCountry() {
    await this.countryExt.selectByVisibleText("Ukraine (+380)");
  }
  async typePhoneNumber() {
    await this.phoneNumberField.setValue(phone);
  }
  async typeWrongEmailFormat() {
    await this.businessEmailField.setValue(wrongEmailFormat);
  }
  async typeLongPhoneNumber() {
    await this.phoneNumberField.setValue(longPnoneNumber);
  }
  async typeAddInfoRequest() {
    await this.addInfoRequestField.setValue(request);
  }
  async clickSubmitButton() {
    await this.submitButton.click();
  }
}

// export default new FormPage();