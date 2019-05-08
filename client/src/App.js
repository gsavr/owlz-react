import React, { Component } from 'react';
import Register from "./components/pages/register";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Home from "./components/pages/home";
import Dashboard from "./components/pages/dashboard";
import Listpromoter from "./components/pages/listPromoter";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state ={
    loggedIn: localStorage.getItem("user")? true: false,
    logingIn:false
  }
  render() {
    return (
      <Router>
      <div>
          <Nav loggedIn={this.state.loggedIn} onLogin={()=> this.setState({logingIn: true})}/>
          {this.state.logingIn && <Register onRegister={()=> this.setState({loggedIn: true, logingIn: false})} />}
          {!this.state.logingIn&&<Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/listpromoter/:city" component={Listpromoter} />
            {this.state.loggedIn && <Route path="/dashboard/:id" component={Dashboard} />}
            
            <Route component={Home} />
          </Switch>}
      </div>
      </Router>
    );
  }
}

export default App;


