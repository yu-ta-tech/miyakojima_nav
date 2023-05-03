import Layout from "../components/Layout";
import AllMap from "../components/maps/AllMap";
import AllSpots from "../components/categories/allSpots";
import Categorize from "../components/categories/categorize";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Spot = () => {
  return (
    <Layout title="見どころ一覧">
      <h1 className="text-4xl pt-4 underline">全体マップ</h1>
      <div className="flex justify-center w-full h-72 md:h-96 lg:h-96">
        <AllMap />
      </div>
      <h1 className="text-3xl pt-6 pb-2 mt-2 font-bold">
        見どころ一覧（ジャンル別）
      </h1>
      <Tabs defaultcss="false">
        <TabList className="w-full pl-4 lg:pl-8 border-b border-gray-400">
          <Tab>全体</Tab>
          <Tab>ビーチ</Tab>
          <Tab>グルメ</Tab>
          <Tab>買い物</Tab>
          <Tab>イベント</Tab>
          <Tab>フィットネス</Tab>
        </TabList>

        <TabPanel>
          <AllSpots />
        </TabPanel>
        <TabPanel>
          <Categorize category={"beach"} />
        </TabPanel>
        <TabPanel>
          <Categorize category={"food"} />
        </TabPanel>
        <TabPanel>
          <Categorize category={"shopping"} />
        </TabPanel>
        <TabPanel>
          <Categorize category={"event"} />
        </TabPanel>
        <TabPanel>
          <Categorize category={"fitness"} />
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export default Spot;
