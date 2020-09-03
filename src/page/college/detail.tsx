import React, { Component } from "react";

import ScrollBack from "../common/scrollBack";
import Footer from "../layout/footer";

import "./college.less";

export default class Detail extends Component {
    render() {
        return (
            <div className="college-detail">
                <div className="college-carousel">
                    <div className="college-swiper-slide">slider1</div>
                </div>
                <div className="college-detail-main">
                    <div className="college-detail-nav">课程介绍</div>
                    <div className="college-detail-title">抖音新手实操指南</div>
                    <div className="college-detail-title college-detail-info">介绍抖音基础资料完善、素材准备、视频制作、发布。如果刷垂直和运营中遇到的那些坑，一个优秀视频具备的维度。</div>
                    <div className="college-detail-class">共6课时/已更新6课时</div>
                    <div>
                        <ul className="college-detail-list">
                            <hr />
                            <li>
                                <div className="college-detail-list-left">
                                    <p>01.小科抖介绍</p>
                                    <p>时长：6分42秒</p>
                                </div>
                                <div className="college-detail-list-right">
                                    <img src="" alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <ScrollBack></ScrollBack>
                <Footer selectedTab={1}></Footer>
            </div>
        );
    }
}
