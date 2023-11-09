import Image from "next/image";
import React, { useDebugValue } from "react";
import GetNotifiedCarousel from "./GetNotifiedCarousel";
import styles from "../../styles/components/Home/GetNotified.module.css";
import useDevice from "../../utils/hooks/useDevice";
import LochButton from "../ui/LochButton";

const GetNotified = (props) => {
  const { setSignupModalVisible } = props;
  const { isMobileOrSmaller } = useDevice();
  return (
    <section className={styles.getNotified}>
      <div className={styles.getNotified_left}>
        <div className={styles.getNotified_left_top}>
          <Image
            src="/Bell.svg"
            width={32}
            height={32}
            alt="bell"
            className={styles.getNotified_left_bell}
          />
          {isMobileOrSmaller && (
            <LochButton
              boolAction={setSignupModalVisible}
              buttonText="Sign Up"
            />
          )}
        </div>
        <h4 className={styles.getNotified_left_heading}>
          Get notified when a highly correlated whale makes a move
        </h4>
        <div className={styles.getNotified_left_subheading}>
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
      </div>
      <div className={styles.getNotified_right}>
        <GetNotifiedCarousel />
      </div>
    </section>
  );
};

export default GetNotified;
