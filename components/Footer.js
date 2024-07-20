
const Footer = () => {
    return (
      <footer className="bg-blue-600 pt-1 pb-4 h-6">
          <p className="text-white text-center text-sm">
            &copy; {new Date().getFullYear()} XRF ANALYZER. All rights reserved.
          </p>
      </footer>
    );
  };
  
export default Footer;