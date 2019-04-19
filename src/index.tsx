import React from "react";
import { render } from "react-dom";
import App from "components/App";

function renderApp(): void {
    render(<App />, document.getElementById("root"));
}

renderApp();

if (module.hot) {
    module.hot.accept((): void => renderApp());
}
