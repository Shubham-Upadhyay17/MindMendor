import React, { useState, useRef } from "react";
import Authenticateheader from "../Authenticateheader";
import "../../css/therapistregister.css";
import Footer from "../../Footer";
import file from "../../../assets/images/svgs/file1.svg";

import { auth, firestore } from "../../../Database/Firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { DNA } from "react-loader-spinner";
import { BadgeCheck, User2Icon } from "lucide-react";

function Therapistregister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setGender] = useState("");
  const [licenseno, setLicenseno] = useState("");
  const [licenseissueauth, setLicenseissueauth] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Upload Profile Photo");

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setButtonText("Done");
    }
  };

  const handleTherapistRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const therapistCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const therapist = therapistCredential.user; // Get the registered user

      if (therapist) {
        await setDoc(doc(firestore, "Therapists", therapist.uid), {
          email: therapist.email,
          name: name, // ✅ Use the name from state
          phone: phone, // ✅ Store phone number as well
          dob: dob,
          gender: gender,
          licenseno: licenseno,
          licenseissueauth: licenseissueauth,
        });
      }
      console.log("Therapist registered:", therapist);
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

  return (
    <div className="">
      <Authenticateheader />
      {loading && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 py-2 px-6 rounded-lg flex flex-col items-center z-50">
          <DNA visible={true} height="80" width="80" ariaLabel="dna-loading" />
          <p className="text-white mt-2">Processing...</p>
        </div>
      )}
      <div className="bg-[#212121] text-white px-2 md:px-40 py-14 flex flex-col justify-center items-center">
        <p className="font-semibold text-3xl text-center mb-1">
          Therapist <span className="text-[#1479EA]">Registration</span>
        </p>
        <div className="container text-justify lg:px-40 py-8 w-[100%] md:w-[60%] flex flex-col gap-15 justify-center items-center">
          <form
            className="box form__group field py-10 px-10 w-full flex flex-col gap-14"
            onSubmit={handleTherapistRegister}
            method="POST"
          >
            <div className="relative">
              <button class="container-btn-file mx-auto hover:border-0">
                {buttonText=="Done"? <BadgeCheck className="text-[#1479ea]" />: <p className="flex"><User2Icon className="mr-2" /> <span>Upload Profile Photo</span></p> }
                <input
                  className="profilephoto"
                  name="profilephoto"
                  type="file"
                  onChange={handleFileChange}
                />
              </button>
            </div>
            <div className="relative">
              <input
                id="therapistname"
                name="therapistname"
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
                id="dob"
                name="dob"
                type="date"
                placeholder="DD/MM/YYYY"
                required
                value={dob}
                onChange={(e) => setdob(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="gender"
                name="gender"
                type="text"
                placeholder="Gender"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="licenseno"
                name="licenseno"
                type="varchar"
                placeholder="License Number"
                required
                value={licenseno}
                onChange={(e) => setLicenseno(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>
            <div className="relative">
              <input
                id="licenseissueauth"
                name="licenseissueauth"
                type="text"
                placeholder="License Issuing Authority"
                required
                value={licenseissueauth}
                onChange={(e) => setLicenseissueauth(e.target.value)}
                className="border-b w-full border-gray-300 py-1 focus:border-b-2 focus:border-[#1479EA] transition-colors focus:outline-none peer bg-inherit"
              />
            </div>

            {/* <button className="container-btn-file">
              <img src={file} className="w-5" alt="" />
              Upload Certificate
              <input className="file" name="text" type="file" />
            </button>

            <button className="container-btn-file">
              <img src={file} className="w-5" alt="" />
              Upload Identity Proof
              <input className="file" name="text" type="file" />
            </button> */}

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

export default Therapistregister;
