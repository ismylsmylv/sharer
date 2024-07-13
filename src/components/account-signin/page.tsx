"use client";
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Toaster, toast } from "sonner";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
type Props = {
  setIsSignUpMode: any;
  isSignUpMode: boolean;
};

function SignIn({ setIsSignUpMode, isSignUpMode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const router = useRouter();
  return (
    <form action="#" className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faUser} color="#ACAFC1" />
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
      </div>
      <div className="input-field">
        <FontAwesomeIcon icon={faLock} color="#ACAFC1" />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn solid"
        onClick={(e) => {
          e.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              // ...
              localStorage.setItem("credentials", JSON.stringify(user));
            })
            .then(() => {
              router.push("/");
            })

            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }}
      >
        Login
      </button>
      <p className="social-text">Or Sign in with social platforms</p>
      <div className="social-media">
        <button className="social-icon" disabled>
          <FontAwesomeIcon icon={faFacebookF} />
        </button>
        <button className="social-icon" disabled>
          <FontAwesomeIcon icon={faTwitter} />
        </button>
        <button
          className="social-icon"
          onClick={(e) => {
            e.preventDefault();
            signInWithPopup(auth, provider)
              .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                  GoogleAuthProvider.credentialFromResult(result) || "";
                // const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                localStorage.setItem("credentials", JSON.stringify(user));
                toast.success("Signed in successfully");
                // IdP data available using getAdditionalUserInfo(result)
                // ...
              })
              .then(() => {
                router.push("/");
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GoogleAuthProvider.credentialFromError(error);
                // ...
                toast.error(errorCode, errorMessage);
              });
          }}
        >
          <FontAwesomeIcon icon={faGoogle} />
        </button>
        <button className="social-icon" disabled>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </div>
    </form>
  );
}

export default SignIn;
