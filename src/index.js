import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Main } from 'react-router-dom';
import CartProvider from './store2/CartProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main><Provider store={store} ><CartProvider><App /></CartProvider></Provider></Main>);
