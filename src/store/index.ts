import { combineReducers, createStore } from "redux";
import { tokenReducer, selectedTabReducer } from "./reducer";

export type AppState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    token: tokenReducer,
    selectedTab: selectedTabReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, { selectedTab: "0", token: "" });
    return store;
}
