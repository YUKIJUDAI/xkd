import { combineReducers, createStore } from "redux";
import { tokenReducer } from "./reducer";

export type AppState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    token: tokenReducer
});

export default function configureStore() {
    const store = createStore(rootReducer, { token:"" });
    return store;
}
