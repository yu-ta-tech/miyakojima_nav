import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, title = "みやこナビ" }) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-600 text-sm font-mono min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 z-10">
        <nav className="h-14 bg-gray-800 w-screen">
          <div className="float-left text-2xl text-gray-300 pl-40 mt-2.5">
            <a href="/">みやこナビ</a>
          </div>
          <div className="float-right pr-32  mt-3">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/spot-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Spot
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t mt-auto">
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
