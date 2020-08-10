import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './pages/home'
import SharePet from './pages/sharePet'
import Register from './pages/register'
import Login from './pages/login'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/sharePet" component={SharePet} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>

    )
}

export default Navigation