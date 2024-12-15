import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { legacy_createStore as createstore, applyMiddleware, compose } from 'redux';
import thunk from 'react-redux';
import reducers from './reducers';

const store = createstore(reducers, compose(applyMiddleware(thunk)));

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
