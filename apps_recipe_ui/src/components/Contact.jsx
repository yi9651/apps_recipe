import React, { useRef, useEffect, useState } from "react";
import {
  Form,
  useActionData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import apiClient from "../api/apiCilent";

export default function Contact() {
  const [btnText, setBtnText] = useState("Submit");
  const formRef = useRef(null);
  const submit = useSubmit();
  const actionData = useActionData();
  const navigation = useNavigation();
  const handleSubmitContact = () => {
    const formData = new FormData(formRef.current);
    submit(formData, { method: "POST" });
  };

  useEffect(() => {
    if (actionData?.success) {
      console.log("success saved!");
      formRef.current?.reset();
    }
  }, [actionData]);

  useEffect(() => {
    if (navigation.state === "submitting") {
      //form is submitting
      console.log("The form is being submitted!");
      setBtnText("Submitting");
    }
  }, [navigation]);
  return (
    <Form
      ref={formRef}
      onSubmit={handleSubmitContact}
      method="post"
      className="m-16 max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        Contact Us
      </h2>

      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

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
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="contact_no"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Contact No.
        </label>
        <input
          type="text"
          id="contact_no"
          name="contact_no"
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="comment"
          className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="4"
          className="w-full p-2.5 border border-gray-300 rounded-lg text-sm bg-gray-50 text-gray-900 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        ></textarea>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-6 rounded-lg text-sm focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700"
        >
          {btnText}
        </button>
      </div>
    </Form>
  );
}
export async function saveContact({ request, params }) {
  const data = await request.formData();
  const contactData = {
    name: data.get("name"),
    email: data.get("email"),
    contact_no: data.get("contact_no"),
    comment: data.get("comment"),
  };
  await apiClient.post("/contact", contactData);
  return { success: true, message: "Comment saved successfully!" };
}
