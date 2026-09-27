import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    updateTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.todo = action.payload.task;
        todo.updatedAt = new Date().toISOString();
      }
    },

    updateTodoStatus: (state, action) => {
      const todo = state.find((item) => item.id === action.payload.id);

      if (todo) {
        todo.status = "completed";
        todo.updatedAt = new Date().toISOString();
      }
    },

    removeTodoById: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    clearAllTodo: (state) => {
      state.length = 0;
    },
  },
});

export const {
  addTodo,
  updateTodo,
  updateTodoStatus,
  removeTodoById,
  clearAllTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
