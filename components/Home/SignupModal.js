import React, { useCallback, useEffect, useRef } from "react";
import styles from "../../styles/components/Home/SignupModal.module.css";
import SignupContent from "./SignupContent";

const SignupModal = (props) => {
  const { signupModalVisible, setSignupModalVisible } = props;
  const dialogRef = useRef(null);
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeDialog = useCallback(() => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setSignupModalVisible(false);
    }
  }, [setSignupModalVisible]);
  useEffect(() => {
    if (signupModalVisible) {
      openDialog();
    } else {
      closeDialog();
    }
  }, [closeDialog, signupModalVisible]);
  return (
    <dialog ref={dialogRef} className={styles.signupModal}>
      <button onClick={closeDialog} className={styles.signupModal_close}>
        &times;
      </button>
      <SignupContent />
    </dialog>
  );
};

export default SignupModal;
