import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FormButton, FormCaptcha, FormError, FormInput } from './FormUtilities';



@observer
class Form extends Component {
  render() {
    const store = this.props.store;

    return (
      <div className={`form__underlay__${store.isFormVisible}`}>
        <div className="form">
          <div className="form__close" onClick={() => store.isFormVisibleToggle(store.isFormVisible)}><i className="fas fa-times"></i></div>

          <h4 className="form__title">REQUEST AN INVITE</h4>

          <div className="form__input__container">
            <FormInput type="text" placeholder="Full name" value={store.fullName} onChangeInput={store.onChangeFullName}/>
            <FormInput type="password" placeholder="Email" value={store.email} onChangeInput={store.onChangeEmail}/>
            <FormInput type="password" placeholder="Email confirmation" value={store.emailConfirmation} onChangeInput={store.onChangeEmailConfirmation} />
          </div>

          <div className="form__submission__container">
          <FormCaptcha onFormVerification={store.onFormVerification} onFormVerificationExpiration={store.onFormVerificationExpiration} />
            <FormButton formStatus={store.formStatus} onFormSubmit={store.onFormSubmit} formValuesExist={store.formValuesExist} fullName={store.fullName} email={store.email} emailConfirmation={store.emailConfirmation} />
            <FormError formValidationObject={store.formValidationObject} />
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  store: PropTypes.shape({
    onFormVerification: PropTypes.func,
    onFormVerificationExpiration: PropTypes.func,

    formStatus: PropTypes.string,
    onFormSubmit: PropTypes.func,

    formValidationObject: PropTypes.shape({
      isValid: PropTypes.bool,
      errorMessage: PropTypes.string,  
    }),

    isFormVisible: PropTypes.bool,
    isFormVisibleToggle: PropTypes.func,

    fullName: PropTypes.string,
    email: PropTypes.string,
    emailConfirmation: PropTypes.string,

    onChangeFullName: PropTypes.func,
    onChangeEmail: PropTypes.func,
    onChangeEmailConfirmation: PropTypes.func,
  }),
}

export default Form;





