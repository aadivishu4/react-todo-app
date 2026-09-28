import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useTodo from "../hooks/useTodo";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";
import { removeUser } from "../redux/userSlice";
import useToast from "../utils/useToaster";

const Todo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todoRef = useRef(null);
  const todos = useSelector((store) => store.todo);
  const user = useSelector((store) => store.user);
  const { addTodoItem, updateTodoItem, clearAllTodoItems } = useTodo();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState("all");

  // Stores ID of todo currently being edited
  const [editingTodoId, setEditingTodoId] = useState(null);

  const initialOfName = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  let todoItems = todos;

  if (activeTab === "pending") {
    todoItems = todos.filter((todo) => todo.status === "pending");
  }

  if (activeTab === "completed") {
    todoItems = todos.filter((todo) => todo.status === "completed");
  }

  // Pending first → Completed later
  todoItems = [...todoItems].sort((a, b) => {
    if (a.status === b.status) return 0;

    return a.status === "pending" ? -1 : 1;
  });

  const completedCount = todos.filter(
    (todo) => todo.status === "completed",
  ).length;

  const progress =
    todos.length === 0 ? 0 : Math.round((completedCount / todos.length) * 100);

  const handleTodoSubmit = () => {
    const todoValue = todoRef.current?.value;

    if (!todoValue?.trim()) return;

    if (editingTodoId) {
      const response = updateTodoItem(editingTodoId, todoValue);

      if (response?.error) {
        showToast(response.message || "Failed to update todo!", "error");
        return;
      }

      todoRef.current.value = "";
      setEditingTodoId(null);

      showToast("Todo updated successfully!", "success");

      return;
    }

    const response = addTodoItem(todoValue);

    if (!response?.error) {
      showToast(response.message || "Failed to add todo!", "error");
      return;
    }

    todoRef.current.value = "";
    showToast("Todo added successfully!", "success");
  };

  const handleTodoUpdate = (id, task) => {
    setEditingTodoId(id);

    todoRef.current.value = task;

    todoRef.current.focus();
  };

  const handleCancelUpdate = () => {
    setEditingTodoId(null);

    if (todoRef.current) {
      todoRef.current.value = "";
      todoRef.current.focus();
    }
  };

  const handleClearAllTodo = () => {
    clearAllTodoItems();

    setEditingTodoId(null);

    if (todoRef.current) {
      todoRef.current.value = "";
    }
  };

  const handleTodoClickedNav = () => {
    setActiveTab("all");
  };

  const handlePendingClickedNav = () => {
    setActiveTab("pending");
  };

  const handleCompletedClickedNav = () => {
    setActiveTab("completed");
  };

  const handleLogout = () => {
    dispatch(removeUser(null));
    navigate("/");
  };

  return (
    <div className='flex h-screen w-full overflow-hidden bg-[#eeeeee] font-sans'>
      {/* ================= SIDEBAR ================= */}

      <aside className='flex h-screen w-[30%] shrink-0 flex-col overflow-hidden bg-[#242424] px-8 py-8 text-white'>
        {/* Logo */}

        <div className='flex items-center gap-2'>
          <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#242424]'>
            T
          </div>

          <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#242424] text-lg font-bold text-white'>
            O
          </div>

          <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-bold text-[#242424]'>
            D
          </div>

          <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#242424] text-lg font-bold text-white'>
            O
          </div>
        </div>

        {/* ================= NAVIGATION ================= */}

        <nav className='mt-16 space-y-3'>
          {/* ALL TODOS */}

          <button
            type='button'
            onClick={handleTodoClickedNav}
            className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-sm font-semibold transition ${
              activeTab === "all"
                ? "bg-white text-[#242424] shadow-sm"
                : "bg-white/5 text-[#cccccc] hover:bg-white/15 hover:text-white"
            }`}>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                activeTab === "all"
                  ? "bg-[#242424] text-white"
                  : "border border-white/30 text-[#dddddd]"
              }`}>
              {activeTab === "all" ? "✓" : "○"}
            </span>
            Todo
          </button>

          {/* PENDING */}

          <button
            type='button'
            onClick={handlePendingClickedNav}
            className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-sm font-semibold transition ${
              activeTab === "pending"
                ? "bg-white text-[#242424] shadow-sm"
                : "bg-white/5 text-[#cccccc] hover:bg-white/15 hover:text-white"
            }`}>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                activeTab === "pending"
                  ? "bg-[#242424] text-white"
                  : "border border-white/30 text-[#dddddd]"
              }`}>
              {activeTab === "pending" ? "✓" : "○"}
            </span>
            Pending Tasks
          </button>

          {/* COMPLETED */}

          <button
            type='button'
            onClick={handleCompletedClickedNav}
            className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-left text-sm font-semibold transition ${
              activeTab === "completed"
                ? "bg-white text-[#242424] shadow-sm"
                : "bg-white/5 text-[#cccccc] hover:bg-white/15 hover:text-white"
            }`}>
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs ${
                activeTab === "completed"
                  ? "bg-[#242424] text-white"
                  : "border border-white/30 text-[#dddddd]"
              }`}>
              {activeTab === "completed" ? "✓" : "○"}
            </span>
            Completed Tasks
          </button>
        </nav>

        {/* ================= SIDEBAR BOTTOM ================= */}

        <div className='mt-auto space-y-3'>
          {/* PROGRESS */}

          <div className='rounded-2xl border border-white/10 bg-white/5 p-5'>
            <p className='text-xs font-medium uppercase tracking-wider text-[#999999]'>
              Daily Progress
            </p>

            <p className='mt-2 text-sm text-[#dddddd]'>
              Stay focused and complete your tasks.
            </p>

            <div className='mt-4 h-1.5 overflow-hidden rounded-full bg-white/10'>
              <div
                className='h-full rounded-full bg-white transition-all duration-300'
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <p className='mt-2 text-xs text-[#888888]'>
              {completedCount} of {todos.length} tasks completed
            </p>
          </div>

          {/* LOGOUT */}

          <button
            type='button'
            onClick={handleLogout}
            className='flex w-full cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-[#cccccc] transition hover:bg-white hover:text-[#242424]'>
            <span>Logout</span>

            <span className='text-lg'>→</span>
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <main className='flex h-screen min-w-0 flex-1 flex-col overflow-hidden'>
        {/* ================= HEADER ================= */}

        <section className='z-30 shrink-0 bg-[#eeeeee] px-10 pb-5 pt-8 xl:px-16'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-sm font-medium text-[#999999]'>
                {new Date().toDateString()}
              </p>

              <h1 className='mt-1 text-3xl font-semibold tracking-tight text-[#242424]'>
                My Tasks
              </h1>
            </div>

            <div className='flex items-center gap-3'>
              <div className='hidden text-right sm:block'>
                <p className='text-sm font-semibold text-[#242424]'>
                  {user?.name || "User"}
                </p>

                <p className='mt-0.5 text-xs text-[#999999]'>Stay productive</p>
              </div>

              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#242424] text-sm font-semibold text-white shadow-md'>
                {initialOfName}
              </div>
            </div>
          </div>
        </section>

        {/* ================= ADD / UPDATE TODO ================= */}

        <section className='z-20 shrink-0 bg-[#eeeeee] px-10 pb-6 xl:px-16'>
          <div className='rounded-[24px] bg-white p-6 shadow-[0_15px_40px_rgba(0,0,0,0.07)]'>
            {/* HEADER */}

            <div className='mb-5 flex items-start justify-between gap-4'>
              <div>
                <h2 className='text-lg font-semibold text-[#242424]'>
                  {editingTodoId ? "Update your task" : "Add a new task"}
                </h2>

                <p className='mt-1 text-sm text-[#999999]'>
                  {editingTodoId
                    ? "Make changes to your task."
                    : "What do you want to accomplish today?"}
                </p>
              </div>

              {/* ACTIONS */}

              <div className='flex shrink-0 items-center gap-2'>
                <span className='rounded-full border border-[#dddddd] bg-[#f7f7f7] px-4 py-2 text-xs font-medium text-[#666666]'>
                  {todos.length} {todos.length === 1 ? "Task" : "Tasks"}
                </span>

                <button
                  type='button'
                  onClick={handleClearAllTodo}
                  className='cursor-pointer rounded-full bg-[#242424] px-4 py-2 text-xs font-semibold text-white transition hover:bg-black active:scale-[0.98]'>
                  Clear All
                </button>
              </div>
            </div>

            {/* FORM */}

            <form
              className='flex w-full gap-3'
              onSubmit={(e) => {
                e.preventDefault();
                handleTodoSubmit();
              }}>
              <input
                ref={todoRef}
                type='text'
                placeholder={
                  editingTodoId
                    ? "Update your task..."
                    : "Write your task here..."
                }
                className='min-w-0 flex-1 rounded-xl border border-[#dddddd] bg-[#f8f8f8] px-5 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:bg-white focus:ring-1 focus:ring-[#242424]'
              />

              {/* CANCEL EDIT */}

              {editingTodoId && (
                <button
                  type='button'
                  onClick={handleCancelUpdate}
                  className='shrink-0 cursor-pointer rounded-xl border border-[#dddddd] bg-white px-5 py-3.5 text-sm font-semibold text-[#666666] transition hover:bg-[#f5f5f5]'>
                  Cancel
                </button>
              )}

              {/* ADD / UPDATE */}

              <button
                type='submit'
                className='shrink-0 cursor-pointer rounded-xl bg-[#242424] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]'>
                {editingTodoId ? "Update Todo" : "+ Add Todo"}
              </button>
            </form>
          </div>
        </section>

        {/* ================= TODO LIST ================= */}

        <section className='flex min-h-0 flex-1 flex-col'>
          <div className='min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-10 pb-8 xl:px-16'>
            <div className='space-y-3'>
              {/* ================= EMPTY ================= */}

              {todoItems.length === 0 && (
                <div className='flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-[#d5d5d5] bg-white'>
                  <div className='text-center'>
                    <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#242424] text-lg text-white'>
                      ✓
                    </div>

                    <p className='mt-4 text-sm font-semibold text-[#242424]'>
                      No tasks found
                    </p>

                    <p className='mt-1 text-xs text-[#999999]'>
                      {activeTab === "pending"
                        ? "You don't have any pending tasks."
                        : activeTab === "completed"
                          ? "You haven't completed any tasks yet."
                          : "Add your first task and start being productive."}
                    </p>
                  </div>
                </div>
              )}

              {/* ================= TASKS ================= */}

              {todoItems.map((todo) => {
                if (todo.status === "completed") {
                  return (
                    <CompletedTask
                      key={todo.id}
                      id={todo.id}
                      task={todo.todo}
                      createdAt={todo.createdAt}
                    />
                  );
                }

                return (
                  <PendingTask
                    key={todo.id}
                    id={todo.id}
                    task={todo.todo}
                    createdAt={todo.createdAt}
                    onTodoUpdate={handleTodoUpdate}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Todo;
