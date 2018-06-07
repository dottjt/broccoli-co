import { observable, action, computed } from 'mobx';
import { validateFormValues } from './functions';
import axios from 'axios';

const apiEndpoint = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";

class AppStore {
  @observable isFormVisible = false;
  @action isFormVisibleToggle = isFormVisible => this.isFormVisible = !isFormVisible;

  @observable fullName = "";
  @action onChangeFullName = inputValue => this.fullName = inputValue;
  
  @observable email = "";
  @action onChangeEmail = inputValue => this.email = inputValue;
  
  @observable emailConfirmation = "";
  @action onChangeEmailConfirmation = inputValue => this.emailConfirmation = inputValue;

  @observable isFormVerified = false;
  @action onFormVerification = inputValue => this.isFormVerified = true;
  @action onFormVerificationExpiration = inputValue => this.isFormVerified = false;

  // values: initial, loading, success, failure
  @observable formStatus = "initial";  

  @observable formValidationObject = {
    isValid: false,
    errorMessage: "",
  }

  @computed get formValuesExist() {
    return this.fullName && this.email && this.emailConfirmation && this.isFormVerified ? true : false;
  }

  @action onFormSubmit = () => {
    
    if (this.formValuesExist) {
      this.formValidationObject = validateFormValues(this.fullName, this.email, this.emailConfirmation, this.isFormVerified);
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
        this.formValidationObject = {
          isValid: false,
          errorMessage: error.response.data.errorMessage,
          errorType: "failure",
        }
      });
    }
  }

  @action resetForm = () => {
    this.isFormVerified = false;
    this.isFormVisible = false;
    this.formStatus = "initial";
    this.fullName = "";
    this.email = "";
    this.emailConfirmation = "";
  }
}
 
export default new AppStore();
