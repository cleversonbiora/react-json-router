import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Reducers } from 'react-json-page';
import { combineReducers } from 'redux';

export const ReducersApp = combineReducers({
    dynamicFormState: Reducers
    /*YOUR REDUCERS*/
});
export const Store = createStore(ReducersApp);

ReactDOM.render((
    <Provider store={Store}>
        <Router>
            <Route path="*" component={App} />
        </Router>
    </Provider>),
        document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
