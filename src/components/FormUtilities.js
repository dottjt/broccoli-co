import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import PropTypes from 'prop-types';

@observer
export class FormInput extends Component {
  render() {
    return (
      <input 
        className="form__input" 
        type={this.props.type} 
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
    return (
      <button className={`form__button form__button__faded__${this.props.formValuesExist}`} onClick={() => this.props.onFormSubmit(this.props.formValuesExist)}>
        Send
      </button>
    )
  }
}

export class FormError extends Component {

  render() {
    return (
        this.props.formValidationObject.isValid
      ?
        <div>
          {this.props.formValidationObject.errorMessage}
        </div>
      : 
        null
    )
  }
}
