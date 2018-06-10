import React from "react";
import Discover from "./Discover";
import NavMenu from "./NavMenu";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "../withRoot";
const styles = theme => ({});

const Main = () => (
  <div>
    <NavMenu />
    <Discover />
  </div>
);

export default withRoot(withStyles(styles)(Main));
