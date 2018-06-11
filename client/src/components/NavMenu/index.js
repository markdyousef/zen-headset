import React, { Component } from "react";
import AppBar from "./AppBar";
import Drawer from "./Drawer";
import HeadsetDialog from "../HeadsetDialog";

class NavMenu extends Component {
  state = {
    showDrawer: false,
    showDialog: false
  };
  handleDrawerChange = (value = true) => {
    this.setState({ showDrawer: value });
  };
  handleDialogChange = (value = true) => {
    console.log("Dialog")
    console.log(value)
    this.setState({ showDialog: value });
  };
  render() {
    return (
      <div>
        <AppBar 
          changeDrawer={this.handleDrawerChange}
          changeDialog={this.handleDialogChange}
        />
        <Drawer
          open={this.state.showDrawer}
          onChange={this.handleDrawerChange}
        />
        {this.state.showDialog&&<HeadsetDialog
          open={this.state.showDialog}
          onClose={() => this.handleDialogChange(false)}
        />}
      </div>
    );
  }
}

export default NavMenu;
