import FilterButtonsActionType from "../../actionTypes/filterButtonsActionType";
import IFilterButtonsDataPayload from "./IFilterButtonsDataPayload";

export default interface IFilterButtonsLoadDataAction {
    type: FilterButtonsActionType.FILTER_BUTTONS_LOAD_DATA;
    payload: IFilterButtonsDataPayload;
}