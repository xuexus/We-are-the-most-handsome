import React, { Component } from 'react';
import {HashRouter as Route,Switch,Redirect} from "react-router-dom";
import routeEach from "./utils/routeEach";
import {RouteConfig} from "./router";

class App extends Component {
  render() {
    return (
      <Route>
        <Switch>
          <Redirect from="/" to="/home" exact/>
          {
            routeEach(RouteConfig)
          }
        </Switch>
      </Route>
    )
  }
}
export default App;