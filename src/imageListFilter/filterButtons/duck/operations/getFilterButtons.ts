import { Dispatch } from "redux";

import IFilterButtonsRequestDataAction from "../actions/interfaces/IFilterButtonsRequestDataAction";
import IFilterButtonsLoadDataAction from "../actions/interfaces/IFilterButtonsLoadDataAction";
import filterButtonsRequestData from "../actions/filterButtonsRequestData";
import filterButtonsLoadData from "../actions/filterButtonsLoadData";

type Actions = IFilterButtonsRequestDataAction | IFilterButtonsLoadDataAction;
type ReturnDispatch = (dispatch: Dispatch<Actions>) => void;
type GetFilterButtons = () => ReturnDispatch;
const getFilterButtons = (): ReturnDispatch => (
    async (dispatch: Dispatch<Actions>): Promise<void> => {
        // Requesting data
        dispatch(filterButtonsRequestData());
        const buttons: string[] = ["All", "Awesome", "Responsive", "Animated"];

        // Loading data
        dispatch(filterButtonsLoadData({
            filterButtons: buttons,
        }));
    });

export default getFilterButtons;