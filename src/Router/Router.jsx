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
                <Route exact path="/" component={Home} />
                <Route exact path="/hjem" component={Home} />
                <Route exact path="/om-line" component={AboutLine} />
                <Route exact path="/om-gestalt" component={AboutGestalt} />
                <Route exact path="/terapi" component={Therapy} />
                <Route exact path="/praktisk-info" component={Practicalinfo} />
                <Route exact path="/kontakt" component={Contact} />
            </Switch>
        </BrowserRouter>        
    );
}

export default Router;