import * as React from "react";
import { createStore } from "redux";
import tasks from "./reducers/index";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedApp } from "./App";
import "./index.scss";

const store = createStore(tasks);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById("root")
);
