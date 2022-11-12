import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./store/index"
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom'
import { SingupProvider } from './Context/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <SingupProvider>
    <Provider store={store}>
        <App />
    </Provider>
    </SingupProvider>
    </BrowserRouter>
);

