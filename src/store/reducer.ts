import { SET_TOKEN, SetTokenAction } from "./types";

export function tokenReducer(state: any, action: SetTokenAction) {
    console.log(action)
    switch (action.type) {
        case SET_TOKEN:
            console.log(2,action.token)
            return (state = Object.assign({ ...state }, action.token));
        default:
            return { ...state };
    }
}
