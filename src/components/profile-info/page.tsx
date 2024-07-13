import React from "react";
import "./style.scss";
type Props = {};

function ProfileInfo({}: Props) {
  let userData = [];
  if (typeof window !== "undefined") {
    userData = JSON.parse(localStorage.getItem("credentials") || "") || [];
  }
  return (
    <div className="ProfileInfo">
      <img src={userData.photoUrl} alt="" className="photoUrl" />
    </div>
  );
}

export default ProfileInfo;
