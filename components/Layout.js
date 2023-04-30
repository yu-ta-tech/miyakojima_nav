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
        <nav className="h-14 bg-gray-800 w-screen grid grid-cols-3">
          <div className="text-gray-300 text-lg mt-3.5 pl-10 sm:pl-20 md:pl-36 lg:text-2xl lg:pl-40 lg:mt-2.5">
            <a href="/">みやこナビ</a>
          </div>
          <div></div>
          <div className="pt-3 md:pl-12 lg:pl-20">
            <div className="flex">
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
      <main className="justify-center items-center flex flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t mt-auto">
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
