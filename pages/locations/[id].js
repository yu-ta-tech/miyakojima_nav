import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SpotMap from "../../components/maps/SpotMap";
import { spots } from "../../lib/spots_detailData";
import { places } from "../../lib/spotLists";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null;
  }

  return (
    <Layout title={`${places[id].name} | みやこナビ`}>
      <div className="flex flex-col items-center lg:flex-row-reverse lg:items-start">
        <div className="w-11/12 sm:w-96 md:w-96 lg:w-96 h-96 lg:mx-3">
          <SpotMap />
        </div>
        <div className="max-w-xl w-11/12 rounded shadow-lg mx-2 my-3 py-4 lg:py-2">
          <div className="flex-shrink-0">
            <Image
              src={`/images/${id}.jpg`}
              width={576}
              height={448}
              alt={places[id].name}
            />
          </div>
          <div className="px-1 py-5 sm:px-6 md:px-6 lg:px-6">
            <div className="font-bold text-xl pb-3">{spots[id].name}</div>
            <p className="text-gray-700 text-sm py-2">
              {spots[id].description}
            </p>
          </div>
          <div className="px-1 sm:px-6 md:px-6 lg:px-6 break-all">
            {spots[id].address && (
              <div className="text-gray-500 pb-2">住所:{spots[id].address}</div>
            )}
            {spots[id].tel && (
              <div className="text-gray-500 pb-2">TEL:{spots[id].tel}</div>
            )}
            {spots[id].url && (
              <div className="text-gray-500 pb-2">
                URL:
                <Link href={spots[id].url}>
                  <a className="underline">{spots[id].url}</a>
                </Link>
              </div>
            )}
            {spots[id].open && (
              <div className="text-gray-500 pb-2">
                営業時間:{spots[id].open}
              </div>
            )}
            {spots[id].holiday && (
              <div className="text-gray-500 pb-12">
                休業日:{spots[id].holiday}
              </div>
            )}
          </div>

          <span className="p-1 sm:px-6 md:px-6 lg:px-6 text-blue-500 hover:text-blue-700 underline">
            <Link href="/spot-page">
              <a>一覧に戻る</a>
            </Link>
          </span>
        </div>
      </div>
    </Layout>
  );
}
