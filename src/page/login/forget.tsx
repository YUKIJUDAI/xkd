import React, { Component, ChangeEvent } from "react";
import { Toast } from "antd-mobile";
import { createHashHistory } from "history";

import http from "../../utils/http";
import CodeInput from "../common/codeInput";
import Back from "../common/back";

import "./login.less";

interface State {
    loginInfo: {
        phone: string; // 手机号
        smscode: string; // 验证码
        password: string; // 密码
    };
}

export default class login extends Component<any, State, {}> {
    constructor(props: any) {
        super(props);
        this.state = {
            loginInfo: { phone: "", smscode: "", password: "" },
        };
    }

    change = (type: string, e: ChangeEvent<HTMLInputElement> | string) => {
        if (type === "smscode") {
            this.setState({ loginInfo: Object.assign({ ...this.state.loginInfo }, { [type]: e as string }) });
        } else {
            this.setState({ loginInfo: Object.assign({ ...this.state.loginInfo }, { [type]: (e as ChangeEvent<HTMLInputElement>).target.value }) });
        }
    };

    forget = async () => {
        const res: any = await http.post("User/Forget/index", this.state.loginInfo);
        if (res.code === 200) {
            Toast.success(res.msg);
            createHashHistory().push("/login");
        } else {
            Toast.fail(res.msg);
        }
    };

    render() {
        return (
            <div className="login">
                <div className="login-title">密码找回</div>
                <div className="login-form">
                    <div className="xkd-input-label">
                        <span>+86</span>
                        <input type="text" value={this.state.loginInfo.phone} onChange={(event) => this.change("phone", event)} className="xkd-input" placeholder="请输入手机号" />
                    </div>
                    <CodeInput type="forget" changeCode={(smscode: string) => this.change("smscode", smscode)} phone={this.state.loginInfo.phone}></CodeInput>
                    <div className="xkd-input-label">
                        <span>新密码</span>
                        <input type="password" value={this.state.loginInfo.password} onChange={(event) => this.change("password", event)} className="xkd-input" placeholder="请输入密码" />
                    </div>
                </div>
                <div className="login-form">
                    <div className="login-submit">
                        <div className="xkd-btn-primary" onClick={this.forget}>
                            确定提交
                        </div>
                    </div>
                </div>
                <Back></Back>
            </div>
        );
    }
}
