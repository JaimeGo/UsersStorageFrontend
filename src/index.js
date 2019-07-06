import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import UserForm from './components/UserForm'
import ShowUser from './components/ShowUser';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

const routing = (
    <Router>
        <div>
            <Switch>

                <Route exact path="/" render={()=>(<Redirect to="/users"/>)} />
                <Route exact path="/users" component={App} />
                <Route path="/users/new" render={(props) => <UserForm {...props} formType="new"/>} />
                <Route path="/users/:id/edit" render={(props) => <UserForm{...props} formType="edit"/>} />
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
