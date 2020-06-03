import React, { Component } from "react";
import { Layout, Row, Col, Card } from "antd";
import screenfull from "screenfull";
import "@/style/view-style/index.scss";
import browser from "../../assets/images/browser.png";
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import vue from "../../assets/images/Vue.png";
import react from "../../assets/images/react.png";
import wechat from "../../assets/images/wechat.png";
import app from "../../assets/images/app.png";
import node from "../../assets/images/Nodejs.png";

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
          <Col span={24}>
            <Col span={6}>
              <div className="base-style browser">
                <img src={browser} alt="" className="icon-style"></img>
                <div>
                  <span>999</span>
                  <div>浏览器</div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="base-style css">
                <img src={css} alt="" className="icon-style"></img>
                <div>
                  <span>366</span>
                  <div>CSS</div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="base-style html">
                <img src={html} alt="" className="icon-style"></img>
                <div>
                  <span>999</span>
                  <div>HTML</div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="base-style javascript">
                <img src={js} alt="" className="icon-style"></img>

                <div>
                  <span>666</span>
                  <div>Javascript</div>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
        <Row gutter={24} className="index-header">
          <Col span={24}>
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
              <div className="base-style nodejs">
                <img src={node} alt="" className="icon-style"></img>
                <div>
                  <span>999</span>
                  <div>Node</div>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div className="base-style wechat">
                <img src={app} alt="" className="icon-style"></img>

                <div className="wechatapp">
                  <span>666</span>
                  <div>小程序&Native</div>
                </div>
                <img
                  src={wechat}
                  alt=""
                  className="icon-style icon-style-left "
                ></img>
              </div>
            </Col>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Card title="热门文章" extra={<a href="www.baidu.com">More</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="最新发布" extra={<a href="www.baidu.com">More</a>}>
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
