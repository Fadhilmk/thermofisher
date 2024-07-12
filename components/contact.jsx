// components/ContactUs.jsx
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div id='contact' className="relative">
      {/* <div className="absolute inset-0">
        <Image
          src="/icons/contact.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div> */}
      <div className="relative mx-auto px-4 py-5">
      <h1 className="text-4xl text-center text-blue-600 font-bold mb-4">CONTACT US</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start p-8 rounded-lg">
          <div className="resp-contact w-full lg:w-1/2 mb-8 lg:mb-0 text-center justify-center">
            <p className="mb-8 font-bold ">
              We&aposd love to hear from you! Please fill out the form on the right to get in touch with us.
            </p>
            <p className="mb-8">
              Address: 1234 Street Name, City, State, ZIP
            </p>
            <p className="mb-8">
              Phone: (123) 456-7890
            </p>
            <p>
              Email: contact@example.com
            </p>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8 shadow-lg border rounded border-gray-300">
            <form className="space-y-4 p-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  required
                  id="message"
                  name="message"
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
  );
};

export default ContactUs;
