import React from "react";
import Layout from "./Layout";
import {Route, Redirect, Switch, Link, NavLink} from 'react-router-dom'
import Home from '../views/Home'
import Shows from '../views/Shows'
import NotFound from '../views/NotFound'

import ShowDetails from '../views/ShowDetails'

import routes from '../routes.js'


export default function App() {
  return (
  <Layout>
    <Switch>
      <Route path={routes.home} exact component={Home}/>
      <Route path={routes.shows} exact component={Shows}/>
      <Route path={routes.showDetails} component={ShowDetails}/>
      <Route component={NotFound}/>
    </Switch>
  </Layout>
  )
}
