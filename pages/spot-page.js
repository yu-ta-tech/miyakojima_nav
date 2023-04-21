import Layout from "../components/Layout";
import { places } from "../lib/seeds/seedHelpers";

const Spot = () => {
  return (
    <Layout title="見どころ一覧">
      <h1>見どころ一覧</h1>
      <div>
        {places &&
          places.map((place) => <div>{place}</div>)}
      </div>
    </Layout>
  );
};

export default Spot;
