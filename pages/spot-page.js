import { Component } from "react";
import Layout from "../components/Layout";
import AllMap from "../components/maps/AllMap";
import AllSpots from "../components/categories/allSpots";
import Categorize from "../components/categories/categorize";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const borderColor = "border-b-2 border-blue-500";
const hoverColor = "hover:text-blue-400";

class Spot extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    return (
      <Layout title="観光スポット一覧｜みやこナビ">
        <h1 className="text-5xl pt-4 text-black underline">全体マップ</h1>
        <div className="flex justify-center w-full h-72 md:h-96 lg:h-96">
          <AllMap tabIndex={this.state.tabIndex} />
        </div>
        <h1 className="text-3xl pt-6 pb-2 mt-10 text-black font-bold">
          おすすめ観光スポット
        </h1>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
          defaultcss="false"
        >
          <TabList className="w-full pl-4 lg:pl-8 border-b border-gray-300">
            <Tab>
              <span
                className={`${
                  this.state.tabIndex === 0 ? borderColor : hoverColor
                } transition-all duration-300`}
              >
                全体
              </span>
            </Tab>
            <Tab>
              <span
                className={`${
                  this.state.tabIndex === 1 ? borderColor : hoverColor
                } transition-all duration-300`}
              >
                ビーチ
              </span>
            </Tab>
            <Tab>
              <span
                className={`${
                  this.state.tabIndex === 2 ? borderColor : hoverColor
                } transition-all duration-300`}
              >
                グルメ
              </span>
            </Tab>
            <Tab>
              <span
                className={`${
                  this.state.tabIndex === 3 ? borderColor : hoverColor
                } transition-all duration-300`}
              >
                ショッピング
              </span>
            </Tab>
            <Tab>
              <span
                className={`${
                  this.state.tabIndex === 4 ? borderColor : hoverColor
                } transition-all duration-300`}
              >
                観光
              </span>
            </Tab>
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
            <Categorize category={"sightseeing"} />
          </TabPanel>
        </Tabs>
      </Layout>
    );
  }
}

export default Spot;
