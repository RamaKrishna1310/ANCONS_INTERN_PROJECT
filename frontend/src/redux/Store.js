import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
const rootReducers = combineReducers({
    auth: authReducer,
})