import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Register from './pages/register'
import Login from './pages/login'
import Profile from './pages/profile'
import SharePet from './pages/sharePet'
import Error from './pages/error'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/profile/:userid" component={Profile} />
                <Route path="/sharePet" component={SharePet} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navigation