import { useDispatch } from "react-redux";
import { addTodo, clearAllTodo, updateTodo } from "../redux/todoSlice";

import { generateTodoId } from "../utils/todo.utils";

const useTodo = () => {
  const dispatch = useDispatch();

  const addTodoItem = (todo) => {
    if (!todo?.trim()) {
      return {
        error: true,
        message: "Todo is required",
      };
    }

    const now = new Date().toISOString();

    const todoPayload = {
      id: generateTodoId(),
      todo: todo.trim(),
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    dispatch(addTodo(todoPayload));

    return {
      error: false,
      message: "Todo added successfully",
    };
  };

  const updateTodoItem = (id, task) => {
    if (!id) {
      return {
        error: true,
        message: "Todo id is required",
      };
    }

    if (!task?.trim()) {
      return {
        error: true,
        message: "Todo is required",
      };
    }

    dispatch(
      updateTodo({
        id,
        task: task.trim(),
      }),
    );

    return {
      error: false,
      message: "Todo updated successfully",
    };
  };

  const clearAllTodoItems = () => {
    dispatch(clearAllTodo());

    return {
      error: false,
      message: "All todos cleared successfully",
    };
  };

  return {
    addTodoItem,
    updateTodoItem,
    clearAllTodoItems,
  };
};

export default useTodo;
