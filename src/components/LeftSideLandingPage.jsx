const LeftSideLandingPage = () => {
  return (
    <section className='relative flex min-h-[320px] items-center overflow-hidden bg-[#242424] px-8 py-12 text-white lg:min-h-screen lg:w-1/2 lg:px-16 xl:px-24'>
      {/* Decorative Background */}
      <div className='absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10' />
      <div className='absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10' />
      <div className='absolute bottom-20 right-20 h-40 w-40 rounded-full bg-white/5 blur-3xl' />

      <div className='relative z-10 max-w-xl'>
        {/* Logo */}
        <div className='my-5 flex items-center gap-2'>
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

        {/* Content */}
        <div>
          <span className='mb-5 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-[#cccccc]'>
            PLAN • FOCUS • ACHIEVE
          </span>

          <h1 className='max-w-lg text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl xl:text-6xl'>
            Organize your day.
            <span className='block text-[#a7a7a7]'>Simplify your life.</span>
          </h1>

          <p className='mt-6 max-w-md text-base leading-7 text-[#a7a7a7]'>
            Create tasks, stay focused, and turn your daily plans into
            achievements. A simple workspace designed to help you get things
            done.
          </p>

          {/* About + GitHub */}
          <div className='mt-7 flex flex-wrap items-center gap-3'>
            <a
              href='/about'
              className='rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#242424] transition hover:bg-[#e5e5e5]'>
              About Todo App
            </a>

            <a
              href='https://github.com/aadivishu4/react-todo-app.git'
              target='_blank'
              rel='noreferrer'
              className='rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className='mt-12 border-l-2 border-white/20 pl-4'>
          <p className='text-sm leading-6 text-[#888888]'>
            Small tasks completed every day lead to bigger achievements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeftSideLandingPage;
