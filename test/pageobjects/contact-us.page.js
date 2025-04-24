import { faker } from "@faker-js/faker";
import FormPage from "./form.page";

const website = faker.internet.domainName();
const source = faker.lorem.word();
const invalidEmail = "test&gmail.com";

class ContactUsPage extends FormPage {
    get supportOption() {
        return $("select[id='Reason_for_Contact__c']");
    }
    get websiteField() {
        return $("#Website");
    }
    get howDidYouHearField() {
        return $("#How_did_you_hear_about_Telnyx_Open__c");
    }
    get firstNameErrMsg() {
        return $(".mktoError");
    }
    get lastNameErrMsg() {
        return $(".mktoError");
    }
    get phoneErrMsg() {
        return $("#ValidMsgPhone_Number_Base__c");
    }
    async selectSupportOption() {
        await this.supportOption.selectByVisibleText("Support");
    }
    async typeWebsite() {
        await this.websiteField.setValue(website);
    }
    async typeHowDidYouHear() {
        await this.howDidYouHearField.setValue(source);
    }
    async typeInvalidEmail() {
        await this.businessEmailField.setValue(invalidEmail);
    }
}

export default new ContactUsPage();
