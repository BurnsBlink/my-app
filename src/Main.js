import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Personal from "./Personal";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="row">
          <div className="small-2 large-3 columns">
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/categories">Categories</NavLink></li>
              <li><NavLink to="/personal">Personal</NavLink></li>
            </ul>
          </div>
          <div className="small-10 large-9 columns text-center content">
            <Route exact path="/" component={Home}/>
            <Route path="/categories" component={Categories}/>
            <Route path="/personal" component={Personal}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
