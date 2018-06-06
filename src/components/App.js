import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Form from './Form';
import { FormSuccess } from './FormUtilities';

const App = observer(({ store }) => (
  <div>
    <div className="page">
      <nav className="nav">
        <h1 className="nav__title">
          <a className="nav__title__link" href="/"><i className="em em-broccoli"></i> BROCCOLI & CO.</a>
        </h1>
      </nav>

      <main className="hero">
        <div className="hero__inner">
          <h2 className="hero__title">A better way <br /> to enjoy every day.</h2>
          <h3 className="hero__title__secondary">Be the first to know when we launch.</h3>
        </div>
        <button className="hero__button" onClick={() => store.isFormVisibleToggle(store.isFormVisible)}>Request an invite</button>
      </main>

      {(store.formStatus === "loading" || store.formStatus === "initial" || store.formStatus === "failure") &&
        <Form store={store} />
      }

      {(store.formStatus === "success") &&
        <FormSuccess resetForm={store.resetForm} />
      }

      <footer className="footer">
        <p className="footer__text">Made with <i className="fas fa-heart"></i> in Melbourne.</p>
        <p className="footer__text__secondary">&copy; 2018 Broccoli & Co. All rights reserved.</p>
      </footer>

    </div>
  </div>
));

App.propTypes = {
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

export default App;
