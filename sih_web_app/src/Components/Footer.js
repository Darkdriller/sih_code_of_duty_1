import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>Copyright &copy; | All rights reserved</div>

        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
