import { createStore } from "redux";

const counterReducer = (state: number = 0, action: any): number => {
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    return state;
}

const store = createStore(counterReducer);

console.log(store.getState());

store.subscribe(() => {
    console.log("Current state: " + store.getState());
});

store.dispatch({ type: "INCREMENT" });