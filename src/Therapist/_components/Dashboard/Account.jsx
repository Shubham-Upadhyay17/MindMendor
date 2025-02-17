import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Camera, HandCoins, History, Mail, Mars, Phone } from "lucide-react";
import defaultAvatar from "../../../assets/images/avatars/a7.jpg";
import { useUser } from "../../../context/UserContext"; // Import useUser

function Account() {
  const { therapistName, email } = useUser(); // Get therapist name from context
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-2 md:px-6">
      <h1 className="w-full text-center font-bold text-2xl md:text-4xl text-indigo-600 mb-10">
        PROFILE
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-10 items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            <img
              src={profileImage || "/placeholder.svg"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-200"
            />
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 rounded-full"
              onClick={triggerFileInput}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
        <div className="bio">
          <div className="field text-center w-full mb-2">
            <h2 className="text-xl font-semibold text-center w-full">
              {therapistName}
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
          <div className="field text-center w-full text-sm">
            <p>Compassionate and experienced mental health therapist dedicated to helping individuals navigate life’s challenges. Specializing in anxiety, depression, trauma, and personal growth, I provide a safe, supportive space for healing and self-discovery. Let’s work together to build resilience and achieve emotional well-being.</p>
          </div>
        </div>
        <div className="profile-info flex items-start justify-center flex-col gap-3">
          <div className="field">
            <h2 className="text-lg font-medium flex gap-3">
              <Mail className="text-sm p-1 mt-1" />
              {email}
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
          <div className="field">
            <h2 className="text-lg font-medium flex gap-3">
              <Phone className="text-sm p-1 mt-1" />
              +91 8421674081
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
          <div className="field">
            <h2 className="text-lg font-medium flex gap-3">
              <Mars className="text-sm p-1 mt-1" />
              Female
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
          <div className="field">
            <h2 className="text-lg font-medium flex gap-3">
              <History className="text-sm p-1 mt-1" />
              <p>1.5 hr/<span className="font-thin">day</span></p>
              
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
          <div className="field">
            <h2 className="text-lg font-medium flex gap-3">
              <HandCoins className="text-sm p-1 mt-1" />
              <p>&#8377; <span className="">3000</span></p>
              
            </h2>{" "}
            {/* 👈 Display therapist name here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
