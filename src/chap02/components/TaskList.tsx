import * as React from "react";
import { ITask, Task } from './Task';

export interface ITaskListProps {
    tasks: ITask[];
    status: string;
    onStatusChange: (id: number, status: string) => void;
}

export const TaskList = (props: ITaskListProps) => (
    <div className="task-list">
        <div className="task-list-title">
            <strong>{props.status}</strong>
        </div>
        {props.tasks.map(task => (
            <Task key={task.id} task={task} onStatusChange={props.onStatusChange} />
        ))}
    </div>
);
