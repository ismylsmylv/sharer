"use client";
import SigninImage from "@/assets/images/signin.png";
import SignupImage from "@/assets/images/signup.png";
import SignIn from "@/components/account-signin/page";
import SignUp from "@/components/account-signup/page";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { useState } from "react";
import { Toaster } from "sonner";
import "./style.scss";
type Props = {};

function Account({}: Props) {
  const [isSignUpMode, setIsSignUpMode] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <Toaster richColors position="top-right" />
      <div className="forms-container">
        <div className="signin-signup">
          {/* SIGN IN */}
          <SignIn
            setIsSignUpMode={setIsSignUpMode}
            isSignUpMode={isSignUpMode}
          />
          {/* SIGN UP */}
          <SignUp
            setIsSignUpMode={setIsSignUpMode}
            isSignUpMode={isSignUpMode}
          />
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Join Us!</h3>
            <p>Create your account to get started with our service </p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(true)}
            >
              Sign up
            </button>
          </div>
          <img src={SigninImage.src as string} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>Sign in to access your account and stay connected</p>
            <button
              className="btn transparent"
              onClick={() => setIsSignUpMode(false)}
            >
              Sign in
            </button>
          </div>
          <img src={SignupImage.src as string} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}
export default Account;
