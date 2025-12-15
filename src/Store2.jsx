import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./ReduxPracticalToDo/TodoSlicer";


export const Store2 = configureStore({
    reducer: {
        // add reducers here
        todos: todoReducer
    }
});
