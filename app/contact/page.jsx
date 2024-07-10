// components/ContactUs.jsx
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="absolute inset-0">
        <Image
          src="/icons/contact.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>
      <div className="relative mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start  p-8 rounded-lg">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl text-center font-bold mb-4">Contact Us</h1>
            <p className="mb-4">
              We'd love to hear from you! Please fill out the form on the right to get in touch with us.
            </p>
            <p className="mb-4">
              Address: 1234 Street Name, City, State, ZIP
            </p>
            <p className="mb-4">
              Phone: (123) 456-7890
            </p>
            <p>
              Email: contact@example.com
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 shadow-lg border border-gray-300">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
