import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center bg-[#eeeeee] px-6 font-sans'>
      <div className='w-full max-w-2xl text-center'>
        {/* Logo */}

        <div className='mb-12 flex justify-center'>
          <div className='flex items-center gap-2'>
            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#242424] text-lg font-bold text-white'>
              T
            </div>

            <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-[#d5d5d5] bg-white text-lg font-bold text-[#242424]'>
              O
            </div>

            <div className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#242424] text-lg font-bold text-white'>
              D
            </div>

            <div className='flex h-11 w-11 items-center justify-center rounded-xl border border-[#d5d5d5] bg-white text-lg font-bold text-[#242424]'>
              O
            </div>
          </div>
        </div>

        {/* Error Code */}

        <div className='relative'>
          <h1 className='text-[120px] font-bold leading-none tracking-[-8px] text-[#242424] sm:text-[170px]'>
            404
          </h1>

          <div className='absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#eeeeee]' />
        </div>

        {/* Message */}

        <div className='relative -mt-3'>
          <span className='inline-block rounded-full border border-[#d5d5d5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#777777]'>
            Page not found
          </span>

          <h2 className='mt-6 text-3xl font-semibold tracking-tight text-[#242424]'>
            Looks like you're lost.
          </h2>

          <p className='mx-auto mt-3 max-w-md text-sm leading-6 text-[#888888]'>
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back to organizing your day.
          </p>
        </div>

        {/* Actions */}

        <div className='mt-8 flex items-center justify-center gap-3'>
          <Link
            to='/'
            className='rounded-xl bg-[#242424] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-black active:scale-[0.98]'>
            Back to Home
          </Link>
        </div>

        {/* Bottom */}

        <div className='mt-14 flex items-center justify-center gap-3'>
          <div className='h-px w-12 bg-[#cccccc]' />

          <p className='text-xs font-medium uppercase tracking-[3px] text-[#aaaaaa]'>
            Plan • Focus • Achieve
          </p>

          <div className='h-px w-12 bg-[#cccccc]' />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
