import React, { Component } from "react";
import { Carousel } from "antd-mobile";

import ScrollBack from "../common/scrollBack";
import Leaderboard from "../common/leaderboard";

import "./home.less";

interface MenuType {
    src: string;
    title: string;
}

export default class Home extends Component {

    menulist: MenuType[] = [
        {
            src: require("../../static/img/menu1.png"),
            title: "邀请好友",
        },
        {
            src: require("../../static/img/menu2.png"),
            title: "绑定抖音",
        },
        {
            src: require("../../static/img/menu3.png"),
            title: "收益报表",
        },
        {
            src: require("../../static/img/menu4.png"),
            title: "爆单分析",
        },
        {
            src: require("../../static/img/menu5.png"),
            title: "签到有礼",
        },
    ];

    render() {
        return (
            <div className="home">
                {/* head  */}
                <div className="home-head">
                    <div className="home-head-message">
                        <img src={require("../../static/img/message.png")} alt="" />
                        <p></p>
                    </div>
                    <div className="home-head-search">
                        <img src={require("../../static/img/search.png")} alt="" />
                        <input type="text" placeholder="活出漂亮人生" disabled />
                    </div>
                    <div className="home-head-feedback">
                        <img src={require("../../static/img/feedback.png")} alt="" />
                    </div>
                    <div className="home-head-study">
                        <img src={require("../../static/img/study.png")} alt="" />
                    </div>
                </div>
                {/* nav */}
                <nav>
                    <p className="home-nav">推荐</p>
                    <p>全部</p>
                    <p>情感</p>
                    <p>心理</p>
                    <p>性格</p>
                    <p>游戏</p>
                    <p>工具</p>
                </nav>
                {/* swiper */}
                <div className="home-swiper">
                    <Carousel infinite dots={false}>
                        <div className="home-swiper-slide">slider1</div>
                        <div className="home-swiper-slide">slider2</div>
                        <div className="home-swiper-slide">slider3</div>
                    </Carousel>
                </div>
                {/* menu */}
                <div className="home-menu">
                    <ul>
                        {this.menulist.map((item: MenuType, i) => {
                            return (
                                <li key={i}>
                                    <img src={item.src} alt="" />
                                    <p>{item.title}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {/* announcement */}
                <div className="home-announcement">
                    <span style={{ color: "#333" }}>系统公告</span>
                    <span style={{ color: "#FCD000" }}> | </span>
                    <span>小科抖推广宣传基本要求</span>
                    <p className="fr">
                        <i className="right"></i>
                    </p>
                </div>
                {/* ranking */}
                <div className="home-ranking">
                    <div className="home-title clearfix">
                        <p className="fl">收益排行</p>
                        <span className="fr">
                            全部<i className="right"></i>
                        </span>
                    </div>
                    <p className="home-ranking-remarks">注：收益排行数据为2020-8-23用户</p>
                    <Leaderboard></Leaderboard>
                </div>
                {/* recommend */}
                <div className="border-top"></div>
                <div className="home-recommend">
                    <div className="home-title clearfix">
                        <p className="fl">免费推广</p>
                        <span className="fr">
                            全部<i className="right"></i>
                        </span>
                    </div>
                    <div className="home-recommend-list">
                        <ul>
                            <li>
                                <div className="home-recommend-list-left">
                                    <img src="" alt="" />
                                </div>
                                <div className="home-recommend-list-center">
                                    <p>漫画头像生成器</p>
                                    <p>
                                        收益：自推<span className="color666">90%</span>
                                    </p>
                                    <p>
                                        <i className="xingqu"></i>趣测趣玩
                                    </p>
                                </div>
                                <div className="home-recommend-list-right">
                                    <img src="" alt="" />
                                    <p>去推广</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* recommend */}
                <div className="border-top"></div>
                <div className="home-recommend">
                    <div className="home-title clearfix">
                        <p className="fl">今日新品</p>
                        <span className="fr">
                            全部<i className="right"></i>
                        </span>
                    </div>
                    <div className="home-recommend-list">
                        <ul>
                            <li>
                                <div className="home-recommend-list-left">
                                    <img src="" alt="" />
                                </div>
                                <div className="home-recommend-list-center">
                                    <p>漫画头像生成器</p>
                                    <p>
                                        收益：自推<span className="color666">90%</span>
                                    </p>
                                    <p>
                                        <i className="xingqu"></i>趣测趣玩
                                    </p>
                                </div>
                                <div className="home-recommend-list-right">
                                    <img src="" alt="" />
                                    <p>去推广</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* recommend */}
                <div className="border-top"></div>
                <div className="home-recommend">
                    <div className="home-title clearfix">
                        <p className="fl">热门榜单</p>
                        <span className="fr">
                            全部<i className="right"></i>
                        </span>
                    </div>
                    <div className="home-recommend-list">
                        <ul>
                            <li>
                                <div className="home-recommend-list-left">
                                    <img src="" alt="" />
                                </div>
                                <div className="home-recommend-list-center">
                                    <p>漫画头像生成器</p>
                                    <p>
                                        收益：自推<span className="color666">90%</span>
                                    </p>
                                    <p>
                                        <i className="xingqu"></i>趣测趣玩
                                    </p>
                                </div>
                                <div className="home-recommend-list-right">
                                    <img src="" alt="" />
                                    <p>去推广</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ScrollBack */}
                <ScrollBack></ScrollBack>
            </div>
        );
    }
}
