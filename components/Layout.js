import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "みやこナビ" }) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="sticky top-0">
        <nav className="bg-gray-800 w-screen">
          <div className="flex flex-row-reverse items-center pr-32 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Home</a>
              </Link>
              <Link href="/map-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Map</a>
              </Link>
              <Link href="#">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col  w-screen">{children}</main>
      <footer>
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
