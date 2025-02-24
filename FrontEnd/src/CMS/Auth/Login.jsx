import { useState } from "react";
import SignUp from "./SignUp";

const LoginComponent = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [open, setOpen] = useState(false)

  const handleSignUpOpen = () => {
    setOpen(!open)
  }

  console.log(open)
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <>

      <div className="flex min-h-screen w-full flex-wrap items-stretch bg-white dark:bg-gray-800 max-md:pb-20 max-md:pt-32">
        <div className="grow md:flex md:w-1/2 md:flex-col md:items-center md:justify-center md:py-20">
          <div className="w-full px-4 text-center text-xs lg:w-1/2">
            <h1 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">Welcome Back</h1>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Access your account to explore our amazing features.
            </p>
            <form className="flex flex-col gap-6" onSubmit={handleLogin} noValidate>
              <div className="relative">
                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium leading-none text-gray-700 dark:text-gray-200 mb-3" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  className="block peer w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors focus:border-indigo-500 focus:outline-0 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="relative">
                <label className="flex cursor-pointer items-center gap-2 text-xs font-medium leading-none text-gray-700 dark:text-gray-200 mb-3" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    className="block peer w-full px-4 py-3 border border-gray-300 bg-gray-100 text-gray-800 placeholder-gray-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors focus:border-indigo-500 focus:outline-0 focus:ring focus:ring-indigo-200 dark:focus:ring-indigo-500"
                    type={passwordVisible ? "text" : "password"}
                    placeholder="Your password"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    {passwordVisible ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              <div className="my-2 flex justify-between gap-2">

                <div className="text-right">
                  <a className="text-indigo-600 dark:text-indigo-400" href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                className="group inline-flex items-center justify-center gap-1.5 font-medium rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:bg-indigo-700 focus-visible:shadow-indigo-300/10 px-5 py-3"
                type="submit"
              >
                Sign in
              </button>

            </form>
            <div className="w-full mt-8 text-gray-600 dark:text-gray-400">
              Don't have an account yet?
              <p className="font-medium text-indigo-600 underline cursor-pointer" href="/register" onClick={handleSignUpOpen}> Sign up </p>
            </div>
          </div>
        </div>

        <div
          className="hidden flex-col justify-center overflow-hidden bg-cover bg-center md:flex md:w-1/2"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlfGVufDB8MXwwfHx8MA%3D%3D)` }}
        >
        </div>
      </div>

      {open && (
        <SignUp open={open} onClose={handleSignUpOpen} />
      )}
    </>

  );
};

export default LoginComponent;
