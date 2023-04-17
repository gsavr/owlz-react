import React, { Component } from "react";
import About from "./components/pages/About/about";
import Contact from "./components/pages/Contact/contact";
import Home from "./components/pages/Home/home";
import Authentication from "./components/pages/Login/authentication";
import Dashboard from "./components/pages/Dashboard/dashboard";
import DashboardPromoter from "./components/pages/Dashboard/dashboardPromoter";
import Listpromoter from "./components/pages/ListPromoter/listPromoter";
import Nav from "./components/Nav";
import ChatApp from "./components/ChatApp/ChatApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Stripe from "./components/Stripe/AppStrip";

class App extends Component {
  state = {
    loggedIn: localStorage.getItem("user")
      ? true
      : false || localStorage.getItem("promoter")
      ? true
      : false,
    logingIn: false,
    loggedInEmailPromoter: localStorage.getItem("promoterEmail"),
    loggedInEmailUser: localStorage.getItem("userEmail"),
    chat: {
      userEmail: "",
      userName: "",
      promoterEmail: "",
      promoterName: "",
    },
    currentUsername: "",
  };

  onUsernameSubmitted(username) {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        this.setState({
          currentUsername: username,
        });
      })
      .catch((error) => console.error("error", error));
  }

  newChat = (infoData) => {
    this.setState({ chat: infoData });
    console.log(this.state.chat);
  };

  // User Login
  onRegister = () => {
    this.setState({ loggedIn: true, logingIn: false });
  };

  render() {
    console.log(this.state);
    return (
      <Router>
        <div>
          <Nav
            onNavigation={() => this.setState({ logingIn: false })}
            loggedIn={this.state.loggedIn}
            onLogin={() => this.setState({ logingIn: true })}
            onLogout={() => {
              this.setState({ loggedIn: false });
              window.location.href = "/";
              localStorage.clear();
            }}
          />
          {this.state.logingIn && (
            <Authentication
              onRegister={this.onRegister}
              onSubmit={this.onUsernameSubmitted}
            />
          )}
          {!this.state.logingIn && (
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route
                path="/listpromoter/:city"
                render={(props) => (
                  <Listpromoter {...props} loggedIn={this.state.loggedIn} />
                )}
              />
              <Route exact path="/dashboard/:id" component={Dashboard} />
              <Route
                exact
                path="/dashboard/promoter/:id"
                render={(props) => (
                  <DashboardPromoter
                    {...props}
                    newChat={this.newChat}
                    emailUser={this.state.emailUserMessage}
                  />
                )}
              />
              <Route component={Home} />
            </Switch>
          )}
          {this.state.loggedIn && (
            <ChatApp
              emailPromoter={this.state.loggedInEmailPromoter}
              emailUser={this.state.loggedInEmailUser}
              chat={this.state.chat}
              user={this.state.userCreate}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
