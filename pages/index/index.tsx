import React, { Fragment } from "react";
import Head from "components/Head";
import MainLayout from "layouts/MainLayout";

function Home(): JSX.Element {
    return (
        <Fragment>
            <Head title="Home" />
            <MainLayout>
                <section>This is home page</section>
            </MainLayout>
        </Fragment>
    );
}

export default Home;
