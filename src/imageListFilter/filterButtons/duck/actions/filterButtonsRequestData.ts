import IFilterButtonsRequestDataAction from "./interfaces/IFilterButtonsRequestDataAction";
import FilterButtonsActionType from "../actionTypes/filterButtonsActionType";

type FilterButtonsRequestData = () => IFilterButtonsRequestDataAction;

const filterButtonsRequestData: FilterButtonsRequestData = (): IFilterButtonsRequestDataAction => ({
    type: FilterButtonsActionType.FILTER_BUTTONS_REQUEST_DATA,
});

export default filterButtonsRequestData;