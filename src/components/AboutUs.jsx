import { Link } from "react-router-dom";

const AboutUs = () => {
  const features = [
    {
      number: "01",
      title: "Create Tasks",
      description:
        "Quickly add tasks and keep everything you need to accomplish in one organized place.",
    },
    {
      number: "02",
      title: "Update Tasks",
      description:
        "Plans change. Edit your existing tasks whenever you need to update the details.",
    },
    {
      number: "03",
      title: "Track Progress",
      description:
        "Mark tasks as completed and clearly see what is finished and what still needs your attention.",
    },
    {
      number: "04",
      title: "Delete Tasks",
      description:
        "Remove individual tasks you no longer need and keep your workspace clean.",
    },
    {
      number: "05",
      title: "Clear Todos",
      description:
        "Clean up your task list quickly when you want to start fresh.",
    },
    {
      number: "06",
      title: "Simple Experience",
      description:
        "A clean and distraction-free interface designed around one goal: helping you get things done.",
    },
  ];

  return (
    <main className='min-h-screen bg-[#eeeeee] text-[#242424]'>
      {/* Header */}
      <header className='border-b border-black/10 bg-[#eeeeee]'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10'>
          {/* Logo */}
          <Link to='/' className='flex items-center gap-2'>
            <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-[#242424] font-bold text-white'>
              T
            </div>

            <div className='flex h-9 w-9 items-center justify-center rounded-lg border border-black/20 font-bold'>
              O
            </div>

            <div className='flex h-9 w-9 items-center justify-center rounded-lg bg-[#242424] font-bold text-white'>
              D
            </div>

            <div className='flex h-9 w-9 items-center justify-center rounded-lg border border-black/20 font-bold'>
              O
            </div>
          </Link>

          <Link
            to='/'
            className='rounded-xl border border-black/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-[#242424] hover:text-white'>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className='mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10 lg:pb-12 lg:pt-20'>
        <span className='rounded-full border border-black/15 px-4 py-2 text-xs font-semibold tracking-wider text-[#666666]'>
          ABOUT TODO
        </span>

        <h1 className='mt-7 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl'>
          Less clutter.
          <span className='block text-[#888888]'>More focus.</span>
        </h1>

        <p className='mt-7 max-w-2xl text-lg leading-8 text-[#666666]'>
          Todo is a simple task management application built to help you
          organize your day, manage your tasks, and focus on what matters
          without unnecessary complexity.
        </p>
      </section>

      {/* Learning Project Notice */}
      <section className='mx-auto max-w-7xl px-6 pb-12 pt-4 lg:px-10 lg:pb-16 lg:pt-6'>
        <div className='rounded-2xl border-2 border-[#242424] bg-white p-6 sm:p-8'>
          <div className='flex items-start gap-4'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#242424] text-xl'>
              🎓
            </div>

            <div>
              <h3 className='text-lg font-bold text-[#242424]'>
                Important Note — Learning Project 🙈🤪
              </h3>

              <p className='mt-3 max-w-4xl leading-7 text-[#666666]'>
                <strong className='font-bold text-[#242424]'>
                  This application is built purely for learning and practice
                  purposes.
                </strong>{" "}
                It currently does not use a database or persistent backend
                storage. Authentication and Todo data are managed using Redux on
                the client side.
              </p>

              <p className='mt-3 max-w-4xl leading-7 text-[#666666]'>
                <strong className='font-bold text-[#242424]'>
                  Because the data is not persisted, refreshing or reloading the
                  application may log you out and your Todo data may be lost.
                </strong>{" "}
                Database integration and persistent storage can be added in a
                future version as the project evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Application */}
      <section className='bg-[#242424] text-white'>
        <div className='mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24'>
          <div>
            <p className='mb-4 text-xs font-semibold tracking-[0.2em] text-[#888888]'>
              THE APPLICATION
            </p>

            <h2 className='max-w-lg text-3xl font-semibold leading-tight sm:text-4xl'>
              A simple workspace for your everyday tasks.
            </h2>
          </div>

          <div className='space-y-5 text-base leading-7 text-[#a7a7a7]'>
            <p>
              Todo was created around a simple idea: task management should make
              your day easier, not become another complicated system you have to
              manage.
            </p>

            <p>
              The application gives you a focused workspace where you can
              create, update, complete, and remove tasks while keeping track of
              your daily progress.
            </p>

            <p>
              Its minimal interface removes unnecessary distractions so you can
              spend less time managing your task manager and more time
              completing your work.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24'>
        <div className='mb-12'>
          <p className='text-xs font-semibold tracking-[0.2em] text-[#888888]'>
            FEATURES
          </p>

          <h2 className='mt-4 text-4xl font-semibold tracking-tight'>
            Everything you need.
          </h2>

          <p className='mt-4 max-w-xl leading-7 text-[#777777]'>
            Essential task-management features without unnecessary complexity.
          </p>
        </div>

        <div className='grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3'>
          {features.map((feature) => (
            <div
              key={feature.number}
              className='bg-white p-8 transition hover:bg-[#f8f8f8]'>
              <span className='text-xs font-semibold text-[#999999]'>
                {feature.number}
              </span>

              <h3 className='mt-8 text-xl font-semibold'>{feature.title}</h3>

              <p className='mt-3 text-sm leading-6 text-[#777777]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech / Project */}
      <section className='border-y border-black/10 bg-white'>
        <div className='mx-auto max-w-7xl px-6 py-20 lg:px-10'>
          <p className='text-xs font-semibold tracking-[0.2em] text-[#888888]'>
            BUILT WITH
          </p>

          <h2 className='mt-4 text-3xl font-semibold'>
            Simple tools. Clean architecture.
          </h2>

          <div className='mt-8 flex flex-wrap gap-3'>
            {[
              "React.js",
              "Redux Toolkit",
              "JavaScript",
              "Tailwind CSS",
              "React Router",
            ].map((technology) => (
              <span
                key={technology}
                className='rounded-full border border-black/10 bg-[#eeeeee] px-4 py-2 text-sm font-medium'>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className='mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24'>
        <div className='overflow-hidden rounded-3xl bg-[#242424] p-8 text-white sm:p-12 lg:p-16'>
          <div className='grid items-end gap-12 lg:grid-cols-2'>
            <div>
              <p className='text-xs font-semibold tracking-[0.2em] text-[#888888]'>
                DEVELOPER
              </p>

              <h2 className='mt-5 text-4xl font-semibold tracking-tight'>
                Vishal Gupta
              </h2>

              <p className='mt-4 max-w-lg leading-7 text-[#a7a7a7]'>
                Software developer passionate about building simple, scalable,
                and useful applications with modern web technologies.
              </p>
            </div>

            <div className='flex flex-wrap gap-3 lg:justify-end'>
              <a
                href='https://github.com/aadivishu4'
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#242424] transition hover:bg-[#dddddd]'>
                GitHub Profile ↗
              </a>

              <Link
                to='/'
                className='rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10'>
                Back to App
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-black/10'>
        <div className='mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#777777] sm:flex-row sm:items-center sm:justify-between lg:px-10'>
          <p>TODO — Plan. Focus. Achieve.</p>

          <a
            href='https://github.com/aadivishu4/react-todo-app.git'
            target='_blank'
            rel='noreferrer'
            className='font-medium text-[#242424] hover:underline'>
            GitHub Repository ↗
          </a>
        </div>
      </footer>
    </main>
  );
};

export default AboutUs;
