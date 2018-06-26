import { default as produce } from "immer";
import { ITask, ITasksState } from './TaskContracts';
import { uniqueId, TaskActions, TaskActionTypes } from './TaskActions';

const mockTasks: ITask[] = [
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
];

export const tasksReducer = (state: ITasksState = { tasks: mockTasks }, action: TaskActions): ITasksState => {
    state = state || getDefaultState();

    const newState = produce(state, draft => {
        switch(action.type) {
            case TaskActionTypes.CreateTask: {
                const newTask: ITask = {
                    id: uniqueId(),
                    title: action.payload.title,
                    description: action.payload.description,
                    status: "In progress"
                };
                draft.tasks = state.tasks.concat(newTask);
                break;
            }

            case TaskActionTypes.EditTaskStatus: {
                draft.tasks = state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return Object.assign({}, task, { status: action.payload.status });
                    }
                    return task;
                });
                break;
            }
        }
    });

    return newState;
}

const getDefaultState = (): ITasksState => {
    return {
        tasks: []
    }
}
