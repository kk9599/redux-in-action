import * as React from "react";

export interface ITask {
    id: number;
    title: string;
    description: string;
    status: string;
}

export interface ITaskProps {
    task: ITask;
}

export const Task = (props: ITaskProps) => (
    <div className="task">
        <div className="task-header">
            <div>
                {props.task.title}
            </div>
        </div>
        <hr />
        <div className="task-body">
            <div>
                {props.task.description}
            </div>
        </div>
    </div>
);
