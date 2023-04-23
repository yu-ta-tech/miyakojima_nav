import Link from "next/link";
import Layout from "../../components/Layout";
import Image from "next/image";
import { cities } from "../../lib/seeds/cities";
import { places } from "../../lib/seeds/seedHelpers";
import { useRouter } from "next/router";
// import { handler } from "../api/hello";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title={`${places[id].name} | みやこナビ`}>
      <Image src="/images/mamorukun.jpg" width={144} height={144} alt="mamorukun" />
      <h2 className="text-2xl">{cities[id].city}</h2>
      <Link href="/spot-page">
        <span>Back to spotpage</span>
      </Link>
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
