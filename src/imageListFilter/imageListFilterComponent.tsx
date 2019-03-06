import * as React from "react";

import FilterButtonListComponent from "./filterButtons/filterButtonListComponent";
import ImageGridComponent from "./imageGrid/imageGridComponent";

import "./imageListFilterStyle.scss";

export default class ImageListFilterComponent extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <div className="imageListFilter flex hCenter vCenter dirCol">
                <FilterButtonListComponent />
                <ImageGridComponent />
            </div>
        );
    }
}