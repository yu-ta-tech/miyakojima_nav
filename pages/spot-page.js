import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { places } from "../lib/seeds/seedHelpers";

const Spot = () => {
  return (
    <Layout title="見どころ一覧">
      <h1 className="text-3xl py-4 font-bold">見どころ一覧</h1>
      <div className="text-xl">
        {places &&
          places.map((place) => (
            <div className="max-w-sm w-full lg:max-w-7xl lg:flex my-3">
              <Image
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                src="/images/mamorukun.jpg"
                width={256}
                height={256}
                alt="mamorukun"
              />
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    <Link href={`/locations/${places.indexOf(place)}`}>
                      <a>{place.name}</a>
                    </Link>
                  </div>
                  <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque,
                    exercitationem praesentium nihil.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="text-gray-900 leading-none">
                      Jonathan Reinink
                    </p>
                    <p className="text-gray-600">Aug 18</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Spot;
