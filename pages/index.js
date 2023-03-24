import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Home">
      <h1 className={styles.title}>ようこそ みやこナビへ</h1>
      <p className={styles.description}>あああああああ</p>
      <p className={styles.description}>あああああああ</p>
      <p className={styles.description}>あああああああ</p>
      <button className={styles.button}>ボタン</button>
    </Layout>
  );
}
