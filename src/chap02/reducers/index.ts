import { uniqueId, ActionTypes, IAction } from "../actions";
import { ITask } from "../components/Task";

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

export interface IState {
    tasks: ITask[];
}

export const tasks = (state: IState = { tasks: mockTasks }, action: IAction): IState => {
    if (action.type === ActionTypes.CreateTask) {
        return {
            tasks: state.tasks.concat(action.payload as ITask)
        };
    }

    if (action.type == ActionTypes.EditTask) {
        return {
            tasks: state.tasks.map(task => {
                if (task.id === action.payload.id) {
                    return Object.assign({}, task, { status: action.payload.status });
                }
                return task;
            })
        };
    }

    return state;
};

export default tasks;
