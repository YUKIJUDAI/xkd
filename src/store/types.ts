export interface SetTokenAction {
    type: typeof SET_TOKEN;
    token: string;
}

export interface SetSelectedTabAction {
    type: typeof SET_SELECTED_TAB;
    selectedTab: string;
}

export const SET_TOKEN = "SET_TOKEN";
export const SET_SELECTED_TAB = "SET_SELECTED_TAB";
