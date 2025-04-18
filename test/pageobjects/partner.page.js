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
}

export default new PartnerPage();
