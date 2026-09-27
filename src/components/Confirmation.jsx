const Confirmation = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-[2px]'>
      <div className='relative w-full max-w-md rounded-[24px] border border-[#e5e5e5] bg-white p-7 shadow-[0_25px_70px_rgba(0,0,0,0.25)]'>
        {/* Cross Button */}

        <button
          type='button'
          className='absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f1f1] text-lg text-[#777777] transition hover:bg-[#242424] hover:text-white'>
          ×
        </button>

        {/* Icon */}

        <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#242424] text-xl font-semibold text-white'>
          !
        </div>

        {/* Content */}

        <div className='pr-8'>
          <h2 className='text-xl font-semibold tracking-tight text-[#242424]'>
            Clear all tasks?
          </h2>

          <p className='mt-2 text-sm leading-6 text-[#888888]'>
            Are you sure you want to clear all tasks? This action will remove
            all your tasks from the list.
          </p>
        </div>

        {/* Divider */}

        <div className='my-6 h-px bg-[#eeeeee]' />

        {/* Actions */}

        <div className='flex justify-end gap-3'>
          <button
            type='button'
            className='rounded-xl border border-[#d5d5d5] bg-white px-6 py-3 text-sm font-semibold text-[#555555] transition hover:bg-[#f1f1f1]'>
            No, Cancel
          </button>

          <button
            type='button'
            className='rounded-xl bg-[#242424] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]'>
            Yes, Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
