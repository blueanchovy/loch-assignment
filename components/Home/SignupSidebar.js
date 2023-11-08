import React, { useState } from "react";
import styles from "../../styles/components/Home/SignupSidebar.module.css";
import SignupContent from "./SignupContent";

const SignupSidebar = () => {
  return (
    <div className={styles.signup_sidebar}>
      <SignupContent />
    </div>
  );
};

export default SignupSidebar;
