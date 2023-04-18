import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "みやこナビ" }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <div>
            <div>
              <Link href="/">
                <a>ホーム</a>
              </Link>
              <Link href="/map-page">
                <a>マップ</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
