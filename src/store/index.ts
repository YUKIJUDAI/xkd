import { combineReducers, createStore } from "redux";
import { tokenReducer } from "./reducer";

export type AppState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    token: tokenReducer,
});

export default function configureStore() {
    const store = createStore(rootReducer, { token: { token: "", user_code: "", user_id: "", user_level: "", user_phone: "", user_referrer_id: "" } } as any);
    return store;
}
