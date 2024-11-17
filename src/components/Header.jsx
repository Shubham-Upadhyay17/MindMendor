import logo from "../assets/images/logo1.png";
import "./css/header.css";
import { Link } from "react-router-dom";

function Header() {
  const handleScrollAbout = () => {
    window.scroll({
      top: 1250, // Scroll vertically to 100 pixels
      left: 0, // Don't change horizontal position
      behavior: "smooth", // Smooth scroll
    });
  };

  const handleScrollLogin = () => {
    window.scroll({
      top: 540, // Scroll vertically to 100 pixels
      left: 0, // Don't change horizontal position
      behavior: "smooth", // Smooth scroll
    });
  };

  const handleScrollContact = () => {
    window.scroll({
      top: 3040, // Scroll vertically to 100 pixels
      left: 0, // Don't change horizontal position
      behavior: "smooth", // Smooth scroll
    });
  };
  
  const handleScrollResearch = () => {
    window.scroll({
      top: 1250, // Scroll vertically to 100 pixels
      left: 0, // Don't change horizontal position
      behavior: "smooth", // Smooth scroll
    });
  };

  return (
    <div className="py-[15px] px-[30px] bg-[#0c0f0a] flex justify-between align-center">
      <img src={logo} alt="Logo" className="w-[150px] object-cover" />
      <div className="menu flex items-center gap-5 justify-between px-4 w-auto">
        <Link to="/MindMendor" className="anc">
          <h3 className="text-[#ffff]">Home</h3>
        </Link>
        <Link to="/MindMendor/ui" className="anc">
          <h3 className="text-[#ffff]">UI</h3>
        </Link>
        <Link onClick={handleScrollResearch} className="anc">
          <h3 className="text-[#ffff]">Research Paper</h3>
        </Link>
        <Link onClick={handleScrollLogin} className="anc">
          <h3 className="text-[#ffff]">Login / Register</h3>
        </Link>
        <Link onClick={handleScrollAbout} className="anc">
          <h3 className="text-[#ffff]">About Us</h3>
        </Link>
        <Link onClick={handleScrollContact} className="anc">
          <h3 className="text-[#ffff]">Contact</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
