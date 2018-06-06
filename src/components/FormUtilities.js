import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import PropTypes from 'prop-types';

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

@observer
export class FormButton extends Component {
  render() {
    if (this.props.formStatus === "loading") {
      return (
        <div className="form__success">
          Loading, please wait...
        </div>
      )
    }
    return (
      <button
        className={`form__button form__button__faded__${this.props.formValuesExist}`}
        onClick={this.props.onFormSubmit}
      >
        Send
      </button>
    )  
  }
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

export const FormCaptcha = () => (
  <div class="g-recaptcha" data-sitekey="6LfBh10UAAAAALsuVrOnNAOyJ_d6z0ysTU0ox1W6"></div>  
)