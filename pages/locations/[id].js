import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";
import { spots } from "../../lib/spots";
import { places } from "../../lib/spots_id";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }

  return (
    <Layout title={`${places[id].name} | みやこナビ`}>
      <div className="max-w-lg rounded overflow-hidden shadow-lg m-5 pb-4">
        <Image
          src={`/images/${id}.jpg`}
          width={512}
          height={384}
          alt={places[id].name}
          objectFit="contain"
        />
        <div className="mx-6 my-4">
          <div className="font-bold text-xl mb-3">{spots[id].name}</div>
          <p className="text-gray-700 text-sm py-2">{spots[id].description}</p>
        </div>
        <div className="text-gray-500 px-6 pt-3 pb-3">
          住所:{spots[id].address}
        </div>
        <div className="text-gray-500 px-6 pb-3">TEL:{spots[id].tel}</div>
        <div className="text-gray-500 px-6 pb-3">URL:{spots[id].url}</div>
        <div className="text-gray-500 px-6 pb-3">営業時間:{spots[id].open}</div>
        <div className="text-gray-500 px-6 pb-12">
          休業日:{spots[id].holiday}
        </div>

        <div className="m-6 text-blue-500 underline">
          <Link href="/spot-page">
            <a>一覧に戻る</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
