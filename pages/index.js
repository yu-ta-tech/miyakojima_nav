import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="みやこナビ">
      <div className="z-10">
        <div>
          <h1 className="flex justify-center text-4xl">
            ようこそ みやこナビへ
          </h1>
          <p className="flex justify-center">あああああああ</p>
          <p>あああああああ</p>
          <p>あああああああ</p>
          <div className="flex justify-center mb-20">
            <span className="px-3 py-2 bg-gray-50 rounded">
              <Link href="/spot-page">ボタン</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen">
        <Image src={"/backImage_sunset.jpg"} layout="fill" objectFit="cover" />
      </div>
    </Layout>
  );
}
