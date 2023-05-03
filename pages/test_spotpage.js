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
      <Layout title="見どころ一覧">
        <h1 className="text-4xl pt-4 underline">全体マップ</h1>
        <div className="flex justify-center w-full h-72 md:h-96 lg:h-96">
          <AllMap />
        </div>
        <h1 className="text-3xl pt-6 pb-2 mt-6 font-bold">
          見どころ一覧（ジャンル別）
        </h1>
        <Tabs
          selectedIndex={this.state.tabIndex}
          onSelect={(tabIndex) => this.setState({ tabIndex })}
          className="grid items-center justify-center"
          defaultcss="false"
        >
          <TabList className="w-full pl-4 lg:pl-8 border-b border-gray-300">
            <Tab>
              <span
                className={this.state.tabIndex === 0 ? borderColor : hoverColor}
              >
                全体
              </span>
            </Tab>
            <Tab>
              <span
                className={this.state.tabIndex === 1 ? borderColor : hoverColor}
              >
                ビーチ
              </span>
            </Tab>
            <Tab>
              <span
                className={this.state.tabIndex === 2 ? borderColor : hoverColor}
              >
                グルメ
              </span>
            </Tab>
            <Tab>
              <span
                className={this.state.tabIndex === 3 ? borderColor : hoverColor}
              >
                買い物
              </span>
            </Tab>
            <Tab>
              <span
                className={this.state.tabIndex === 4 ? borderColor : hoverColor}
              >
                イベント
              </span>
            </Tab>
            <Tab>
              <span
                className={this.state.tabIndex === 5 ? borderColor : hoverColor}
              >
                フィットネス
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
            <Categorize category={"event"} />
          </TabPanel>
          <TabPanel>
            <Categorize category={"fitness"} />
          </TabPanel>
        </Tabs>
      </Layout>
    );
  }
}

export default Spot;
