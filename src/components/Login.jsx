import { SignInValidation } from "../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { showToster } from "../redux/tosterSlice";
import { useNavigate, Link } from "react-router-dom";
import LeftSideLandingPage from "./LeftSideLandingPage";
import useToast from "../utils/useToaster";

const Login = () => {
  const user = useSelector((store) => store?.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleLoginSubmission = (e) => {
    e.preventDefault();

    const payload = new FormData(e.currentTarget);
    const signInForm = Object.fromEntries(payload.entries());

    const storedPassword = user?.password;
    const storedEmail = user?.email;
    const signinValidation = SignInValidation({
      ...signInForm,
      userEmail: storedEmail,
      userPassword: storedPassword,
    });

    if (signinValidation.error) {
      showToast(signinValidation.message || "Failed to sign in", "error");
      return;
    }

    const userDispatchPayload = {
      ...user,
      loggedin: true,
      lastLoggedIn: new Date().toISOString(),
    };

    dispatch(addUser(userDispatchPayload));

    dispatch(
      showToster({
        type: "success",
        message: "Logged in successfully",
      }),
    );
    showToast("Logged in successfully", "success");

    navigate("/todo");
  };

  return (
    <>
      <div className='min-h-screen bg-[#eeeeee] font-sans lg:flex'>
        <LeftSideLandingPage />
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
            <form className='space-y-5' onSubmit={handleLoginSubmission}>
              {/* Full Name */}

              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-[#333333]'>
                  Email address
                </label>

                <input
                  name='email'
                  id='email'
                  defaultValue=''
                  type='text'
                  autoComplete='email'
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
                  defaultValue=''
                  type='password'
                  autoComplete='current-password'
                  placeholder='Create a strong password'
                  className='w-full rounded-xl border border-[#d5d5d5] bg-white px-4 py-3.5 text-sm text-[#242424] outline-none transition placeholder:text-[#aaaaaa] focus:border-[#242424] focus:ring-1 focus:ring-[#242424]'
                />
              </div>

              {/* Signup */}
              <button
                type='submit'
                className='w-full cursor-pointer rounded-xl bg-[#242424] px-4 py-3.5 text-sm font-semibold text-white transition duration-200 hover:bg-black active:scale-[0.99]'>
                Login
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
            <Link to='/' className='mt-7 text-center text-sm text-[#888888]'>
              New to this place?{" "}
              <span className='cursor-pointer font-semibold text-[#242424] hover:underline'>
                Sign Up
              </span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
