import React from "react";
import styles from "../../styles/components/ui/TestimonialCard.module.css";
import cx from "classnames";

const TestimonialCard = (props) => {
  const { data, isLast } = props;
  return (
    <div className={cx(styles.testimonial_card, { [styles.lastCard]: isLast })}>
      <div className={styles.testimonial_card_top}>
        <div className={styles.testimonial_card_name}>{data.name}, </div>{" "}
        <div className={styles.testimonial_card_designation}>
          {data.designation}
        </div>
      </div>
      <div className={styles.testimonial_card_review}>{data.review}</div>
    </div>
  );
};

export default TestimonialCard;
