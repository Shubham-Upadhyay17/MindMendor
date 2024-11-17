import React from "react";
import Navbar from "./Navbar";
import "../css/adminui.css";

function Adminui() {
  return (
    <div>
      <Navbar />
      <div className="page flex bg-[#212121] flex-row h-screen text-white">
        <div className="left w-[60%] py-4 px-5 bg-zinc-900">
          <div className="chats flex flex-col justify-center items-center gap-5">
            <h3 className="chatitem text-center">Admins</h3>
            <h3 className="chatitem text-center">Therapists</h3>
            <h3 className="chatitem text-center">Customers</h3>
            <h3 className="chatitem text-center">Therapist Request</h3>
            <h3 className="chatitem text-center">Therapist Queries</h3>
            <h3 className="chatitem text-center">User Queries</h3>
            <h3 className="chatitem text-center">Therapist Feedbacks</h3>
            <h3 className="chatitem text-center">User Feedbacks</h3>
            <h3 className="chatitem text-center">Reported Users</h3>
            <h3 className="chatitem text-center">Reported Therapist</h3>
          </div>
        </div>
        <div className="w-1 h-screen bg-indigo-500 py-4"></div>
        <div className="right px-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquam rem nam numquam. Temporibus, aliquid? Inventore distinctio et
          quos commodi dolores dignissimos fugiat itaque nostrum cupiditate
          nihil, maxime expedita earum dolor adipisci. Adipisci asperiores,
          soluta officiis pariatur praesentium, odio officia laudantium enim
          quibusdam nemo veniam vel quod. Et, eaque possimus! Quia, fugiat qui
          culpa temporibus architecto possimus soluta itaque accusamus officia
          harum tempore cumque delectus perspiciatis reprehenderit inventore
          maxime voluptate laboriosam assumenda, at iure amet. Consequuntur quas
          non porro ab nisi eum laboriosam fugiat error neque adipisci vero
          ipsum ipsam tempora, culpa temporibus. Adipisci eius impedit,
          accusantium reprehenderit omnis quod?
        </div>
      </div>
    </div>
  );
}

export default Adminui;
