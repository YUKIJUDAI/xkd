import { SET_TOKEN } from "./types";

export function setToken(token: string) {
    return {
        type: SET_TOKEN,
        token,
    };
}
