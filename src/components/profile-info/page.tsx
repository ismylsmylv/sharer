import React from "react";
import "./style.scss";
import { useRouter } from "next/navigation";
type Props = {
  userData: {
    displayName: string;
    photoURL: string;
    email: string;
    createdAt: string;
  };
};
function timeAgo(timestamp: string) {
  const now: any = new Date();
  const createdAt: any = new Date(parseInt(timestamp));
  const differenceInTime = now - createdAt;

  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  if (differenceInDays === 0) {
    return "today";
  } else if (differenceInDays === 1) {
    return "yesterday";
  } else {
    return `${differenceInDays} days ago`;
  }
}

function ProfileInfo({ userData }: Props) {
  const router = useRouter();
  return (
    <div className="ProfileInfo">
      <div className="details">
        <img src={userData.photoURL} alt="" className="photoUrl" />
        <div className="texts">
          <div className="name">{userData.displayName}</div>
          <div className="email">{userData.email}</div>
          <div className="joined">Joined {timeAgo(userData.createdAt)}</div>
        </div>
      </div>
      <div className="control">
        <button
          onClick={() => {
            if (typeof window !== "undefined") {
              localStorage.removeItem("credentials");
            }
            router.push("/");
          }}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
