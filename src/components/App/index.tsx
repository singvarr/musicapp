import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Main from "components/Main";
import TrackList from "components/TrackList";
import Track from "components/Track";

import store from "store/.";
import "./less/index.less";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Fragment>
                    <Header />
                    <main>
                        <Switch>
                            <Route path="/" exact component={Main} />
                            <Route
                                path="/tracks"
                                exact
                                component={TrackList}
                            />
                            <Route
                                path="/tracks/:id"
                                component={Track}
                            />
                        </Switch>
                    </main>
                </Fragment>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
