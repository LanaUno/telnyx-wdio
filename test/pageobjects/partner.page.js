import FormPage from "./form.page";

class PartnerPage extends FormPage {
    get partnerTypeOption() {
        return $('select[id="Form_Partner_Type__c"]');
    }
    get invalidPnoneMsg() {
        return $("#ValidMsgPhone_Number_Base__c");
    }
    get becomeAPartnerFormHeader() {
        return $(".c-PJLV.c-fKwEGa.c-PJLV-cvZNBt-dark-false.c-frvnKx");
    }
    async selectOptionSaasIsvTech() {
        await this.partnerTypeOption.selectByVisibleText("SaaS / ISV / Tech");
    }

    typeFirstName() {
        return super.typeFirstName();
    }
    typeLastName() {
        return super.typeLastName();
    }
    typeCompanyName() {
        return super.typeCompanyName();
    }
    typePhoneNumber() {
        return super.typePhoneNumber();
    }
    typeWrongEmailFormat() {
        return super.typeWrongEmailFormat();
    }
    selectCountry() {
        return super.selectCountry();
    }
    typeAddInfoRequest() {
        return super.typeAddInfoRequest();
    }
    clickSubmitButton() {
        return super.clickSubmitButton();
    }
}

export default new PartnerPage();
