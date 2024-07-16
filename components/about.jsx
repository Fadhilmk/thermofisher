import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <div className="my-8">
        <hr className="border-t border-gray-300" />
      </div>
      <div id="about" className="container mx-auto px-1 mb-10">
        <h1 className="text-4xl text-center text-blue-500 mt-2 font-bold mb-4 mt-10">
          ABOUT US
        </h1>
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
            <h1 className="text-3xl mb-4 text-center lg:text-left">
              Who We Are
            </h1>
            <p className="mb-3 text-center lg:text-left">
              At XRF Analyzer Middle East, we are proud to be a premier provider
              of XRF analyzers in the Middle East, committed to delivering
              cutting-edge solutions for material analysis across various
              industries. Our mission is to empower businesses with reliable and
              precise analytical tools that enhance decision-making processes.
            </p>
            <h5 className="mb-2 text-center">What We Offer</h5>
            <p className="mb-3 text-center lg:text-left">
              Advanced XRF Analyzers: We offer a wide range of state-of-the-art
              XRF analyzers for applications such as the gold industry, metal
              analysis, environmental monitoring, quality control, and more.
            </p>
            <p className="text-center lg:text-left">
              Expert Guidance: Our experienced team is dedicated to helping you
              choose the right equipment and providing ongoing support to ensure
              optimal performance.
              <br />
              <br />
              Comprehensive Service: From initial consultation to after-sales
              support and training, we are committed to being with you every
              step of the way.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
