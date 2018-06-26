import * as React from "react";
import { ITask } from "./Task";
import { TaskList } from "./TaskList";

export const TASK_STATUSES: string[] = ["Unstarted", "In Progress", "Completed"];

export interface ITaskListProps {
    tasks: ITask[];
    onCreateTask: (title: string, description: string) => void;
    onStatusChange: (id: number, status: string) => void;
}

export interface ITaskListState {
    showNewCardForm: boolean;
    title: string;
    description: string;
}

export class TaskListPage extends React.Component<
    ITaskListProps,
    ITaskListState
> {
    constructor(props: ITaskListProps) {
        super(props);

        this.state = {
            showNewCardForm: false,
            title: "",
            description: ""
        };
    }

    public render(): JSX.Element {
        return (
            <div className="tasks">
                <div className="tasks-header">
                    <button
                        className="button button-default"
                        onClick={this.toggleForm}
                    >
                        + New task
                    </button>
                </div>

                {this.state.showNewCardForm && (
                    <form
                        className="new-task-form"
                        onSubmit={this.onCreateTask}
                    >
                        <input
                            type="text"
                            className="full-width-input"
                            onChange={this.onTitleChange}
                            value={this.state.title}
                            placeholder="title"
                        />

                        <input
                            type="text"
                            className="full-width-input"
                            onChange={this.onDescChange}
                            value={this.state.description}
                            placeholder="description"
                        />

                        <button className="button">
                            Save
                        </button>
                    </form>
                )}
                <div className="task-lists">{this.renderTaskLists()}</div>
            </div>
        );
    }

    private renderTaskLists = (): JSX.Element[] => {
        const { onStatusChange, tasks } = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return (
                <TaskList
                    key={status}
                    status={status}
                    tasks={statusTasks}
                    onStatusChange={onStatusChange}
                />
            );
        });
    };

    private onTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ title: e.target.value });
    };

    private onDescChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ description: e.target.value });
    };

    private resetForm = (): void => {
        this.setState({
            showNewCardForm: false,
            title: "",
            description: ""
        });
    };

    private onCreateTask = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.onCreateTask(this.state.title, this.state.description);
        this.resetForm();
    };

    private toggleForm = (): void => {
        this.setState({ showNewCardForm: !this.state.showNewCardForm });
    };
}
