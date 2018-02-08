import React from "react";
import ReactDOM from "react-dom";
import Presentation from "./Presentation";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Presentation />, document.getElementById("app"));
registerServiceWorker();
