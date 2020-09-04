import { combineReducers, createStore } from "redux";
import { tokenReducer } from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

export type AppState = ReturnType<typeof rootReducer>;

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    token: tokenReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {
    token: {
        token: "", // token
        user_code: "", // 邀请码
        user_id: "", // 用户ID
        user_level: "", // 用户等级
        user_phone: "", // 用户手机
        user_referrer_id: "", // 用户上级ID
    },
});

export const persistor = persistStore(store as any);
export default store;
