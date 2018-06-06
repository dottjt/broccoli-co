import React, { Component } from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-recaptcha';
// var Recaptcha = require('react-recaptcha');

@observer
export class FormInput extends Component {
  render() {
    return (
      <input
        className="form__input" 
        type="text" 
        value={this.props.value} 
        placeholder={this.props.placeholder} 
        onChange={(event) => {event.preventDefault(); this.props.onChangeInput(event.target.value)}}
      />
    )
  }
}

FormInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
}

@observer
export class FormButton extends Component {
  render() {
    if (this.props.formStatus === "loading") {
      return (
        <div className="form__success">
          Loading, please wait...
        </div>
      )
    } else {
      return (
        <button className={`form__button form__button__faded__${this.props.formValuesExist}`} onClick={this.props.onFormSubmit}>
          Send
        </button>
      )  
    }
  }
}

FormButton.propTypes = {
  formStatus: PropTypes.string,
  onFormSubmit: PropTypes.func,
  formValuesExist: PropTypes.bool,
}

export const FormError = (props) => (
    !props.formValidationObject.isValid && props.formValidationObject.errorMessage.length > 0 
  ? 
    <div className="form__error">
      {props.formValidationObject.errorMessage}
    </div>
  :
    null
)

FormError.propTypes = {
  formValidationObject: PropTypes.shape({
    isValid: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorType: PropTypes.string,
  })
}

export const FormSuccess = (props) => (
  <div className={`form__underlay__true`}>
    <div className="form form__success">
      <h4 className="form__title">All done!</h4>
      <p className="form__title__secondary">You will be one of the first to experience Broccoli & Co. when we launch.</p>
      <div className="form__submission__container">
        <button className="form__button form__button__faded__true" onClick={props.resetForm}>
          OK
        </button>
      </div>
    </div>
  </div>
)

FormSuccess.propTypes = {
  resetForm: PropTypes.func,
}


export const FormCaptcha = (props) => (
  <Recaptcha
    sitekey="6LfBh10UAAAAALsuVrOnNAOyJ_d6z0ysTU0ox1W6"
    render="explicit"
    verifyCallback={props.onFormVerification}
    expiredCallback={props.onFormVerificationExpiration}
  />
)

