import React, { Component } from "react";
import { Tabs } from "antd-mobile";

import MessageList from "./messageList";

import "./message.less";

export default class Message extends Component {
    tabs = [{ title: "通知" }, { title: "消息" }];

    render() {
        return (
            <div className="message">
                <div className="message-tab">
                    <Tabs tabs={this.tabs} initialPage={0} tabBarActiveTextColor="#333" tabBarInactiveTextColor="#333" tabBarUnderlineStyle={{ border: "1px solid #FCD000" }}>
                        <div className="message-tabs">
                            <div className="message-title">
                                <p>通知列表</p>
                                <p>全部已读</p>
                            </div>
                            <MessageList type={1}></MessageList>
                        </div>
                    </Tabs>
                </div>
            </div>
        );
    }
}
