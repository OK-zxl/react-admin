import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";
import screenfull from "screenfull";
import "@/style/view-style/index.scss";
import vue from "../../assets/images/Vue.png";
import react from "../../assets/images/react.png";
import wechat from "../../assets/images/wechat.png";
import app from "../../assets/images/app.png";

// import BarEcharts from './bar.jsx'
// import PieEcharts from './pie.jsx'
// import LineEcharts from './line.jsx'
// import ScatterEcharts from './scatter.jsx'
// import PictorialBarEcharts from './pictorialBar.jsx'

class Index extends Component {
  fullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.request(document.getElementById("bar"));
    }
  };
  render() {
    return (
      <Layout className="index animated fadeIn">
        <Row gutter={24} className="index-header">
          <Col span={6}>
            <div className="base-style vuejs">
              <img src={vue} alt="" className="icon-style"></img>
              <div>
                <span>999</span>
                <div>VUE</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style reactjs">
              <img src={react} alt="" className="icon-style"></img>
              <div>
                <span>366</span>
                <div>REACT</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style wechat">
              <img src={wechat} alt="" className="icon-style"></img>
              <div>
                <span>666</span>
                <div>小程序</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style native">
              <img src={app} alt="" className="icon-style"></img>
              <div>
                <span>689</span>
                <div>Native</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={6}>
            <Card title="往期热门文章排行（前十）">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="往期热门文章排行（前十）">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="往期热门文章排行（前十）">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card title="往期热门文章排行（前十）">
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Index;
