import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import store from "./store"
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

document.getElementById('root'));
=======
import store from "./store";
import {Provider} from "react-redux"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
>>>>>>> d484ee9a5a8c065a0babab07fb838b0a27c0caa7

