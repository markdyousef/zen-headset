import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const AppBarContainer = styled.section`
  padding-bottom: 60px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`

export default ({ changeDrawer, changeDialog }) => {
  return (
    <AppBarContainer>
      <AppBar>
        <ToolBar>
          <IconButton>
            <MenuIcon onClick={() => changeDrawer()} />
          </IconButton>
          <Typography variant="title" style={{ flex: 1 }}>
            {/* Discover */}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => changeDialog()}>Connect</Button>
          <IconButton>
            <Link to="/account"><AccountCircle /></Link>
          </IconButton>
        </ToolBar>
      </AppBar>
    </AppBarContainer>
  );
};
