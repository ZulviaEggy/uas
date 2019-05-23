import React, { Component } from "react";
import {Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Male from "./Male";
import Female from "./Female";
import cuaca from "./cuaca";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 className="title" align="center">PRAKIRAAN CUACA YOGYAKARTA</h1>
          <ul className="header">
          
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink exact to="/male">Male</NavLink></li>
            <li><NavLink exact to="/female">Female</NavLink></li>
            <li><NavLink exact to="/cuaca">Cuaca</NavLink></li>
 
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route exact path="/male" component={Male}/>
            <Route exact path="/female" component={Female}/>
            <Route exact path="/cuaca" component={cuaca}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;