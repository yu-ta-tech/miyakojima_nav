import Link from "next/link";
import Layout from "../components/Layout";
import { places } from "../lib/seeds/seedHelpers";

const Spot = () => {
  return (
    <Layout title="見どころ一覧">
      <h1>見どころ一覧</h1>
      <div>
        {places &&
          // places.map((place) => <div><Link href={`/locations/${place.id}`}><a>{place.name}</a></Link></div>)}
          places.map((place) => (
            <div>
              <Link href={`/locations/${places.indexOf(place) + 1}`}>
                <a>{place.name}</a>
              </Link>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default Spot;
