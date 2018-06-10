import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import WorldIcon from "@material-ui/icons/Language"
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";

const ListContainer = styled.nav`
  width: 200px;
`;

const NavListItem = ({ onChange }) => (
  <ListContainer>
    <List>
      <ListItem button>
        <WorldIcon />
        <ListItemText primary="Discover" onClick={() => onChange(false)} />
      </ListItem>
    </List>
  </ListContainer>
);

class NavMenu extends Component {
  state = {
    isOpen: false
  };
  onChange = (value = true) => {
    this.setState({ isOpen: value });
  };
  render() {
    return (
      <div>
        <AppBar>
          <ToolBar>
            <IconButton>
              <MenuIcon onClick={() => this.onChange()} />
            </IconButton>
            <Typography variant="title">Discover</Typography>
          </ToolBar>
        </AppBar>
        <Drawer open={this.state.isOpen} onClose={() => this.onChange(false)}>
          <NavListItem onChange={this.onChange} />
        </Drawer>
      </div>
    );
  }
}

export default NavMenu;
