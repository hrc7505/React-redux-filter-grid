import * as React from "react";

import FilterButtonListContainer from "./filterButtons/filterButtonListContainer";
import ImageGridComponent from "./imageGrid/imageGridComponent";

import "./imageListFilterStyle.scss";

export default class ImageListFilterComponent extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="imageListFilter flex hCenter vCenter dirCol">
                <FilterButtonListContainer />
                <ImageGridComponent />
            </div>
        );
    }
}