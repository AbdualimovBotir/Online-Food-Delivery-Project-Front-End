import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./Authentication/Reducer"; // Reducer'ni import qilish
import { thunk } from 'redux-thunk';  // Redux-thunk'ni import qilish

const rootReducer = combineReducers({
  auth: authReducer,  // Auth reducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
