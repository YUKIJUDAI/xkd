import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Toast } from "antd-mobile";
import { createHashHistory } from "history";

import http from "../../utils/http";
import { AppState } from "../../store/index";
import { setToken } from "../../store/actions";
import { LoginBypassword, LoginByCode } from "./component";

import "./login.less";

interface State {
    loginWay: 0 | 1; // 登录方式  0密码登录  1短信登录
    loginInfo: {
        phone: string;
        password?: string;
        smscode?: string;
    };
}

class Login extends Component<State, any, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            loginWay: 1,
            loginInfo: {
                phone: "",
                password: "",
                smscode: "",
            },
        };
    }

    // 修改登录方式
    changeLoginWay = (loginWay: number) => {
        this.setState({ loginWay });
    };

    // 登录
    login = () => {
        [this.loginPwd, this.loginBySms][this.state.loginWay]();
    };

    // 短信登录
    loginBySms = async () => {
        const res: any = http.post("User/Login/sms", { phone: this.state.phone, smscode: this.state.smscode });
        if (res.code === 200) {
            Toast.success(res.msg);
            createHashHistory().push("/");
        } else {
            Toast.fail(res.msg);
        }
    };

    // 密码登录
    loginPwd = async () => {
        const res: any = http.post("User/Login/pwd", { phone: this.state.phone, password: this.state.password });
        if (res.code === 200) {
            Toast.success(res.msg);
            createHashHistory().push("/");
        } else {
            Toast.fail(res.msg);
        }
    };

    // 修改登录信息
    changeLoginInfo = (loginInfo: State) => {
        this.setState({ loginInfo: Object.assign(this.state.login, loginInfo) });
    };

    render() {
        return (
            <div className="login">
                <div className="xkd-tab login-tab">
                    <p className={this.state.loginWay === 0 ? "active" : ""} onClick={() => this.changeLoginWay(0)}>
                        密码登录
                    </p>
                    <p className={this.state.loginWay === 1 ? "active" : ""} onClick={() => this.changeLoginWay(1)}>
                        短信登录
                    </p>
                </div>
                <div className="login-form">
                    {this.state.loginWay === 0 && <LoginBypassword changeLoginInfo={(loginInfo: State) => this.changeLoginInfo(loginInfo)}></LoginBypassword>}
                    {this.state.loginWay === 1 && <LoginByCode changeLoginInfo={(loginInfo: State) => this.changeLoginInfo(loginInfo)}></LoginByCode>}
                    <div className="login-submit">
                        <div className="xkd-btn-primary" onClick={this.login}>
                            登录
                        </div>
                    </div>
                    <div className="login-other clearfix">
                        <p className="fl">
                            还没有注册？
                            <Link to={"/registered"} className="blue">
                                去注册
                            </Link>
                        </p>
                        <p className="fr">
                            <Link className="blue" to={"/forget"}>
                                忘记密码
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    token: state.token,
});

export default connect(mapStateToProps, { setToken })(Login);
