import React, { useState } from "react";
import styles from "../styles/components/SignupSidebar.module.css";
import { useRouter } from "next/router";
import SignupForm from "./forms/SignupForm";

const SignupSidebar = () => {
  const defaultFormData = {
    email: "",
  };
  const [signupFormData, setSignupFormData] = useState(defaultFormData);
  const Router = useRouter();
  const submitHandler = () => {
    Router.push("/welcome");
    localStorage.setItem("user_email", signupFormData.email);
    console.log(localStorage.getItem("user_email"));
  };
  return (
    <div className={styles.signup_sidebar}>
      <div className={styles.signup_sidebar_content}>
        <h3 className={styles.signup_sidebar_ctatext}>
          Sign up for exclusive access.
        </h3>
        <SignupForm
          submitHandler={submitHandler}
          signupFormData={signupFormData}
          setSignupFormData={setSignupFormData}
        />
        <div className={styles.signup_sidebar_descText}>
          You’ll receive an email with an invite link to join.
        </div>
      </div>
    </div>
  );
};

export default SignupSidebar;
