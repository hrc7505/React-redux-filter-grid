import * as React from "react";

import "./filterButtonListStyle.scss";

export default class FilterButtonListComponent extends React.PureComponent {
    public render(): JSX.Element {
        const buttons: string[] = [
            "All", "Awesome", "Responsive", "Animated",
        ];

        return (
            <div className="filters flex VCenter hCenter">
                {
                    buttons.map((text: string, i: number) => (
                        <button key={i}>
                            {text}
                        </button>
                    ))
                }
            </div>
        );
    }
}