import React from "react";
import { Link } from "react-router-dom";

import backImg from "../../static/img/back.png";

const Back: React.SFC = () => {
    return (
        <div className="xkd-back">
            <Link to={"/login"}>
                <img src={backImg} alt="" />
            </Link>
        </div>
    );
};

export default Back;
