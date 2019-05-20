import React from "react";
import App, { Container } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import { ThemeProvider } from "react-jss";

import store, { makeStore } from "store/.";
import messages from "../lang/.";
import theme from "../style/theme";

addLocaleData(en);

class MyApp extends App {
    public componentDidMount(): void {
        const style = document.getElementById("server-side-styles");

        if (style) {
            style.parentNode.removeChild(style);
        }
    }

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
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </IntlProvider>
                </Provider>
            </Container>
        );
    }
}
const options = { debug: true };
export default withRedux(makeStore)(MyApp);
