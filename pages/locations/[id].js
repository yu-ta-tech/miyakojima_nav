import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SpotMap from "../../components/SpotMap";
import { spots } from "../../lib/spots";
import { places } from "../../lib/spots_id";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }

  return (
    <Layout title={`${places[id].name} | みやこナビ`}>
      <div className="flex">
        <div className="max-w-xl rounded overflow-hidden shadow-lg m-5 pb-4">
          <div className="flex-shrink-0 grid">
            <Image
              src={`/images/${id}.jpg`}
              width={576}
              height={448}
              alt={places[id].name}
            />
          </div>
          <div className="mx-6 my-5">
            <div className="font-bold text-xl mb-3">{spots[id].name}</div>
            <p className="text-gray-700 text-sm py-2">
              {spots[id].description}
            </p>
          </div>
          <div className="px-6">
            <div className="text-gray-500 pb-2">住所:{spots[id].address}</div>
            <div className="text-gray-500 pb-2">TEL:{spots[id].tel}</div>
            <div className="text-gray-500 pb-2">
              URL:
              <Link href={spots[id].url}>
                <a className="underline">{spots[id].url}</a>
              </Link>
            </div>
            <div className="text-gray-500 pb-2">営業時間:{spots[id].open}</div>
            <div className="text-gray-500 pb-6">休業日:{spots[id].holiday}</div>
          </div>

          <div className="m-6 text-blue-500 underline">
            <Link href="/spot-page">
              <a>一覧に戻る</a>
            </Link>
          </div>
        </div>
        <SpotMap />
      </div>
    </Layout>
  );
}
