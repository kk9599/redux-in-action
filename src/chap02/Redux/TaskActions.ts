import { createAction, ActionsUnion } from "util/ActionHelper";

let _id: number = 1;

export const uniqueId = (): number => {
    return _id++;
};

export const enum TaskActionTypes {
    CreateTask = "CREATE_TASK",
    EditTaskStatus = "EDIT_TASK_STATUS"
}

export const TaskActionsCreator = {
    createTaskAction: (title: string, description: string) => createAction(TaskActionTypes.CreateTask, {title, description}),
    editTaskStatus: (id: number, status: string) => createAction(TaskActionTypes.EditTaskStatus, { id, status })
}

export type TaskActions = ActionsUnion<typeof TaskActionsCreator>;