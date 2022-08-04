import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import './styles/settings.scss';
import './styles/typography.scss';
import ScrollToTop from './components/utils/ScrollToTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
);


