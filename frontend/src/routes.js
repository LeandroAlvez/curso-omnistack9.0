import React from  'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import New from './pages/New';
import Spots from './pages/Spots';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/new" component={New} />
                <Route path="/spots" component={Spots} />
            </Switch>
        </BrowserRouter>
    );
}