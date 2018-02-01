import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);
ReactDOM.render(

    <MuiThemeProvider>
    <Provider store={store}>
        <App />

    </Provider>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
