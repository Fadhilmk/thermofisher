// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-blue-600 py-2">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
export default Footer;  