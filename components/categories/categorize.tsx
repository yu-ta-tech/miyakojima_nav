import Link from "next/link";
import Image from "next/image";
import { places } from "../../lib/spotLists";
import { spots } from "../../lib/spots_detailData";

// 要チェック!!
interface Prop {
  category: "beach" | "food" | "shopping" | "sightseeing" | "all";
}

export default function Categorize({ category }: Prop) {
  const categorizedPlaces = places.filter(
    (place) => place.category === category
  );

  return (
    <div className="text-xl mx-4">
      <div className="text-black text-sm pt-4 pl-2 lg:pt-6 lg:pl-4 lg:pb-2">
        表示件数：{" "}
        <span className="text-xl lg:text-2xl text-black font-bold">
          {categorizedPlaces.length}
        </span>{" "}
        件
      </div>
      {categorizedPlaces &&
        categorizedPlaces.map((categorizedPlace) => (
          <div
            key={categorizedPlace.id}
            className="max-w-sm w-full lg:max-w-7xl lg:flex my-3"
          >
            <div className="flex-shrink-0 grid">
              <Image
                src={`/images/${places.indexOf(categorizedPlace)}.jpg`}
                width={312}
                height={208}
                alt={categorizedPlace.name}
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="text-gray-700 font-bold text-xl pb-1">
                {categorizedPlace.name}
              </div>
              <div className="pl-0.5 py-2">
                {(() => {
                  const items = [];
                  for (let i = 0; i < categorizedPlace.features.length; i++) {
                    items.push(
                      <li
                        key={categorizedPlace.features[i]}
                        className="text-pink-400 border-pink-400 text-xs font-medium mr-2 px-2 py-0.5 border rounded"
                      >
                        {categorizedPlace.features[i]}
                      </li>
                    );
                  }
                  return <ul className="flex">{items}</ul>;
                })()}
              </div>
              <div className="pb-4 hidden sm:block md:block lg:block">
                <p className="text-gray-700 text-base">
                  {spots[categorizedPlace.id].description}
                </p>
              </div>

              <div>
                <Link href={`/locations/${places.indexOf(categorizedPlace)}`}>
                  <button className="transition-all duration-300 bg-gray-400 hover:bg-gray-600 text-white text-sm rounded px-2 h-8 mt-2 sm:mt-0 md:mt-0 lg:mt-0">
                    {`${categorizedPlace.name}の詳細`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
