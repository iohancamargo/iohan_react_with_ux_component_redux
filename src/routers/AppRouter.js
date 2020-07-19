/* Libs */
import React from "react";
import { Router } from "react-router";
import { Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history';

/* Components */
import PublicRoute from "./PublicRoute";
import HomePage from '../components/HomePage';
import ContractPage from '../components/ContractPage';
import PageNotFound from '../components/PageNotFound';

export const history = createHistory();

const AppRouter = () => {
    return (
        <Router history= {history}>
            <div>
                <Switch>
                    <PublicRoute exact path="/" component={ HomePage }  />
                    <PublicRoute exact path="/contratar/:idProd/:cycle/:promocod" component={ ContractPage }  />
                    <PublicRoute exact path='/404' component={ PageNotFound } />
                    <Redirect from='*' to='/404' />
                </Switch>     
            </div>
        </Router>
    );
};

export default AppRouter;
