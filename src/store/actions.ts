import { SET_TOKEN, SET_SELECTED_TAB } from "./types";

export function setToken(token: string) {
    return {
        type: SET_TOKEN,
        token,
    };
}

export function setSelectedTab(selectedTab: string) {
    return {
        type: SET_SELECTED_TAB,
        selectedTab,
    };
}
