import * as React from "react";
import { ITask } from './Task';
import { TaskList } from './TaskList';

export const TASK_STATUSES = [
    "Unstarted",
    "In Progress",
    "Completed"
];

export interface ITaskListProps {
    tasks: ITask[];
}

export class TaskListPage extends React.Component<ITaskListProps, {}> {

    public render(): JSX.Element {
        return (
            <div className="tasks">
                <div className="task-lists">
                    {this.renderTaskLists()}
                </div>
            </div>
        );
    }

    private renderTaskLists = (): JSX.Element[] => {
        const { tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key={status} status={status} tasks={statusTasks} />;
        });
    }
}