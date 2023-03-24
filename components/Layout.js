import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

export default function Layout({ children, title = "みやこナビ" }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.navDetail}>
            <div className={styles.navHome}>
              <Link href="/">
                <a className={styles.navLink}>ホーム</a>
              </Link>
              <Link href="/map-page">
                <a className={styles.navLink}>マップ</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className={styles.contents}>{children}</main>
      <footer className={styles.footer}>
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
