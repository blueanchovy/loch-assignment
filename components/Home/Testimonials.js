import React, { useEffect, useRef } from "react";
import styles from "../../styles/components/Home/Testimonials.module.css";
import Image from "next/image";
import useDevice from "../../utils/hooks/useDevice";
import TestimonialCard from "../ui/TestimonialCard";

const Testimonials = () => {
  const { isMobileOrSmaller, isTabletOrSmaller } = useDevice();
  const testimonialsRef = useRef(null);
  let isDragging = false;
  let initialX;

  const handleMouseDown = (e) => {
    isDragging = true;
    initialX = e.clientX;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - initialX;
      testimonialsRef.current.scrollLeft -= dx;
      initialX = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging = false;
    document.body.style.cursor = "auto";
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  const LochIcon = ({ size }) => {
    return (
      <div className={styles.testimonials_lochIcon}>
        <Image src="/Loch.svg" width={size} height={size} alt="Loch Icon" />
      </div>
    );
  };
  const TestimonialData = [
    {
      name: "Jack F",
      designation: "Ex Blackrock PM",
      review:
        "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
      name: "Yash P",
      designation: "Research, 3poch Crypto Hedge Fund",
      review:
        "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
      name: "Shiv S",
      designation: "Co-Founder Magik Labs",
      review:
        "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
    {
      name: "",
      designation: "",
      review: "",
    },
  ];

  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials_top}>
        <h5 className={styles.testimonials_heading}>Testimonials</h5>
      </div>

      <hr className={styles.testimonials_heading_underline} />
      <div
        className={styles.testimonials_bottom}
        ref={testimonialsRef}
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "auto" }}
      >
        <LochIcon
          size={60}
          style={{
            display: "flex",
            alignSelf: "bottom",
            height: "inherit",
            marginRight: "40px;",
          }}
        />

        <div className={styles.testimonials_cards_container}>
          {TestimonialData.map((testimonial, index) => {
            const isLast = index === TestimonialData.length - 1;
            return (
              <div key={index}>
                <TestimonialCard data={testimonial} isLast={isLast} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
