import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import SpotMap from "../../components/maps/SpotMap";
import { spots } from "../../lib/spots_detailData";
import { places } from "../../lib/spotLists";

export default function Detail() {
  const router = useRouter();
  //!見直し
  const { id }: any = router.query;

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
          <div className="px-2 py-5 sm:px-6 md:px-6 lg:px-6 text-gray-700">
            <div className="font-bold text-xl lg:text-2xl pb-3">
              {spots[id].name}
            </div>
            <div className="pl-0.5 py-1">
              {(() => {
                const items = [];
                for (let i = 0; i < places[id].features.length; i++) {
                  items.push(
                    <li
                      key={places[id].features[i]}
                      className="text-pink-400 border-pink-400 text-xs font-medium mr-2 px-2 py-0.5 border rounded"
                    >
                      {places[id].features[i]}
                    </li>
                  );
                }
                return <ul className="flex">{items}</ul>;
              })()}
            </div>
            <p className="text-gray-700 text-sm py-2 pl-0.5">
              {spots[id].description}
            </p>
          </div>
          <div className="px-1 sm:px-6 md:px-6 lg:px-6 break-all">
            {spots[id].access && (
              <div className="text-gray-500 pb-2">
                アクセス: {spots[id].access}
              </div>
            )}
            {spots[id].address && (
              <div className="text-gray-500 pb-2">
                住所: {spots[id].address}
              </div>
            )}
            {spots[id].parking && (
              <div className="text-gray-500 pb-2">
                駐車場: {spots[id].parking}
              </div>
            )}
            {spots[id].open && (
              <div className="text-gray-500 pb-2">
                営業時間: {spots[id].open}
              </div>
            )}
            {spots[id].holiday && (
              <div className="text-gray-500 pb-2">
                休業日: {spots[id].holiday}
              </div>
            )}
            {spots[id].facility && (
              <div className="text-gray-500 pb-2">
                設備サービス: {spots[id].facility}
              </div>
            )}
            {spots[id].numberOfPeople && (
              <div className="text-gray-500 pb-2">
                人の多さ: {spots[id].numberOfPeople}
              </div>
            )}
            {spots[id].dangerous && (
              <div className="text-gray-500 pb-2">
                危険度: {spots[id].dangerous}
              </div>
            )}
            {spots[id].expectation && (
              <div className="text-gray-500 pb-8">
                何が見れるのか: {spots[id].expectation}
              </div>
            )}
            {spots[id].tel && (
              <div className="text-gray-500 pb-2">TEL: {spots[id].tel}</div>
            )}
            {spots[id].url && (
              <div className="text-gray-500 pb-2">
                URL:
                <Link href={spots[id].url as string}>
                  <a className="underline">{spots[id].url}</a>
                </Link>
              </div>
            )}
            {(() => {
              if (spots[id].services && (spots[id].icon as string) === "food") {
                {
                  const items = [];
                  for (let i = 0; i < spots[id].services!.length; i++) {
                    items.push(
                      <li
                        key={spots[id].services![i]}
                        className="text-yellow-400 border-yellow-400 text-xs font-medium mr-2 px-2 py-0.5 border rounded-lg"
                      >
                        {spots[id].services![i]}
                      </li>
                    );
                  }
                  return (
                    <ul className="flex pb-2 text-gray-500">
                      サービス: {items}
                    </ul>
                  );
                }
              }
            })()}
            {spots[id].priceRange && (
              <div className="text-gray-500 pb-2">
                価格帯: {spots[id].priceRange}
              </div>
            )}
            {spots[id].specialty && (
              <div className="text-gray-500 pb-8">
                一押しメニュー: {spots[id].specialty}
              </div>
            )}

            {spots[id].souvenir && (
              <div className="text-gray-500 pb-8">
                お土産コーナー: {spots[id].souvenir}
              </div>
            )}
            {spots[id].enjoy && (
              <div className="text-gray-500 pb-2">
                楽しみ方: {spots[id].enjoy}
              </div>
            )}
            {spots[id].timeZone && (
              <div className="text-gray-500 pb-2">
                おすすめの時間帯: {spots[id].timeZone}
              </div>
            )}
            {spots[id].trivia && (
              <div className="text-gray-500 pb-8">
                豆知識: {spots[id].trivia}
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
