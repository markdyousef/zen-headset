import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Discover from "./Discover";
import Account from "./Account";
import NavMenu from "./NavMenu";
import Collections from "./Collections";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
import reducers from "../data/reducers";

const Main = () => (
  <BrowserRouter>
    <div>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={Discover} />
        <Route path="/discover" component={Discover} />
        <Route path="/account" component={Account} />
        <Route path="/collections" component={Collections} />
      </Switch>
    </div>
  </BrowserRouter>
);

/**
 * Styles Config
 */
const styles = theme => ({});

const MainStyled = withRoot(withStyles(styles)(Main));

/**
 * Redux Config
 */
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
export default () => (
  <Provider store={store}>
    <MainStyled />
  </Provider>
);
