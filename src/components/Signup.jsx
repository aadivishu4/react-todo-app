import { useState } from "react";
import { SignupValidation } from "../utils/validation";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { showToster, hideToster } from "../redux/tosterSlice";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [signupError, setSignupError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setSignupError(null);

    dispatch(
      hideToster({
        show: false,
        type: "",
        message: "",
      }),
    );

    const payload = new FormData(e.currentTarget);
    const signupForm = Object.fromEntries(payload.entries());

    const signupValidation = SignupValidation(signupForm);

    if (signupValidation.error) {
      setSignupError(signupValidation.message);
      return;
    }

    dispatch(addUser({ ...signupForm, signup: true }));

    dispatch(
      showToster({
        show: true,
        type: "success",
        message: "Account created successfully",
      }),
    );

    navigate("/login", {
      state: {
        email: signupForm.email,
        password: signupForm.password,
      },
    });
    console.log("toaster check dispatched...");
  };

  return (
    <section className='flex min-h-screen items-center justify-center bg-[#eeeeee] px-6 py-12 lg:w-1/2 lg:px-12'>
      <div className='w-full max-w-md'>
        {/* Header */}
        <div className='mb-8'>
          <h2 className='text-3xl font-semibold tracking-tight text-[#242424]'>
            Create your account
          </h2>

          <p className='mt-2 text-sm text-[#888888]'>
            Start organizing your day in just a few seconds.
          </p>
        </div>

        {/* Signup Form */}
        <form className='space-y-5' onSubmit={handleFormSubmission}>
          {/* Full Name */}

          <div>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-medium text-[#333333]'>
              Full name
            </label>

            <input
              name='name'
              id='name'
              autoComplete='name'
              type='text'
              placeholder='Enter your full name'
              className='w-full rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:ring-1 focus:ring-[#242424]'
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-medium text-[#333333]'>
              Email address
            </label>

            <input
              name='email'
              autoComplete='email'
              id='email'
              type='text'
              placeholder='you@example.com'
              className='w-full rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:ring-1 focus:ring-[#242424]'
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='mb-2 block text-sm font-medium text-[#333333]'>
              Password
            </label>

            <input
              name='password'
              id='password'
              autoComplete='new-password'
              type='password'
              placeholder='Create a strong password'
              className='w-full rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:ring-1 focus:ring-[#242424]'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor='confirmPassword'
              className='mb-2 block text-sm font-medium text-[#333333]'>
              Confirm password
            </label>

            <input
              name='confirmPassword'
              id='confirmPassword'
              autoComplete='new-password'
              type='password'
              placeholder='Repeat your password'
              className='w-full rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:ring-1 focus:ring-[#242424]'
            />
          </div>

          {/* error message to show */}
          {signupError && (
            <p className='-my-0.5 text-red-400 p-1'>{signupError}</p>
          )}
          {/* <div className='mb-2 block text-sm font-medium text-[#333333]'></div> */}

          {/* Signup */}
          <button
            type='submit'
            className='w-full cursor-pointer rounded-xl bg-[#242424] px-4 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-black active:scale-[0.99]'>
            Create account
          </button>
        </form>

        {/* Divider */}
        <div className='my-7 flex items-center gap-4'>
          <div className='h-px flex-1 bg-[#d5d5d5]' />
          <span className='text-xs font-medium text-[#999999]'>OR</span>
          <div className='h-px flex-1 bg-[#d5d5d5]' />
        </div>

        {/* Google */}
        {/* <button
          type='button'
          className='flex w-full items-center justify-center gap-3 rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm font-medium text-[#333333] transition hover:bg-[#f7f7f7]'>
          <span className='text-base font-semibold'>G</span>
          Continue with Google
        </button> */}

        {/* Login */}
        <Link to='/login' className='mt-7 text-center text-sm text-[#888888]'>
          Already have an account?{" "}
          <span className='cursor-pointer font-semibold text-[#242424] hover:underline'>
            Sign in
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Signup;
