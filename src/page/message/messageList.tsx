import React from "react";
import { PullToRefresh, ListView } from "antd-mobile";

interface Props {
    type: number;
}

const MessageList: React.SFC<Props> = (props: Props) => {
    let dataSource = new ListView.DataSource({
        rowHasChanged: (row1: any, row2: any) => row1 !== row2,
    });

    const refresh = () => {};

    const row = (rowData: any, sectionID: React.ReactText, rowID: React.ReactText) => {
        return <div></div>;
    };

    return (
        <ListView dataSource={dataSource} renderRow={row}>
            <div className="message-list"></div>
        </ListView>
    );
};

export default MessageList;
