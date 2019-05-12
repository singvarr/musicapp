import React, { Fragment } from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import { ThemeProvider } from "react-jss";

import jss from "jss";
import defaultUnit from "jss-plugin-default-unit";
import vendorPrefixer from "jss-plugin-vendor-prefixer";
import globals from "jss-plugin-global";
import camelCase from "jss-plugin-camel-case";

import store from "store/.";
import messages from "../lang/.";
import theme from "../style/theme";

jss.use(defaultUnit({}), vendorPrefixer(), globals(), camelCase());

addLocaleData(en);

class MyApp extends App {
    public static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    public render(): JSX.Element {
        const { Component, pageProps, store } = this.props;

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
const options = { debug: true };
export default withRedux((initialState, options) => store)(MyApp);
