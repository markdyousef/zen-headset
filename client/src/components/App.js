import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Discover from "./Discover";
import Account from "./Account";
import NavMenu from "./NavMenu";
import Collections from "./Collections";

import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
const styles = theme => ({});

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

export default withRoot(withStyles(styles)(Main));
