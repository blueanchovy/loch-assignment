import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/components/forms/SignupForm.module.css";

const SignupForm = () => {
  const router = useRouter();
  const defaultFormData = {
    email: "",
  };
  const [signupFormData, setSignupFormData] = useState(defaultFormData);
  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("user_email", signupFormData.email);
    router.push("/welcome");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        name="email"
        required
        title="Email Address"
        placeholder="Your email address"
        value={signupFormData.email}
        onChange={(e) =>
          setSignupFormData({ ...signupFormData, email: e.target.value })
        }
        pattern="^(?!\s*$)[^@\s\t\r\n]+@[^@\s\t\r\n]+\.[^@\s\t\r\n]+$"
        className={styles.signup_sidebar_emailfield}
      />
      <button type="submit" className={styles.signup_sidebar_getstartedButton}>
        Get started
      </button>
    </form>
  );
};

export default SignupForm;
