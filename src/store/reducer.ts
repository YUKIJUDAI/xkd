import { SET_TOKEN, SetTokenAction, SET_SELECTED_TAB, SetSelectedTabAction } from "./types";

export function tokenReducer(state = "", action: SetTokenAction) {
    switch (action.type) {
        case SET_TOKEN:
            return (state = action.token);
        default:
            return state;
    }
}

export function selectedTabReducer(state = "", action: SetSelectedTabAction) {
    console.log(state,action)
    switch (action.type) {
        case SET_SELECTED_TAB:
            return (state = action.selectedTab);
        default:
            return state;
    }
}
