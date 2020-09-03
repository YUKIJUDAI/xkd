import React, { Component, ChangeEvent } from "react";
import { timer, Subscription } from "rxjs";
import { Modal, Toast } from "antd-mobile";

import http from "../../utils/http";
import { phoneVerification } from "../../utils/utils";

import "./codeInput.less";

interface State {
    smscode: string; // 短信验证码
    captcha: string; // 图片验证码
    isSending: boolean; // 是否在获取验证码中
    sendNumber: number; // 倒计时数字
    show: boolean; // 是否显示验证码弹窗
    codeImg: string; // 图片验证码tup
}

interface Props {
    changeCode: Function; // 修改验证码
    phone: string; // 手机号
    type: "reg" | "login" | "forget";
}

export default class codeInput extends Component<Props, State, {}> {
    constructor(props: Props) {
        super(props);

        this.state = {
            smscode: "",
            captcha: "",
            isSending: false,
            sendNumber: 60,
            show: false,
            codeImg: "",
        };
    }

    componentWillUnmount() {
        this.countdownTimer && this.countdownTimer.unsubscribe();
    }

    // 修改图片验证码输入内容
    changeCaptha = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ captcha: e.target.value });
        this.props.changeCode(e.target.value);
    };

    // 修改短信验证码输入内容
    changeSmscode = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ smscode: e.target.value });
        this.props.changeCode(e.target.value);
    };

    // 倒计时定时器
    countdownTimer: Subscription | null = null;

    // 获取短信验证码
    getCode = async () => {
        const res: any = await http.post("Other/sendsms", { phone: this.props.phone, captcha: this.state.captcha, type: this.props.type });
        if (res.code === 200) {
            this.setState({ isSending: true, show: false });
            Toast.success(res.msg);
            this.countdownTimer = timer(0, 1000).subscribe((val: number) => {
                const _val = 60 - val;
                if (_val === 0) {
                    (this.countdownTimer as Subscription).unsubscribe();
                    this.setState({ isSending: false });
                } else {
                    this.setState({ sendNumber: _val });
                }
            });
        } else {
            Toast.fail(res.msg);
        }
    };

    // 获取图片验证码
    getCaptcha = async () => {
        if (!phoneVerification(this.props.phone)) {
            Toast.fail("手机号码格式不正确");
            return;
        }
        const res: any = await http.post("Other/captcha", { phone: this.props.phone, type: "reg", t: new Date().getTime() });
        typeof res === "string" ? this.setState({ show: true, codeImg: res }) : Toast.fail(res.msg);
    };

    render() {
        return (
            <div className="xkd-input-label">
                <span>验证码</span>
                <input type="text" onChange={(event) => this.changeSmscode(event)} className="xkd-input login-input" placeholder="请输入验证码" />
                <span className="xkd-input-label-code" onClick={this.getCaptcha}>
                    {this.state.isSending ? this.state.sendNumber : "获取验证码"}
                </span>
                <Modal visible={this.state.show} transparent className="code-dialog">
                    <div className="code-img">
                        <img src={this.state.codeImg} alt="" />
                    </div>
                    <div className="code-footer">
                        <input type="text" onChange={(event) => this.changeCaptha(event)} value={this.state.captcha} className="code-input" placeholder="请输入图片验证码" />
                        <img src={require("../../static/img/shuaxin.png")} onClick={this.getCaptcha} alt="" />
                        <div className="xkd-btn-primary" onClick={this.getCode}>
                            确认
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}
