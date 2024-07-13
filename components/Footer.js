// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-blue-600 h-6">
          <p className="text-white text-center text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
      </footer>
    );
  };
  
export default Footer;