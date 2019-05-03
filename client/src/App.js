import React, { Component } from 'react';
import Form from "./components/pages/form";
import Home from "./components/pages/home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Form} />
          </Switch>
      </div>
      </Router>
      
    );
  }
}

export default App;


