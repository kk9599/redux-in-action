import * as React from "react";
import { TASK_STATUSES } from './TaskListPage';

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: string;
}

export interface ITaskProps {
    task: ITask;
    onStatusChange: (id: number, status: string) => void;
}

export const Task = (props: ITaskProps) => {
    const onStatusChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        props.onStatusChange(props.task.id, e.currentTarget.value);
    }
    const optionElements = TASK_STATUSES.map(status => (
        <option key={status} value={status}>{status}</option>
    ));

    return (
        <div className="task">
            <div className="task-header">
                <div>
                    {props.task.title}
                </div>
                <select value={props.task.status} onChange={onStatusChange}>
                    {optionElements}
                </select>
            </div>
            <hr />
            <div className="task-body">
                <div>
                    {props.task.description}
                </div>
            </div>
        </div>
    );
}
