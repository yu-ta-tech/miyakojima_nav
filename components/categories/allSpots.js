import Link from "next/link";
import Image from "next/image";
import { places } from "../../lib/spotLists";
import { spots } from "../../lib/spots_detailData";

export default function AllSpots() {
  return (
    <div className="text-xl mx-4">
      <div className="text-black text-sm pt-6 pl-4 pb-2">
        表示件数：{" "}
        <span className="text-2xl text-black font-bold">{places.length}</span>{" "}
        件
      </div>
      {places &&
        places.map((place) => (
          <div
            key={place.id}
            className="max-w-sm w-full lg:max-w-7xl lg:flex my-3"
          >
            <div className="flex-shrink-0 grid">
              <Image
                src={`/images/${places.indexOf(place)}.jpg`}
                width={312}
                height={208}
                alt={place.name}
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal">
              <div className="text-gray-700 font-bold text-xl pb-1">
                {place.name}
              </div>
              <div className="pl-0.5 py-2">
                {(() => {
                  const items = [];
                  for (let i = 0; i < place.features.length; i++) {
                    items.push(
                      <li
                        key={place.features[i]}
                        className="text-pink-400 border-pink-400 text-xs font-medium mr-2 px-2 py-0.5 border rounded"
                      >
                        {place.features[i]}
                      </li>
                    );
                  }
                  return <ul className="flex">{items}</ul>;
                })()}
              </div>
              <div className="pb-4">
                <p className="text-gray-700 text-base">
                  {spots[place.id].description}
                </p>
              </div>
              <div>
                <Link href={`/locations/${places.indexOf(place)}`}>
                  <button className="transition-all duration-500 bg-blue-500 hover:bg-blue-700 text-white text-sm rounded px-2 h-8">
                    {`${place.name}の詳細`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
