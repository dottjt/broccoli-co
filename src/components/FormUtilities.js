import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Recaptcha from 'react-google-recaptcha';

export const FormInput = observer(({ value, placeholder, onChangeInput }) => (
  <input
    className="form__input" 
    type="text" 
    value={value} 
    placeholder={placeholder} 
    onChange={(event) => {event.preventDefault(); onChangeInput(event.target.value)}}
  />
));

FormInput.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
}

export const FormButton = observer(({ formStatus, formValuesExist, onFormSubmit }) => (
    formStatus === "loading" 
  ?
    <div className="form__success">
      Loading, please wait...
    </div>
  :
    <button className={`form__button form__button__faded__${formValuesExist}`} onClick={onFormSubmit}>
      Send
    </button>
));

FormButton.propTypes = {
  formStatus: PropTypes.string,
  onFormSubmit: PropTypes.func,
  formValuesExist: PropTypes.bool,
}

export const FormError = ({ formValidationObject }) => (
    !formValidationObject.isValid && formValidationObject.errorMessage.length > 0 
  ? 
    <div className="form__error">
      {formValidationObject.errorMessage}
    </div>
  :
    null
);

FormError.propTypes = {
  formValidationObject: PropTypes.shape({
    isValid: PropTypes.bool,
    errorMessage: PropTypes.string,
    errorType: PropTypes.string,
  })
}

export const FormSuccess = ({ resetForm }) => (
  <div className={`form__underlay__true`}>
    <div className="form form__success">
      <h4 className="form__title">All done!</h4>
      <p className="form__title__secondary">You will be one of the first to experience Broccoli & Co. when we launch.</p>
      <div className="form__submission__container">
        <button className="form__button form__button__faded__true" onClick={resetForm}>
          OK
        </button>
      </div>
    </div>
  </div>
);

FormSuccess.propTypes = {
  resetForm: PropTypes.func,
}

export const FormRecaptcha = ({ onFormVerification, onFormVerificationExpiration }) => (
  <Recaptcha
    sitekey="6LfBh10UAAAAALsuVrOnNAOyJ_d6z0ysTU0ox1W6"
    onChange={onFormVerification}
    onExpired={onFormVerificationExpiration}
  />
);

FormRecaptcha.propTypes = {
  onFormVerification: PropTypes.func,
  onFormVerificationExpiration: PropTypes.func,
}
