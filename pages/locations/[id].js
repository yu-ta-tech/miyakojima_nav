import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllLocationIds, getLocationData } from "../../lib/location";

export default function Location({ location }) {
  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={location.title}>
      <p>
        {"ID : "}
        {location.id}
      </p>
      <p>{location.title}</p>
      <p>{location.body}</p>
      <Link href="/map-page">
        <div>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            ></path>
          </svg>
          <span>Back to mappage</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllLocationIds();

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { location: location } = await getLocationData(params.id);
  return {
    props: {
      location,
    },
  };
}
