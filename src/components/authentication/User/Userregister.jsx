import React, { useState, useRef } from "react";
import Authenticateheader from "../Authenticateheader";
import "../../css/userregister.css";
import Footer from "../../Footer";
import { auth, firestore } from "../../../Database/Firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { DNA } from "react-loader-spinner";

function UserRegister() {
  const ref = collection(firestore, "message");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Manage loading state

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Get the registered user

      if (user) {
        await setDoc(doc(firestore, "Users", user.uid), {
          email: user.email,
          name: name, // ✅ Use the name from state
          phone: phone, // ✅ Store phone number as well
        });
      }
      console.log("User registered:", user);
      toast.success("Registered Suceessfully!", {
        position: "top-center",
      });
    } catch (error) {
      console.log("Error:", error.message);
      toast.error(error.message, {
        position: "top-center",
      });
    } finally {
      setLoading(false); // Hide loading after request completes
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let data = { message: name }; // Save name as message
    try {
      await addDoc(ref, data);
      console.log("Message saved:", data);
    } catch (e) {
      console.log("Firestore Error:", e.message);
    }
  };

  return (
    <div>
      <Authenticateheader />
      {loading && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 py-2 px-6 rounded-lg flex flex-col items-center z-50">
          <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
          <p className="text-white mt-2">Processing...</p>
        </div>
      )}
      <div className="bg-[#212121] text-white h-screen px-2 md:px-40 py-10 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl text-center mb-1">
          User <span className="text-[#1479EA]">Registration</span>
        </p>
        <div className="container text-justify lg:px-40 py-8 w-[100%] md:w-[60%] flex flex-col gap-15 justify-center items-center">
          <form
            className="box form__group field py-10 px-10 w-full flex flex-col gap-14"
            method="POST"
            onSubmit={handleRegister}
          >
            <div className="relative">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="Mobile No."
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <button className="submit-btn" type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default UserRegister;
