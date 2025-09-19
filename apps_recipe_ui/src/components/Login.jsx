import { Form, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";

export default function Login() {
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="flex flex-col md:flex-row max-w-4xl w-full mx-4 md:mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-center w-full md:w-1/2 bg-orange-900 p-8">
          <img src={logo} alt="Logo" className="max-h-60 object-contain" />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <Form method="post">
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              Login
            </h1>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-900 hover:bg-orange-800 text-white font-semibold py-3 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
            >
              Login
            </button>
          </Form>

          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-sm text-orange-700 dark:text-orange-400 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          <div className="mt-3 text-center text-sm text-gray-700 dark:text-gray-400">
            Don’t have an account?
            <a
              onClick={handleRegister}
              className="cursor-pointer ml-1 text-orange-700 dark:text-orange-400 hover:underline"
            >
              Sign up now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
