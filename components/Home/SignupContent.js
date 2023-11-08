import React from "react";
import SignupForm from "../forms/SignupForm";
import styles from "../../styles/components/Home/SignupContent.module.css";

const SignupContent = () => {
  return (
    <div className={styles.signup_sidebar_content}>
      <h3 className={styles.signup_sidebar_ctatext}>
        Sign up for exclusive access.
      </h3>
      <SignupForm />
      <div className={styles.signup_sidebar_descText}>
        You’ll receive an email with an invite link to join.
      </div>
    </div>
  );
};

export default SignupContent;
