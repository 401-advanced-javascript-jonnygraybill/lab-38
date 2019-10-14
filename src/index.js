import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import SettingsContext from './context/settings.js';
import LoginContext from './components/auth/context.js';
import App from './app.js';
import createStore from './state/store/';

const store = createStore();

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <LoginContext>
        <SettingsContext>
          <App />
        </SettingsContext>
      </LoginContext>
      </Provider>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);