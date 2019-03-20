import { connect, MapStateToProps, MapDispatchToProps } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import FilterButtonListComponent from "./filterButtonListComponent";
import IFilterButtonListPropsFromState from "./interfaces/IFilterButtonListPropsFromState";
import IAppState from "../../duck/interfaces/IAppState";
import IFilterButtonListPropsFromDispatch from "./interfaces/IFilterButtonListPropsFromDispatch";
import getFilterButtons from "./duck/operations/getFilterButtons";

const mapStateToProps: MapStateToProps<IFilterButtonListPropsFromState, object, IAppState> =
    (state: IAppState): IFilterButtonListPropsFromState => ({
        isLoading: state.filterButtonsState.isLoading,
        filterButtonList: state.filterButtonsState.filterButtons,
    });

const mapDispatchToProps: MapDispatchToProps<IFilterButtonListPropsFromDispatch, object> =
    (dispatch: ThunkDispatch<IAppState, void, Action>): IFilterButtonListPropsFromDispatch => ({
        getFilterButtons: (): void => dispatch(getFilterButtons()),
    });

const FilterButtonListContainer: React.ComponentClass = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilterButtonListComponent);

export default FilterButtonListContainer