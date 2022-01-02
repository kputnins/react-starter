import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './store/store';

import App from './App';

import './styles.scss';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
