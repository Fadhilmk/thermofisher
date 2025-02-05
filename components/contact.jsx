"use client";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Adjust the path as needed
import Image from "next/image";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "main-contact-form"), formData);
      alert("SUCCESS");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <>
      <div className="my-8">
        <hr className="border-t border-gray-300" />
      </div>
      <div id="contact" className="container mt-8 relative">
        <div className="relative mx-auto">
          <h1 className="text-4xl text-center text-blue-500 font-bold mb-8">
            CONTACT US
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 rounded-lg">
            <div
              id="resContactText"
              className="w-full align-center justify-center text-center lg:w-1/2 mb-8 lg:mb-0"
            >
             
              <p className="mb-4">
                We&apos;d love to hear from you! Please fill out the form on the
                right to get in touch with us.
              </p>
              <h2 className="text-2xl text-blue-500 font-bold mb-4">
                XRF Analyzer Middle East
              </h2>
              <p className="mb-4">
                Address: International Business Tower, Al Amaal Street Business
                Bay, Dubai-UAE
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:xrfanalyzermiddleeast@gmail.com"
                  className="text-blue-500 underline"
                >
                  xrfanalyzermiddleeast@gmail.com
                </a>
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 shadow-lg rounded border border-gray-300">
              <form
                id="respContactForm"
                className="space-y-4"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
