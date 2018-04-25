import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Personal from "./Personal";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/personal" component={Personal}/>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
