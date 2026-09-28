const TosterMessage = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    message && (
      <div className='fixed right-6 top-6 z-[60] w-full max-w-sm'>
        <div className='flex items-start gap-4 rounded-2xl border border-[#dddddd] bg-white p-4 shadow-[0_15px_40px_rgba(0,0,0,0.15)]'>
          {/* Success Icon */}

          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#242424] text-sm font-semibold text-white'>
            {type === "success" ? "✓" : "!"}
          </div>

          {/* Content */}

          <div className='min-w-0 flex-1'>
            {/* <p className='text-sm font-semibold text-[#242424]'>Success</p> */}
            <p className='mt-1 text-sm leading-5 text-[#888888]'>{message}</p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            type='button'
            className='flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg text-lg text-[#999999] transition hover:bg-[#f1f1f1] hover:text-[#242424]'>
            ×
          </button>
        </div>
      </div>
    )
  );
};

export default TosterMessage;
