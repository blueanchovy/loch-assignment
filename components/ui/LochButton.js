import React from "react";
import styles from "../../styles/components/ui/SignupButton.module.css";

const LochButton = (props) => {
  const { boolAction, buttonText } = props;
  return (
    <button className={styles.signup_button} onClick={() => boolAction(true)}>
      {buttonText}
    </button>
  );
};

export default LochButton;
