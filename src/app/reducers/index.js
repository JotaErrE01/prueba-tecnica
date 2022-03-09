import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { crudReducer } from "./crudReducer";
import { uiReducer } from "./uiReducar";

export const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    crud: crudReducer,
});