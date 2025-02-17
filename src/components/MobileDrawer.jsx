import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const MobileDrawer = ({ isOpen, setIsOpen }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollContact = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (location.pathname === "/MindMendor/") {
      setIsOpen(false);
      window.scroll({
        top: 5000, // Scroll vertically to 100 pixels
        left: 0, // Don't change horizontal position
        behavior: "smooth", // Smooth scroll
      }); // Delay to allow page transition
    } else {
      setIsOpen(false);
      navigate("/MindMendor/"); // Redirect to home
      setTimeout(() => {
        window.scrollTo({ top: 5000, behavior: "smooth" }); // Scroll down smoothly
      }, 100); // Normal About Us navigation
    }
  };

  const handleScrollHome = (event) => {
    event.preventDefault();
    setIsOpen(false);
    navigate("/MindMendor/");
    window.scroll({
      top: 0, // Scroll vertically to 100 pixels
      left: 0, // Don't change horizontal position
      behavior: "smooth", // Smooth scroll
    });
  };

  const handleResearchClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (location.pathname === "/MindMendor/") {
      setIsOpen(false);
      window.scroll({
        top: 1400, // Scroll vertically to 100 pixels
        left: 0, // Don't change horizontal position
        behavior: "smooth", // Smooth scroll
      }); // Delay to allow page transition
    } else {
      setIsOpen(false);
      navigate("/MindMendor/"); // Redirect to home
      setTimeout(() => {
        window.scrollTo({ top: 1400, behavior: "smooth" }); // Scroll down smoothly
      }, 100); // Normal About Us navigation
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (location.pathname === "/MindMendor/") {
      setIsOpen(false);
      window.scroll({
        top: 900, // Scroll vertically to 100 pixels
        left: 0, // Don't change horizontal position
        behavior: "smooth", // Smooth scroll
      }); // Delay to allow page transition
    } else {
      setIsOpen(false);
      navigate("/MindMendor/"); // Redirect to home
      setTimeout(() => {
        window.scrollTo({ top: 900, behavior: "smooth" }); // Scroll down smoothly
      }, 100); // Normal About Us navigation
    }
  };

  const handleAboutClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (location.pathname === "/MindMendor/") {
      setIsOpen(false);
      window.scroll({
        top: 2400, // Scroll vertically to 100 pixels
        left: 0, // Don't change horizontal position
        behavior: "smooth", // Smooth scroll
      }); // Delay to allow page transition
    } else {
      setIsOpen(false);
      navigate("/MindMendor/"); // Redirect to home
      setTimeout(() => {
        window.scrollTo({ top: 2400, behavior: "smooth" }); // Scroll down smoothly
      }, 100); // Normal About Us navigation
    }
  };

  const handleUiClick = (event) => {
    event.preventDefault(); // Prevent default anchor behavior

    if (location.pathname === "/MindMendor/ui") {
      setIsOpen(false);
      window.scroll({
        top: 0, // Scroll vertically to 100 pixels
        left: 0, // Don't change horizontal position
        behavior: "smooth", // Smooth scroll
      }); // Delay to allow page transition
    } else {
      setIsOpen(false);
      navigate("/MindMendor/ui"); // Redirect to home
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll down smoothly
      }, 100); // Normal About Us navigation
    }
  };

  return (
    <div
      className={`md:hidden ${
        isOpen ? "block" : "hidden"
      } bg-gray-900 w-full h-full`}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          onClick={handleScrollHome}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Home
        </Link>
        <Link
          onClick={handleUiClick}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Ui
        </Link>
        <Link
          onClick={handleResearchClick}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Research Paper
        </Link>
        <Link
          onClick={handleLoginClick}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Login / Register
        </Link>
        <Link
          onClick={handleAboutClick}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          About Us
        </Link>
        <Link
          onClick={handleScrollContact}
          className="text-white hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default MobileDrawer;
