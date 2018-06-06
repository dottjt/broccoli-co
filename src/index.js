import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import AppStore from './mobx/store';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const store = new AppStore();

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
registerServiceWorker();
