import { useRef, useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useSubmit,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import apiClient from "../api/apiCilent";
import { toast } from "react-toastify";
import logo from "../assets/logo/logo.png";

export default function Register() {
  const [btnText, setBtnText] = useState("Register");
  const formRef = useRef(null);
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();

  const handleSubmitUser = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const newPass = formData.get("password");
    const confirmPass = formData.get("confirm_password");
    if (validatePassword(newPass, confirmPass)) {
      submit(formData, { method: "POST" });
    } else {
      toast.error("Sorry, unmatched password!");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  useEffect(() => {
    if (actionData?.success) {
      formRef.current?.reset();
      toast.success("You've registered successfully!");
      navigate("/login");
    }
  }, [actionData]);

  useEffect(() => {
    if (navigation.state === "submitting") {
      setBtnText("Registering");
    }
  }, [navigation?.state]);
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full mx-auto p-8 bg-white border border-gray-300 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <Form ref={formRef} method="post">
          <div className="flex justify-center mb-6">
            <img src={logo} className="h-20 w-20 object-cover" alt="Logo" />
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
            Create an account
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
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirm_password"
              className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-300 hover:bg-orange-500 text-white font-medium py-2.5 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-800"
          >
            {btnText}
          </button>
        </Form>
        <div className="mt-3 text-center text-sm text-gray-700 dark:text-gray-300">
          Have an account?
          <a
            onClick={handleLogin}
            className="cursor-pointer ml-1 text-orange-600 dark:text-orange-500 hover:underline"
          >
            Sign In now
          </a>
        </div>
      </div>
    </div>
  );
}

export async function saveUser({ request, params }) {
  const validatePassword = (password, confirm_pasword) => {
    if (password !== confirm_pasword) {
      return false;
    }
    return true;
  };
  const data = await request.formData();
  if (validatePassword(data.get("password"), data.get("confirm_password"))) {
    const userData = {
      email: data.get("email"),
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      password: data.get("password"),
    };

    console.log(userData);

    //await apiClient.post("/user/register", userData);
    return { success: true, message: "The user has registered successfully!" };
  } else {
    toast.error("Sorry, unmatched password!");
  }
}
