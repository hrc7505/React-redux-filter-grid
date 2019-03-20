import IFilterButtonListPropsFromDispatch from "./IFilterButtonListPropsFromDispatch";
import IFilterButtonListPropsFromState from "./IFilterButtonListPropsFromState";

export default interface IFilterButtonListProps
    extends IFilterButtonListPropsFromState,
    IFilterButtonListPropsFromDispatch { }