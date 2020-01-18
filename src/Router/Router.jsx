import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import AboutGestalt from '../components/AboutGestalt/AboutGestalt';
import AboutLine from '../components/AboutLine/AboutLine';
import Contact from '../components/Contact/Contact';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/om-gestalt" component={AboutGestalt} />
                <Route exact path="/om-line" component={AboutLine} />
                <Route exact path="/kontakt" component={Contact} />
            </Switch>
        </BrowserRouter>        
    );
}

export default Router;