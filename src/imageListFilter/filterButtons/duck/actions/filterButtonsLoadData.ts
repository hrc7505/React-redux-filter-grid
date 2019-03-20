import IFilterButtonsDataPayload from "./interfaces/IFilterButtonsDataPayload";
import IFilterButtonsLoadDataAction from "./interfaces/IFilterButtonsLoadDataAction";
import FilterButtonsActionType from "../actionTypes/filterButtonsActionType";

type FilterButtonsLoadData = (payload: IFilterButtonsDataPayload) => IFilterButtonsLoadDataAction;

const filterButtonsLoadData: FilterButtonsLoadData =
    (payload: IFilterButtonsDataPayload): IFilterButtonsLoadDataAction => ({
        type: FilterButtonsActionType.FILTER_BUTTONS_LOAD_DATA,
        payload,
    });

export default filterButtonsLoadData;