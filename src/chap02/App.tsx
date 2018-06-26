import * as React from "react";
import { TaskListPage } from "./components/TaskListPage";
import { connect } from "react-redux";
import "./App.scss";
import { ITask, IState } from "./Redux/TaskContracts";
import { Dispatch } from "redux";
import { TaskActionsCreator } from "./Redux/TaskActions";

export interface IConnectedProps {}

export interface IAppActions {}

export interface IAppProps extends IConnectedProps {
    tasks: ITask[];
    onCreateTask: (title: string, description: string) => any;
    onStatusChange: (id: number, status: string) => any;
}

class App extends React.Component<IAppProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="main-content">
                <TaskListPage tasks={this.props.tasks} onCreateTask={this.props.onCreateTask} onStatusChange={this.props.onStatusChange} />
            </div>
        );
    }
}

export const mapStateToProps = (state: IState): Partial<IAppProps> => {
    return {
        tasks: state.tasksState.tasks
    };
};

export const mapDispatchToProps = (dispatch: Dispatch): Partial<IAppProps> => {
    return {
        onCreateTask: (title: string, description: string) => dispatch(TaskActionsCreator.createTaskAction(title, description)),
        onStatusChange: (id: number, status: string) => dispatch(TaskActionsCreator.editTaskStatus(id, status))
    };
};

export const ConnectedApp: React.ComponentClass<IConnectedProps> = connect(mapStateToProps, mapDispatchToProps)(App);
