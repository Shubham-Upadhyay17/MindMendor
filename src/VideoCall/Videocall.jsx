import React, { useState, useEffect, useRef } from "react";
import { Phone, PhoneOff, User } from "lucide-react";
 // Update to your actual path
import { Button } from "@/components/UI/button";
import { Card, CardContent } from "@/components/UI/card";

const styles = {
  videoCall: "flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4",
  container: "w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
  header: "bg-blue-600 text-white p-4 flex items-center justify-between",
  title: "text-xl font-semibold",
  videoContainer: "relative w-full aspect-video bg-gray-900",
  localVideo: "absolute bottom-4 right-4 w-1/4 aspect-video bg-gray-800 rounded-lg shadow-lg z-10",
  remoteVideo: "w-full h-full object-cover",
  controls: "flex items-center justify-center gap-4 p-4 bg-gray-50",
  callButton: "flex items-center justify-center rounded-full w-12 h-12 bg-green-500 text-white hover:bg-green-600",
  hangupButton: "flex items-center justify-center rounded-full w-12 h-12 bg-red-500 text-white hover:bg-red-600",
  statusMessage: "text-center p-4 text-gray-700",
  customerService: "flex items-center justify-center h-full",
  customerServiceIcon: "w-24 h-24 text-gray-400",
};

export default function VideoCall() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [status, setStatus] = useState("Ready to connect");
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnectionRef = useRef(null);
  const localStreamRef = useRef(null);

  useEffect(() => {
    initializeLocalCamera();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (peerConnectionRef.current) {
        peerConnectionRef.current.close();
      }
    };
  }, []);

  const initializeLocalCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      localStreamRef.current = stream;

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      setStatus("Camera connected. Ready to make a call.");
    } catch (error) {
      console.error("Error accessing camera:", error);
      setStatus("Failed to access camera. Please check permissions.");
    }
  };

  const startCall = async () => {
    try {
      setStatus("Initiating call...");
      setIsCallActive(true);

      setTimeout(() => {
        if (remoteVideoRef.current) {
          remoteVideoRef.current.srcObject = localStreamRef.current;
          setStatus("Call connected");
        }
      }, 2000);
    } catch (error) {
      console.error("Error starting call:", error);
      setStatus("Failed to start call. Please try again.");
      setIsCallActive(false);
    }
  };

  const endCall = () => {
    setIsCallActive(false);
    setStatus("Call ended");

    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
  };

  return (
    <div className={styles.videoCall}>
      <Card className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Video Call</h2>
          <span>{status}</span>
        </div>

        <div className={styles.videoContainer}>
          {isCallActive ? (
            <video ref={remoteVideoRef} className={styles.remoteVideo} autoPlay playsInline />
          ) : (
            <div className={styles.customerService}>
              <User className={styles.customerServiceIcon} />
            </div>
          )}

          <video ref={localVideoRef} className={styles.localVideo} autoPlay playsInline muted />
        </div>

        <CardContent className={styles.controls}>
          {!isCallActive ? (
            <Button onClick={startCall} className={styles.callButton} aria-label="Start call">
              <Phone size={24} />
            </Button>
          ) : (
            <Button onClick={endCall} className={styles.hangupButton} aria-label="End call">
              <PhoneOff size={24} />
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
