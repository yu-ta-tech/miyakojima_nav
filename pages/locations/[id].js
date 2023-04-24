import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";
import { spots,cities } from "../../lib/seeds/cities";
import { places } from "../../lib/seeds/seedHelpers";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;

  //router.queryが初回レンダリング時にundefinedになるため
  if (!router.isReady) {
    return null
  }

  return (
    <Layout title={`${places[id].name} | みやこナビ`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="flex content-center justify-center">
          <Image
            src={`/images/${id}.jpg`}
            width={384}
            height={384}
            alt={places[id].name}
            objectFit="contain"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{spots[id].name}</div>
          <p className="text-gray-700 text-base">
            {spots[id].description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">{spots[id].address}</div>
        <div className="px-6 pt-4 pb-2">{spots[id].tel}</div>

        <Link href="/spot-page">
          <span>Back to spotpage</span>
        </Link>
      </div>
    </Layout>
  );
}

// import { getA llLocationIds, getLocationData } from "../../lib/location";

// export default function Location({ location }) {
//   if (!location) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Layout title={location.title}>
//       <p>
//         {"ID : "}
//         {location.id}
//       </p>
//       <p>{location.title}</p>
//       <p>{location.body}</p>
//       <Link href="/spot-page">
//         <div>
//           <svg
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
//             ></path>
//           </svg>
//           <span>Back to spotpage</span>
//         </div>
//       </Link>
//     </Layout>
//   );
// }

// export async function getStaticPaths() {
//   const paths = await getAllLocationIds();

//   return {
//     paths,
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }) {
//   const { location: location } = await getLocationData(params.id);
//   return {
//     props: {
//       location,
//     },
//   };
// }
