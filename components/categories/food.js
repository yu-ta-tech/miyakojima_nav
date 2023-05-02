import Link from "next/link";
import Image from "next/image";
import { places } from "../../lib/spotLists";
import { spots } from "../../lib/spots_detailData";

export default function Food() {
  const beaches = places.filter((place) => place.category === "food");

  return (
    <div className="text-xl mx-4">
      {beaches &&
        beaches.map((food) => (
          <div
            key={food.id}
            className="max-w-sm w-full lg:max-w-7xl lg:flex my-3"
          >
            <div className="flex-shrink-0 grid">
              <Image
                src={`/images/${places.indexOf(food)}.jpg`}
                width={312}
                height={208}
                alt={food.name}
              />
            </div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="text-gray-700 font-bold text-xl pb-1">
                {food.name}
              </div>
              <div className="px-1 pb-3">
                <p className="text-gray-700 text-base">
                  {spots[food.id].description}
                </p>
              </div>
              <div className="flex items-center px-1 pb-4">
                <div className="text-sm">
                  <p className="text-gray-500">{food.address}</p>
                </div>
              </div>
              <div>
                <Link href={`/locations/${places.indexOf(food)}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm rounded px-2 h-8">
                    {`${food.name}の詳細`}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
