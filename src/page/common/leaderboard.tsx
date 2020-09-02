import React, { Component } from 'react';

import "./leaderboard.less";

export default class Leaderboard extends Component {
    render() {
        return (
            <div className="leaderboard">
                <ul>
                    <li>
                        <div className="leaderboard-num">1</div>
                        <div className="leaderboard-img">
                            <img src="" alt="" className="leaderborder-avatar avatar1"/>
                            <img src={require("../../static/img/hg1.png")} alt="" className="leaderborder-crown"/>
                        </div>
                        <div className="leaderboard-name">姜沫沫</div>
                        <div className="leaderboard-price">7893.2元</div>
                    </li>
                    <li>
                        <div className="leaderboard-num">2</div>
                        <div className="leaderboard-img">
                            <img src="" alt="" className="leaderborder-avatar avatar2"/>
                            <img src={require("../../static/img/hg3.png")} alt="" className="leaderborder-crown"/>
                        </div>
                        <div className="leaderboard-name">姜沫沫</div>
                        <div className="leaderboard-price">7893.2元</div>
                    </li>
                    <li>
                        <div className="leaderboard-num">3</div>
                        <div className="leaderboard-img">
                            <img src="" alt="" className="leaderborder-avatar avatar3"/>
                            <img src={require("../../static/img/hg2.png")} alt="" className="leaderborder-crown"/>
                        </div>
                        <div className="leaderboard-name">姜沫沫</div>
                        <div className="leaderboard-price">7893.2元</div>
                    </li>
                </ul>
            </div>
        )
    }
}
