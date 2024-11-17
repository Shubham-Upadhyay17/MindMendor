import React from "react";
import "../css/navbar.css"
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

function Navbar() {
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
    <div className="py-[15px] px-[30px] bg-[black] flex justify-between align-center border-b-[0.5px] border-indigo-500">
      <img src={logo} alt="Logo" className="w-[150px] object-cover" />
      <div className="menu flex items-center gap-5 justify-between px-4 w-auto">
        <Link to="/MindMendor/admin/" className="anc">
          <h3 className="text-[#ffff]">Home</h3>
        </Link>
        <Link to="/MindMendor/admin/adminui" className="anc">
          <h3 className="text-[#ffff]">UI</h3>
        </Link>
        {/* <Link to="/MindMendor" className="anc">
          <h3 className="text-[#ffff]">UI</h3>
        </Link> */}
        <Link to="/MindMendor/admin/login" className="anc">
          <h3 className="text-[#ffff]">Login</h3>
        </Link>
        <Link to="/MindMendor/admin/register" className="anc">
          <h3 className="text-[#ffff]">Register</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
