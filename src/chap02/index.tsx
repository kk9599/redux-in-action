import * as React from "react";
import { createStore } from 'redux';
import tasks from "./reducers/index";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { App } from './App';

const store = createStore(tasks);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
