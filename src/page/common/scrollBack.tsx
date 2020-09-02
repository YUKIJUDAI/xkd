import React from "react";

import scroll from "../../static/img/scroll.png";

const ScrollBack: React.SFC = () => {
    return (
        <div className="xkd-scroll-back">
            <div className="xkd-scroll-back-btn">
                <img src={scroll} alt="" />
                回到顶部
            </div>
        </div>
    );
};

export default ScrollBack;
