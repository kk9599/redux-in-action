let _id: number = 1;

export interface IAction {
    type: string;
    payload: any;
}

export class ActionTypes {
    public static CreateTask: string = "CREATE_TASK";
    public static EditTask: string = "EDIT_TASK";
}

export const uniqueId =(): number => {
    return _id++;
}

export const createTask = (title: string, description: string): IAction => {
    return {
        type: ActionTypes.CreateTask,
        payload: {
            id: uniqueId(),
            title,
            description,
            status: "Unstarted"
        }
    };
}

export const editTask = (id: number, status: string): IAction => {
    return {
        type: ActionTypes.EditTask,
        payload: {
            id,
            status
        }
    };
}
