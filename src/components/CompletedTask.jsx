const CompletedTask = ({ task, id, onTodoUpdate }) => {
  const handleMarkAsPending = (e) => {
    e.preventDefault();
    console.log("mark as pending", e.div);
  };
  return (
    <div
      key={id}
      className='flex items-center gap-4 rounded-2xl border border-[#e5e5e5] bg-[#f7f7f7] px-5 py-5'>
      {/* Complete */}

      <button
        onClick={handleMarkAsPending}
        type='button'
        className='flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#242424] text-xs text-white'>
        ✓
      </button>

      {/* Task Content */}

      <div className='min-w-0 flex-1'>
        <p className='truncate text-sm font-medium text-[#999999] line-through'>
          {task}
        </p>
      </div>

      {/* Status */}

      <span className='shrink-0 rounded-lg bg-[#242424] px-3 py-1.5 text-xs font-medium text-white'>
        Completed
      </span>
      <span
        onClick={() => onTodoUpdate(id, task)}
        className='shrink-0 rounded-lg bg-[#f1f1f1] px-3 py-1.5 text-xs font-medium text-[#777777]'>
        Edit
      </span>

      {/* Delete */}

      <button
        type='button'
        className='flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-[#999999] transition hover:bg-[#242424] hover:text-white'>
        ×
      </button>
    </div>
  );
};
export default CompletedTask;
