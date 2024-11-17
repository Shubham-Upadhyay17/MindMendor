import React from "react";
import logo from "../../assets/images/logo1.png"
import { Link } from "react-router-dom";

function Authenticateheader() {
  return (
    <div className="py-[15px] px-[30px] bg-[#0c0f0a] flex justify-between align-center">
      <img src={logo} alt="Logo" className="w-[150px] object-cover" />
      <div className="menu flex items-center gap-5 justify-between px-4 w-auto">
        <Link to="/MindMendor" className="anc">
          <h3 className="text-[#ffff]">Home</h3>
        </Link>
        <Link to="/MindMendor/userlogin" className="anc">
          <h3 className="text-[#ffff]">User Login</h3>
        </Link>
        <Link to="/MindMendor/userregister" className="anc">
          <h3 className="text-[#ffff]">User Register</h3>
        </Link>
        <Link to="/MindMendor/therapistlogin" className="anc">
          <h3 className="text-[#ffff]">Therapist Login</h3>
        </Link>
        <Link to="/MindMendor/therapistregister" className="anc">
          <h3 className="text-[#ffff]">Therapist Register</h3>
        </Link>
      </div>
    </div>
  );
}

export default Authenticateheader;
