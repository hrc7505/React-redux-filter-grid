import * as React from "react";

import HeaderComponent from "./header/headerComponent";
import ImageListFilterComponent from "./imageListFilter/imageListFilterComponent";

import "./app.scss";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="">
        <HeaderComponent />
        <ImageListFilterComponent />
      </div>
    );
  }
}

export default App;
