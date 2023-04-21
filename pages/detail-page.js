import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { places } from "../lib/seeds/seedHelpers";

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout title={places.name}>
      <h1>詳細ページ</h1>
    </Layout>
  );
};

export default Detail;
