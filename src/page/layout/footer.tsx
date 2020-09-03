import React, { Component } from "react";
import { connect } from "react-redux";
import { TabBar } from "antd-mobile";

import { AppState } from "../../store/index";
import { setSelectedTab } from "../../store/actions";

import home from "../../static/img/home.png";
import homeActive from "../../static/img/homeActive.png";
import card from "../../static/img/card.png";
import cardActive from "../../static/img/cardActive.png";
import cart from "../../static/img/cart.png";
import cartActive from "../../static/img/cartActive.png";
import personal from "../../static/img/personal.png";
import personalActive from "../../static/img/personalActive.png";

const mapStateToProps = (state: AppState) => ({
    selectedTab: state.selectedTab,
});

@(connect(mapStateToProps, { setSelectedTab }) as any)
export default class footer extends Component<any> {
    constructor(props: any) {
        super(props);
    }

    // 设置底栏
    selectedTab = (val: string) => {
        this.props.setSelectedTab(val);
    };

    render() {
        return (
            <TabBar>
                <TabBar.Item title="首页" key="0" onPress={() => this.selectedTab("0")} selected={this.props.selectedTab === "0"} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${home}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${homeActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="学院" key="1" onPress={() => this.selectedTab("1")} selected={this.props.selectedTab === "1"} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${card}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cardActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="数据" key="2" onPress={() => this.selectedTab("2")} selected={this.props.selectedTab === "2"} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cart}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cartActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="我的" key="3" onPress={() => this.selectedTab("3")} selected={this.props.selectedTab === "3"} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${personal}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${personalActive}) no-repeat` }} />}></TabBar.Item>
            </TabBar>
        );
    }
}
