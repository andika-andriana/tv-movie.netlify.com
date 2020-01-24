import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";
import { connect } from "react-redux";
import Beranda from "./Component/Beranda";

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Menu pointing inverted color="black">
          <Menu.Item>
            <img src="logo.png" alt="" />
          </Menu.Item>
          <Menu.Item header style={{ fontSize: 20 }}>
            TV Movie
          </Menu.Item>
          <Menu.Item
            name="home"
            active={this.props.activeItem === "home"}
            onClick={this.goTo.bind(this, "home")}
          />
          <Menu.Item
            name="film"
            active={this.props.activeItem === "film"}
            onClick={this.goTo.bind(this, "film")}
          />
          <Menu.Item
            name="aktor"
            active={this.props.activeItem === "aktor"}
            onClick={this.goTo.bind(this, "aktor")}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              {!isAuthenticated() && (
                <Button onClick={this.login.bind(this)} inverted color="green">
                  Log In
                </Button>
              )}
              {isAuthenticated() && (
                <Button onClick={this.logout.bind(this)} inverted color="red">
                  Log Out
                </Button>
              )}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        {this.props.activeItem === "beranda" && <Beranda />}
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    activeItem: state.activeItem
  };
};

export default connect(mapStatetoProps)(App);
