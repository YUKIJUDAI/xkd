export const trim = (str: string) => {
    str = str + "";
    return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, "");
};
// 验证手机号
export const phoneVerification = (phone: string) => {
    const reg = /^1[3-9]{1}[0-9]{9}$/i;
    return reg.test(trim(phone));
};
