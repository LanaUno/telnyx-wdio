import mainPage from "../pageobjects/main.page"
import signUpPage from "../pageobjects/sign-up.page"

describe('Testing register form', () => {
    beforeEach(async () => {
        await mainPage.navigate()
        await mainPage.clickSignUpLink();
        // await expect(browser).toHaveUrl(expect.stringContaining('/sign-up')) 
    })
  it('Register an account with password less then 12 characters long', async () =>{
    await signUpPage.emailField.isDisplayed();
    await signUpPage.typeEmail();
    await signUpPage.firstNameField.isDisplayed();
    await signUpPage.typeFirstName();
    await signUpPage.lastNameField.isDisplayed();
    await signUpPage.typeLastName();
    await signUpPage.passwordField.isDisplayed();
    await signUpPage.typeShortPassword();
    await signUpPage.tersmConditionsBox.isDisplayed();
    await signUpPage.checkTermsConditionsBox();
    await signUpPage.signUpBtn.isDisplayed();
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.paswErrorLengthMsg).toHaveText(expect.stringContaining('12 characters'))
    await signUpPage.passwordField.getCSSProperty('background-color: #e2231a') 
  })
  it("Register an account with empty First Name field", async () => {
    await signUpPage.emailField.isDisplayed()
    await signUpPage.typeEmail();
    await signUpPage.lastNameField.isDisplayed()
    await signUpPage.typeLastName();
    await signUpPage.passwordField.isDisplayed()
    await signUpPage.typePassword();
    await signUpPage.tersmConditionsBox.isDisplayed()
    await signUpPage.checkTermsConditionsBox();
    await signUpPage.signUpBtn.isDisplayed()
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.firstNameErrMsg).toHaveText(expect.stringContaining('required'));
    await signUpPage.firstNameErrMsg.getCSSProperty('color: #e2231a')
    await signUpPage.firstNameField.getCSSProperty('background-color: #e2231a')
});
it("Register an account with empty Last Name field", async () => {
    await signUpPage.emailField.isDisplayed()
    await signUpPage.typeEmail();
    await signUpPage.firstNameField.isDisplayed()
    await signUpPage.typeFirstName();
    await signUpPage.passwordField.isDisplayed()
    await signUpPage.typePassword();
    await signUpPage.tersmConditionsBox.isDisplayed()
    await signUpPage.checkTermsConditionsBox();
    await signUpPage.signUpBtn.isDisplayed()
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.lastNameErrMsg).toHaveText(expect.stringContaining('required'));
    await signUpPage.lastNameErrMsg.getCSSProperty('color: #e2231a')
    await signUpPage.lastNameField.getCSSProperty('background-color: #e2231a')
});
it("Register with password contains no upper-case letter ", async () => {
    await signUpPage.emailField.isDisplayed()
    await signUpPage.typeEmail();
    await signUpPage.firstNameField.isDisplayed()
    await signUpPage.typeFirstName();
    await signUpPage.lastNameField.isDisplayed()
    await signUpPage.typeLastName();
    await signUpPage.passwordField.isDisplayed()
    await signUpPage.typeNoUpperCasePsw();
    await signUpPage.tersmConditionsBox.isDisplayed()
    await signUpPage.checkTermsConditionsBox();
    await signUpPage.signUpBtn.isDisplayed()
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.noUpperCaseErrMsg).toHaveText(expect.stringContaining('upper-case'));
    await signUpPage.noUpperCaseErrMsg.getCSSProperty('color: #e2231a')
    await signUpPage.passwordField.getCSSProperty('background-color: #e2231a')
});

it("Register an account with not accepted Terms & Conditions", async () => {
    await signUpPage.emailField.isDisplayed()
    await signUpPage.typeEmail();
    await signUpPage.firstNameField.isDisplayed()
    await signUpPage.typeFirstName();
    await signUpPage.lastNameField.isDisplayed()
    await signUpPage.typeLastName();
    await signUpPage.passwordField.isDisplayed()
    await signUpPage.typePassword();
    await signUpPage.signUpBtn.isDisplayed()
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.termsCondErrMsg).toHaveText(expect.stringContaining('terms and conditions'));
    await signUpPage.termsCondErrMsg.getCSSProperty('color: #e2231a')
});
it("Register an account with invalid email", async () => {
    await signUpPage.emailField.isDisplayed()
    await signUpPage.typeInvalidEmail();
    await signUpPage.firstNameField.isDisplayed()
    await signUpPage.typeFirstName();
    await signUpPage.lastNameField.isDisplayed()
    await signUpPage.typeLastName();
    await signUpPage.passwordField.isDisplayed()
    await signUpPage.typePassword();
    await signUpPage.tersmConditionsBox.isDisplayed();
    await signUpPage.checkTermsConditionsBox();
    await signUpPage.signUpBtn.isDisplayed()
    await signUpPage.clickSingUpBtn();
    await expect(signUpPage.emailErrMsg).toHaveText(expect.stringContaining('Invalid Email Address'));
    await signUpPage.emailErrMsg.getCSSProperty('color: #e2231a')
});
})