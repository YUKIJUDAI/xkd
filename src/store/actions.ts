import { SET_TOKEN } from "./types";

export function setToken(token: any) {
    console.log(3,token)
    return {
        type: SET_TOKEN,
        token,
    };
}
