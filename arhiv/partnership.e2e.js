import mainPage from "../pageobjects/main.page";
import partnerPage from "../pageobjects/partner.page";
import FormPage from "../test/pageobjects/form.page";


describe("Testing Become a parnter form", () => {
    beforeEach(async () => {
        await mainPage.navigate();
        await browser.setWindowSize(1440, 900);
        await mainPage.clickWhyTelnyxBtn();
        await mainPage.clickPartnersLink();
        await partnerPage.becomeAPartnerFormHeader.scrollIntoView();
        await expect(browser).toHaveUrl(
            expect.stringContaining("/partnerships")
        );
    });
    it("Too long Phone Number in Become a Partner Form", async () => {
        await partnerPage.firstNameField.isDisplayed();
        await partnerPage.typeFirstName();
        await partnerPage.lastNameField.isDisplayed();
        await partnerPage.typeLastName();
        await partnerPage.companyName.isDisplayed();
        await partnerPage.typeCompanyName();
        await partnerPage.businessEmailField.isDisplayed();
        await partnerPage.typeBusinessEmail();
        await partnerPage.countryExt.isDisplayed();
        await partnerPage.selectCountry();
        await partnerPage.phoneNumberField.isDisplayed();
        await partnerPage.typeLongPhoneNumber();
        await partnerPage.selectOptionSaasIsvTech();
        await partnerPage.addInfoRequestField.isDisplayed();
        await partnerPage.typeAddInfoRequest();
        await partnerPage.clickSubmitButton();
        await expect(partnerPage.invalidPnoneMsg).toHaveText(
            expect.stringContaining("15 digits")
        );
        await partnerPage.invalidPnoneMsg.getCSSProperty("color: #e2231a");
    });
    it("Become a Partner", async () => {
        await partnerPage.firstNameField.isDisplayed();
        await partnerPage.typeFirstName();
        await partnerPage.lastNameField.isDisplayed();
        await partnerPage.typeLastName();
        await partnerPage.companyName.isDisplayed();
        await partnerPage.typeCompanyName();
        await partnerPage.businessEmailField.isDisplayed();
        await partnerPage.typeBusinessEmail();
        await partnerPage.countryExt.isDisplayed();
        await partnerPage.selectCountry();
        await partnerPage.phoneNumberField.isDisplayed();
        await super.typePhoneNumber()
        // await partnerPage.typePhoneNumber();
        await partnerPage.selectOptionSaasIsvTech();
        await partnerPage.addInfoRequestField.isDisplayed();
        await partnerPage.typeAddInfoRequest();
        await partnerPage.clickSubmitButton();
        // await expect(partnerPage.invalidPnoneMsg).toHaveText(
        //     expect.stringContaining("15 digits")
        // );
        // await partnerPage.invalidPnoneMsg.getCSSProperty("color: #e2231a");
    });
});
