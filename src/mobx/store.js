import { observable, action, computed } from 'mobx';
import { validateFormValues } from './functions';
import axios from 'axios';

const apiEndpoint = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

export default class AppStore {
  
  @observable isFormVisible = false;
  @action isFormVisibleToggle = isFormVisible => this.isFormVisible = !isFormVisible;

  @observable fullName = "";
  @action onChangeFullName = inputValue => this.fullName = inputValue;
  
  @observable email = "";
  @action onChangeEmail = inputValue => this.email = inputValue;
  
  @observable emailConfirmation = "";
  @action onChangeEmailConfirmation = inputValue => this.emailConfirmation = inputValue;

  // initial, loading, success, failure
  @observable formStatus = "initial";

  @observable formValidationObject = {
    isValid: false,
    errorMessage: "",
  }

  @computed get formValuesExist() {
    return this.fullName && this.email && this.emailConfirmation ? true : false;
  }

  @action onFormSubmit = () => {
    if (this.formValuesExist) {
      this.formValidationObject = validateFormValues(this.fullName, this.email, this.emailConfirmation);
    }

    if (this.formValidationObject.isValid) {
      this.formStatus = "loading";

      axios.post(apiEndpoint, {
        name: this.fullName,
        email: this.email,
      }).then((response) => {
        this.formStatus = "success";
      }).catch((error) => {
        this.formStatus = "failure";          
      });
    }
  }

  @action resetForm = () => {
    this.isFormVisible = false;
    this.formStatus = "initial";
    this.fullName = "";
    this.email = "";
    this.emailConfirmation = ""; 
  }
}
 