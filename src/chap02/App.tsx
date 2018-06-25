import * as React from "react";
import { TaskListPage } from './TaskListPage';

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="main-content">
                <TaskListPage tasks={[]} />
            </div>
        );
    }
}