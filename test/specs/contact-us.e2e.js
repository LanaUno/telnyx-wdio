import mainPage from "../pageobjects/main.page";
import contactUsPage from "../pageobjects/contact-us.page";
import thanksPage from "../pageobjects/thanks.page";

describe.only("Testing Contact Us form", () => {
    beforeEach(async () => {
        await mainPage.navigate();
        await browser.setWindowSize(1440, 900);
        await mainPage.clickContactUsLink();
        await expect(browser).toHaveUrl(expect.stringContaining("/contact-us"));
    });
    it("User can leave a request to an expert via 'Contact Us' link", async () => {
        await contactUsPage.supportOption.waitForClickable();
        await contactUsPage.selectSupportOption();
        await contactUsPage.firstNameField.isDisplayed();
        await contactUsPage.typeFirstName();
        await contactUsPage.lastNameField.isDisplayed();
        await contactUsPage.typeLastName();
        await contactUsPage.businessEmailField.isDisplayed();
        await contactUsPage.typeBusinessEmail();
        await contactUsPage.countryExt.isDisplayed();
        await contactUsPage.countryExt.waitForClickable();
        await contactUsPage.selectCountry();
        await contactUsPage.phoneNumberField.isDisplayed();
        await contactUsPage.typePhoneNumber();
        await contactUsPage.websiteField.isDisplayed();
        await contactUsPage.typeWebsite();
        await contactUsPage.addInfoRequestField.isDisplayed();
        await contactUsPage.typeAddInfoRequest();
        await contactUsPage.howDidYouHearField.isDisplayed();
        await contactUsPage.typeHowDidYouHear();
        await contactUsPage.submitButton.isDisplayed();
        await contactUsPage.clickSubmitButton();
        await expect(browser).toHaveUrl(expect.stringContaining("/thank-you"));
        await expect(thanksPage.thanksMessage).toHaveText(
            expect.stringContaining("Thank you.")
        );
    });
    it("User cannot leave a request with invalid email", async () => {
        await contactUsPage.selectSupportOption();
        await contactUsPage.firstNameField.isDisplayed();
        await contactUsPage.typeFirstName();
        await contactUsPage.lastNameField.isDisplayed();
        await contactUsPage.typeLastName();
        await contactUsPage.businessEmailField.isDisplayed();
        await contactUsPage.typeInvalidEmail();
        await contactUsPage.countryExt.isDisplayed();
        await contactUsPage.countryExt.waitForClickable();
        await contactUsPage.selectCountry();
        await contactUsPage.phoneNumberField.isDisplayed();
        await contactUsPage.typePhoneNumber();
        await contactUsPage.websiteField.isDisplayed();
        await contactUsPage.typeWebsite();
        await contactUsPage.addInfoRequestField.isDisplayed();
        await contactUsPage.typeAddInfoRequest();
        await contactUsPage.howDidYouHearField.isDisplayed();
        await contactUsPage.typeHowDidYouHear();
        await contactUsPage.submitButton.isDisplayed();
        await contactUsPage.clickSubmitButton();
        await expect(contactUsPage.invalidEmailMsg).toHaveText(
            expect.stringContaining("valid email")
        );
    });
    it("User cannot leave a request with empty first name field", async () => {
        await contactUsPage.selectSupportOption();
        await contactUsPage.lastNameField.isDisplayed();
        await contactUsPage.typeLastName();
        await contactUsPage.businessEmailField.isDisplayed();
        await contactUsPage.typeBusinessEmail();
        await contactUsPage.countryExt.isDisplayed();
        await contactUsPage.countryExt.waitForClickable();
        await contactUsPage.selectCountry();
        await contactUsPage.phoneNumberField.isDisplayed();
        await contactUsPage.typePhoneNumber();
        await contactUsPage.websiteField.isDisplayed();
        await contactUsPage.typeWebsite();
        await contactUsPage.addInfoRequestField.isDisplayed();
        await contactUsPage.typeAddInfoRequest();
        await contactUsPage.howDidYouHearField.isDisplayed();
        await contactUsPage.typeHowDidYouHear();
        await contactUsPage.submitButton.isDisplayed();
        await contactUsPage.clickSubmitButton();
        await expect(contactUsPage.firstNameErrMsg).toHaveText(
            expect.stringContaining("required")
        );
    });
    it("User cannot leave a request with empty last name field", async () => {
        await contactUsPage.selectSupportOption();
        await contactUsPage.firstNameField.isDisplayed();
        await contactUsPage.typeFirstName();
        await contactUsPage.businessEmailField.isDisplayed();
        await contactUsPage.typeBusinessEmail();
        await contactUsPage.countryExt.isDisplayed();
        await contactUsPage.countryExt.waitForClickable();
        await contactUsPage.selectCountry();
        await contactUsPage.phoneNumberField.isDisplayed();
        await contactUsPage.typePhoneNumber();
        await contactUsPage.websiteField.isDisplayed();
        await contactUsPage.typeWebsite();
        await contactUsPage.addInfoRequestField.isDisplayed();
        await contactUsPage.typeAddInfoRequest();
        await contactUsPage.howDidYouHearField.isDisplayed();
        await contactUsPage.typeHowDidYouHear();
        await contactUsPage.submitButton.isDisplayed();
        await contactUsPage.clickSubmitButton();
        await expect(contactUsPage.lastNameErrMsg).toHaveText(
            expect.stringContaining("required")
        );
    });
    it("User cannot leave a request with empty phone field", async () => {
        await contactUsPage.selectSupportOption();
        await contactUsPage.firstNameField.isDisplayed();
        await contactUsPage.typeFirstName();
        await contactUsPage.lastNameField.isDisplayed();
        await contactUsPage.typeLastName();
        await contactUsPage.businessEmailField.isDisplayed();
        await contactUsPage.typeBusinessEmail();
        await contactUsPage.countryExt.isDisplayed();
        await contactUsPage.countryExt.waitForClickable();
        await contactUsPage.selectCountry();
        await contactUsPage.websiteField.isDisplayed();
        await contactUsPage.typeWebsite();
        await contactUsPage.addInfoRequestField.isDisplayed();
        await contactUsPage.typeAddInfoRequest();
        await contactUsPage.howDidYouHearField.isDisplayed();
        await contactUsPage.typeHowDidYouHear();
        await contactUsPage.submitButton.isDisplayed();
        await contactUsPage.clickSubmitButton();
        await expect(contactUsPage.phoneErrMsg).toHaveText(
            expect.stringContaining("minimum 6 digits")
        );
    });
});
