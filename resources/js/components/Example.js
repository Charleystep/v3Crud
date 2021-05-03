import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import dashboard from "./dashboard";
import createAlunos from "./createAlunos";
import EditAlunos from "./EditAlunos";
import "../../css/app.css";

function Example() {
    return (
        <Router>
            <>
                <Switch>
                    <Route path="/dashboard" exact component={dashboard} />
                    <Route path="/createAlunos" exact component={createAlunos} />
                    <Route path="/edit/:id" exact component={EditAlunos} />
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}