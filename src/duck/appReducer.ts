import { Reducer, combineReducers } from "redux";
import IAppState from "./interfaces/IAppState";
import filterButtonsReducer from "../imageListFilter/filterButtons/duck/filterButtonsReducer";

const appReducer: Reducer<IAppState> = combineReducers<IAppState>({
    filterButtonsState: filterButtonsReducer,
});

export default appReducer;