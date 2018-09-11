import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "../state/store";

import Header from "./Header";
import Main from "./Main";
import TrackList from "./TrackList";
import Track from "./Track";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/tracks" exact component={TrackList} />
                    <Route path="/tracks/:id" component={Track} />
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
