import Layout from "../components/Layout";
import Location from "../components/Location"
import styles from "../styles/Map.module.css";
import { getAllLocationsData } from "../lib/location";

const Map = ({locations}) => {
  return (
    <Layout title="見どころ一覧">
      <h1 className={styles.title}>見どころ一覧</h1>
      <ul>
        {locations && locations.map((location) => <Location key={location.id} location={location} />)}
      </ul>
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
