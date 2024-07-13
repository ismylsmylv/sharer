"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import Baloon from "@/assets/images/home_5.99fa551a.svg";
import { useRouter } from "next/navigation";
type Props = {};
interface UserData {
  displayName: string;
  photoURL: string;
}
function AccountCard({}: Props) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>([] as any);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("credentials");
      if (localData) {
        const parsedData = JSON.parse(localData);
        setUserData(parsedData);
      }
    }
  }, []);
  // console.log(userData);
  return (
    <>
      {Object.keys(userData).length === 0 && (
        <div
          className="AcountCard"
          style={{
            backgroundImage:
              // !userData
              // ?
              `url(${Baloon.src})`,
            // : "url(https://static.wixstatic.com/media/9f1d87_f6872f9cb14a40b1a850a8fede5b47b1~mv2.gif)",
          }}
        >
          <div className="content">
            <div className="head">We&apos;re better together</div>
            <div className="sub">
              Join our community: Sign in or create an account
            </div>
            <button
              onClick={() => {
                router.push("/account");
              }}
            >
              join us
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountCard;
