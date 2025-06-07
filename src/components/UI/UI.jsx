import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo1.png";
import avatar from "../../assets/images/avatar.jpg";
import botavatar from "../../assets/images/avatars/bot.jpg";
import "../css/ui.css";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { IoMdMic } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

import { auth, firestore } from "../../Database/Firebase"; // ✅ Import Firestore & Auth
import { doc, getDoc } from "firebase/firestore"; // ✅ Import Firestore function
import { onAuthStateChanged, signOut } from "firebase/auth";
import { SendHorizonal } from "lucide-react";
import ChatInput from "./ChatInput";

function UI() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [username, setUsername] = useState("User");

  const navigate = useNavigate();

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleClick2 = () => {
    setShowDropdown2(!showDropdown2);
  };

  useEffect(() => {
    const fetchUserData = async (uid) => {
      try {
        const userRef = doc(firestore, "Users", uid); // Reference to Firestore document
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setUsername(userSnap.data().name); // ✅ Update username from Firestore
        } else {
          console.log("No such user document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserData(user.uid); // Fetch Firestore data for logged-in user
      } else {
        setUsername("Guest"); // Default if no user is logged in
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate("/MindMendor/"); // Redirect to login page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const jokes = [
    "Why don't skeletons fight each other? Because they don't have the guts!",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call fake spaghetti? An impasta!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why can't you give Elsa a balloon? Because she’ll let it go!",
  ];

  return (
    <div className="bg-[#0c0f0a] w-screen h-screen">
      <div className="header py-3 px-20 flex justify-between align-center border-b-[0.5px] border-indigo-500">
        <Link className="hover:bg-sky-00">
          <img src={logo} className="w-40" alt="" />
        </Link>
        <div className=" relative menu flex items-center gap-3 justify-between px-4 w-auto">
          <p className="text-white">Welcome, {username}</p>
          <button onClick={handleClick} className="">
            <img
              src={avatar}
              alt=""
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </button>
          {showDropdown && (
            <div className="absolute top-14 right-4 w-[158px] text-white shadow-md py-2">
              <ul className="profile-ul flex flex-col gap-3 px-2 rounded py-2">
                <li className="cursor-pointer px-3">Edit</li>
                <li className="cursor-pointer border-b-1 px-3">Duplicate</li>
                <Link onClick={handleLogout} className="anc">
                  <li className="cursor-pointer px-3">Log out</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex">
        <div className="side border-e-[0.5px] w-[18%] h-[90vh] border-indigo-300 text-white px-2 py-5">
          <p className="font-semibold mb-5">Recent</p>
          <div className="chats flex flex-col justify-center items-center gap-5">
            <h3 className="chatitem truncate ">Who is richest in America</h3>
            <h3 className="chatitem truncate ">3rd Prime Minister of India</h3>
            <h3 className="chatitem truncate ">Int to Binary Conversion</h3>
            <h3 className="chatitem truncate ">
              Needle in the Heystack index problem solution
            </h3>
            <h3 className="chatitem truncate ">Fixing Consecutive sequences</h3>
            <h3 className="chatitem truncate ">I want to fix that issue</h3>
            <h3 className="chatitem truncate ">Macine Learning Fundamentals</h3>
            <h3 className="chatitem truncate ">
              Suggest me some techiques to optimise focus
            </h3>
            <h3 className="chatitem truncate ">
              How the Software Development Life Cycle works
            </h3>
            <h3 className="chatitem truncate ">
              Top 10 bollywood party musicst
            </h3>
          </div>
        </div>

        <div className="main w-[82%] flex flex-col justify-between flex-wrap text-white py-4 px-5">
          <button
            onClick={handleClick2}
            className="explore relative w-fit text-l flex gap-4 items-center justify-between py-2 px-4 rounded-lg"
          >
            Explore More{" "}
            <MdKeyboardDoubleArrowDown
              className="text-white animate-bounce"
              cursor="pointer"
            />
          </button>
          {showDropdown2 && (
            <div className=" text-white shadow-md py-2 w-auto">
              <ul className="absolute top-[17%] bg-glass eplore-more flex flex-col gap-3 px-2 rounded py-3">
                <li className="cursor-pointer px-3 hover:text-blue-600">
                  <Link to="/MindMendor/therapists">Therapy Session</Link>
                </li>
                <li className="cursor-pointer border-b-1 px-3 hover:text-blue-600">
                  <Link to="/MindMendor/meet">Anonymous Conversation</Link>
                </li>
              </ul>
            </div>
          )}

          <div className="currchats flex flex-col px-5 gap-10">
            <div className="user flex justify-end items-center gap-10">
              <p className="glass-effect">Tell me some jokes</p>
              <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
            </div>
            <div className="bot flex justify-start items-top gap-10">
              <img src={botavatar} className="w-10 h-10 rounded-full" alt="" />
              <div className="glass-effect">
                <p className="mb-2">
                  Sure! Here are a few jokes for you: <br />
                </p>

                <ol>
                  {jokes.map((item, index) => (
                    // Using index+1 to display the numbered list
                    <li key={index}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <div id="a" className="justify-self-center">
            <ChatInput />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UI;
