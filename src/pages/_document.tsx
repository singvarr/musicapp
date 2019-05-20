import React, { Fragment } from "react";
import Document from "next/document";

import { SheetsRegistry, JssProvider, createGenerateId, jss } from "react-jss";
import defaultUnit from "jss-plugin-default-unit";
import vendorPrefixer from "jss-plugin-vendor-prefixer";
import globals from "jss-plugin-global";
import camelCase from "jss-plugin-camel-case";
import styles from "style/global";

jss.use(defaultUnit({}), vendorPrefixer(), globals(), camelCase());

class CustomDocument extends Document {
    public static async getInitialProps(ctx): Promise<any> {
        const registry = new SheetsRegistry();

        const globalStyles = jss
            .createStyleSheet(
                {
                    "@global body": {
                        margin: 0,
                        padding: 0
                    },
                    "@global ul": {
                        padding: 0,
                        margin: 0,
                        listStyle: "none"
                    },
                    "@global a": {
                        textDecoration: "none"
                    }
                },
                {
                    index: 1,
                    meta: "globals"
                }
            )
            .attach();
        registry.add(globalStyles);

        const generateId = createGenerateId();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => props => (
                    <JssProvider generateId={generateId} registry={registry}>
                        <App {...props} />
                    </JssProvider>
                )
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <Fragment>
                    {initialProps.styles}
                    <style id="server-side-styles">{registry.toString()}</style>
                </Fragment>
            )
        };
    }
}

export default CustomDocument;
