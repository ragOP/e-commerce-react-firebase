import HomePage from "./components/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./components/header-component/header-component";
import SignInSignUP from "./pages/sign-in-sing-up/sign-in-sing-up";
import "./App.css";

import {authentication} from './firebase/firebase.util'
import React from "react";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =authentication.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUP} />
        </Switch>
      </div>
    );
  }
}
export default App;
