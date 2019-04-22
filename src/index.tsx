import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import { ThemeProvider } from "react-jss";

import jss from "jss";
import defaultUnit from "jss-plugin-default-unit";
import vendorPrefixer from "jss-plugin-vendor-prefixer";
import globals from "jss-plugin-global";
import camelCase from "jss-plugin-camel-case";

import App from "components/App";
import store from "store/.";
import messages from "lang/.";
import theme from "style/theme";

jss.use(defaultUnit({}), vendorPrefixer(), globals(), camelCase());

addLocaleData(en);

function renderApp(): void {
    render(
        <Provider store={store}>
            <IntlProvider locale="en" messages={messages}>
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </ThemeProvider>
            </IntlProvider>
        </Provider>,
        document.getElementById("root")
    );
}

renderApp();

if (module.hot) {
    module.hot.accept((): void => renderApp());
}
