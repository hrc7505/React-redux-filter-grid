import * as React from "react";

import IFilterButtonListProps from "./interfaces/IFilterButtonListProps";

import "./filterButtonListStyle.scss";

export default class FilterButtonListComponent extends React.PureComponent<IFilterButtonListProps> {
    public render(): JSX.Element {
        return (
            <div className="filters flex VCenter hCenter">
                {
                    this.props.filterButtonList.map((text: string, i: number) => (
                        <button key={i}>
                            {text}
                        </button>
                    ))
                }
            </div>
        );
    }

    public componentDidMount(): void {
        this.props.getFilterButtons();
    }
}