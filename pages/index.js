import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import mypic from "../assets/Homepage.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TKH - THE KANE HOLDINGS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src={mypic} alt="TKH Holdings" fill={true} objectFit={"cover"} />
      </main>
    </div>
  );
}
