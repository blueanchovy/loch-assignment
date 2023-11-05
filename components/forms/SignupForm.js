import React from "react";
import styles from "../../styles/components/forms/SignupForm.module.css";

const SignupForm = (props) => {
  const { signupFormData, submitHandler, setSignupFormData } = props;
  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        required
        placeholder="Your email address"
        value={signupFormData.email}
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, email: e.target.value })
        }
        pattern="^(?!\s*$)[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$"
        className={styles.signup_sidebar_emailfield}
      />
      <button type="submit" className={styles.signup_sidebar_getstartedButton}>
        Get started
      </button>
    </form>
  );
};

export default SignupForm;
