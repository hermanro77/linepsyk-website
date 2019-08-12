import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Home} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>        
    );

}

export default Router;