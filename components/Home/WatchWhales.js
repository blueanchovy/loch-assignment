import Image from "next/image";
import React from "react";
import styles from "../../styles/components/Home/WatchWhales.module.css";

const WatchWhales = () => {
  return (
    <section className={styles.watchWhales}>
      <div className={styles.watchWhales_left}>
        <img
          src="/WatchWhales.png"
          width="100%"
          height="auto"
          alt="watch whales"
        />
      </div>
      <div className={styles.watchWhales_right}>
        <div className={styles.watchWhales_right_icon}>
          <Image
            src="/Eye.svg"
            width={32}
            height={32}
            alt="eye"
            className={styles.watchWhales_right_icon_eye}
          />
        </div>
        <h4 className={styles.watchWhales_right_heading}>
          Watch what the whales are doing
        </h4>
        <div className={styles.watchWhales_right_subheading}>
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </div>
      </div>
    </section>
  );
};

export default WatchWhales;
