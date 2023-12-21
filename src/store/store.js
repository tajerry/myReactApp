import {createStore, combineReducers, compose, applyMiddleware} from "redux";
import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {postReducer} from "./posts/reducer";
import {gistsReducer} from "./gists/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import {persistReducer, persistStore} from "redux-persist";
const persistConfig = {
    key:'root',
    storage
}
const rootReducer = combineReducers({
    profileReducer,
    chatsReducer,
    postReducer,
    gistsReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer );
const store = createStore(
    persistedReducer , composeWithDevTools(applyMiddleware(thunk))  );
export const persistor = persistStore(store)
export default store;
