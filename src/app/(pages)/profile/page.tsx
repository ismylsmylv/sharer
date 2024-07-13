import ProfileInfo from "@/components/profile-info/page";
import React from "react";

type Props = {};

function Profile({}: Props) {
  return (
    <div className="p-2.5	">
      <h1 className="font-medium	text-xl	">Profile</h1>
      <ProfileInfo />
    </div>
  );
}

export default Profile;
