import React, { Component } from "react";
import { Tabs } from "antd-mobile";

export default class Message extends Component {
    tabs = [{ title: "通知" }, { title: "消息" }];

    render() {
        return (
            <div className="message">
                <div className="message-tab">
                <Tabs tabs={this.tabs} initialPage={0} tabBarActiveTextColor="#FCD000" tabBarInactiveTextColor="#999" tabBarUnderlineStyle={{ border: "1px solid #FCD000" }}>
                </Tabs>    
                </div>
            </div>
        );
    }
}
