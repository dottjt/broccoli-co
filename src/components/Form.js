import React, { Component } from 'react';
import { observer } from 'mobx-react';

import PropTypes from 'prop-types';

import { FormInput, FormButton, FormError } from './FormUtilities';

@observer
class Form extends Component {

  render() {
    const store = this.props.store;
    
    return (
      <div className={`form__underlay__${store.isFormVisible}`}>
        <div className="form">
          <div className="form__close" onClick={() => store.isFormVisibleToggle(store.isFormVisible)}><i class="fas fa-times"></i></div>

          <h4 className="form__title">REQUEST AN INVITE</h4>

          <div className="form__input__container">
            <FormInput type="text" placeholder="Full name" value={store.fullName} onChangeInput={store.onChangeFullName}/>
            <FormInput type="password" placeholder="Email" value={store.email} onChangeInput={store.onChangeEmail}/>
            <FormInput type="password" placeholder="Email confirmation" value={store.emailConfirmation} onChangeInput={store.onChangeEmailConfirmation} />
          </div>
          
          <div className="form__submission__container">
            <FormButton onFormSubmit={store.onFormSubmit} formValuesExist={store.formValuesExist}/>
            <FormError formValidationObject={store.formValidationObject} />
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  store: PropTypes.shape({
    
  }),
}

export default Form;





