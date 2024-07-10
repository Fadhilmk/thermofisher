import Image from 'next/image';

const AboutUs = () => {
  return (
    <div id='about' className="container mt-20 mx-auto px-4 py-12">
      <h1 className="text-4xl text-center text-red-500 font-bold mb-8">ABOUT US</h1>
      <div className="flex flex-col mt-20 lg:flex-row items-center lg:items-start">

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Image
            src="/icons/about.jpg"
            alt="About Us Image"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
        <h1 className="text-3xl mb-4">Who We Are</h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo.
            Integer consectetur lacus at ligula scelerisque, sed cursus turpis
            tincidunt. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
            maximus nec ut leo. Integer consectetur lacus at ligula scelerisque,
            sed cursus turpis tincidunt.
          </p>
          <p className="mb-4">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
