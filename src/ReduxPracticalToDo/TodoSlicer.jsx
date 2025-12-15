import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id:1,text:"Item1"}]
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodoItem = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(newTodoItem)
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      )
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
