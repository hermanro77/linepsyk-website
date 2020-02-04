import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import AboutGestalt from '../components/AboutGestalt/AboutGestalt';
import AboutLine from '../components/AboutLine/AboutLine';
import Contact from '../components/Contact/Contact';
import Therapy from '../components/Therapy/Therapy';
import Practicalinfo from '../components/Practicalinfo/Practicalinfo';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" render={props => <><Navbar/><Home /></>} />
                <Route exact path="/hjem" render={props => <><Navbar/><Home /></>} />
                <Route exact path="/om-line" render={props => <><Navbar/><AboutLine /></>} />
                <Route exact path="/om-gestalt" render={props => <><Navbar/><AboutGestalt /></>} />
                <Route exact path="/terapi" render={props => <><Navbar/><Therapy /></>} />
                <Route exact path="/priser-info" render={props => <><Navbar/><Practicalinfo /></>} />
                <Route exact path="/kontakt" render={props => <><Navbar/><Contact /></>} />
            </Switch>
        </BrowserRouter>        
    );
}

export default Router;