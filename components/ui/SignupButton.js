import React from "react";
import styles from "../../styles/components/ui/SignupButton.module.css";

const SignupButton = (props) => {
  const { setSignupModalVisible } = props;
  return (
    <button
      className={styles.signup_button}
      onClick={() => setSignupModalVisible(true)}
    >
      Sign Up
    </button>
  );
};

export default SignupButton;
