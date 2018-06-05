import React, { Component } from 'react';
import './scss/app.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      openInviteForm: false,
    }
  }

  onOpenInviteForm() {
    this.setState({})
  }

  render() {
    return (
      <div className="page">

        <nav className="nav">
          <h1 className="nav__title">BROCCOLI & CO.</h1>
        </nav>

        <main className="hero">
          <h2 className="hero__title">A better way to enjoy every day.</h2>
          <h3 className="hero__title__secondary">Be the first to know when we launch.</h3>

          <button className="hero__button">Request an invite</button>
        </main>

        <footer className="footer">
          <p>Made with &#x1F49C; in Melbourne.</p>
          <p>&copy; 2018 Broccoli & Co. All rights reserved.</p>
        </footer>

      </div>
    );
  }
}

export default App;
