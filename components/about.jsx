import Image from 'next/image';

const AboutUs = () => {
  return (
    <div id='about' className="container mx-auto px-1 py-30">
      <h1 className="text-4xl text-center text-blue-500 mt-2 font-bold mb-4 mt-10">ABOUT US</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mb-0">
          <div className="flex justify-center items-center">
            <Image
              src="/icons/about.jpg"
              alt="About Us Image"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full p-4 lg:w-1/2 lg:pl-8">
          <h1 className="text-3xl mb-4 text-center lg:text-left">Who We Are</h1>
          <p className="mb-4 text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo.
            Integer consectetur lacus at ligula scelerisque, sed cursus turpis
            tincidunt. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus
            maximus nec ut leo. Integer consectetur lacus at ligula scelerisque,
            sed cursus turpis tincidunt.
          </p>
          <p className="mb-4 text-center lg:text-left">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-center lg:text-left">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
