import * as React from "react";
import { ITask } from './Task';
import { TaskListPage } from './TaskListPage';

const mockTasks: ITask[] = [
    {
        id: 1,
        title: 'Learn Redux',
        description: 'The store, actions, and reducers, oh my!',
        status: 'In Progress',
    },
    {
        id: 2,
        title: 'Peace on Earth',
        description: 'No big deal.',
        status: 'In Progress',
    },
];

export class App extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="main-content">
                <TaskListPage tasks={mockTasks} />
            </div>
        );
    }
}