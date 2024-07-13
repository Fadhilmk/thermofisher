import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <div className="my-8">
        <hr className="border-t border-gray-300" />
      </div>
      <div id='about' className="container mx-auto px-1 mb-10">
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
            <p className="mb-3 text-center lg:text-left">
            At XRF Analyzer Middle East, we are proud to be a premier provider of XRF analyzers in the Middle East, committed to delivering cutting-edge solutions for material analysis across various industries. Our mission is to empower businesses with reliable and precise analytical tools that enhance decision-making processes.
            </p>
            <h5 className="mb-2 text-center">Our Mission</h5>
            <p className="mb-3 text-center lg:text-left">
            Our mission is to provide high-quality XRF technology tailored to our clients&apos; diverse needs. We aim to build lasting partnerships by understanding your unique challenges and delivering exceptional service and support.
            </p>
            <h5 className="mb-2 text-center">What We Offer</h5>
            <p className="mb-3 text-center lg:text-left">
            Advanced XRF Analyzers: We offer a wide range of state-of-the-art XRF analyzers for applications such as the gold industry, metal analysis, environmental monitoring, quality control, and more.
            </p>
            <p className="text-center lg:text-left">
            Expert Guidance: Our experienced team is dedicated to helping you choose the right equipment and providing ongoing support to ensure optimal performance.<br/><br/>

Comprehensive Service: From initial consultation to after-sales support and training, we are committed to being with you every step of the way.

            </p>
            <h5 className="mb-2 text-center">Why Choose Us?</h5>
            <p className="text-center lg:text-left">Regional Expertise: With a deep understanding of the Middle Eastern market and regulatory requirements, we provide solutions that align with local industry standards.<br/><br/>

Innovative Technology: We continually update our product offerings to include the latest advancements in XRF technology, ensuring you have access to the best tools available.<br/><br/>

Customer-Centric Focus: Your satisfaction drives our success. We prioritize your needs and work closely with you to deliver tailored solutions that meet your goals.
</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
