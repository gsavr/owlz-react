import React, { Component } from 'react';
import About from "./components/pages/About/about";
import Contact from "./components/pages/Contact/contact";
import Home from "./components/pages/Home/home";
import Authentication from "./components/pages/Login/authentication";
import Dashboard from "./components/pages/Dashboard/dashboard";
import Listpromoter from "./components/pages/ListPromoter/listPromoter";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state ={
    loggedIn: localStorage.getItem("user")? true: false,
    logingIn:false
  }

  // User Login 
  onRegister=() =>{
    this.setState({loggedIn: true, logingIn: false});
  }
  
  render() {
    return (
      <Router>
      <div>
          <Nav onNavigation={()=> this.setState({logingIn: false})} loggedIn={this.state.loggedIn} onLogin={()=> this.setState({logingIn: true})} 
           onLogout={()=>{ this.setState({loggedIn: false})
           localStorage.clear()}}/>
          {this.state.logingIn && <Authentication onRegister={this.onRegister} />}
          {!this.state.logingIn &&<Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/listpromoter/:city" component={Listpromoter} />
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route component={Home} />
          </Switch>}
      </div>
      </Router>
    );
  }
}

export default App;


{/* <Router>
<div>
    <Nav loggedIn={this.state.loggedIn} onLogin={()=> this.setState({logingIn: true})}/>
    {this.state.logingIn && <Register onRegister={()=> this.setState({loggedIn: true, logingIn: false})} />}
    {!this.state.logingIn&&<Switch>
      <Route exact path="/create/promoter" component={RegisterPromoter} />
      <Route exact path="/create/user" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/listpromoter/:city" component={Listpromoter} />
      {this.state.loggedIn && <Route path="/dashboard/:id" component={Dashboard} />}
      <Route component={Home} />
    </Switch>}
</div>
</Router> */}


// import React, { Component } from 'react';
// import Register from "./components/pages/register";
// import RegisterPromoter from "./components/pages/registerPromoter";
// import About from "./components/pages/About/about";
// import Contact from "./components/pages/Contact/contact";
// import Home from "./components/pages/Home/home";
// import Authentication from "./components/pages/Authentication";
// import LoginPromoter from "./components/pages/loginPromoter";
// import Dashboard from "./components/pages/Dashboard/dashboard";
// import Listpromoter from "./components/pages/ListPromoter/listPromoter";
// import Nav from "./components/Nav";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// class App extends Component {
//   state ={
//     loggedIn: localStorage.getItem("user")? true: false,
//     logingIn:false
//   }
//   render() {
//     return (
//       <Router>
//       <div>
//           <Nav onNavigation={()=> this.setState({logingIn: false})} loggedIn={this.state.loggedIn} onLogin={()=> this.setState({logingIn: true})} 
//            onLogout={()=>{ this.setState({loggedIn: false})
//            localStorage.clear()}}/>
//           {this.state.logingIn && <Authentication onRegister={()=> this.setState({loggedIn: true, logingIn: false})} />}
          
//           {!this.state.logingIn &&<Switch>
//             <Route exact path="/create/promoter" component={RegisterPromoter} />
//             <Route exact path="/create/user" component={Register} />
//             <Route exact path="/loginPromoter" component={LoginPromoter} />
//             <Route exact path="/about" component={About} />
//             <Route exact path="/contact" component={Contact} />
//             <Route path="/listpromoter/:city" component={Listpromoter} />
//             <Route path="/dashboard/:id" component={Dashboard} />
//             <Route component={Home} />
//           </Switch>}
//       </div>
//       </Router>
//     );
//   }
// }

// export default App;


