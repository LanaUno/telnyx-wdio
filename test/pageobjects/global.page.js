import FormPage from "./form.page";

class GlobalPage extends FormPage {
    get errMsgFirstName() {
        return $("#ValidMsgFirstName");
    }
    get errMsgLastName() {
        return $("#ValidMsgLastName");
    }
}

export default new GlobalPage();
