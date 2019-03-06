import * as React from "react";

import "./app.scss";
import HeaderComponent from "./header/headerComponent";
import ImageGridComponent from "./imageGrid/imageGridComponent";

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="">
        <HeaderComponent />
        <ImageGridComponent />
      </div>
    );
  }
}

export default App;
