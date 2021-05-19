import React from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { createBrowserHistory } from "history"
import Home from '../pages/Dashboard'

const history = createBrowserHistory()

history.listen(_ => {
  window.scrollTo(0, 0)  
})

const Routes = () => (
  <Router history={history}>
    <Switch>
        <Route path="/" exact component={Home} />
    </Switch>
  </Router>
)

export default Routes
