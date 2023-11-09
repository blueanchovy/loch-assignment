import React, { useEffect, useMemo, useRef } from "react";
import styles from "../../styles/components/Home/GetNotifiedCarousel.module.css";
import cx from "classnames";
import Image from "next/image";

const GetNotifiedCarousel = () => {
  const carouselRef = useRef(null);
  const carouselContent = useMemo(
    () => [
      {
        content: (
          <div className={styles.carouselContent_card}>
            <div className={styles.carouselContent_card_top}>
              <Image
                src="/Bell2.svg"
                alt="bell"
                width={28}
                height={28}
                className={styles.carouselContent_top_left}
              />
              <div className={styles.carouselContent_1_save}>Save</div>
            </div>
            <div className={styles.carouselContent_1_mid}>
              We’ll be sending notifications to you here
            </div>
            <div className={styles.carouselContent_1_bottom}></div>
          </div>
        ),
      },
      {
        content: (
          <div className={styles.carouselContent_card}>
            {" "}
            <div className={styles.carouselContent_card_top}>
              <Image
                src="/BarChart.svg"
                alt="barchart"
                width={28}
                height={28}
                className={styles.carouselContent_top_left}
              />
              <div className={styles.carouselContent_1_checkbox}>
                <Image
                  src="/Checkbox.svg"
                  alt="checkbox"
                  width={7}
                  height={6.7}
                  className={styles.carouselContent_1_check}
                />
              </div>
            </div>
            <div className={styles.carouselContent_2_bottom}>
              <div className={styles.carouselContent_2_bottomText}>
                Notify me when any wallets move more than
              </div>
              <div className={styles.carouselContent_2_bottomAmount}>
                <div className={styles.carouselContent_2_bottomAmountText}>
                  $1,000.00
                </div>
                <div className={styles.carouselContent_2_bottomAmountIcon}>
                  <Image
                    src="/TraingleDown.svg"
                    alt="down"
                    width={11.2}
                    height={11.2}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        content: (
          <div className={styles.carouselContent_card}>
            {" "}
            <div className={styles.carouselContent_card_top}>
              <Image
                src="/Clock.svg"
                alt="clock"
                width={28}
                height={28}
                className={styles.carouselContent_top_left}
              />
              <div className={styles.carouselContent_1_checkbox}>
                <Image
                  src="/Checkbox.svg"
                  alt="checkbox"
                  width={7}
                  height={6.7}
                  className={styles.carouselContent_1_check}
                />
              </div>
            </div>
            <div className={styles.carouselContent_3_bottom}>
              <div className={styles.carouselContent_3_bottom_text1}>
                Notify me when any wallet dormant for
              </div>
              <div className={styles.carouselContent_3_bottom_duration}>
                <div className={styles.carouselContent_3_bottom_durationText}>
                  &gt; 30 days
                </div>
                <div className={styles.carouselContent_2_bottomAmountIcon}>
                  <Image
                    src="/TraingleDown.svg"
                    alt="down"
                    width={11.2}
                    height={11.2}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.carouselContent_3_bottom_text2}>
                becomes active
              </div>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollInterval;
    let currentIndex = 1;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (currentIndex >= carouselContent.length + 1) {
          currentIndex = 1;
          carousel.scrollTo({
            left: 0,
            behavior: "auto",
          });
        } else {
          carousel.scrollBy({
            left: carousel.offsetWidth * 0.5,
            behavior: "auto",
          });
        }
        currentIndex++;
      }, 2500);
    };

    const handleMouseEnter = () => {
      clearInterval(scrollInterval);
    };

    const handleMouseLeave = () => {
      startAutoScroll();
    };

    if (carousel) {
      startAutoScroll();
      carousel.addEventListener("mouseenter", handleMouseEnter);
      carousel.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (carousel) {
        clearInterval(scrollInterval);
        carousel.removeEventListener("mouseenter", handleMouseEnter);
        carousel.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [carouselContent]);

  return (
    <>
      <div className={cx(styles.getNotifiedCarousel)}>
        <div
          className={cx(styles.getNotifiedCarousel_container)}
          ref={carouselRef}
        >
          {[...carouselContent, carouselContent[0]].map((card, index) => (
            <div key={index} className={cx(styles.getNotifiedCarousel_card)}>
              <div className={styles.cardContent}>{card.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.getNotified_carouselShadowOverlay}></div>
    </>
  );
};

export default GetNotifiedCarousel;
