import React from "react";
import Layout from "./Layout";
import { Route, Redirect, Switch, Link, NavLink } from "react-router-dom";
import Home from "../views/Home";
import Shows from "../views/Shows";
import NotFound from "../views/NotFound";
import Navigation from "./Navigation";
import ShowDetails from "../views/ShowDetails";

import routes from "../routes.js";

{
    /* <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/about'>About</a></li>
    </ul> */
}

export default function App() {
    return (
        <Layout>
            <Navigation />
            <hr />
            {/* Link */}
            {/* <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/shows'>Shows</Link></li>
    </ul> */}

            {/* <Switch> */}
            {/* <Route path='/' exact component={Home}/> */}
            {/* <Route path='/shows' exact component={Shows}/> */}

            {/* props.match.params */}
            {/* <Route path='/shows/:showId' component={ShowDetails}/> */}
            {/* <Redirect to='/' /> */}
            {/* <Route component={NotFound}/> */}
            {/* </Switch> */}

            <Switch>
                <Route path={routes.home} exact component={Home} />
                <Route path={routes.shows} exact component={Shows} />
                <Route path={routes.showDetails} component={ShowDetails} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
}
