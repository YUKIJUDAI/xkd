import { SET_TOKEN, SetTokenAction } from "./types";

export function tokenReducer(state = "", action: SetTokenAction) {
    switch (action.type) {
        case SET_TOKEN:
            return (state = action.token);
        default:
            return state;
    }
}
