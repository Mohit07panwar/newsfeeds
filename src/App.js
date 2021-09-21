
import './App.css';
import React, { Component } from "react";
import Navbar from "./components/navbar";
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  pageSize=20;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact to path="/"> <News key="general" pageSize={this.pageSize} country="in" category="general" /></Route>
            <Route exact to path="/business"> <News key="business" pageSize={this.pageSize} country="in" category="business" /></Route>
            <Route exact to path="/health"> <News key="health" pageSize={this.pageSize} country="in" category="health" /></Route>
            <Route exact to path="/science"> <News key="science" pageSize={this.pageSize} country="in" category="science" /></Route>
            <Route exact to path="/sports"> <News key="sports" pageSize={this.pageSize} country="in" category="sports" /></Route>
            <Route exact to path="/technology"> <News key="technology" pageSize={this.pageSize} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;





