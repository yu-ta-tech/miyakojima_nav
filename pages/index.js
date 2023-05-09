import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="みやこナビ">
      <div className="z-10">
        <div>
          <h1 className="flex justify-center text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl">
            みやこナビ
          </h1>
          <div className="text-white p-4 text-base">
            <p className="flex justify-center py-1">
              南国の楽園、宮古島へようこそ。
            </p>
            <p className="flex justify-center py-1">
              青々とした熱帯植物、白砂青海の絶景ビーチ、美味しい食べ物や文化。
            </p>
            <p className="flex justify-center py-1">
              「みやこナビ」を使えば、そんな宮古島の魅力を簡単に見つけることができます。
            </p>
          </div>
          <div className="flex justify-center mb-20">
            <span className="transition-all duration-500 px-4 py-2 m-5 border border-black shadow-xl ring-yellow-300 text-black bg-gray-50 hover:bg-black hover:text-gray-50 hover:ring-4 hover:text-base rounded">
              <Link href="/spot-page">スポット一覧へ</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen bg-black">
        {/* <video
          className="w-full h-screen opacity-80"
          autoPlay
          muted
          loop
          playsInline
          src="yonaha.MOV"
        /> */}
        <Image
          className="opacity-60"
          src={"/backImage_sunset.jpg"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Layout>
  );
}
