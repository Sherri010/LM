import React from 'react';
import * as history from 'history';
import {BrowserRouter , Route, Switch } from 'react-router-dom';

import MoviesList from "components/MoviesList/index.jsx";

function App(){
    return (
        <BrowserRouter history={history.createBrowserHistory()}>
            <Switch>
                <Route  path={'/movies/:movieId?'}  component={MoviesList} />
                <Route  path={'/'}  component={MoviesList} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;


