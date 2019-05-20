import React from "react";
import Head from "next/head";

interface CustomHeadProps {
    children?: JSX.Element;
    title: string;
}

function CustomHead(props: CustomHeadProps): JSX.Element {
    return (
        <Head>
            <title>{props.title}</title>
            <meta
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                name="viewport"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Oswald"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Raleway:thin"
                rel="stylesheet"
            />
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
                rel="stylesheet"
            />
            {props.children}
        </Head>
    );
}

export default CustomHead;
