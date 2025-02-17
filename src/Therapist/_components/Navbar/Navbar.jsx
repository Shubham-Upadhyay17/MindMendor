import React from "react";
import { LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../Database/Firebase";
import { useUser } from "@/context/UserContext";

function Navbar() {
  const { therapistName } = useUser(); // Get therapist name from context
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/MindMendor/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="relative z-10 flex h-[60px] items-center justify-between bg-white text-gray-800 px-2 md:px-4 shadow-md ml-[90px] md:ml-[240px]">
      <div className="flex gap-x-3 items-center w-36 md:w-64">
        {/* Show toggle button with text Are you available */}
      </div>
      <div className="flex gap-2 md:gap-3 items-center">
        <p className="text-black">Welcome, {therapistName}</p>
        <Link
          onClick={handleLogout}
          className="text-sm hidden border-2 border-indigo-600 w-24 text-center py-2 rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium md:flex items-center justify-center"
        >
          Log out
        </Link>
        <LogOut
          onClick={handleLogout}
          className="block md:hidden text-indigo-600 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
