import React, { Component } from "react";
import { Carousel, Tabs } from "antd-mobile";

import "./college.less";

import ScrollBack from "../common/scrollBack";
import Footer from "../layout/footer";

export default class College extends Component {
    tabs = [{ title: "心得分享" }, { title: "高级教程" }];

    render() {
        return (
            <div className="college">
                <div className="college-carousel">
                    <Carousel infinite dots={false}>
                        <div className="college-swiper-slide">slider1</div>
                        <div className="college-swiper-slide">slider2</div>
                        <div className="college-swiper-slide">slider3</div>
                    </Carousel>
                </div>
                <div className="college-tabs">
                    <Tabs tabs={this.tabs} initialPage={0} tabBarActiveTextColor="#FCD000" tabBarInactiveTextColor="#999" tabBarUnderlineStyle={{ border: "1px solid #FCD000" }}>
                        <div className="college-tabs1">
                            <ul className="college-tabs1-list">
                                <li>
                                    <div className="college-tabs1-list-left">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="college-tabs1-list-right">
                                        <p>打破固有思维，换种…</p>
                                        <p>时长：60分钟</p>
                                        <div className="college-tabs1-user">
                                            <img src="" alt="" />
                                            <span>小老师</span>
                                        </div>
                                        <div className="college-tabs1-btn">回看教程</div>
                                    </div>
                                </li>
                                <hr />
                            </ul>
                            <ScrollBack></ScrollBack>
                        </div>
                        <div className="college-tabs2">
                            <ul className="college-tabs1-list">
                                <li>
                                    <div className="college-tabs1-list-left">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="college-tabs1-list-right">
                                        <p>抖音新手实操指南</p>
                                        <p>介绍抖音基础资料完善，素材准备 视频制作</p>
                                        <div className="college-tabs1-img">1340人已学习</div>
                                    </div>
                                </li>
                            </ul>
                            <ScrollBack></ScrollBack>
                        </div>
                    </Tabs>
                </div>
                <Footer selectedTab={1}></Footer>
            </div>
        );
    }
}
