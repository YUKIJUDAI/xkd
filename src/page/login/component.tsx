import React, { useState, ChangeEvent } from "react";

import CodeInput from "../common/codeInput";

interface LoginInfo {
    phone: string; // 手机号
    password?: string; // 密码
    smscode?: string; // 验证码
}

interface Props {
    changeLoginInfo: Function;
}

export const LoginBypassword: React.SFC<Props> = (props: Props) => {
    // 创建登录信息
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({ phone: "", password: "" });

    // 修改登录信息
    const change = (type: string, e: ChangeEvent<HTMLInputElement>) => {
        let data: LoginInfo | null = null;
        if (type === "phone") {
            data = { phone: e.target.value, password: loginInfo.password };
        } else if (type === "password") {
            data = { phone: loginInfo.phone, password: e.target.value };
        }
        data && (setLoginInfo(data), props.changeLoginInfo(data));
    };

    return (
        <div>
            <div className="xkd-input-label">
                <span>+86</span>
                <input type="text" value={loginInfo.phone} onChange={(event) => change("phone", event)} className="xkd-input" placeholder="请输入手机号" />
            </div>
            <div className="xkd-input-label">
                <span>密码</span>
                <input type="password" value={loginInfo.password} onChange={(event) => change("password", event)} className="xkd-input" placeholder="请输入密码" />
            </div>
        </div>
    );
};

export const LoginByCode: React.SFC<Props> = (props: Props) => {
    const [loginInfo, setLoginInfo] = useState<LoginInfo>({ phone: "", smscode: "" });

    // 修改登录信息
    const change = (type: string, e?: ChangeEvent<HTMLInputElement> | string) => {
        let data: LoginInfo | null = null;
        if (type === "phone") {
            data = { phone: (e as ChangeEvent<HTMLInputElement>).target.value, smscode: loginInfo.smscode };
        } else if (type === "smscode") {
            data = { phone: loginInfo.phone, smscode: e as string };
        }
        data && (setLoginInfo(data), props.changeLoginInfo(data));
    };

    return (
        <div>
            <div className="xkd-input-label">
                <span>+86</span>
                <input type="text" value={loginInfo.phone} onChange={(event) => change("phone", event)} className="xkd-input" placeholder="请输入手机号" />
            </div>
            <CodeInput type="login" changeCode={(smscode: string) => change("smscode", smscode)} phone={loginInfo.phone}></CodeInput>
        </div>
    );
};
