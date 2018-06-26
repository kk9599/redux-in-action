import * as React from "react";
import { TaskListPage } from './components/TaskListPage';
import { connect } from 'react-redux';
import { createTask, editTask, IAction } from './actions';
import "./App.scss";
import { ITask } from './components/Task';

export interface IConnectedProps {}

export interface IAppProps extends IConnectedProps {
    tasks: ITask[];
    dispatch: (action: IAction) => void;
}

class App extends React.Component<IAppProps, {}> {
    public render(): JSX.Element {
        return (
            <div className="main-content">
                <TaskListPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange} />
            </div>
        );
    }

    private onCreateTask = (title: string, description: string): void => {
        this.props.dispatch(createTask(title, description));
    }

    private onStatusChange = (id: number, status: string): void => {
        this.props.dispatch(editTask(id, status));
    }
}

export const mapStateToProps = (state: any): any => {
    return {
        tasks: state.tasks
    }
}

export const ConnectedApp: React.ComponentClass<IConnectedProps> = connect(mapStateToProps)(App);
