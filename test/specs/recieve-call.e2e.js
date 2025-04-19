import mainPage from "../pageobjects/main.page";

describe("Testing recieve a call form", () => {
    beforeEach(async () => {
        await mainPage.navigate();
        await browser.setWindowSize(1440, 900);
        await mainPage.bellCompanyName.scrollIntoView();
    });

    it("Fill the form with wrong Domain type", async () => {
        await mainPage.bellCompanyName.isDisplayed();
        await mainPage.typeBellCompanyName();
        await mainPage.domainName.isDisplayed();
        await mainPage.typeWrongDomain();
        await mainPage.mobilPhone.isDisplayed();
        await mainPage.typeMobilePhone();
        await mainPage.emailField.isDisplayed();
        await mainPage.typeEmail();
        await mainPage.termsAndCondBox.isDisplayed();
        await mainPage.checkTermsAndCondBox();
        await mainPage.buildMyVoiceBotBtn.isDisplayed();
        await mainPage.clickBuildMyVoiceBotBtn();
        await expect(mainPage.domainErrMessage).toHaveText(
            expect.stringContaining("valid Domain")
        );
        await mainPage.domainErrMessage.getCSSProperty("color: #e2231a");
        await mainPage.domainName.getCSSProperty("border-color: #e2231a");
    });

    it("Fill the form with no checked Captcha", async () => {
        await mainPage.bellCompanyName.isDisplayed();
        await mainPage.typeBellCompanyName();
        await mainPage.domainName.isDisplayed();
        await mainPage.typeDomainName();
        await mainPage.mobilPhone.isDisplayed();
        await mainPage.typeMobilePhone();
        await mainPage.emailField.isDisplayed();
        await mainPage.typeEmail();
        await mainPage.termsAndCondBox.isDisplayed();
        await mainPage.checkTermsAndCondBox();
        await mainPage.buildMyVoiceBotBtn.isDisplayed();
        await mainPage.clickBuildMyVoiceBotBtn();
        await expect(mainPage.sorryErrMsg).toHaveText(
            expect.stringContaining("Sorry")
        );
    });
});
