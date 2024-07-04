import React from "react";
import "./style.scss";
import Baloon from "@/assets/images/home_5.99fa551a.svg";
type Props = {};

function AccountCard({}: Props) {
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
        <button>join us</button>
      </div>
    </div>
  );
}

export default AccountCard;
