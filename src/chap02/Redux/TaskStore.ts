import { IWebPageContext } from 'util/PageContext';
import { IState } from './TaskContracts';
import { IReduxContext, configureDynamicStore } from 'util/Store';
import { ReducersMapObject, AnyAction } from 'redux';
import { tasksReducer } from './TaskReducer';
import { uniqueId } from './TaskActions';

export const configureStore = (pageContext: IWebPageContext): IReduxContext<IState> => {
    const reducers: ReducersMapObject<IState, AnyAction> = {
        tasksState: tasksReducer
    };

    const initialState: IState = {
        tasksState: {
            tasks: [
                {
                    id: uniqueId(),
                    title: "Learn Redux",
                    description: "The store, actions, and reducers, oh my!",
                    status: "In Progress"
                },
                {
                    id: uniqueId(),
                    title: "Peace on Earth",
                    description: "No big deal.",
                    status: "In Progress"
                }
            ]
        }
    };

    const reduxContext = configureDynamicStore<IState>(
        reducers,
        initialState,
        pageContext
    );

    // reduxContext.sagaMiddleware.run();
    return reduxContext;
}