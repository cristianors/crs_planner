import React from 'react';
import {Route, Switch}  from 'react-router-dom';
import Home from '../components/home';
import Todo from '../components/do/todo';
import ToBuy from '../components/buy/tobuy';
import Events from '../components/events/events';
import Learn from '../components/learn/learn';

function Routes(){

    return (

        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/home">
                <Home/>
            </Route>
            <Route extact path="/signin">
                Sign In
            </Route>
            <Route extact path="/do">
                <Todo/>
            </Route>
            <Route extact path="/buy">
                <ToBuy/>            
            </Route>
            <Route extact path="/events">
                <Events/>            
            </Route>
            <Route extact path="/learn">
                <Learn/>            
            </Route>
            <Route extact path="/user">
                user            
            </Route>
        </Switch>

    );

}

export default Routes;