"use client";
import React from "react";
import "./style.scss";
import Baloon from "@/assets/images/home_5.99fa551a.svg";
import { useRouter } from "next/navigation";
type Props = {};

function AccountCard({}: Props) {
  const router = useRouter();
  return (
    <div
      className="AcountCard"
      style={{ backgroundImage: `url(${Baloon.src})` }}
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
  );
}

export default AccountCard;
