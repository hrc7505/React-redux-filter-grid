import { Reducer } from "redux";
import IFilterButtonsState from "./interfaces/IFilterButtonsState";
import IFilterButtonsRequestDataAction from "./actions/interfaces/IFilterButtonsRequestDataAction";
import IFilterButtonsLoadDataAction from "./actions/interfaces/IFilterButtonsLoadDataAction";
import FilterButtonsActionType from "./actionTypes/filterButtonsActionType";

type Action = IFilterButtonsRequestDataAction | IFilterButtonsLoadDataAction;

const filterButtonsReducer: Reducer<any, Action> =
    (state: IFilterButtonsState, action: Action): IFilterButtonsState => {
        switch (action.type) {
            case FilterButtonsActionType.FILTER_BUTTONS_REQUEST_DATA:
                return {
                    ...state,
                    isLoading: true,
                };

            case FilterButtonsActionType.FILTER_BUTTONS_LOAD_DATA:
                return {
                    isLoading: false,
                    filterButtons: action.payload.filterButtons,
                };

            default:
                return state || {
                    isLoading: false,
                    filterButtons: [],
                };
        }
    };

export default filterButtonsReducer;