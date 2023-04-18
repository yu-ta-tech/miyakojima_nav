import Layout from "../components/Layout";
import Location from "../components/Location";
import { getAllLocationsData } from "../lib/location";

const Map = ({ locations }) => {
  return (
    <Layout title="見どころ一覧">
      <h1>見どころ一覧</h1>
      <div>
        {locations &&
          locations.map((location) => (
            <Location key={location.id} location={location} />
          ))}
      </div>
    </Layout>
  );
};

export default Map;

export async function getStaticProps() {
  const locations = await getAllLocationsData();
  return {
    props: { locations },
  };
}
