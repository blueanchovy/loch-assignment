import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import useDevice from "../utils/hooks/useDevice";
import SignupSidebar from "../components/Home/SignupSidebar";
import SignupModal from "../components/Home/SignupModal";
import GetNotified from "../components/Home/GetNotified";
import WatchWhales from "../components/Home/WatchWhales";

export default function Home() {
  const { isMobileOrSmaller } = useDevice();
  const [signupModalVisible, setSignupModalVisible] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Signup | Loch</title>
        <meta name="title" content="Signup | Loch" />
        <meta name="description" content="Sign up on Loch" />
        <link rel="icon" href="/Loch.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.homepage_content}>
          <GetNotified setSignupModalVisible={setSignupModalVisible} />
          <WatchWhales />
          <section className={styles.testimonials}></section>
        </div>
        {!isMobileOrSmaller && <SignupSidebar />}
        {signupModalVisible && isMobileOrSmaller && (
          <SignupModal
            signupModalVisible={signupModalVisible}
            setSignupModalVisible={setSignupModalVisible}
          />
        )}
      </main>
    </div>
  );
}
