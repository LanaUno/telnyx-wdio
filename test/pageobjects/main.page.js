import { faker } from "@faker-js/faker";
import FormPage from "./form.page";
import { browser } from "@wdio/globals";

const companyName = faker.company.name();
const companyPhone = faker.phone.number({ style: "international" });
const wrongDomain = faker.internet.email();
const website = faker.internet.domainName();

class MainPage extends FormPage {
    get signUpLink() {
        return $('div[class="c-dyVVFl"]>a[href="/sign-up"]');
    }
    get bellCompanyName() {
        return $("#business_name");
    }
    get domainName() {
        return $("#domain");
    }
    get mobilPhone() {
        return $("#phone_number");
    }
    get termsAndCondBox() {
        return $("#terms_and_conditions");
    }
    get buildMyVoiceBotBtn() {
        return $('div ~button[type="submit"]');
    }
    get domainErrMessage() {
        return $("#domain_message");
    }
    get sorryErrMsg() {
        return $('div[class="c-iGQXTm"]>h3[class="c-PJLV c-rMlRu"]', {
            timeout: 5000,
        });
    }
    get whyTelnyxBtn() {
        return $('button[id="radix-:R256jm:"]', { timeout: 5000 });
    }
    get partnersLink() {
        return $('div>a[href="/partnerships"]', { timeout: 6000 });
    }
    get globalCoverageBtn() {
        return $('div~div>a[href="/global-coverage"]');
    }
    get contactUsLink() {
        return $('header>div>a~a~a[href="/contact-us"]');
    }

    navigate() {
        return browser.url("https://www.telnyx.com/");
    }
    async clickSignUpLink() {
        await this.signUpLink.click();
    }
    async typeBellCompanyName() {
        await this.bellCompanyName.setValue(companyName);
    }
    async typeWrongDomain() {
        await this.domainName.setValue(wrongDomain);
    }
    async typeDomainName() {
        await this.domainName.setValue(website);
    }
    async typeMobilePhone() {
        await this.mobilPhone.setValue(companyPhone);
    }
    async checkTermsAndCondBox() {
        await this.termsAndCondBox.click();
    }
    async clickBuildMyVoiceBotBtn() {
        await this.buildMyVoiceBotBtn.click();
    }
    async clickWhyTelnyxBtn() {
        await this.whyTelnyxBtn.click();
    }
    async clickPartnersLink() {
        await this.partnersLink.click({ force: true });
    }
    async clickGlobalCoverageBtn() {
        await this.globalCoverageBtn.click();
    }
    async clickContactUsLink() {
        await this.contactUsLink.click();
    }
}

export default new MainPage();
