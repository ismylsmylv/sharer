"use client";
import {
  faFacebookF,
  faGoogle,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { toast } from "sonner";
type Props = {
  isSignUpMode: boolean;
  setIsSignUpMode: any;
};

function SignUp({ setIsSignUpMode, isSignUpMode }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return (
    <form action="#" className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <div className="input-field">
        <FontAwesomeIcon icon={faEnvelope} color="#ACAFC1" />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
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
        className="btn"
        value="Sign up"
        onClick={(e) => {
          e.preventDefault();
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed up
              const user = userCredential.user;
              // ...
              setEmail("");
              setPassword("");
              console.log(user, "signed up");
              toast.success("Signed up successfully");
            })
            .then(() => {
              setIsSignUpMode(false);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }}
      >
        Sign up
      </button>
      <p className="social-text">Or Sign up with social platforms</p>
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
                console.log(user, "signed up");
                toast.success("Signed up successfully");
                // IdP data available using getAdditionalUserInfo(result)
                // ...
              })
              .then(() => {
                setIsSignUpMode(false);
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

export default SignUp;
