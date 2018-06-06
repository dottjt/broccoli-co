import { observable, action, computed } from 'mobx';
import { validateFormValues, formSubmission } from './functions';

const apiFormEndpoint = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

export default class AppStore {
  
  @observable isFormVisible = false;
  @action isFormVisibleToggle = isFormVisible => this.isFormVisible = !isFormVisible;

  @observable fullName = "";
  @action onChangeFullName = inputValue => this.fullName = inputValue;
  
  @observable email = "";
  @action onChangeEmail = inputValue => this.email = inputValue;
  
  @observable emailConfirmation = "";
  @action onChangeEmailConfirmation = inputValue => this.emailConfirmation = inputValue;

  @observable formValidationObject = {
    isValid: false,
    errorMessage: "",
  }

  @computed get formValuesExist() {
    return this.fullName && this.email && this.emailConfirmation ? true : false;
  }

  @action onFormSubmit(hasFormValues) {
    const formValidationObject = validateFormValues(this.fullName, this.email, this.emailConfirmation);

    if (hasFormValues && formValidationObject.isValid) {
      formSubmission(apiFormEndpoint, this.fullName, this.email);
      return formValidationObject;
    } else {
      return formValidationObject;
    }
  }
}
 