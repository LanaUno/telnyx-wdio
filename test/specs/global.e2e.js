import mainPage from "../pageobjects/main.page";
import thanksPage from "../pageobjects/thanks.page";
import globalPage from "../pageobjects/global.page";

describe("Testing Global coverage form", () => {
    beforeEach(async () => {
        await mainPage.navigate();
        await mainPage.globalCoverageBtn.scrollIntoView();
        await mainPage.globalCoverageBtn.waitForClickable();
        await mainPage.clickGlobalCoverageBtn();
        await expect(browser).toHaveUrl(
            expect.stringContaining("/global-coverage")
        );
    });
    it("Explore Global coverage form", async () => {
        await globalPage.firstNameField.isDisplayed();
        await globalPage.typeFirstName();
        await globalPage.lastNameField.isDisplayed();
        await globalPage.typeLastName();
        await globalPage.businessEmailField.isDisplayed();
        await globalPage.typeBusinessEmail();
        await globalPage.submitButton.isDisplayed();
        await globalPage.clickSubmitButton();
        await expect(browser).toHaveUrl(expect.stringContaining("/thank-you"));
        await expect(thanksPage.thanksMessage).toHaveText(
            expect.stringContaining("Thank you.")
        );
    });
    it("Explore Global Coverage form with invalid email format", async () => {
        await globalPage.firstNameField.isDisplayed();
        await globalPage.typeFirstName();
        await globalPage.lastNameField.isDisplayed();
        await globalPage.typeLastName();
        await globalPage.businessEmailField.isDisplayed();
        await globalPage.typeWrongEmailFormat();
        await globalPage.submitButton.isDisplayed();
        await globalPage.clickSubmitButton();
        await expect(globalPage.invalidEmailMsg).toHaveText(
            expect.stringContaining("valid email")
        );
    });
    it("Explore Global Coverage form with empty first name field", async () => {
        await globalPage.lastNameField.isDisplayed();
        await globalPage.typeLastName();
        await globalPage.businessEmailField.isDisplayed();
        await globalPage.typeBusinessEmail();
        await globalPage.submitButton.isDisplayed();
        await globalPage.clickSubmitButton();
        await expect(globalPage.errMsgFirstName).toHaveText(
            expect.stringContaining("required")
        );
        await globalPage.errMsgFirstName.getCSSProperty(
            "background-color: #e2231a"
        );
    });
    it("Explore Global Coverage form with empty last name field", async () => {
        await globalPage.firstNameField.isDisplayed();
        await globalPage.typeFirstName();
        await globalPage.businessEmailField.isDisplayed();
        await globalPage.typeBusinessEmail();
        await globalPage.submitButton.isDisplayed();
        await globalPage.clickSubmitButton();
        await expect(globalPage.errMsgLastName).toHaveText(
            expect.stringContaining("required")
        );
        await globalPage.errMsgLastName.getCSSProperty(
            "background-color: #e2231a"
        );
    });
});
