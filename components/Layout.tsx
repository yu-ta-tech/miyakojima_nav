import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type Prop = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "みやこナビ" }: Prop) {
  return (
    <div className="flex flex-col justify-center items-center text-gray-600 text-sm font-mono min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="sticky top-0 z-30">
        <nav className="bg-gray-800 h-14 w-screen grid grid-cols-2">
          <div className="text-white text-lg mt-3.5 pl-10 sm:pl-20 md:pl-36 lg:text-2xl lg:pl-40 lg:mt-2.5">
            <a href="/">みやこナビ</a>
          </div>
          <div className="pt-3 pl-5 sm:pl-10 md:pl-12 lg:pl-20">
            <div className="flex sm:ml-16 md:ml-20 lg:ml-44">
              <div className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                <Link href="/">ホーム</Link>
              </div>
              <div className="text-white hover:bg-gray-700 px-3 py-2 sm:ml-3 md:ml-5 lg:ml-10 rounded">
                <Link href="/spot-page">スポット一覧</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full  bg-gray-800 text-gray-300 h-10 flex justify-center items-center border-t mt-auto z-10">
        <div>&copy; みやこナビ</div>
      </footer>
    </div>
  );
}
