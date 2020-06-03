import React, { Component } from "react";
import { Tabs, List, Typography } from "antd";
import "../../style/view-style/list.scss";
const { TabPane } = Tabs;
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];

class list extends Component {
  callback = key => {
    console.log(key);
  };
  render() {
    return (
      <Tabs
        onChange={this.callback}
        type="card"
        defaultActiveKey="1"
        className="listbox"
      >
        <TabPane tab="vue" key="1">
          {/* <Divider orientation="left">Default Size</Divider> */}
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[vue]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="react" key="2">
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[react]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane tab="node" key="3">
          <List
            // header={<div>Header</div>}
            // footer={<div>Footer</div>}
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text mark>[node]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
    );
  }
}
export default list;
