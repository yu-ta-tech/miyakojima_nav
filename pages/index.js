import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="みやこナビ">
      <div className="z-10">
        <div>
          <h1 className="flex justify-center text-4xl md:text-6xl lg:text-7xl text-white font-bold drop-shadow-2xl">
            ようこそ みやこナビへ
          </h1>
          <div className="text-white p-4 text-base">
            <p className="flex justify-center py-1">あああああああ</p>
            <p className="flex justify-center py-1">あああああああ</p>
            <p className="flex justify-center py-1">あああああああ</p>
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
          className="opacity-70"
          src={"/backImage_sunset.jpg"}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Layout>
  );
}
