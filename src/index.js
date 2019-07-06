import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import NewUser from './components/NewUser';
import EditUser from './components/EditUser';
import ShowUser from './components/ShowUser';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Switch>

                <Route exact path="/" render={()=>(<Redirect to="/users"/>)} />
                <Route exact path="/users" component={App} />
                <Route path="/users/new" component={NewUser} />
                <Route path="/users/:id/edit" component={EditUser} />
                <Route path="/users/:id" component={ShowUser} />

            </Switch>
        </div>
    </Router>
);



ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
