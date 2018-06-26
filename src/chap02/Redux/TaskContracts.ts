
export interface ITask {
    id: number;
    title: string;
    description: string;
    status: string;
}

export interface ITasksState {
    tasks: ITask[];
}

export interface IState {
    tasksState: ITasksState
}