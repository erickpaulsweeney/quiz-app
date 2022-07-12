import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Quiz, recordFunc, tallyFunc} from "./Quiz";
import ScorePage from "./Score Page";

export default function WithRoute() {
    return (
        <Router>
            <Switch>
                <Route path="/score-table">
                    <ScorePage answer={recordFunc} currScore={tallyFunc}/>
                </Route>
                <Route path="/">
                    <Quiz />
                </Route>
            </Switch>
        </Router>
    )
}