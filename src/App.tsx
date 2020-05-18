import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </PersistGate>

      <GlobalStyle />
    </Provider>
  </>
);

export default App;
