import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import background from "../public/background.png";


export default function Home() {
  return (
    <main className={styles.main}> 
      {/* <Image className={styles.img} src={background}></Image> */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          Welcome to the Epoch of Genesis a Sandbox MMO set during the Pre-Flood
          Genesis.
        </h1>
        <h2 className={styles.subtitle}>
          Choose your side in the War between <span className={styles.good}>Good</span> and <span className={styles.evil}>Evil</span>!
        </h2>
      </div>
      <div className={styles.btns}>
        <Link href="https://epochofgenesis.com/download/EOGLauncher-prod-v1.0.exe" target=""><button className={styles.play__now}>Play Now</button></Link>
        <Link href="https://discord.gg/tcEaX5hS6A" target="_blank" ><button className={styles.join__discord}>Join Discord</button></Link>
      </div>
      <div className={styles.video__container}>
        <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/kbpiqrLNKFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <p className={styles.video__para}>Check out the latest on YouTube. Our coders are hard at work making sure the game is up to date and fun to play.</p>
      </div>
    </main>
  );
}
