import Layout from "../components/Layout";
import { cities } from "../lib/seeds/cities";

const Detail = () => {
  return (
    <Layout title="見どころ一覧">
      <h1>見どころ一覧</h1>
      <div>
        {cities &&
          cities.map((city) => <div>{`${city.prefecture}:${city.city}`}</div>)}
      </div>
    </Layout>
  );
};

export default Detail;
