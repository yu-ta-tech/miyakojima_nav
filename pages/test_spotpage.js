import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";
import { places } from "../lib/spotLists";
import { spots } from "../lib/spots_detailData";
import AllMap from "../components/maps/AllMap";
import AllSpots from "../components/categories/allSpots";
import Beach from "../components/categories/beach";
import Food from "../components/categories/food";
import Shopping from "../components/categories/shopping";
import Event from "../components/categories/event";
import Fitness from "../components/categories/fitness";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Spot = () => {
  const onSelect = (e) => {
    console.log(e);
  };

  return (
    <Layout title="見どころ一覧">
      <h1 className="text-4xl pt-4 underline">全体マップ</h1>
      <div className="flex justify-center w-full h-72 md:h-96 lg:h-96">
        <AllMap />
      </div>
      <h1 className="text-3xl pt-6 mt-2 font-bold">
        見どころ一覧（ジャンル別）
      </h1>
      <Tabs onSelect={onSelect}>
        <TabList>
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
          <Beach />
        </TabPanel>
        <TabPanel>
          <Food />
        </TabPanel>
        <TabPanel>
          <Shopping />
        </TabPanel>
        <TabPanel>
          <Event />
        </TabPanel>
        <TabPanel>
          <Fitness />
        </TabPanel>
      </Tabs>
    </Layout>
  );
};

export default Spot;
