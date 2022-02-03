import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import App from './App';
import 'cordova_script';
import './index.css';

document.addEventListener(
  'deviceready',
  () => {
    ReactDOM.render(
      <React.StrictMode>
        <div>
          <Provider store={store}>
            <App cordovaWork={true} />
          </Provider>
        </div>
      </React.StrictMode>,
      document.getElementById('root')
    );
  },
  false
);
