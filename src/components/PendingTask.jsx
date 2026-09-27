import { useDispatch } from "react-redux";
import { updateTodoStatus, removeTodoById } from "../redux/todoSlice";

const PendingTask = ({ task, id, onTodoUpdate }) => {
  const dispatch = useDispatch();

  const handleMarkAsCompleted = () => {
    const updatePayload = {
      id: id,
      status: "completed",
      updatedAt: new Date().toDateString(),
    };

    dispatch(updateTodoStatus(updatePayload));
  };

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  return (
    <div
      key={id}
      className='group flex items-center gap-4 rounded-2xl border border-transparent bg-white px-5 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition hover:border-[#d5d5d5]'>
      <button
        onClick={handleMarkAsCompleted}
        type='button'
        className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-[#b5b5b5] transition hover:border-[#242424]'
      />

      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm font-semibold text-[#242424]'>{task}</p>
      </div>

      <span className='shrink-0 rounded-lg bg-[#f1f1f1] px-3 py-1.5 text-xs font-medium text-[#777777]'>
        Pending
      </span>
      <span
        onClick={() => onTodoUpdate(id, task)}
        className='shrink-0 cursor-pointer rounded-lg bg-[#f1f1f1] px-3 py-1.5 text-xs font-medium text-[#777777]'>
        Edit
      </span>

      <button
        onClick={handleRemoveTodo}
        type='button'
        className='flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#999999] transition hover:bg-[#242424] hover:text-white'>
        ×
      </button>
    </div>
  );
};
export default PendingTask;
