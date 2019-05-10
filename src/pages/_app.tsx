import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import { ThemeProvider } from "react-jss";

import jss from "jss";
import defaultUnit from "jss-plugin-default-unit";
import vendorPrefixer from "jss-plugin-vendor-prefixer";
import globals from "jss-plugin-global";
import camelCase from "jss-plugin-camel-case";


import store from "../store/.";
import messages from "../lang/.";
import theme from "../style/theme";

jss.use(defaultUnit({}), vendorPrefixer(), globals(), camelCase());

addLocaleData(en);

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Provider store={store}>
                    <IntlProvider locale="en" messages={messages}>
                        <ThemeProvider theme={theme}>
                            <Fragment>
                                <Component {...pageProps} />
                            </Fragment>
                        </ThemeProvider>
                    </IntlProvider>
                </Provider>
            </Container>
        );
    }
}

export default MyApp;
