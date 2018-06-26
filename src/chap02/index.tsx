import "./index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedApp } from "./App";
import { configureStore } from './Redux/TaskStore';
import { IReduxContext } from 'util/Store';
import { IState } from './Redux/TaskContracts';
import { DefaultPageContext } from 'util/PageContext';

const reduxContext: IReduxContext<IState> = configureStore(new DefaultPageContext());

ReactDOM.render(
    <Provider store={reduxContext.store}>
        <ConnectedApp />
    </Provider>,
    document.getElementById("root")
);
