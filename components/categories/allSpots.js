import Link from "next/link";
import Image from "next/image";
import { places } from "../../lib/spotLists";
import { spots } from "../../lib/spots_detailData";

export default function AllSpots() {
  return (
    <div className="text-xl mx-4">
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
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="text-gray-700 font-bold text-xl pb-1">
                {place.name}
              </div>
              <div className="px-1 pb-3">
                <p className="text-gray-700 text-base">
                  {spots[place.id].description}
                </p>
              </div>
              <div className="flex items-center px-1 pb-4">
                <div className="text-sm">
                  <p className="text-gray-500">{place.address}</p>
                </div>
              </div>
              <div>
                <Link href={`/locations/${places.indexOf(place)}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm rounded px-2 h-8">
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