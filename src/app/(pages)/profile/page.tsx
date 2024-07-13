"use client";
import React, { useState, useEffect } from "react";
import ProfileInfo from "@/components/profile-info/page";

type Props = {};
interface UserData {
  displayName: string;
  photoURL: string;
  email: string;
  createdAt: string;
}
function Profile({}: Props) {
  const [userData, setUserData] = useState<UserData>([] as any);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("credentials");
      if (localData) {
        const parsedData = JSON.parse(localData);
        setUserData(parsedData || []);
      }
    }
  }, []);

  return (
    <div className="p-2.5 w-4/5		">
      <h1 className="font-medium text-xl">Profile</h1>
      <ProfileInfo userData={userData} />
    </div>
  );
}

export default Profile;
