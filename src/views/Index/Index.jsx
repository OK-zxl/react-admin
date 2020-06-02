import React, { Component } from 'react'
import { Layout, Row, Col, Icon, Card } from 'antd'
import screenfull from 'screenfull'
import '@/style/view-style/index.scss'

// import BarEcharts from './bar.jsx'
// import PieEcharts from './pie.jsx'
// import LineEcharts from './line.jsx'
// import ScatterEcharts from './scatter.jsx'
// import PictorialBarEcharts from './pictorialBar.jsx'

class Index extends Component {
    fullToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.request(document.getElementById('bar'))
        }
    }
    render() {
        return (
            <Layout className='index animated fadeIn'>
                <Row gutter={24} className='index-header'>
                    <Col span={6}>
                        <div className='base-style vuejs'>
                            <Icon type='wechat' className='icon-style' />
                            <div>
                                <span>999</span>
                                <div>VUE</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style reactjs'>
                            <Icon type='qq' className='icon-style' />
                            <div>
                                <span>366</span>
                                <div>REACT</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style wechat'>
                            <Icon type='dingding' className='icon-style' />
                            <div>
                                <span>666</span>
                                <div>小程序</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className='base-style weibo'>
                            <Icon type='weibo' className='icon-style' />
                            <div>
                                <span>689</span>
                                <div>Native</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6} >
                      <Card title="往期热门文章排行（前十）" >
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
                      <Card title="往期热门文章排行（前十）" >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                    </Col>
                    <Col span={6}>
                      <Card title="往期热门文章排行（前十）" >
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                      </Card>
                    </Col>
                </Row>
            </Layout>
        )
    }
}

export default Index
