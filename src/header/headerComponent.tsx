import * as React from "react";

import "./headerStyle.scss";

export default class HeaderComponent extends React.PureComponent {
    public render(): JSX.Element {
        return (
            <header>
                React Redux Image Grid
            </header>
        );
    }
}
