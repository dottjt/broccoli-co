import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import AppStore from './mobx/store';
import './index.scss';

ReactDOM.render(<App store={AppStore}/>, document.getElementById('root'));
registerServiceWorker();
