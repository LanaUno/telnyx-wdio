import FormPage from "./form.page";

class GlobalPage extends FormPage {
  get errMsgFirstName () {return $("#ValidMsgFirstName")};
  get errMsgLastName () {return $("#ValidMsgLastName")};

//   validateErrEmailMsg() {
//     this.getInvalidEmailMsg().should("contain", "Must be valid email");
//     return this;
//   }
//   validateErrFirstNameMsg() {
//     this.getErrMsgFirstName().should("contain", "This field is required.");
//     return this;
//   }
//   validateErrFirstNameMsgColor() {
//     this.getErrMsgFirstName().should("have.css", "color", "rgb(235, 0, 0)");
//     return this;
//   }
//   validateErrLastNameMsg() {
//     this.getErrMsgLastName().should("contain", "This field is required.");
//     return this;
//   }
//   validateErrLastNameMsgColor() {
//     this.getErrMsgLastName().should("have.css", "color", "rgb(235, 0, 0)");
//     return this;
//   }
}

export default new GlobalPage();