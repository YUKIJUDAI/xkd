import React from "react";
import { TabBar } from "antd-mobile";
import { createHashHistory } from "history";

import "./footer.less";

import home from "../../static/img/home.png";
import homeActive from "../../static/img/homeActive.png";
import card from "../../static/img/card.png";
import cardActive from "../../static/img/cardActive.png";
import cart from "../../static/img/cart.png";
import cartActive from "../../static/img/cartActive.png";
import personal from "../../static/img/personal.png";
import personalActive from "../../static/img/personalActive.png";

interface Props {
    selectedTab: number;
}
const Footer: React.SFC<Props> = (props: Props) => {
    const changeRouter = (val: number) => {
        createHashHistory().push(["/", "/college"][val]);
    };

    return (
        <div className="footer-tabbar">
            <TabBar tabBarPosition="bottom" tintColor="#030303" unselectedTintColor="#a4a4a4">
                <TabBar.Item title="首页" key="0" onPress={() => changeRouter(0)} selected={props.selectedTab === 0} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${home}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${homeActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="学院" key="1" onPress={() => changeRouter(1)} selected={props.selectedTab === 1} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${card}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cardActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="数据" key="2" onPress={() => changeRouter(2)} selected={props.selectedTab === 2} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cart}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${cartActive}) no-repeat` }} />}></TabBar.Item>
                <TabBar.Item title="我的" key="3" onPress={() => changeRouter(3)} selected={props.selectedTab === 3} icon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${personal}) no-repeat` }} />} selectedIcon={<div style={{ width: "0.52rem", height: "0.52rem", background: `url(${personalActive}) no-repeat` }} />}></TabBar.Item>
            </TabBar>
        </div>
    );
};
export default Footer;
